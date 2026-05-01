import { n as getRequest } from "./server-DcmvO1qi.js";
import { r as createServerFn } from "../server.js";
import { t as auth } from "./better-auth-ChMwVNa3.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as parseUserRole } from "./user-role-sJpbyopw.js";
import { n as scheduleVisitSchema, r as startBuyingProcessSchema, t as contactAgentSchema } from "./public-engagement-CqbRqUNy.js";
import { t as createServerRpc } from "./createServerRpc-BAzcEfDB.js";
import { n as getOrganizationScope, t as assertOrganizationAccess } from "./org-access-jsc_4AoP.js";
import { t as assertCanAccessCrm } from "./crm-session-CwGMkCgn.js";
import { TaskStatus, TransactionStage } from "@prisma/client";
//#region src/server/public-engagement.ts?tss-serverfn-split
async function requireAuthedUser() {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) throw new Response("Unauthorized", { status: 401 });
	const user = session.user;
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		phone: user.phone ?? null,
		role: parseUserRole(user.role)
	};
}
async function getPublicPropertyBySlugOrThrow(slug) {
	const property = await prisma.property.findFirst({
		where: {
			slug,
			status: "PUBLICADA"
		},
		select: {
			id: true,
			slug: true,
			title: true,
			organizationId: true,
			sellerId: true,
			assignedAgentId: true,
			price: true
		}
	});
	if (!property) throw new Response("Propiedad no encontrada", { status: 404 });
	return property;
}
var contactAgentFromPublic_createServerFn_handler = createServerRpc({
	id: "52c1af2a133a929dbcd3448ea19e0954e45b1b23c52814ec07a98eb7261579ce",
	name: "contactAgentFromPublic",
	filename: "src/server/public-engagement.ts"
}, (opts) => contactAgentFromPublic.__executeServer(opts));
var contactAgentFromPublic = createServerFn({ method: "POST" }).inputValidator((data) => contactAgentSchema.parse(data)).handler(contactAgentFromPublic_createServerFn_handler, async ({ data }) => {
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
			notesText: data.message ? `${data.message}\n\nPropiedad interes: ${property.title} (${property.slug})` : `Propiedad interes: ${property.title} (${property.slug})`
		},
		select: { id: true }
	});
	await prisma.activityLog.create({ data: {
		organizationId: property.organizationId,
		actorId: user.id,
		action: "PUBLIC_CONTACT_AGENT",
		entityType: "Lead",
		entityId: lead.id,
		description: `Contacto publico para ${property.title}`,
		leadId: lead.id,
		propertyId: property.id,
		metadata: {
			propertySlug: property.slug,
			via: "public-b2c"
		}
	} });
	return {
		ok: true,
		leadId: lead.id
	};
});
var scheduleVisitFromPublic_createServerFn_handler = createServerRpc({
	id: "babcf2fae0b51626cd490d077ddf468513f544be967398bb2fc7593a33717a37",
	name: "scheduleVisitFromPublic",
	filename: "src/server/public-engagement.ts"
}, (opts) => scheduleVisitFromPublic.__executeServer(opts));
var scheduleVisitFromPublic = createServerFn({ method: "POST" }).inputValidator((data) => scheduleVisitSchema.parse(data)).handler(scheduleVisitFromPublic_createServerFn_handler, async ({ data }) => {
	const user = await requireAuthedUser();
	assertCanAccessCrm(user.role);
	const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);
	assertOrganizationAccess(await getOrganizationScope(user.id, user.role), property.organizationId);
	const lead = (user.email ? await prisma.lead.findFirst({
		where: {
			organizationId: property.organizationId,
			email: user.email,
			type: "COMPRADOR"
		},
		select: { id: true },
		orderBy: { createdAt: "desc" }
	}) : null) ?? await prisma.lead.create({
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
			notesText: `Lead creado automaticamente por agenda de visita (${property.slug}).`
		},
		select: { id: true }
	});
	const details = [
		"Modalidad: visita presencial",
		data.description ? `Comentarios: ${data.description}` : null,
		`Comprador: ${user.name}`,
		user.email ? `Email: ${user.email}` : null,
		user.phone ? `Telefono: ${user.phone}` : null,
		`Propiedad: ${property.title} (${property.slug})`
	].filter(Boolean).join("\n");
	const task = await prisma.task.create({
		data: {
			organizationId: property.organizationId,
			title: `Visita agendada: ${property.title}`,
			description: details,
			status: TaskStatus.PENDIENTE,
			propertyId: property.id,
			leadId: lead.id,
			assigneeId: property.assignedAgentId ?? user.id,
			dueDate: data.dueDate ? new Date(data.dueDate) : null
		},
		select: { id: true }
	});
	await prisma.activityLog.create({ data: {
		organizationId: property.organizationId,
		actorId: user.id,
		action: "PUBLIC_VISIT_SCHEDULED",
		entityType: "Task",
		entityId: task.id,
		description: `Visita agendada para ${property.title}`,
		leadId: lead.id,
		propertyId: property.id,
		metadata: {
			propertySlug: property.slug,
			via: "public-b2c"
		}
	} });
	return {
		ok: true,
		taskId: task.id
	};
});
var startBuyingProcessFromPublic_createServerFn_handler = createServerRpc({
	id: "fa7c5458134aaa87bc0d27f1c277971e8238a181ccc9822b6c1a4109a6d05e3d",
	name: "startBuyingProcessFromPublic",
	filename: "src/server/public-engagement.ts"
}, (opts) => startBuyingProcessFromPublic.__executeServer(opts));
var startBuyingProcessFromPublic = createServerFn({ method: "POST" }).inputValidator((data) => startBuyingProcessSchema.parse(data)).handler(startBuyingProcessFromPublic_createServerFn_handler, async ({ data }) => {
	const user = await requireAuthedUser();
	assertCanAccessCrm(user.role);
	const property = await getPublicPropertyBySlugOrThrow(data.propertySlug);
	assertOrganizationAccess(await getOrganizationScope(user.id, user.role), property.organizationId);
	if (!property.sellerId) throw new Response("La propiedad no tiene seller asociado", { status: 409 });
	const buyer = await prisma.buyer.upsert({
		where: { userId: user.id },
		update: {
			organizationId: property.organizationId,
			name: user.name,
			email: user.email ?? null,
			phone: user.phone
		},
		create: {
			organizationId: property.organizationId,
			userId: user.id,
			name: user.name,
			email: user.email ?? null,
			phone: user.phone
		},
		select: { id: true }
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
			notesText: data.notesText ?? "Proceso iniciado desde portal publico"
		},
		select: { id: true }
	});
	await prisma.transactionTimelineStep.create({ data: {
		transactionId: transaction.id,
		name: "Lead creado",
		description: "Proceso iniciado desde portal publico B2C",
		responsibleRole: "AGENT",
		status: "COMPLETADO",
		completedDate: /* @__PURE__ */ new Date(),
		order: 0
	} });
	await prisma.activityLog.create({ data: {
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
		metadata: {
			propertySlug: property.slug,
			via: "public-b2c"
		}
	} });
	return {
		ok: true,
		transactionId: transaction.id
	};
});
//#endregion
export { contactAgentFromPublic_createServerFn_handler, scheduleVisitFromPublic_createServerFn_handler, startBuyingProcessFromPublic_createServerFn_handler };
