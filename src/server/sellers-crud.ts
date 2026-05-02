import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type { SellerPropertySummary, SellerRow } from "@/types/crm";
import {
  sellerCreateSchema,
  sellerIdPayloadSchema,
  sellerUpdateSchema,
} from "@/validations/seller";

import { requireCrmOrganization } from "./crm-session";

function decimalToNumber(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return value;
  if (typeof value === "object" && value !== null && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber();
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function toSellerRow(row: {
  id: string;
  organizationId: string;
  userId: string | null;
  sourceLeadId: string | null;
  name: string;
  email: string | null;
  phone: string | null;
  urgency: number | null;
  expectedPrice: unknown;
  sellingReason: string | null;
  assignedAgentId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): SellerRow {
  return {
    id: row.id,
    organizationId: row.organizationId,
    userId: row.userId,
    sourceLeadId: row.sourceLeadId,
    name: row.name,
    email: row.email,
    phone: row.phone,
    urgency: row.urgency,
    expectedPrice: decimalToNumber(row.expectedPrice),
    sellingReason: row.sellingReason,
    assignedAgentId: row.assignedAgentId,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

function toSellerPropertySummary(row: {
  id: string;
  title: string;
  city: string;
  status: SellerPropertySummary["status"];
  operationType: SellerPropertySummary["operationType"];
  price: unknown;
}): SellerPropertySummary {
  return {
    id: row.id,
    title: row.title,
    city: row.city,
    status: row.status,
    operationType: row.operationType,
    price: decimalToNumber(row.price) ?? 0,
  };
}

export const listSellers = createServerFn({ method: "GET" }).handler(async (): Promise<{
  organizationId: string;
  sellers: SellerRow[];
}> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.seller.findMany({
    where: { organizationId: ctx.organizationId },
    orderBy: { createdAt: "desc" },
    take: 200,
    include: {
      _count: { select: { properties: true } },
    },
  });
  return {
    organizationId: ctx.organizationId,
    sellers: rows.map((row) => ({
      ...toSellerRow(row),
      propertyCount: row._count.properties,
    })),
  };
});

/** Opciones compactas para selects (p. ej. vendedor en ficha de propiedad). */
export const listSellerOptions = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ options: { id: string; name: string }[] }> => {
    const ctx = await requireCrmOrganization();
    const rows = await prisma.seller.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
      take: 500,
    });
    return { options: rows };
  },
);

export const getSellerWithProperties = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => sellerIdPayloadSchema.parse(data))
  .handler(
    async ({
      data,
    }): Promise<{
      seller: SellerRow;
      linkedProperties: SellerPropertySummary[];
      unassignedProperties: SellerPropertySummary[];
    } | null> => {
      const ctx = await requireCrmOrganization();
      const row = await prisma.seller.findFirst({
        where: { id: data.id, organizationId: ctx.organizationId },
        include: {
          properties: {
            select: {
              id: true,
              title: true,
              city: true,
              status: true,
              operationType: true,
              price: true,
            },
            orderBy: { updatedAt: "desc" },
            take: 200,
          },
        },
      });
      if (!row) return null;

      const { properties: linkedProps, ...sellerRest } = row;

      const unassigned = await prisma.property.findMany({
        where: { organizationId: ctx.organizationId, sellerId: null },
        select: {
          id: true,
          title: true,
          city: true,
          status: true,
          operationType: true,
          price: true,
        },
        orderBy: { updatedAt: "desc" },
        take: 100,
      });

      return {
        seller: toSellerRow(sellerRest),
        linkedProperties: linkedProps.map(toSellerPropertySummary),
        unassignedProperties: unassigned.map(toSellerPropertySummary),
      };
    },
  );

export const createSeller = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => sellerCreateSchema.parse(data))
  .handler(async ({ data }): Promise<SellerRow> => {
    const ctx = await requireCrmOrganization();
    const assignedAgentId = ctx.role === "AGENT" ? ctx.userId : null;
    const row = await prisma.seller.create({
      data: {
        organizationId: ctx.organizationId,
        name: data.name,
        email: data.email ?? null,
        phone: data.phone ?? null,
        urgency: data.urgency ?? null,
        expectedPrice: data.expectedPrice ?? null,
        sellingReason: data.sellingReason ?? null,
        assignedAgentId,
      },
    });
    return toSellerRow(row);
  });

export const updateSeller = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => sellerUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<SellerRow> => {
    const ctx = await requireCrmOrganization();
    const existing = await prisma.seller.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    if (!existing) {
      throw new Response("Vendedor no encontrado", { status: 404 });
    }

    const patch = {
      ...(data.name !== undefined ? { name: data.name } : {}),
      ...(data.email !== undefined ? { email: data.email } : {}),
      ...(data.phone !== undefined ? { phone: data.phone } : {}),
      ...(data.urgency !== undefined ? { urgency: data.urgency } : {}),
      ...(data.expectedPrice !== undefined ? { expectedPrice: data.expectedPrice } : {}),
      ...(data.sellingReason !== undefined ? { sellingReason: data.sellingReason } : {}),
    };

    const row = await prisma.seller.update({
      where: { id: data.id },
      data: patch,
    });
    return toSellerRow(row);
  });
