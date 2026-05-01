import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as createServerRpc } from "./createServerRpc-Cr4-9oPI.js";
import { t as requireCrmOrganization } from "./crm-session-DGiyKi_N.js";
//#region src/server/reports-data.ts?tss-serverfn-split
var getReportsData_createServerFn_handler = createServerRpc({
	id: "c7fbf06e5cb79b7cb65cd4e096ea781f84cecfb92d6aae8dca822103eef2e49a",
	name: "getReportsData",
	filename: "src/server/reports-data.ts"
}, (opts) => getReportsData.__executeServer(opts));
var getReportsData = createServerFn({ method: "GET" }).handler(getReportsData_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const [leadRows, transactionRows, propertyRows, closingRows] = await Promise.all([
		prisma.lead.groupBy({
			by: ["status"],
			where: { organizationId: ctx.organizationId },
			_count: { _all: true }
		}),
		prisma.transaction.groupBy({
			by: ["currentStage"],
			where: { organizationId: ctx.organizationId },
			_count: { _all: true }
		}),
		prisma.property.groupBy({
			by: ["status"],
			where: { organizationId: ctx.organizationId },
			_count: { _all: true }
		}),
		prisma.transaction.findMany({
			where: { organizationId: ctx.organizationId },
			select: {
				createdAt: true,
				status: true
			},
			orderBy: { createdAt: "asc" }
		})
	]);
	const monthly = /* @__PURE__ */ new Map();
	for (const row of closingRows) {
		if (row.status !== "CERRADA") continue;
		const key = `${row.createdAt.getFullYear()}-${String(row.createdAt.getMonth() + 1).padStart(2, "0")}`;
		monthly.set(key, (monthly.get(key) ?? 0) + 1);
	}
	return {
		leadsByStatus: leadRows.map((r) => ({
			key: r.status,
			value: r._count._all
		})),
		transactionsByStage: transactionRows.map((r) => ({
			key: r.currentStage,
			value: r._count._all
		})),
		propertiesByStatus: propertyRows.map((r) => ({
			key: r.status,
			value: r._count._all
		})),
		closingsByMonth: Array.from(monthly.entries()).map(([key, value]) => ({
			key,
			value
		}))
	};
});
//#endregion
export { getReportsData_createServerFn_handler };
