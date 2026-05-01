import type { MembershipRole, UserRole } from "@prisma/client";
import { TaskStatus, TransactionStage } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import {
  CONTACT_AVAILABILITY,
  CONTACT_INTEREST_TYPES,
  CONTACT_PREFERRED_METHODS,
} from "@/constants/public-contact-agent";
import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { parseUserRole } from "@/utils/user-role";
import {
  contactAgentSchema,
  scheduleVisitSchema,
  startBuyingProcessSchema,
} from "@/validations/public-engagement";

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

const MEMBERSHIP_AGENT_PRIORITY: Record<MembershipRole, number | null> = {
  AGENT: 0,
  MANAGER: 1,
  OWNER: 2,
  MEMBER: null,
};

/**
 * Portal B2C: compradores/vendedores actúan sin membresía CRM.
 * Personal CRM solo puede crear recursos sobre propiedades de su organización.
 */
async function assertPublicEngagementOrgAccess(userId: string, role: UserRole, propertyOrganizationId: string) {
  if (role === "BUYER" || role === "SELLER") return;

  const scope = await getOrganizationScope(userId, role);
  assertOrganizationAccess(scope, propertyOrganizationId);
}

/**
 * Solo el agente publicado en la listing si sigue siendo miembro de la org.
 * Si el anuncio no tiene agente o el usuario ya no pertenece → null (el broker/admin asigna en CRM).
 */
async function resolveListingAgentUserIdOrNull(
  organizationId: string,
  propertyAssignedAgentId: string | null,
): Promise<string | null> {
  if (!propertyAssignedAgentId) return null;
  const member = await prisma.membership.findFirst({
    where: { organizationId, userId: propertyAssignedAgentId },
  });
  return member ? propertyAssignedAgentId : null;
}

/**
 * Agente del anuncio (si pertenece a la org) o primer miembro operativo AGENT/MANAGER/OWNER.
 * Usado cuando hace falta un usuario obligatorio (p. ej. Transaction.agentId).
 */
async function resolveAssignableAgentUserId(
  organizationId: string,
  propertyAssignedAgentId: string | null,
): Promise<string> {
  const direct = await resolveListingAgentUserIdOrNull(organizationId, propertyAssignedAgentId);
  if (direct) return direct;

  const memberships = await prisma.membership.findMany({
    where: {
      organizationId,
      role: { in: ["AGENT", "MANAGER", "OWNER"] },
    },
    select: { userId: true, role: true },
  });

  memberships.sort((a, b) => {
    const pa = MEMBERSHIP_AGENT_PRIORITY[a.role] ?? 99;
    const pb = MEMBERSHIP_AGENT_PRIORITY[b.role] ?? 99;
    return pa - pb;
  });

  const first = memberships[0];
  if (!first) {
    throw new Response(
      "La propiedad no tiene agente asignado y la inmobiliaria no tiene agentes o responsables configurados.",
      { status: 409 },
    );
  }
  return first.userId;
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
    const listingAgentId = await resolveListingAgentUserIdOrNull(
      property.organizationId,
      property.assignedAgentId,
    );

    const buyer = await prisma.buyer.findFirst({
      where: { userId: user.id, organizationId: property.organizationId },
      select: { id: true, name: true, email: true, phone: true },
    });

    const displayName =
      [buyer?.name, user.name].find((n) => typeof n === "string" && n.trim().length >= 2)?.trim() ??
      user.email?.split("@")[0]?.trim() ??
      "Contacto";

    const email = buyer?.email ?? user.email ?? null;
    const phone = buyer?.phone ?? user.phone ?? null;

    const interestLabel =
      CONTACT_INTEREST_TYPES.find((x) => x.value === data.interestType)?.label ?? data.interestType;
    const availabilityLabel =
      CONTACT_AVAILABILITY.find((x) => x.value === data.availability)?.label ?? data.availability;
    const methodLabel =
      CONTACT_PREFERRED_METHODS.find((x) => x.value === data.preferredContactMethod)?.label ??
      data.preferredContactMethod;

    const noteLines: string[] = [];
    if (data.message?.trim()) noteLines.push(data.message.trim());
    noteLines.push(
      `Tipo de interes: ${interestLabel}`,
      `Disponibilidad: ${availabilityLabel}`,
      `Metodo preferido: ${methodLabel}`,
      "",
      `Propiedad de interes: ${property.title} (${property.slug})`,
    );
    const notesText = noteLines.join("\n");

    const lead = await prisma.lead.create({
      data: {
        organizationId: property.organizationId,
        name: displayName,
        email,
        phone,
        type: "COMPRADOR",
        source: "PUBLIC_PROPERTY_CONTACT",
        status: "NUEVO",
        temperature: "TIBIO",
        assignedAgentId: listingAgentId,
        notesText,
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
        buyerId: buyer?.id ?? null,
        metadata: {
          propertySlug: property.slug,
          via: "public-b2c",
          interestType: data.interestType,
          availability: data.availability,
          preferredContactMethod: data.preferredContactMethod,
          buyerProfileId: buyer?.id ?? null,
        },
      },
    });

    return { ok: true, leadId: lead.id };
  });

export const scheduleVisitFromPublic = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => scheduleVisitSchema.parse(data))
  .handler(async ({ data }) => {
    const user = await requireAuthedUser();

    const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);
    await assertPublicEngagementOrgAccess(user.id, user.role, property.organizationId);

    const listingAgentId = await resolveListingAgentUserIdOrNull(
      property.organizationId,
      property.assignedAgentId,
    );

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
          assignedAgentId: listingAgentId,
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
        assigneeId: listingAgentId,
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

    const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);
    await assertPublicEngagementOrgAccess(user.id, user.role, property.organizationId);

    if (!property.sellerId) {
      throw new Response("La propiedad no tiene seller asociado", { status: 409 });
    }

    const routingAgentId = await resolveAssignableAgentUserId(property.organizationId, property.assignedAgentId);

    const buyer = await prisma.buyer.upsert({
      where: { userId: user.id },
      update: {
        organizationId: property.organizationId,
        name: user.name,
        email: user.email ?? null,
        phone: user.phone ?? null,
        assignedAgentId: routingAgentId,
      },
      create: {
        organizationId: property.organizationId,
        userId: user.id,
        name: user.name,
        email: user.email ?? null,
        phone: user.phone ?? null,
        assignedAgentId: routingAgentId,
      },
      select: { id: true },
    });

    const transaction = await prisma.transaction.create({
      data: {
        organizationId: property.organizationId,
        propertyId: property.id,
        buyerId: buyer.id,
        sellerId: property.sellerId,
        agentId: routingAgentId,
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
