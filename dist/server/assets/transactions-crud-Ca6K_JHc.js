import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { a as transactionIdPayloadSchema, i as createTransactionSchema, n as createNoteSchema, o as updateTransactionStageSchema, r as createTaskSchema, t as addTimelineStepSchema } from "./transaction-BoWAHeyi.js";
import { t as createServerRpc } from "./createServerRpc-BAzcEfDB.js";
import { n as requireCrmOrganization } from "./crm-session-CwGMkCgn.js";
import { TaskStatus, TimelineStepStatus } from "@prisma/client";
//#region src/server/transactions-crud.ts?tss-serverfn-split
function toNumber(value) {
	if (value == null) return null;
	if (typeof value === "number") return value;
	if (typeof value === "object" && "toNumber" in value) return value.toNumber();
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}
function mapTransaction(row) {
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
		agentName: row.agent.name
	};
}
function mapTimeline(row) {
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
		updatedAt: row.updatedAt.toISOString()
	};
}
function mapTask(row) {
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
		updatedAt: row.updatedAt.toISOString()
	};
}
function mapNote(row) {
	return {
		id: row.id,
		transactionId: row.transactionId,
		content: row.content,
		authorId: row.authorId,
		authorName: row.author?.name ?? null,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
var listTransactions_createServerFn_handler = createServerRpc({
	id: "389128684818e7c24153551126cc3bfa2c4e82846cecb288ab48f9732647b6e6",
	name: "listTransactions",
	filename: "src/server/transactions-crud.ts"
}, (opts) => listTransactions.__executeServer(opts));
var listTransactions = createServerFn({ method: "GET" }).handler(listTransactions_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	return { transactions: (await prisma.transaction.findMany({
		where: { organizationId: ctx.organizationId },
		include: {
			property: { select: { title: true } },
			buyer: { select: { name: true } },
			seller: { select: { name: true } },
			agent: { select: { name: true } }
		},
		orderBy: { createdAt: "desc" },
		take: 200
	})).map(mapTransaction) };
});
var getTransactionCreateOptions_createServerFn_handler = createServerRpc({
	id: "34968bd9938c387a89556f7c27666916cb4576e297a36dbd4eb9a9ff63113f15",
	name: "getTransactionCreateOptions",
	filename: "src/server/transactions-crud.ts"
}, (opts) => getTransactionCreateOptions.__executeServer(opts));
var getTransactionCreateOptions = createServerFn({ method: "GET" }).handler(getTransactionCreateOptions_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const [buyers, sellers, properties, memberships] = await Promise.all([
		prisma.buyer.findMany({
			where: { organizationId: ctx.organizationId },
			select: {
				id: true,
				name: true
			},
			orderBy: { name: "asc" }
		}),
		prisma.seller.findMany({
			where: { organizationId: ctx.organizationId },
			select: {
				id: true,
				name: true
			},
			orderBy: { name: "asc" }
		}),
		prisma.property.findMany({
			where: { organizationId: ctx.organizationId },
			select: {
				id: true,
				title: true
			},
			orderBy: { createdAt: "desc" },
			take: 200
		}),
		prisma.membership.findMany({
			where: {
				organizationId: ctx.organizationId,
				role: { in: [
					"AGENT",
					"OWNER",
					"MANAGER"
				] }
			},
			include: { user: { select: {
				id: true,
				name: true
			} } }
		})
	]);
	const uniqueAgents = Array.from(new Map(memberships.map((m) => [m.user.id, {
		id: m.user.id,
		label: m.user.name
	}])).values()).sort((a, b) => a.label.localeCompare(b.label));
	return {
		buyers: buyers.map((x) => ({
			id: x.id,
			label: x.name
		})),
		sellers: sellers.map((x) => ({
			id: x.id,
			label: x.name
		})),
		properties: properties.map((x) => ({
			id: x.id,
			label: x.title
		})),
		agents: uniqueAgents
	};
});
var createTransaction_createServerFn_handler = createServerRpc({
	id: "04c954ac70e26098512749007859692d4c6126ea1df03fa6fccc5bfcb98ebb87",
	name: "createTransaction",
	filename: "src/server/transactions-crud.ts"
}, (opts) => createTransaction.__executeServer(opts));
var createTransaction = createServerFn({ method: "POST" }).inputValidator((data) => createTransactionSchema.parse(data)).handler(createTransaction_createServerFn_handler, async ({ data }) => {
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
			notesText: data.notesText ?? null
		},
		include: {
			property: { select: { title: true } },
			buyer: { select: { name: true } },
			seller: { select: { name: true } },
			agent: { select: { name: true } }
		}
	});
	await prisma.transactionTimelineStep.create({ data: {
		transactionId: row.id,
		name: "Lead creado",
		description: "Operacion creada en CRM",
		responsibleRole: "AGENT",
		status: TimelineStepStatus.COMPLETADO,
		completedDate: /* @__PURE__ */ new Date(),
		order: 0
	} });
	return mapTransaction(row);
});
var getTransactionDetail_createServerFn_handler = createServerRpc({
	id: "8efb5a5898e4ad89f35268efb06b8481255a02ad34c5213af7ef7357f45dd2f1",
	name: "getTransactionDetail",
	filename: "src/server/transactions-crud.ts"
}, (opts) => getTransactionDetail.__executeServer(opts));
var getTransactionDetail = createServerFn({ method: "POST" }).inputValidator((data) => transactionIdPayloadSchema.parse(data)).handler(getTransactionDetail_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.transaction.findFirst({
		where: {
			id: data.id,
			organizationId: ctx.organizationId
		},
		include: {
			property: { select: { title: true } },
			buyer: { select: { name: true } },
			seller: { select: { name: true } },
			agent: { select: { name: true } },
			timelineSteps: { orderBy: { order: "asc" } },
			tasks: {
				include: { assignee: { select: { name: true } } },
				orderBy: { createdAt: "desc" }
			},
			notes: {
				include: { author: { select: { name: true } } },
				orderBy: { createdAt: "desc" }
			}
		}
	});
	if (!row) return null;
	return {
		transaction: mapTransaction(row),
		timeline: row.timelineSteps.map(mapTimeline),
		tasks: row.tasks.map(mapTask),
		notes: row.notes.map(mapNote)
	};
});
var updateTransactionStage_createServerFn_handler = createServerRpc({
	id: "31814c29553ea7d6dc04a8c1ce1c9c55746230905759975d5b1bf7f758628bd6",
	name: "updateTransactionStage",
	filename: "src/server/transactions-crud.ts"
}, (opts) => updateTransactionStage.__executeServer(opts));
var updateTransactionStage = createServerFn({ method: "POST" }).inputValidator((data) => updateTransactionStageSchema.parse(data)).handler(updateTransactionStage_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const existing = await prisma.transaction.findFirst({
		where: {
			id: data.transactionId,
			organizationId: ctx.organizationId
		},
		include: {
			property: { select: { title: true } },
			buyer: { select: { name: true } },
			seller: { select: { name: true } },
			agent: { select: { name: true } }
		}
	});
	if (!existing) throw new Response("Operacion no encontrada", { status: 404 });
	const updated = await prisma.transaction.update({
		where: { id: existing.id },
		data: {
			currentStage: data.stage,
			...data.status ? { status: data.status } : {}
		},
		include: {
			property: { select: { title: true } },
			buyer: { select: { name: true } },
			seller: { select: { name: true } },
			agent: { select: { name: true } }
		}
	});
	const lastOrder = await prisma.transactionTimelineStep.count({ where: { transactionId: existing.id } });
	await prisma.transactionTimelineStep.create({ data: {
		transactionId: existing.id,
		name: data.stage,
		description: "Cambio de etapa",
		responsibleRole: ctx.role,
		status: TimelineStepStatus.COMPLETADO,
		completedDate: /* @__PURE__ */ new Date(),
		order: lastOrder
	} });
	return mapTransaction(updated);
});
var addTimelineStep_createServerFn_handler = createServerRpc({
	id: "d3c1c28e6c67c8743f3d3c7be35371e3949f5c0acfd3a915ebac65eec6874ab0",
	name: "addTimelineStep",
	filename: "src/server/transactions-crud.ts"
}, (opts) => addTimelineStep.__executeServer(opts));
var addTimelineStep = createServerFn({ method: "POST" }).inputValidator((data) => addTimelineStepSchema.parse(data)).handler(addTimelineStep_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const trx = await prisma.transaction.findFirst({ where: {
		id: data.transactionId,
		organizationId: ctx.organizationId
	} });
	if (!trx) throw new Response("Operacion no encontrada", { status: 404 });
	const order = await prisma.transactionTimelineStep.count({ where: { transactionId: trx.id } });
	return mapTimeline(await prisma.transactionTimelineStep.create({ data: {
		transactionId: trx.id,
		name: data.name,
		description: data.description ?? null,
		responsibleRole: data.responsibleRole,
		estimatedDate: data.estimatedDate ? new Date(data.estimatedDate) : null,
		status: data.status ?? TimelineStepStatus.PENDIENTE,
		notes: data.notes ?? null,
		order
	} }));
});
var createTransactionTask_createServerFn_handler = createServerRpc({
	id: "2640ed936ed9cc518857326c3d276a5dac3ed38c95022b41dc874096e82e0f3c",
	name: "createTransactionTask",
	filename: "src/server/transactions-crud.ts"
}, (opts) => createTransactionTask.__executeServer(opts));
var createTransactionTask = createServerFn({ method: "POST" }).inputValidator((data) => createTaskSchema.parse(data)).handler(createTransactionTask_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const trx = await prisma.transaction.findFirst({ where: {
		id: data.transactionId,
		organizationId: ctx.organizationId
	} });
	if (!trx) throw new Response("Operacion no encontrada", { status: 404 });
	return mapTask(await prisma.task.create({
		data: {
			organizationId: ctx.organizationId,
			transactionId: trx.id,
			title: data.title,
			description: data.description ?? null,
			status: data.status ?? TaskStatus.PENDIENTE,
			dueDate: data.dueDate ? new Date(data.dueDate) : null,
			assigneeId: data.assigneeId ?? null
		},
		include: { assignee: { select: { name: true } } }
	}));
});
var createTransactionNote_createServerFn_handler = createServerRpc({
	id: "f6a5398ba5a5e50cf77a5ff9e0a5aac28c8c508910ce1f263c6106efd8001597",
	name: "createTransactionNote",
	filename: "src/server/transactions-crud.ts"
}, (opts) => createTransactionNote.__executeServer(opts));
var createTransactionNote = createServerFn({ method: "POST" }).inputValidator((data) => createNoteSchema.parse(data)).handler(createTransactionNote_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const trx = await prisma.transaction.findFirst({ where: {
		id: data.transactionId,
		organizationId: ctx.organizationId
	} });
	if (!trx) throw new Response("Operacion no encontrada", { status: 404 });
	return mapNote(await prisma.note.create({
		data: {
			organizationId: ctx.organizationId,
			transactionId: trx.id,
			content: data.content,
			authorId: ctx.userId
		},
		include: { author: { select: { name: true } } }
	}));
});
//#endregion
export { addTimelineStep_createServerFn_handler, createTransactionNote_createServerFn_handler, createTransactionTask_createServerFn_handler, createTransaction_createServerFn_handler, getTransactionCreateOptions_createServerFn_handler, getTransactionDetail_createServerFn_handler, listTransactions_createServerFn_handler, updateTransactionStage_createServerFn_handler };
