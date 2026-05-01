import { n as getRequest } from "./server-DcmvO1qi.js";
import { r as createServerFn } from "../server.js";
import { t as auth } from "./better-auth-BcaB8wX6.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as parseUserRole } from "./user-role-CwScBYyP.js";
import { t as createServerRpc } from "./createServerRpc-BN2FKJAb.js";
import { t as requireCrmOrganization } from "./crm-session-DCiJQoXV.js";
//#region src/server/pricing-admin.ts?tss-serverfn-split
function toNumber(value) {
	if (value == null) return 0;
	if (typeof value === "number") return value;
	if (typeof value === "object" && value !== null && "toNumber" in value) return value.toNumber();
	return Number(value);
}
var getPricingData_createServerFn_handler = createServerRpc({
	id: "dbc2cebfbb4f3fe7517aa7b4de6f4f86895d94c002ed0d5310819f1d1893b647",
	name: "getPricingData",
	filename: "src/server/pricing-admin.ts"
}, (opts) => getPricingData.__executeServer(opts));
var getPricingData = createServerFn({ method: "GET" }).handler(getPricingData_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const [plans, subscription] = await Promise.all([prisma.plan.findMany({
		where: { isActive: true },
		orderBy: { priceMxn: "asc" }
	}), prisma.subscription.findFirst({
		where: { organizationId: ctx.organizationId },
		include: { plan: true },
		orderBy: { createdAt: "desc" }
	})]);
	return {
		plans: plans.map((p) => ({
			id: p.id,
			type: p.type,
			name: p.name,
			priceMxn: toNumber(p.priceMxn),
			billingCadence: p.billingCadence,
			minUsers: p.minUsers,
			maxUsers: p.maxUsers,
			description: p.description,
			successFeePercent: toNumber(p.successFeePercent)
		})),
		currentSubscription: subscription ? {
			id: subscription.id,
			planName: subscription.plan.name,
			seats: subscription.seats,
			status: subscription.status,
			startDate: subscription.startDate.toISOString(),
			endDate: subscription.endDate?.toISOString() ?? null,
			estimatedMonthly: toNumber(subscription.plan.priceMxn) * subscription.seats
		} : null
	};
});
var getAdminBasicData_createServerFn_handler = createServerRpc({
	id: "937855f22eef26eea84f74041b99c050c11c6267f2cf1eb19361ba17d075cefc",
	name: "getAdminBasicData",
	filename: "src/server/pricing-admin.ts"
}, (opts) => getAdminBasicData.__executeServer(opts));
var getAdminBasicData = createServerFn({ method: "GET" }).handler(getAdminBasicData_createServerFn_handler, async () => {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) throw new Response("Unauthorized", { status: 401 });
	if (parseUserRole(session.user.role) !== "ADMIN") throw new Response("Forbidden", { status: 403 });
	const [organizations, users, activeSubscriptions, activeTransactions, recentUsers] = await Promise.all([
		prisma.organization.findMany({
			orderBy: { createdAt: "desc" },
			take: 20,
			select: {
				id: true,
				name: true,
				city: true,
				state: true,
				createdAt: true
			}
		}),
		prisma.user.count(),
		prisma.subscription.count({ where: { status: "ACTIVE" } }),
		prisma.transaction.count({ where: { status: { in: [
			"ACTIVA",
			"EN_RIESGO",
			"PAUSADA"
		] } } }),
		prisma.user.findMany({
			orderBy: { createdAt: "desc" },
			take: 20,
			select: {
				id: true,
				name: true,
				email: true,
				role: true,
				isActive: true,
				createdAt: true
			}
		})
	]);
	return {
		summary: {
			organizations: organizations.length,
			users,
			activeSubscriptions,
			activeTransactions
		},
		organizations: organizations.map((o) => ({
			...o,
			createdAt: o.createdAt.toISOString()
		})),
		recentUsers: recentUsers.map((u) => ({
			...u,
			createdAt: u.createdAt.toISOString()
		}))
	};
});
//#endregion
export { getAdminBasicData_createServerFn_handler, getPricingData_createServerFn_handler };
