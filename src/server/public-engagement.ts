import { TaskStatus, TransactionStage } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { parseUserRole } from "@/utils/user-role";
import {
  contactAgentSchema,
  scheduleVisitSchema,
  startBuyingProcessSchema,
} from "@/validations/public-engagement";

import { assertCanAccessCrm } from "./crm-session";
import { assertOrganizationAccess, getOrganizationScope } from "./org-access";

async function requireAuthedUser() {
  const request = getRequest();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw new Response("Unauthorized", { status: 401 });
  }
  const user = session.user as typeof session.user & { role?: string | null };
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone ?? null,
    role: parseUserRole(user.role),
  };
}

async function getPublicPropertyBySlugOrThrow(slug: string) {
  const property = await prisma.property.findFirst({
    where: { slug, status: "PUBLICADA" },
    select: {
      id: true,
      slug: true,
      title: true,
      organizationId: true,
      sellerId: true,
      assignedAgentId: true,
      price: true,
    },
  });
  if (!property) throw new Response("Propiedad no encontrada", { status: 404 });
  return property;
}

export const contactAgentFromPublic = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactAgentSchema.parse(data))
  .handler(async ({ data }) => {
    const user = await requireAuthedUser();
    const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);

    const lead = await prisma.lead.create({
      data: {
        organizationId: property.organizationId,
        name: data.name,
        email: data.email ?? user.email ?? null,
        phone: data.phone ?? user.phone ?? null,
        type: "COMPRADOR",
        source: "PUBLIC_PROPERTY_CONTACT",
        status: "NUEVO",
        temperature: "TIBIO",
        assignedAgentId: property.assignedAgentId ?? null,
        notesText: data.message
          ? `${data.message}\n\nPropiedad interes: ${property.title} (${property.slug})`
          : `Propiedad interes: ${property.title} (${property.slug})`,
      },
      select: { id: true },
    });

    await prisma.activityLog.create({
      data: {
        organizationId: property.organizationId,
        actorId: user.id,
        action: "PUBLIC_CONTACT_AGENT",
        entityType: "Lead",
        entityId: lead.id,
        description: `Contacto publico para ${property.title}`,
        leadId: lead.id,
        propertyId: property.id,
        metadata: { propertySlug: property.slug, via: "public-b2c" },
      },
    });

    return { ok: true, leadId: lead.id };
  });

export const scheduleVisitFromPublic = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => scheduleVisitSchema.parse(data))
  .handler(async ({ data }) => {
    const user = await requireAuthedUser();
    assertCanAccessCrm(user.role);

    const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);
    const scope = await getOrganizationScope(user.id, user.role);
    assertOrganizationAccess(scope, property.organizationId);

    const buyerLead = user.email
      ? await prisma.lead.findFirst({
          where: {
            organizationId: property.organizationId,
            email: user.email,
            type: "COMPRADOR",
          },
          select: { id: true },
          orderBy: { createdAt: "desc" },
        })
      : null;

    const lead =
      buyerLead ??
      (await prisma.lead.create({
        data: {
          organizationId: property.organizationId,
          name: user.name,
          email: user.email ?? null,
          phone: user.phone ?? null,
          type: "COMPRADOR",
          source: "PUBLIC_VISIT_SCHEDULE",
          status: "NUEVO",
          temperature: "TIBIO",
          assignedAgentId: property.assignedAgentId ?? user.id,
          notesText: `Lead creado automaticamente por agenda de visita (${property.slug}).`,
        },
        select: { id: true },
      }));

    const details = [
      "Modalidad: visita presencial",
      data.description ? `Comentarios: ${data.description}` : null,
      `Comprador: ${user.name}`,
      user.email ? `Email: ${user.email}` : null,
      user.phone ? `Telefono: ${user.phone}` : null,
      `Propiedad: ${property.title} (${property.slug})`,
    ]
      .filter(Boolean)
      .join("\n");

    const task = await prisma.task.create({
      data: {
        organizationId: property.organizationId,
        title: `Visita agendada: ${property.title}`,
        description: details,
        status: TaskStatus.PENDIENTE,
        propertyId: property.id,
        leadId: lead.id,
        assigneeId: property.assignedAgentId ?? user.id,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
      },
      select: { id: true },
    });

    await prisma.activityLog.create({
      data: {
        organizationId: property.organizationId,
        actorId: user.id,
        action: "PUBLIC_VISIT_SCHEDULED",
        entityType: "Task",
        entityId: task.id,
        description: `Visita agendada para ${property.title}`,
        leadId: lead.id,
        propertyId: property.id,
        metadata: { propertySlug: property.slug, via: "public-b2c" },
      },
    });

    return { ok: true, taskId: task.id };
  });

export const startBuyingProcessFromPublic = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => startBuyingProcessSchema.parse(data))
  .handler(async ({ data }) => {
    const user = await requireAuthedUser();
    assertCanAccessCrm(user.role);

    const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);
    const scope = await getOrganizationScope(user.id, user.role);
    assertOrganizationAccess(scope, property.organizationId);

    if (!property.sellerId) {
      throw new Response("La propiedad no tiene seller asociado", { status: 409 });
    }

    const buyer = await prisma.buyer.upsert({
      where: { userId: user.id },
      update: {
        organizationId: property.organizationId,
        name: user.name,
        email: user.email ?? null,
        phone: user.phone,
      },
      create: {
        organizationId: property.organizationId,
        userId: user.id,
        name: user.name,
        email: user.email ?? null,
        phone: user.phone,
      },
      select: { id: true },
    });

    const transaction = await prisma.transaction.create({
      data: {
        organizationId: property.organizationId,
        propertyId: property.id,
        buyerId: buyer.id,
        sellerId: property.sellerId,
        agentId: property.assignedAgentId ?? user.id,
        offeredPrice: data.offeredPrice ?? null,
        paymentType: data.paymentType ?? "CREDITO",
        creditType: data.creditType ?? null,
        currentStage: TransactionStage.LEAD_CREADO,
        notesText: data.notesText ?? "Proceso iniciado desde portal publico",
      },
      select: { id: true },
    });

    await prisma.transactionTimelineStep.create({
      data: {
        transactionId: transaction.id,
        name: "Lead creado",
        description: "Proceso iniciado desde portal publico B2C",
        responsibleRole: "AGENT",
        status: "COMPLETADO",
        completedDate: new Date(),
        order: 0,
      },
    });

    await prisma.activityLog.create({
      data: {
        organizationId: property.organizationId,
        actorId: user.id,
        action: "PUBLIC_BUYING_PROCESS_STARTED",
        entityType: "Transaction",
        entityId: transaction.id,
        description: `Proceso de compra iniciado para ${property.title}`,
        propertyId: property.id,
        transactionId: transaction.id,
        buyerId: buyer.id,
        sellerId: property.sellerId,
        metadata: { propertySlug: property.slug, via: "public-b2c" },
      },
    });

    return { ok: true, transactionId: transaction.id };
  });
