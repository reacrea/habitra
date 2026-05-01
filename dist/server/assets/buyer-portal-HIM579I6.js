import { n as getRequest } from "./server-DcmvO1qi.js";
import { r as createServerFn } from "../server.js";
import { t as auth } from "./better-auth-BcaB8wX6.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as parseUserRole } from "./user-role-CRCPQyMw.js";
import { t as buildAiDummyInsights } from "./ai-dummy-DAZti8-O.js";
import { n as buyerPortalTransactionIdSchema, t as buyerPortalProfileUpdateSchema } from "./buyer-portal-DWlM9OX3.js";
import { t as createServerRpc } from "./createServerRpc-DaHnQtmK.js";
import { UserRole } from "@prisma/client";
//#region src/lib/buyer-desired-zone.ts
/** Serializa ciudad y zonas en un solo campo `Buyer.desiredZone` sin migración. */
var SEP = "\n---\n";
function splitDesiredZone(raw) {
	if (!raw?.trim()) return {
		city: "",
		interestZones: ""
	};
	if (raw.includes(SEP)) {
		const [city, ...rest] = raw.split(SEP);
		return {
			city: city.trim(),
			interestZones: rest.join(SEP).trim()
		};
	}
	return {
		city: "",
		interestZones: raw.trim()
	};
}
function mergeDesiredZone(city, interestZones) {
	const c = city.trim();
	const z = interestZones.trim();
	if (!c && !z) return null;
	if (!c) return z;
	if (!z) return c;
	return `${c}${SEP}${z}`;
}
//#endregion
//#region src/server/buyer-portal.ts?tss-serverfn-split
function toNumber(value) {
	if (value == null) return null;
	if (typeof value === "number") return value;
	if (typeof value === "object" && "toNumber" in value) return value.toNumber();
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}
async function requireBuyerPortalContext() {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) throw new Response("Unauthorized", { status: 401 });
	const user = session.user;
	if (parseUserRole(user.role) !== UserRole.BUYER) throw new Response("Forbidden", { status: 403 });
	let buyer = await prisma.buyer.findFirst({
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
			updatedAt: true
		}
	});
	if (!buyer) {
		const org = await prisma.organization.findFirst({ orderBy: { createdAt: "asc" } });
		if (!org) throw new Response("Sin organizacion disponible", { status: 503 });
		buyer = await prisma.buyer.create({
			data: {
				organizationId: org.id,
				userId: user.id,
				name: user.name ?? "Comprador",
				email: user.email ?? null,
				phone: user.phone ?? null,
				creditType: "BANCARIO",
				urgency: 3
			},
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
				updatedAt: true
			}
		});
	}
	return {
		user,
		buyer
	};
}
var getBuyerDashboardData_createServerFn_handler = createServerRpc({
	id: "840cf681e4b756a5d8ae058c30b7c9c0e723bc175966a5d0dce7756d98f21212",
	name: "getBuyerDashboardData",
	filename: "src/server/buyer-portal.ts"
}, (opts) => getBuyerDashboardData.__executeServer(opts));
var getBuyerDashboardData = createServerFn({ method: "GET" }).handler(getBuyerDashboardData_createServerFn_handler, async () => {
	const { buyer } = await requireBuyerPortalContext();
	const [transactions, docsPending, matches] = await Promise.all([
		prisma.transaction.findMany({
			where: {
				buyerId: buyer.id,
				organizationId: buyer.organizationId
			},
			orderBy: { createdAt: "desc" },
			take: 5,
			include: {
				property: { select: { title: true } },
				agent: { select: { name: true } }
			}
		}),
		prisma.document.count({ where: {
			organizationId: buyer.organizationId,
			buyerId: buyer.id,
			status: { in: ["PENDIENTE", "RECHAZADO"] }
		} }),
		prisma.property.count({ where: {
			organizationId: buyer.organizationId,
			status: "PUBLICADA",
			...buyer.desiredPropertyType ? { propertyType: buyer.desiredPropertyType } : {}
		} })
	]);
	const ai = buildAiDummyInsights({
		prompt: `buyer ${buyer.name} dashboard riesgo seguimiento`,
		buyerId: buyer.id
	});
	return {
		buyer: {
			id: buyer.id,
			name: buyer.name,
			buyingScore: buyer.buyingScore,
			urgency: buyer.urgency
		},
		metrics: {
			activeTransactions: transactions.filter((x) => x.status === "ACTIVA").length,
			pendingDocuments: docsPending,
			matches
		},
		recentTransactions: transactions.map((row) => ({
			id: row.id,
			propertyTitle: row.property.title,
			status: row.status,
			currentStage: row.currentStage,
			agentName: row.agent.name,
			createdAt: row.createdAt.toISOString()
		})),
		ai
	};
});
var getBuyerProfileData_createServerFn_handler = createServerRpc({
	id: "48bc91ce4129f4530dd32ee4b5509a621c0bcced738e7123f83c6508455b1395",
	name: "getBuyerProfileData",
	filename: "src/server/buyer-portal.ts"
}, (opts) => getBuyerProfileData.__executeServer(opts));
var getBuyerProfileData = createServerFn({ method: "GET" }).handler(getBuyerProfileData_createServerFn_handler, async () => {
	const { user, buyer } = await requireBuyerPortalContext();
	const { city, interestZones } = splitDesiredZone(buyer.desiredZone);
	return {
		id: buyer.id,
		name: buyer.name || user.name,
		email: buyer.email ?? user.email ?? null,
		phone: buyer.phone ?? user.phone ?? null,
		maxBudget: toNumber(buyer.maxBudget),
		downPayment: toNumber(buyer.downPayment),
		monthlyIncome: toNumber(buyer.monthlyIncome),
		creditType: buyer.creditType,
		city,
		interestZones,
		desiredPropertyType: buyer.desiredPropertyType,
		bedrooms: buyer.bedrooms,
		bathrooms: buyer.bathrooms,
		buyingScore: buyer.buyingScore,
		urgency: buyer.urgency ?? 3,
		updatedAt: buyer.updatedAt.toISOString()
	};
});
var updateBuyerProfileData_createServerFn_handler = createServerRpc({
	id: "b320476fd190f370cdbcf42337ec86b70254b2d257e89448d343196b34ee5296",
	name: "updateBuyerProfileData",
	filename: "src/server/buyer-portal.ts"
}, (opts) => updateBuyerProfileData.__executeServer(opts));
var updateBuyerProfileData = createServerFn({ method: "POST" }).inputValidator((data) => buyerPortalProfileUpdateSchema.parse(data)).handler(updateBuyerProfileData_createServerFn_handler, async ({ data }) => {
	const { user, buyer } = await requireBuyerPortalContext();
	const { city: prevCity, interestZones: prevZones } = splitDesiredZone(buyer.desiredZone);
	const nextCity = data.city !== void 0 ? data.city : prevCity;
	const nextZones = data.interestZones !== void 0 ? data.interestZones : prevZones;
	const mergedZone = data.city !== void 0 || data.interestZones !== void 0 ? mergeDesiredZone(nextCity, nextZones) : void 0;
	const updated = await prisma.buyer.update({
		where: { id: buyer.id },
		data: {
			...data.name !== void 0 ? { name: data.name } : {},
			...data.email !== void 0 ? { email: data.email || null } : {},
			...data.phone !== void 0 ? { phone: data.phone || null } : {},
			...data.maxBudget !== void 0 ? { maxBudget: data.maxBudget } : {},
			...data.downPayment !== void 0 ? { downPayment: data.downPayment } : {},
			...data.monthlyIncome !== void 0 ? { monthlyIncome: data.monthlyIncome } : {},
			...data.creditType !== void 0 ? { creditType: data.creditType } : {},
			...mergedZone !== void 0 ? { desiredZone: mergedZone } : {},
			...data.desiredPropertyType !== void 0 ? { desiredPropertyType: data.desiredPropertyType } : {},
			...data.bedrooms !== void 0 ? { bedrooms: data.bedrooms } : {},
			...data.bathrooms !== void 0 ? { bathrooms: data.bathrooms } : {},
			...data.urgency !== void 0 ? { urgency: data.urgency } : {}
		},
		select: {
			id: true,
			updatedAt: true
		}
	});
	if (data.name !== void 0 || data.email !== void 0 || data.phone !== void 0) await prisma.user.update({
		where: { id: user.id },
		data: {
			...data.name !== void 0 ? { name: data.name } : {},
			...data.email !== void 0 ? { email: data.email } : {},
			...data.phone !== void 0 ? { phone: data.phone || null } : {}
		}
	});
	return {
		id: updated.id,
		updatedAt: updated.updatedAt.toISOString()
	};
});
var getBuyerMatchesData_createServerFn_handler = createServerRpc({
	id: "73c8f8bd5186bfb79b629701527c0be60686434cbca82128ed2cc0a233b5763c",
	name: "getBuyerMatchesData",
	filename: "src/server/buyer-portal.ts"
}, (opts) => getBuyerMatchesData.__executeServer(opts));
var getBuyerMatchesData = createServerFn({ method: "GET" }).handler(getBuyerMatchesData_createServerFn_handler, async () => {
	const { buyer } = await requireBuyerPortalContext();
	return { matches: (await prisma.property.findMany({
		where: {
			organizationId: buyer.organizationId,
			status: "PUBLICADA",
			...buyer.desiredPropertyType ? { propertyType: buyer.desiredPropertyType } : {},
			...buyer.desiredZone ? { OR: [{ city: {
				contains: buyer.desiredZone,
				mode: "insensitive"
			} }, { neighborhood: {
				contains: buyer.desiredZone,
				mode: "insensitive"
			} }] } : {},
			...buyer.maxBudget ? { price: { lte: buyer.maxBudget } } : {},
			...buyer.bedrooms != null ? { bedrooms: { gte: buyer.bedrooms } } : {},
			...buyer.bathrooms != null ? { bathrooms: { gte: buyer.bathrooms } } : {}
		},
		include: {
			images: {
				orderBy: { order: "asc" },
				take: 1
			},
			assignedAgent: { select: { name: true } }
		},
		orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
		take: 30
	})).map((row) => ({
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
		agentName: row.assignedAgent?.name ?? "Equipo Habitra"
	})) };
});
var getBuyerTransactionsData_createServerFn_handler = createServerRpc({
	id: "527c1c84ff012fb7bb15fa0f6a0b3746121d2b16cf070e084b0c8a1203b919d8",
	name: "getBuyerTransactionsData",
	filename: "src/server/buyer-portal.ts"
}, (opts) => getBuyerTransactionsData.__executeServer(opts));
var getBuyerTransactionsData = createServerFn({ method: "GET" }).handler(getBuyerTransactionsData_createServerFn_handler, async () => {
	const { buyer } = await requireBuyerPortalContext();
	return { transactions: (await prisma.transaction.findMany({
		where: {
			buyerId: buyer.id,
			organizationId: buyer.organizationId
		},
		include: {
			property: { select: {
				id: true,
				slug: true,
				title: true
			} },
			agent: { select: { name: true } },
			documents: { select: { id: true } },
			tasks: { select: {
				id: true,
				status: true
			} }
		},
		orderBy: { createdAt: "desc" }
	})).map((row) => ({
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
		createdAt: row.createdAt.toISOString()
	})) };
});
var getBuyerTransactionDetailData_createServerFn_handler = createServerRpc({
	id: "9d06937a187d39bf9f89971fea9b10a92fa977205b1bea045db58fbc263eeb25",
	name: "getBuyerTransactionDetailData",
	filename: "src/server/buyer-portal.ts"
}, (opts) => getBuyerTransactionDetailData.__executeServer(opts));
var getBuyerTransactionDetailData = createServerFn({ method: "POST" }).inputValidator((data) => buyerPortalTransactionIdSchema.parse(data)).handler(getBuyerTransactionDetailData_createServerFn_handler, async ({ data }) => {
	const { buyer } = await requireBuyerPortalContext();
	const row = await prisma.transaction.findFirst({
		where: {
			id: data.id,
			buyerId: buyer.id,
			organizationId: buyer.organizationId
		},
		include: {
			property: { select: {
				slug: true,
				title: true,
				address: true,
				city: true,
				state: true
			} },
			agent: { select: {
				name: true,
				email: true,
				phone: true
			} },
			documents: {
				select: {
					id: true,
					title: true,
					type: true,
					status: true,
					createdAt: true
				},
				orderBy: { createdAt: "desc" }
			},
			timelineSteps: { orderBy: { order: "asc" } },
			tasks: {
				select: {
					id: true,
					title: true,
					status: true,
					dueDate: true
				},
				orderBy: { createdAt: "desc" }
			}
		}
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
			createdAt: row.createdAt.toISOString()
		},
		documents: row.documents.map((d) => ({
			id: d.id,
			title: d.title,
			type: d.type,
			status: d.status,
			createdAt: d.createdAt.toISOString()
		})),
		timeline: row.timelineSteps.map((t) => ({
			id: t.id,
			name: t.name,
			status: t.status,
			estimatedDate: t.estimatedDate?.toISOString() ?? null,
			completedDate: t.completedDate?.toISOString() ?? null,
			description: t.description
		})),
		tasks: row.tasks.map((t) => ({
			id: t.id,
			title: t.title,
			status: t.status,
			dueDate: t.dueDate?.toISOString() ?? null
		})),
		ai: buildAiDummyInsights({
			prompt: `analiza transaccion buyer ${row.id} avance riesgos`,
			buyerId: buyer.id,
			transactionId: row.id,
			propertyId: row.propertyId
		})
	};
});
//#endregion
export { getBuyerDashboardData_createServerFn_handler, getBuyerMatchesData_createServerFn_handler, getBuyerProfileData_createServerFn_handler, getBuyerTransactionDetailData_createServerFn_handler, getBuyerTransactionsData_createServerFn_handler, updateBuyerProfileData_createServerFn_handler };
