import { DocumentStatus, type Prisma } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type { DocumentRow, PropertyChecklistItem, PropertyImageRow, PropertyRow } from "@/types/crm";
import { entityPickerSearchSchema } from "@/validations/crm-picker";
import { propertyDocumentCreateSchema } from "@/validations/document";
import {
  propertyChecklistUpdateSchema,
  propertyIdPayloadSchema,
  propertyImageCreateSchema,
  propertyUpdateSchema,
} from "@/validations/property";

import { assertCanEditCrmProperty, canEditCrmProperty } from "./property-permissions";
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
  landArea?: unknown;
  constructionArea?: unknown;
  amenities?: ReadonlyArray<{ name: string }>;
  status: PropertyRow["status"];
  sellerId: string | null;
  assignedAgentId: string | null;
  readinessScore: number;
  risks: string[];
  images: PropertyImageRow[];
  createdAt: Date;
  updatedAt: Date;
}): PropertyRow {
  const names = row.amenities?.map((a) => a.name) ?? [];
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
    landArea: decimalToNumber(row.landArea ?? null),
    constructionArea: decimalToNumber(row.constructionArea ?? null),
    amenities: [...names].sort((a, b) => a.localeCompare(b, "es")),
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
    include: {
      images: { orderBy: { order: "asc" } },
      amenities: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  type PropertyListRow = (typeof rows)[number];
  return {
    properties: rows.map((row: PropertyListRow) =>
      mapProperty({
        ...row,
        currency: row.currency,
        images: row.images.map(mapImage),
        amenities: row.amenities,
      }),
    ),
  };
});

/** Busqueda de propiedades por id, titulo, slug o ciudad (picker en formularios). */
export const searchPropertiesForPicker = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => entityPickerSearchSchema.parse(data))
  .handler(async ({ data }): Promise<{ items: { id: string; primary: string; secondary: string }[] }> => {
    const ctx = await requireCrmOrganization();
    const q = data.q.trim();
    if (q.length === 0) return { items: [] };
    const rows = await prisma.property.findMany({
      where: {
        organizationId: ctx.organizationId,
        OR: [
          { id: { contains: q, mode: "insensitive" } },
          { title: { contains: q, mode: "insensitive" } },
          { slug: { contains: q, mode: "insensitive" } },
          { city: { contains: q, mode: "insensitive" } },
        ],
      },
      select: { id: true, title: true, city: true },
      take: 25,
      orderBy: { updatedAt: "desc" },
    });
    return {
      items: rows.map((r) => ({
        id: r.id,
        primary: r.title,
        secondary: `${r.city} · ${r.id}`,
      })),
    };
  });

export const getPropertyDetail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyIdPayloadSchema.parse(data))
  .handler(
    async ({
      data,
    }): Promise<{
      property: PropertyRow;
      checklist: PropertyChecklistItem[];
      documents: DocumentRow[];
      canEditProperty: boolean;
      assignedAgentName: string | null;
      sellerName: string | null;
    } | null> => {
      const ctx = await requireCrmOrganization();
      const row = await prisma.property.findFirst({
        where: { id: data.id, organizationId: ctx.organizationId },
        include: {
          images: { orderBy: { order: "asc" } },
          documents: { orderBy: { createdAt: "desc" }, take: 50 },
          amenities: { select: { name: true } },
          assignedAgent: { select: { name: true } },
          seller: { select: { name: true } },
        },
      });
      if (!row) return null;
      const property = mapProperty({
        ...row,
        currency: row.currency,
        images: row.images.map(mapImage),
        amenities: row.amenities,
      });
      const documents = row.documents.map(mapDocument);
      const checklist = checklistFromProperty(row, row.images.length, row.documents.length);
      return {
        property,
        checklist,
        documents,
        canEditProperty: canEditCrmProperty(ctx, row),
        assignedAgentName: row.assignedAgent?.name ?? null,
        sellerName: row.seller?.name ?? null,
      };
    },
  );

export const updateProperty = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<PropertyRow> => {
    const ctx = await requireCrmOrganization();
    const found = await prisma.property.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    if (!found) throw new Response("Propiedad no encontrada", { status: 404 });

    assertCanEditCrmProperty(ctx, found);

    if (data.sellerId) {
      const sellerOk = await prisma.seller.findFirst({
        where: { id: data.sellerId, organizationId: ctx.organizationId },
        select: { id: true },
      });
      if (!sellerOk) {
        throw new Response("Vendedor no encontrado en esta organizacion", { status: 400 });
      }
    }

    return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      if (data.amenityNames !== undefined) {
        await tx.propertyAmenity.deleteMany({ where: { propertyId: data.id } });
        const unique = [...new Set(data.amenityNames.map((n) => n.trim()).filter((n) => n.length > 0))];
        if (unique.length > 0) {
          await tx.propertyAmenity.createMany({
            data: unique.map((name) => ({ propertyId: data.id, name })),
            skipDuplicates: true,
          });
        }
      }

      const updated = await tx.property.update({
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
          ...(data.landArea !== undefined ? { landArea: data.landArea } : {}),
          ...(data.constructionArea !== undefined ? { constructionArea: data.constructionArea } : {}),
          ...(data.sellerId !== undefined ? { sellerId: data.sellerId } : {}),
        },
        include: {
          images: { orderBy: { order: "asc" } },
          amenities: { select: { name: true } },
        },
      });

      return mapProperty({
        ...updated,
        currency: updated.currency,
        images: updated.images.map(mapImage),
        amenities: updated.amenities,
      });
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
    assertCanEditCrmProperty(ctx, row);
    const nonChecklistRisks = row.risks.filter((risk: string) => !risk.startsWith("CHECKLIST_"));
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
    assertCanEditCrmProperty(ctx, property);
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

export const createPropertyDocument = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => propertyDocumentCreateSchema.parse(data))
  .handler(async ({ data }): Promise<DocumentRow> => {
    const ctx = await requireCrmOrganization();
    const property = await prisma.property.findFirst({
      where: { id: data.propertyId, organizationId: ctx.organizationId },
      select: { id: true, assignedAgentId: true },
    });
    if (!property) throw new Response("Propiedad no encontrada", { status: 404 });
    assertCanEditCrmProperty(ctx, property);
    const row = await prisma.document.create({
      data: {
        organizationId: ctx.organizationId,
        type: data.type,
        status: data.status ?? DocumentStatus.PENDIENTE,
        title: data.title,
        description: data.description ?? null,
        fileName: data.fileName ?? null,
        fileUrl: data.fileUrl,
        propertyId: property.id,
        uploadedByUserId: ctx.userId,
      },
    });
    return mapDocument(row);
  });
