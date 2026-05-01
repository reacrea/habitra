import { TaskStatus, TimelineStepStatus, TransactionStage, TransactionStatus } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type {
  TransactionNoteRow,
  TransactionOption,
  TransactionRow,
  TransactionTaskRow,
  TransactionTimelineRow,
} from "@/types/crm";
import {
  addTimelineStepSchema,
  createNoteSchema,
  createTaskSchema,
  createTransactionSchema,
  transactionIdPayloadSchema,
  updateTransactionStageSchema,
} from "@/validations/transaction";

import { requireCrmOrganization } from "./crm-session";

function toNumber(value: unknown): number | null {
  if (value == null) return null;
  if (typeof value === "number") return value;
  if (typeof value === "object" && "toNumber" in (value as object)) {
    return (value as { toNumber: () => number }).toNumber();
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function mapTransaction(row: {
  id: string;
  organizationId: string;
  propertyId: string;
  buyerId: string;
  sellerId: string;
  agentId: string;
  offeredPrice: unknown;
  acceptedPrice: unknown;
  status: TransactionRow["status"];
  currentStage: TransactionRow["currentStage"];
  estimatedClosingDate: Date | null;
  paymentType: string;
  creditType: TransactionRow["creditType"];
  probabilityToClose: number;
  notesText: string | null;
  createdAt: Date;
  updatedAt: Date;
  property: { title: string };
  buyer: { name: string };
  seller: { name: string };
  agent: { name: string };
}): TransactionRow {
  return {
    id: row.id,
    organizationId: row.organizationId,
    propertyId: row.propertyId,
    buyerId: row.buyerId,
    sellerId: row.sellerId,
    agentId: row.agentId,
    offeredPrice: toNumber(row.offeredPrice),
    acceptedPrice: toNumber(row.acceptedPrice),
    status: row.status,
    currentStage: row.currentStage,
    estimatedClosingDate: row.estimatedClosingDate?.toISOString() ?? null,
    paymentType: row.paymentType,
    creditType: row.creditType,
    probabilityToClose: row.probabilityToClose,
    notesText: row.notesText,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    propertyTitle: row.property.title,
    buyerName: row.buyer.name,
    sellerName: row.seller.name,
    agentName: row.agent.name,
  };
}

function mapTimeline(row: {
  id: string;
  transactionId: string;
  name: string;
  description: string | null;
  responsibleRole: TransactionTimelineRow["responsibleRole"];
  estimatedDate: Date | null;
  completedDate: Date | null;
  status: TransactionTimelineRow["status"];
  notes: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}): TransactionTimelineRow {
  return {
    id: row.id,
    transactionId: row.transactionId,
    name: row.name,
    description: row.description,
    responsibleRole: row.responsibleRole,
    estimatedDate: row.estimatedDate?.toISOString() ?? null,
    completedDate: row.completedDate?.toISOString() ?? null,
    status: row.status,
    notes: row.notes,
    order: row.order,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

function mapTask(row: {
  id: string;
  transactionId: string | null;
  title: string;
  description: string | null;
  status: TransactionTaskRow["status"];
  dueDate: Date | null;
  assigneeId: string | null;
  createdAt: Date;
  updatedAt: Date;
  assignee: { name: string } | null;
}): TransactionTaskRow {
  return {
    id: row.id,
    transactionId: row.transactionId,
    title: row.title,
    description: row.description,
    status: row.status,
    dueDate: row.dueDate?.toISOString() ?? null,
    assigneeId: row.assigneeId,
    assigneeName: row.assignee?.name ?? null,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

function mapNote(row: {
  id: string;
  transactionId: string | null;
  content: string;
  authorId: string | null;
  createdAt: Date;
  updatedAt: Date;
  author: { name: string } | null;
}): TransactionNoteRow {
  return {
    id: row.id,
    transactionId: row.transactionId,
    content: row.content,
    authorId: row.authorId,
    authorName: row.author?.name ?? null,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export const listTransactions = createServerFn({ method: "GET" }).handler(async (): Promise<{ transactions: TransactionRow[] }> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.transaction.findMany({
    where: { organizationId: ctx.organizationId },
    include: {
      property: { select: { title: true } },
      buyer: { select: { name: true } },
      seller: { select: { name: true } },
      agent: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return { transactions: rows.map(mapTransaction) };
});

export const getTransactionCreateOptions = createServerFn({ method: "GET" }).handler(async (): Promise<{
  buyers: TransactionOption[];
  sellers: TransactionOption[];
  properties: TransactionOption[];
  agents: TransactionOption[];
}> => {
  const ctx = await requireCrmOrganization();
  const [buyers, sellers, properties, memberships] = await Promise.all([
    prisma.buyer.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
    prisma.seller.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
    prisma.property.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true, title: true },
      orderBy: { createdAt: "desc" },
      take: 200,
    }),
    prisma.membership.findMany({
      where: { organizationId: ctx.organizationId, role: { in: ["AGENT", "OWNER", "MANAGER"] } },
      include: { user: { select: { id: true, name: true } } },
    }),
  ]);
  const uniqueAgents = Array.from(
    new Map(memberships.map((m) => [m.user.id, { id: m.user.id, label: m.user.name }])).values(),
  ).sort((a, b) => a.label.localeCompare(b.label));

  return {
    buyers: buyers.map((x) => ({ id: x.id, label: x.name })),
    sellers: sellers.map((x) => ({ id: x.id, label: x.name })),
    properties: properties.map((x) => ({ id: x.id, label: x.title })),
    agents: uniqueAgents,
  };
});

export const createTransaction = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => createTransactionSchema.parse(data))
  .handler(async ({ data }): Promise<TransactionRow> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.transaction.create({
      data: {
        organizationId: ctx.organizationId,
        propertyId: data.propertyId,
        buyerId: data.buyerId,
        sellerId: data.sellerId,
        agentId: data.agentId,
        offeredPrice: data.offeredPrice ?? null,
        acceptedPrice: data.acceptedPrice ?? null,
        paymentType: data.paymentType ?? "CREDITO",
        creditType: data.creditType ?? null,
        estimatedClosingDate: data.estimatedClosingDate ? new Date(data.estimatedClosingDate) : null,
        probabilityToClose: data.probabilityToClose ?? 50,
        notesText: data.notesText ?? null,
      },
      include: {
        property: { select: { title: true } },
        buyer: { select: { name: true } },
        seller: { select: { name: true } },
        agent: { select: { name: true } },
      },
    });

    await prisma.transactionTimelineStep.create({
      data: {
        transactionId: row.id,
        name: "Lead creado",
        description: "Operacion creada en CRM",
        responsibleRole: "AGENT",
        status: TimelineStepStatus.COMPLETADO,
        completedDate: new Date(),
        order: 0,
      },
    });

    return mapTransaction(row);
  });

export const getTransactionDetail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => transactionIdPayloadSchema.parse(data))
  .handler(async ({ data }): Promise<{
    transaction: TransactionRow;
    timeline: TransactionTimelineRow[];
    tasks: TransactionTaskRow[];
    notes: TransactionNoteRow[];
  } | null> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.transaction.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
      include: {
        property: { select: { title: true } },
        buyer: { select: { name: true } },
        seller: { select: { name: true } },
        agent: { select: { name: true } },
        timelineSteps: { orderBy: { order: "asc" } },
        tasks: { include: { assignee: { select: { name: true } } }, orderBy: { createdAt: "desc" } },
        notes: { include: { author: { select: { name: true } } }, orderBy: { createdAt: "desc" } },
      },
    });
    if (!row) return null;
    return {
      transaction: mapTransaction(row),
      timeline: row.timelineSteps.map(mapTimeline),
      tasks: row.tasks.map(mapTask),
      notes: row.notes.map(mapNote),
    };
  });

export const updateTransactionStage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => updateTransactionStageSchema.parse(data))
  .handler(async ({ data }): Promise<TransactionRow> => {
    const ctx = await requireCrmOrganization();
    const existing = await prisma.transaction.findFirst({
      where: { id: data.transactionId, organizationId: ctx.organizationId },
      include: {
        property: { select: { title: true } },
        buyer: { select: { name: true } },
        seller: { select: { name: true } },
        agent: { select: { name: true } },
      },
    });
    if (!existing) throw new Response("Operacion no encontrada", { status: 404 });

    const updated = await prisma.transaction.update({
      where: { id: existing.id },
      data: {
        currentStage: data.stage,
        ...(data.status ? { status: data.status } : {}),
      },
      include: {
        property: { select: { title: true } },
        buyer: { select: { name: true } },
        seller: { select: { name: true } },
        agent: { select: { name: true } },
      },
    });

    const lastOrder = await prisma.transactionTimelineStep.count({
      where: { transactionId: existing.id },
    });
    await prisma.transactionTimelineStep.create({
      data: {
        transactionId: existing.id,
        name: data.stage,
        description: "Cambio de etapa",
        responsibleRole: ctx.role,
        status: TimelineStepStatus.COMPLETADO,
        completedDate: new Date(),
        order: lastOrder,
      },
    });

    return mapTransaction(updated);
  });

