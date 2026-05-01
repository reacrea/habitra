import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { buildAiDummyInsights } from "@/server/ai-dummy";
import {
  buyerPortalProfileUpdateSchema,
  buyerPortalTransactionIdSchema,
} from "@/validations/buyer-portal";

function toNumber(value: unknown): number | null {
  if (value == null) return null;
  if (typeof value === "number") return value;
  if (typeof value === "object" && "toNumber" in (value as object)) {
    return (value as { toNumber: () => number }).toNumber();
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

async function requireBuyerPortalContext() {
  const request = getRequest();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) throw new Response("Unauthorized", { status: 401 });

  const user = session.user as typeof session.user & { id: string };
  const buyer = await prisma.buyer.findFirst({
    where: { userId: user.id },
    select: {
      id: true,
      organizationId: true,
      name: true,
      email: true,
      phone: true,
      maxBudget: true,
      downPayment: true,
      monthlyIncome: true,
      creditType: true,
      desiredZone: true,
      desiredPropertyType: true,
      bedrooms: true,
      bathrooms: true,
      buyingScore: true,
      urgency: true,
      assignedAgentId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!buyer) throw new Response("Buyer profile not found", { status: 404 });
  return { user, buyer };
}

export const getBuyerDashboardData = createServerFn({ method: "GET" }).handler(async () => {
  const { buyer } = await requireBuyerPortalContext();
  const [transactions, docsPending, matches] = await Promise.all([
    prisma.transaction.findMany({
      where: { buyerId: buyer.id, organizationId: buyer.organizationId },
      orderBy: { createdAt: "desc" },
      take: 5,
      include: {
        property: { select: { title: true } },
        agent: { select: { name: true } },
      },
    }),
    prisma.document.count({
      where: {
        organizationId: buyer.organizationId,
        buyerId: buyer.id,
        status: { in: ["PENDIENTE", "RECHAZADO"] },
      },
    }),
    prisma.property.count({
      where: {
        organizationId: buyer.organizationId,
        status: "PUBLICADA",
        ...(buyer.desiredPropertyType ? { propertyType: buyer.desiredPropertyType } : {}),
      },
    }),
  ]);

  const ai = buildAiDummyInsights({
    prompt: `buyer ${buyer.name} dashboard riesgo seguimiento`,
    buyerId: buyer.id,
  });

  return {
    buyer: {
      id: buyer.id,
      name: buyer.name,
      buyingScore: buyer.buyingScore,
      urgency: buyer.urgency,
    },
    metrics: {
      activeTransactions: transactions.filter((x) => x.status === "ACTIVA").length,
      pendingDocuments: docsPending,
      matches,
    },
    recentTransactions: transactions.map((row) => ({
      id: row.id,
      propertyTitle: row.property.title,
      status: row.status,
      currentStage: row.currentStage,
      agentName: row.agent.name,
      createdAt: row.createdAt.toISOString(),
    })),
    ai,
  };
});

export const getBuyerProfileData = createServerFn({ method: "GET" }).handler(async () => {
  const { buyer } = await requireBuyerPortalContext();
  return {
    id: buyer.id,
    name: buyer.name,
    email: buyer.email,
    phone: buyer.phone,
    maxBudget: toNumber(buyer.maxBudget),
    downPayment: toNumber(buyer.downPayment),
    monthlyIncome: toNumber(buyer.monthlyIncome),
    creditType: buyer.creditType,
    desiredZone: buyer.desiredZone,
    desiredPropertyType: buyer.desiredPropertyType,
    bedrooms: buyer.bedrooms,
    bathrooms: buyer.bathrooms,
    buyingScore: buyer.buyingScore,
    urgency: buyer.urgency,
    updatedAt: buyer.updatedAt.toISOString(),
  };
});

export const updateBuyerProfileData = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => buyerPortalProfileUpdateSchema.parse(data))
  .handler(async ({ data }) => {
    const { buyer } = await requireBuyerPortalContext();
    const updated = await prisma.buyer.update({
      where: { id: buyer.id },
      data: {
        ...(data.phone !== undefined ? { phone: data.phone || null } : {}),
        ...(data.maxBudget !== undefined ? { maxBudget: data.maxBudget } : {}),
        ...(data.downPayment !== undefined ? { downPayment: data.downPayment } : {}),
        ...(data.monthlyIncome !== undefined ? { monthlyIncome: data.monthlyIncome } : {}),
        ...(data.creditType !== undefined ? { creditType: data.creditType } : {}),
        ...(data.desiredZone !== undefined ? { desiredZone: data.desiredZone || null } : {}),
        ...(data.desiredPropertyType !== undefined
          ? { desiredPropertyType: data.desiredPropertyType }
          : {}),
        ...(data.bedrooms !== undefined ? { bedrooms: data.bedrooms } : {}),
        ...(data.bathrooms !== undefined ? { bathrooms: data.bathrooms } : {}),
      },
      select: { id: true, updatedAt: true },
    });
    return { id: updated.id, updatedAt: updated.updatedAt.toISOString() };
  });

export const getBuyerMatchesData = createServerFn({ method: "GET" }).handler(async () => {
  const { buyer } = await requireBuyerPortalContext();
  const rows = await prisma.property.findMany({
    where: {
      organizationId: buyer.organizationId,
      status: "PUBLICADA",
      ...(buyer.desiredPropertyType ? { propertyType: buyer.desiredPropertyType } : {}),
      ...(buyer.desiredZone
        ? {
            OR: [
              { city: { contains: buyer.desiredZone, mode: "insensitive" } },
              { neighborhood: { contains: buyer.desiredZone, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(buyer.maxBudget ? { price: { lte: buyer.maxBudget } } : {}),
      ...(buyer.bedrooms != null ? { bedrooms: { gte: buyer.bedrooms } } : {}),
      ...(buyer.bathrooms != null ? { bathrooms: { gte: buyer.bathrooms } } : {}),
    },
    include: {
      images: { orderBy: { order: "asc" }, take: 1 },
      assignedAgent: { select: { name: true } },
    },
    orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
    take: 30,
  });

  return {
    matches: rows.map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      city: row.city,
      neighborhood: row.neighborhood,
      operationType: row.operationType,
      propertyType: row.propertyType,
      price: toNumber(row.price) ?? 0,
      bedrooms: row.bedrooms,
      bathrooms: row.bathrooms,
      readinessScore: row.readinessScore,
      imageUrl: row.images[0]?.url ?? null,
      agentName: row.assignedAgent?.name ?? "Equipo Habitra",
    })),
  };
});

export const getBuyerTransactionsData = createServerFn({ method: "GET" }).handler(async () => {
  const { buyer } = await requireBuyerPortalContext();
  const rows = await prisma.transaction.findMany({
    where: { buyerId: buyer.id, organizationId: buyer.organizationId },
    include: {
      property: { select: { id: true, slug: true, title: true } },
      agent: { select: { name: true } },
      documents: { select: { id: true } },
      tasks: { select: { id: true, status: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return {
    transactions: rows.map((row) => ({
      id: row.id,
      propertyId: row.property.id,
      propertySlug: row.property.slug,
      propertyTitle: row.property.title,
      status: row.status,
      currentStage: row.currentStage,
      paymentType: row.paymentType,
      creditType: row.creditType,
      offeredPrice: toNumber(row.offeredPrice),
      acceptedPrice: toNumber(row.acceptedPrice),
      agentName: row.agent.name,
      documentsCount: row.documents.length,
      pendingTasks: row.tasks.filter((t) => t.status !== "COMPLETADA").length,
      createdAt: row.createdAt.toISOString(),
    })),
  };
});

export const getBuyerTransactionDetailData = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => buyerPortalTransactionIdSchema.parse(data))
  .handler(async ({ data }) => {
    const { buyer } = await requireBuyerPortalContext();
    const row = await prisma.transaction.findFirst({
      where: { id: data.id, buyerId: buyer.id, organizationId: buyer.organizationId },
      include: {
        property: { select: { slug: true, title: true, address: true, city: true, state: true } },
        agent: { select: { name: true, email: true, phone: true } },
        documents: {
          select: { id: true, title: true, type: true, status: true, createdAt: true },
          orderBy: { createdAt: "desc" },
        },
        timelineSteps: { orderBy: { order: "asc" } },
        tasks: { select: { id: true, title: true, status: true, dueDate: true }, orderBy: { createdAt: "desc" } },
      },
    });
    if (!row) return null;

    return {
      transaction: {
        id: row.id,
        status: row.status,
        currentStage: row.currentStage,
        paymentType: row.paymentType,
        creditType: row.creditType,
        offeredPrice: toNumber(row.offeredPrice),
        acceptedPrice: toNumber(row.acceptedPrice),
        notesText: row.notesText,
        property: row.property,
        agent: row.agent,
        createdAt: row.createdAt.toISOString(),
      },
      documents: row.documents.map((d) => ({
        id: d.id,
        title: d.title,
        type: d.type,
        status: d.status,
        createdAt: d.createdAt.toISOString(),
      })),
      timeline: row.timelineSteps.map((t) => ({
        id: t.id,
        name: t.name,
        status: t.status,
        estimatedDate: t.estimatedDate?.toISOString() ?? null,
        completedDate: t.completedDate?.toISOString() ?? null,
        description: t.description,
      })),
      tasks: row.tasks.map((t) => ({
        id: t.id,
        title: t.title,
        status: t.status,
        dueDate: t.dueDate?.toISOString() ?? null,
      })),
      ai: buildAiDummyInsights({
        prompt: `analiza transaccion buyer ${row.id} avance riesgos`,
        buyerId: buyer.id,
        transactionId: row.id,
        propertyId: row.propertyId,
      }),
    };
  });
