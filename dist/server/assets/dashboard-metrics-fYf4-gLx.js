import { n as getRequest } from "./server-DcmvO1qi.js";
import { r as createServerFn } from "../server.js";
import { t as auth } from "./better-auth-BcaB8wX6.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as parseUserRole } from "./user-role-CwScBYyP.js";
import { t as createServerRpc } from "./createServerRpc-CmfUkpu4.js";
import { n as getOrganizationScope } from "./org-access-CNsdBTj-.js";
import { LeadStatus, MembershipRole, PropertyStatus, TransactionStatus, UserRole } from "@prisma/client";
//#region src/server/dashboard-metrics.ts?tss-serverfn-split
function money(n) {
	if (n == null) return 0;
	return Number(n);
}
async function pipelineByStage(where) {
	return (await prisma.transaction.groupBy({
		by: ["currentStage"],
		where: {
			status: { notIn: [TransactionStatus.CANCELADA, TransactionStatus.CERRADA] },
			...where
		},
		_count: { _all: true }
	})).map((row) => ({
		stage: row.currentStage,
		count: row._count._all
	})).sort((a, b) => b.count - a.count);
}
var getDashboardMetrics_createServerFn_handler = createServerRpc({
	id: "733d61339d01d5150d0dd72aaee28e5ecbe2e0c9c3c1974e8c0d7865daf2609c",
	name: "getDashboardMetrics",
	filename: "src/server/dashboard-metrics.ts"
}, (opts) => getDashboardMetrics.__executeServer(opts));
var getDashboardMetrics = createServerFn({ method: "GET" }).handler(getDashboardMetrics_createServerFn_handler, async () => {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) throw new Response("Unauthorized", { status: 401 });
	const user = session.user;
	const userId = user.id;
	const role = parseUserRole(user.role);
	const scope = await getOrganizationScope(userId, role);
	if (role === UserRole.ADMIN) {
		const [organizations, users, transactions, leads, subscriptions] = await Promise.all([
			prisma.organization.count(),
			prisma.user.count(),
			prisma.transaction.count(),
			prisma.lead.count(),
			prisma.subscription.findMany({ include: { plan: { select: {
				name: true,
				priceMxn: true
			} } } })
		]);
		return {
			role: "ADMIN",
			organizations,
			users,
			transactions,
			leads,
			estimatedMrr: subscriptions.reduce((sum, sub) => sum + money(sub.plan.priceMxn) * (sub.seats ?? 1), 0),
			plansBreakdown: [...new Set(subscriptions.map((s) => s.plan.name))].map((planName) => ({
				planName,
				subscriptions: subscriptions.filter((s) => s.plan.name === planName).length
			}))
		};
	}
	const orgIds = scope.kind === "ALL" ? [] : scope.organizationIds;
	const primaryOrgId = orgIds[0];
	if (!primaryOrgId && (role === UserRole.AGENT || role === UserRole.BROKER_OWNER)) {
		if (role === UserRole.BROKER_OWNER) return {
			role: "BROKER_OWNER",
			agents: 0,
			activeTransactions: 0,
			totalLeads: 0,
			pipelineValue: 0,
			propertiesListed: 0,
			pipelineByStage: []
		};
		return {
			role: "AGENT",
			newLeads: 0,
			activeTransactions: 0,
			activeProperties: 0,
			qualifiedBuyers: 0,
			pipelineValue: 0,
			alerts: ["Sin organizacion asignada"],
			pipelineByStage: []
		};
	}
	if (role === UserRole.BROKER_OWNER && primaryOrgId) {
		const [agents, activeTransactions, totalLeads, pipelineAgg, propertiesListed, pipelineChart] = await Promise.all([
			prisma.membership.count({ where: {
				organizationId: primaryOrgId,
				role: MembershipRole.AGENT
			} }),
			prisma.transaction.count({ where: {
				organizationId: primaryOrgId,
				status: { in: [
					TransactionStatus.ACTIVA,
					TransactionStatus.EN_RIESGO,
					TransactionStatus.PAUSADA
				] }
			} }),
			prisma.lead.count({ where: { organizationId: primaryOrgId } }),
			prisma.transaction.aggregate({
				where: {
					organizationId: primaryOrgId,
					status: { in: [TransactionStatus.ACTIVA, TransactionStatus.EN_RIESGO] }
				},
				_sum: { acceptedPrice: true }
			}),
			prisma.property.count({ where: {
				organizationId: primaryOrgId,
				status: { notIn: [PropertyStatus.INACTIVA, PropertyStatus.VENDIDA] }
			} }),
			pipelineByStage({ organizationId: primaryOrgId })
		]);
		return {
			role: "BROKER_OWNER",
			agents,
			activeTransactions,
			totalLeads,
			pipelineValue: money(pipelineAgg._sum.acceptedPrice),
			propertiesListed,
			pipelineByStage: pipelineChart
		};
	}
	if (role === UserRole.AGENT && primaryOrgId) {
		const orgIn = { in: orgIds };
		const [newLeads, activeTransactions, activeProperties, qualifiedBuyers, pipelineAgg, stalled] = await Promise.all([
			prisma.lead.count({ where: {
				organizationId: orgIn,
				assignedAgentId: userId,
				status: LeadStatus.NUEVO
			} }),
			prisma.transaction.count({ where: {
				organizationId: orgIn,
				agentId: userId,
				status: { in: [
					TransactionStatus.ACTIVA,
					TransactionStatus.EN_RIESGO,
					TransactionStatus.PAUSADA
				] }
			} }),
			prisma.property.count({ where: {
				organizationId: orgIn,
				assignedAgentId: userId,
				status: { notIn: [PropertyStatus.INACTIVA, PropertyStatus.VENDIDA] }
			} }),
			prisma.buyer.count({ where: {
				organizationId: orgIn,
				assignedAgentId: userId,
				buyingScore: { gte: 70 }
			} }),
			prisma.transaction.aggregate({
				where: {
					organizationId: orgIn,
					agentId: userId,
					status: { in: [TransactionStatus.ACTIVA, TransactionStatus.EN_RIESGO] }
				},
				_sum: { acceptedPrice: true }
			}),
			prisma.transaction.count({ where: {
				organizationId: orgIn,
				agentId: userId,
				status: TransactionStatus.EN_RIESGO
			} })
		]);
		const pipelineChart = await pipelineByStage({
			organizationId: orgIn,
			agentId: userId
		});
		const alerts = [];
		if (stalled > 0) alerts.push(`${stalled} operacion(es) en riesgo`);
		if (newLeads > 5) alerts.push("Muchos leads nuevos sin contactar");
		return {
			role: "AGENT",
			newLeads,
			activeTransactions,
			activeProperties,
			qualifiedBuyers,
			pipelineValue: money(pipelineAgg._sum.acceptedPrice),
			alerts,
			pipelineByStage: pipelineChart
		};
	}
	if (role === UserRole.BUYER) {
		const profile = await prisma.buyer.findFirst({
			where: { userId },
			include: { _count: { select: {
				documents: true,
				transactions: true,
				simulations: true
			} } }
		});
		return {
			role: "BUYER",
			transactions: profile?._count.transactions ?? 0,
			documents: profile?._count.documents ?? 0,
			simulations: profile?._count.simulations ?? 0,
			buyingScore: profile?.buyingScore ?? null,
			maxBudget: profile?.maxBudget != null ? money(profile.maxBudget) : null
		};
	}
	if (role === UserRole.SELLER) {
		const profile = await prisma.seller.findFirst({
			where: { userId },
			include: {
				properties: { select: { readinessScore: true } },
				_count: { select: {
					documents: true,
					transactions: true
				} }
			}
		});
		const props = profile?.properties ?? [];
		const readinessAvg = props.length === 0 ? 0 : Math.round(props.reduce((s, p) => s + p.readinessScore, 0) / props.length);
		return {
			role: "SELLER",
			properties: props.length,
			transactions: profile?._count.transactions ?? 0,
			documents: profile?._count.documents ?? 0,
			readinessAvg
		};
	}
	return {
		role: "AGENT",
		newLeads: 0,
		activeTransactions: 0,
		activeProperties: 0,
		qualifiedBuyers: 0,
		pipelineValue: 0,
		alerts: [],
		pipelineByStage: []
	};
});
//#endregion
export { getDashboardMetrics_createServerFn_handler };
