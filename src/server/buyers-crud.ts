import { CreditType } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type { BuyerRow } from "@/types/crm";
import {
  buyerCreateSchema,
  buyerIdPayloadSchema,
  buyerUpdateSchema,
} from "@/validations/buyer";

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

function toBuyerRow(row: {
  id: string;
  organizationId: string;
  userId: string | null;
  sourceLeadId: string | null;
  name: string;
  email: string | null;
  phone: string | null;
  maxBudget: unknown;
  downPayment: unknown;
  monthlyIncome: unknown;
  creditType: BuyerRow["creditType"];
  desiredZone: string | null;
  desiredPropertyType: BuyerRow["desiredPropertyType"];
  bedrooms: number | null;
  bathrooms: number | null;
  urgency: number | null;
  buyingScore: number | null;
  assignedAgentId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): BuyerRow {
  return {
    id: row.id,
    organizationId: row.organizationId,
    userId: row.userId,
    sourceLeadId: row.sourceLeadId,
    name: row.name,
    email: row.email,
    phone: row.phone,
    maxBudget: decimalToNumber(row.maxBudget),
    downPayment: decimalToNumber(row.downPayment),
    monthlyIncome: decimalToNumber(row.monthlyIncome),
    creditType: row.creditType,
    desiredZone: row.desiredZone,
    desiredPropertyType: row.desiredPropertyType,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    urgency: row.urgency,
    buyingScore: row.buyingScore,
    assignedAgentId: row.assignedAgentId,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export const listBuyers = createServerFn({ method: "GET" }).handler(async (): Promise<{
  organizationId: string;
  buyers: BuyerRow[];
}> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.buyer.findMany({
    where: { organizationId: ctx.organizationId },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return {
    organizationId: ctx.organizationId,
    buyers: rows.map(toBuyerRow),
  };
});

export const getBuyerById = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => buyerIdPayloadSchema.parse(data))
  .handler(async ({ data }): Promise<BuyerRow | null> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.buyer.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    return row ? toBuyerRow(row) : null;
  });

export const createBuyer = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => buyerCreateSchema.parse(data))
  .handler(async ({ data }): Promise<BuyerRow> => {
    const ctx = await requireCrmOrganization();
    const assignedAgentId = ctx.role === "AGENT" ? ctx.userId : null;
    const row = await prisma.buyer.create({
      data: {
        organizationId: ctx.organizationId,
        name: data.name,
        email: data.email ?? null,
        phone: data.phone ?? null,
        maxBudget: data.maxBudget ?? null,
        downPayment: data.downPayment ?? null,
        monthlyIncome: data.monthlyIncome ?? null,
        creditType: data.creditType ?? CreditType.BANCARIO,
        desiredZone: data.desiredZone ?? null,
        desiredPropertyType: data.desiredPropertyType ?? null,
        bedrooms: data.bedrooms ?? null,
        bathrooms: data.bathrooms ?? null,
        urgency: data.urgency ?? null,
        buyingScore: data.buyingScore ?? null,
        assignedAgentId,
      },
    });
    return toBuyerRow(row);
  });

export const updateBuyer = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => buyerUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<BuyerRow> => {
    const ctx = await requireCrmOrganization();
    const existing = await prisma.buyer.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    if (!existing) {
      throw new Response("Comprador no encontrado", { status: 404 });
    }

    const patch = {
      ...(data.name !== undefined ? { name: data.name } : {}),
      ...(data.email !== undefined ? { email: data.email } : {}),
      ...(data.phone !== undefined ? { phone: data.phone } : {}),
      ...(data.maxBudget !== undefined ? { maxBudget: data.maxBudget } : {}),
      ...(data.downPayment !== undefined ? { downPayment: data.downPayment } : {}),
      ...(data.monthlyIncome !== undefined ? { monthlyIncome: data.monthlyIncome } : {}),
      ...(data.creditType !== undefined ? { creditType: data.creditType } : {}),
      ...(data.desiredZone !== undefined ? { desiredZone: data.desiredZone } : {}),
      ...(data.desiredPropertyType !== undefined
        ? { desiredPropertyType: data.desiredPropertyType }
        : {}),
      ...(data.bedrooms !== undefined ? { bedrooms: data.bedrooms } : {}),
      ...(data.bathrooms !== undefined ? { bathrooms: data.bathrooms } : {}),
      ...(data.urgency !== undefined ? { urgency: data.urgency } : {}),
      ...(data.buyingScore !== undefined ? { buyingScore: data.buyingScore } : {}),
    };

    const row = await prisma.buyer.update({
      where: { id: data.id },
      data: patch,
    });
    return toBuyerRow(row);
  });