export const addTimelineStep = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => addTimelineStepSchema.parse(data))
  .handler(async ({ data }): Promise<TransactionTimelineRow> => {
    const ctx = await requireCrmOrganization();
    const trx = await prisma.transaction.findFirst({
      where: { id: data.transactionId, organizationId: ctx.organizationId },
    });
    if (!trx) throw new Response("Operacion no encontrada", { status: 404 });
    const order = await prisma.transactionTimelineStep.count({
      where: { transactionId: trx.id },
    });
    const created = await prisma.transactionTimelineStep.create({
      data: {
        transactionId: trx.id,
        name: data.name,
        description: data.description ?? null,
        responsibleRole: data.responsibleRole,
        estimatedDate: data.estimatedDate ? new Date(data.estimatedDate) : null,
        status: data.status ?? TimelineStepStatus.PENDIENTE,
        notes: data.notes ?? null,
        order,
      },
    });
    return mapTimeline(created);
  });

export const createTransactionTask = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => createTaskSchema.parse(data))
  .handler(async ({ data }): Promise<TransactionTaskRow> => {
    const ctx = await requireCrmOrganization();
    const trx = await prisma.transaction.findFirst({
      where: { id: data.transactionId, organizationId: ctx.organizationId },
    });
    if (!trx) throw new Response("Operacion no encontrada", { status: 404 });
    const created = await prisma.task.create({
      data: {
        organizationId: ctx.organizationId,
        transactionId: trx.id,
        title: data.title,
        description: data.description ?? null,
        status: data.status ?? TaskStatus.PENDIENTE,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        assigneeId: data.assigneeId ?? null,
      },
      include: { assignee: { select: { name: true } } },
    });
    return mapTask(created);
  });

export const createTransactionNote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => createNoteSchema.parse(data))
  .handler(async ({ data }): Promise<TransactionNoteRow> => {
    const ctx = await requireCrmOrganization();
    const trx = await prisma.transaction.findFirst({
      where: { id: data.transactionId, organizationId: ctx.organizationId },
    });
    if (!trx) throw new Response("Operacion no encontrada", { status: 404 });
    const created = await prisma.note.create({
      data: {
        organizationId: ctx.organizationId,
        transactionId: trx.id,
        content: data.content,
        authorId: ctx.userId,
      },
      include: { author: { select: { name: true } } },
    });
    return mapNote(created);
  });
