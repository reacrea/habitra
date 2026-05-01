import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type { DocumentRow, PropertyChecklistItem, PropertyImageRow, PropertyRow } from "@/types/crm";
import {
  propertyChecklistUpdateSchema,
  propertyIdPayloadSchema,
  propertyImageCreateSchema,
  propertyUpdateSchema,
} from "@/validations/property";

import { requireCrmOrganization } from "./crm-session";

const CHECKLIST_ITEMS: ReadonlyArray<{ id: string; label: string }> = [
  { id: "price", label: "Precio definido" },
  { id: "location", label: "Direccion completa" },
  { id: "description", label: "Descripcion detallada" },
  { id: "seller", label: "Vendedor asignado" },
  { id: "images", label: "Al menos una imagen" },
  { id: "documents", label: "Al menos un documento" },
];

function decimalToNumber(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return value;
  if (typeof value === "object" && value !== null && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber();
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function mapImage(row: {
  id: string;
  propertyId: string;
  url: string;
  alt: string | null;
  isPrimary: boolean;
  order: number;
}): PropertyImageRow {
  return {
    id: row.id,
    propertyId: row.propertyId,
    url: row.url,
    alt: row.alt,
    isPrimary: row.isPrimary,
    order: row.order,
  };
}

function mapDocument(row: {
  id: string;
  organizationId: string;
  type: DocumentRow["type"];
  status: DocumentRow["status"];
  title: string;
  description: string | null;
  fileName: string | null;
  fileUrl: string;
  buyerId: string | null;
  sellerId: string | null;
  propertyId: string | null;
  transactionId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): DocumentRow {
  return {
    ...row,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

function checklistFromProperty(
  property: {
    price: unknown;
    address: string;
    city: string;
    state: string;
    description: string;
    fullDescription: string | null;
    sellerId: string | null;
    readinessScore: number;
    risks: string[];
  },
  imageCount: number,
  documentCount: number,
): PropertyChecklistItem[] {
  const base = new Set<string>();
  if ((decimalToNumber(property.price) ?? 0) > 0) base.add("price");
  if (property.address && property.city && property.state) base.add("location");
  if ((property.fullDescription ?? property.description).trim().length >= 30) base.add("description");
  if (property.sellerId) base.add("seller");
  if (imageCount > 0) base.add("images");
  if (documentCount > 0) base.add("documents");

  for (const risk of property.risks) {
    if (risk.startsWith("CHECKLIST_DONE:")) base.add(risk.replace("CHECKLIST_DONE:", ""));
    if (risk.startsWith("CHECKLIST_MISSING:")) base.delete(risk.replace("CHECKLIST_MISSING:", ""));
  }

  return CHECKLIST_ITEMS.map((item) => ({ id: item.id, label: item.label, checked: base.has(item.id) }));
}

function mapProperty(row: {
  id: string;
  organizationId: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string | null;
  propertyType: PropertyRow["propertyType"];
  operationType: PropertyRow["operationType"];
  price: unknown;
  currency: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string | null;
  postalCode: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parkingSpaces: number | null;
  status: PropertyRow["status"];
  sellerId: string | null;
  assignedAgentId: string | null;
  readinessScore: number;
  risks: string[];
  images: PropertyImageRow[];
  createdAt: Date;
  updatedAt: Date;
}): PropertyRow {
  return {
    id: row.id,
    organizationId: row.organizationId,
    slug: row.slug,
    title: row.title,
    description: row.description,
    fullDescription: row.fullDescription,
    propertyType: row.propertyType,
    operationType: row.operationType,
    price: decimalToNumber(row.price) ?? 0,
    currency: row.currency,
    address: row.address,
    city: row.city,
    state: row.state,
    neighborhood: row.neighborhood,
    postalCode: row.postalCode,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    parkingSpaces: row.parkingSpaces,
    status: row.status,
    sellerId: row.sellerId,
    assignedAgentId: row.assignedAgentId,
    readinessScore: row.readinessScore,
    risks: row.risks,
    images: row.images,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export const listProperties = createServerFn({ method: "GET" }).handler(async (): Promise<{ properties: PropertyRow[] }> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.property.findMany({
    where: { organizationId: ctx.organizationId },
    include: { images: { orderBy: { order: "asc" } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return {
    properties: rows.map((row) =>
      mapProperty({
        ...row,
        currency: row.currency,
        images: row.images.map(mapImage),
      }),
    ),
  };
});

export const getPropertyDetail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyIdPayloadSchema.parse(data))
  .handler(async ({ data }): Promise<{ property: PropertyRow; checklist: PropertyChecklistItem[]; documents: DocumentRow[] } | null> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.property.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
      include: {
        images: { orderBy: { order: "asc" } },
        documents: { orderBy: { createdAt: "desc" }, take: 50 },
      },
    });
    if (!row) return null;
    const property = mapProperty({
      ...row,
      currency: row.currency,
      images: row.images.map(mapImage),
    });
    const documents = row.documents.map(mapDocument);
    const checklist = checklistFromProperty(row, row.images.length, row.documents.length);
    return { property, checklist, documents };
  });

export const updateProperty = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<PropertyRow> => {
    const ctx = await requireCrmOrganization();
    const found = await prisma.property.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    if (!found) throw new Response("Propiedad no encontrada", { status: 404 });
    const updated = await prisma.property.update({
      where: { id: data.id },
      data: {
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.description !== undefined ? { description: data.description } : {}),
        ...(data.fullDescription !== undefined ? { fullDescription: data.fullDescription } : {}),
        ...(data.propertyType !== undefined ? { propertyType: data.propertyType } : {}),
        ...(data.operationType !== undefined ? { operationType: data.operationType } : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
        ...(data.price !== undefined ? { price: data.price } : {}),
        ...(data.address !== undefined ? { address: data.address } : {}),
        ...(data.city !== undefined ? { city: data.city } : {}),
        ...(data.state !== undefined ? { state: data.state } : {}),
        ...(data.neighborhood !== undefined ? { neighborhood: data.neighborhood } : {}),
        ...(data.postalCode !== undefined ? { postalCode: data.postalCode } : {}),
        ...(data.bedrooms !== undefined ? { bedrooms: data.bedrooms } : {}),
        ...(data.bathrooms !== undefined ? { bathrooms: data.bathrooms } : {}),
        ...(data.parkingSpaces !== undefined ? { parkingSpaces: data.parkingSpaces } : {}),
      },
      include: { images: { orderBy: { order: "asc" } } },
    });
    return mapProperty({
      ...updated,
      currency: updated.currency,
      images: updated.images.map(mapImage),
    });
  });

export const updatePropertyChecklist = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyChecklistUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<{ readinessScore: number; checklist: PropertyChecklistItem[] }> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.property.findFirst({
      where: { id: data.propertyId, organizationId: ctx.organizationId },
      include: {
        images: true,
        documents: { take: 1 },
      },
    });
    if (!row) throw new Response("Propiedad no encontrada", { status: 404 });
    const nonChecklistRisks = row.risks.filter((risk) => !risk.startsWith("CHECKLIST_"));
    const checklist = CHECKLIST_ITEMS.map((item) => ({
      id: item.id,
      label: item.label,
      checked: data.checkedIds.includes(item.id),
    }));
    const checklistRisks = checklist
      .filter((item) => !item.checked)
      .map((item) => `CHECKLIST_MISSING:${item.id}`);
    const score = Math.round((checklist.filter((x) => x.checked).length / checklist.length) * 100);
    await prisma.property.update({
      where: { id: row.id },
      data: {
        readinessScore: score,
        risks: [...nonChecklistRisks, ...checklistRisks],
      },
    });
    return { readinessScore: score, checklist };
  });

export const addPropertyImage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyImageCreateSchema.parse(data))
  .handler(async ({ data }): Promise<PropertyImageRow> => {
    const ctx = await requireCrmOrganization();
    const property = await prisma.property.findFirst({
      where: { id: data.propertyId, organizationId: ctx.organizationId },
      include: { images: true },
    });
    if (!property) throw new Response("Propiedad no encontrada", { status: 404 });
    const url =
      data.mode === "MOCK"
        ? `https://picsum.photos/seed/habitra-${Date.now()}/1200/800`
        : data.url ?? "";
    const image = await prisma.propertyImage.create({
      data: {
        propertyId: property.id,
        url,
        alt: data.alt ?? null,
        isPrimary: property.images.length === 0,
        order: property.images.length,
      },
    });
    return mapImage(image);
  });
