import { r as createServerFn } from "../server.js";
import { r as prisma } from "./better-auth-D17gZsHD.js";
import { n as buyerIdPayloadSchema, r as buyerUpdateSchema, t as buyerCreateSchema } from "./buyer-BuWq98Na.js";
import { t as createServerRpc } from "./createServerRpc-BxGQ24MT.js";
import { t as requireCrmOrganization } from "./crm-session-B_zWT7X1.js";
import { CreditType } from "@prisma/client";
//#region src/server/buyers-crud.ts?tss-serverfn-split
function decimalToNumber(value) {
	if (value === null || value === void 0) return null;
	if (typeof value === "number") return value;
	if (typeof value === "object" && value !== null && "toNumber" in value) return value.toNumber();
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}
function toBuyerRow(row) {
	return {
		id: row.id,
		organizationId: row.organizationId,
		userId: row.userId,
		sourceLeadId: row.sourceLeadId,
		name: row.name,
		email: row.email,
		phone: row.phone,
		maxBudget: decimalToNumber(row.maxBudget),
		downPayment: decimalToNumber(row.downPayment),
		monthlyIncome: decimalToNumber(row.monthlyIncome),
		creditType: row.creditType,
		desiredZone: row.desiredZone,
		desiredPropertyType: row.desiredPropertyType,
		bedrooms: row.bedrooms,
		bathrooms: row.bathrooms,
		urgency: row.urgency,
		buyingScore: row.buyingScore,
		assignedAgentId: row.assignedAgentId,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
var listBuyers_createServerFn_handler = createServerRpc({
	id: "2acbfcf6ed50e4b346efe2e358363f3f171e1ead3b19cdf1169c634927fc1134",
	name: "listBuyers",
	filename: "src/server/buyers-crud.ts"
}, (opts) => listBuyers.__executeServer(opts));
var listBuyers = createServerFn({ method: "GET" }).handler(listBuyers_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const rows = await prisma.buyer.findMany({
		where: { organizationId: ctx.organizationId },
		orderBy: { createdAt: "desc" },
		take: 200
	});
	return {
		organizationId: ctx.organizationId,
		buyers: rows.map(toBuyerRow)
	};
});
var getBuyerById_createServerFn_handler = createServerRpc({
	id: "b33611eb61d6ab83ace351250bd6ebd372ba59abdeac03e4a161fb4e20e52a58",
	name: "getBuyerById",
	filename: "src/server/buyers-crud.ts"
}, (opts) => getBuyerById.__executeServer(opts));
var getBuyerById = createServerFn({ method: "POST" }).inputValidator((data) => buyerIdPayloadSchema.parse(data)).handler(getBuyerById_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.buyer.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} });
	return row ? toBuyerRow(row) : null;
});
var createBuyer_createServerFn_handler = createServerRpc({
	id: "1d1aa721a3c1b87b28e38926402bbc33d68ba4d944d25bafe00a06aa1ee4771d",
	name: "createBuyer",
	filename: "src/server/buyers-crud.ts"
}, (opts) => createBuyer.__executeServer(opts));
var createBuyer = createServerFn({ method: "POST" }).inputValidator((data) => buyerCreateSchema.parse(data)).handler(createBuyer_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const assignedAgentId = ctx.role === "AGENT" ? ctx.userId : null;
	return toBuyerRow(await prisma.buyer.create({ data: {
		organizationId: ctx.organizationId,
		name: data.name,
		email: data.email ?? null,
		phone: data.phone ?? null,
		maxBudget: data.maxBudget ?? null,
		downPayment: data.downPayment ?? null,
		monthlyIncome: data.monthlyIncome ?? null,
		creditType: data.creditType ?? CreditType.BANCARIO,
		desiredZone: data.desiredZone ?? null,
		desiredPropertyType: data.desiredPropertyType ?? null,
		bedrooms: data.bedrooms ?? null,
		bathrooms: data.bathrooms ?? null,
		urgency: data.urgency ?? null,
		buyingScore: data.buyingScore ?? null,
		assignedAgentId
	} }));
});
var updateBuyer_createServerFn_handler = createServerRpc({
	id: "f529dfac7ea07eaee4a2b9834bdf1b989722926ca0c945202bb7a7f1a2d4e07d",
	name: "updateBuyer",
	filename: "src/server/buyers-crud.ts"
}, (opts) => updateBuyer.__executeServer(opts));
var updateBuyer = createServerFn({ method: "POST" }).inputValidator((data) => buyerUpdateSchema.parse(data)).handler(updateBuyer_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	if (!await prisma.buyer.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} })) throw new Response("Comprador no encontrado", { status: 404 });
	const patch = {
		...data.name !== void 0 ? { name: data.name } : {},
		...data.email !== void 0 ? { email: data.email } : {},
		...data.phone !== void 0 ? { phone: data.phone } : {},
		...data.maxBudget !== void 0 ? { maxBudget: data.maxBudget } : {},
		...data.downPayment !== void 0 ? { downPayment: data.downPayment } : {},
		...data.monthlyIncome !== void 0 ? { monthlyIncome: data.monthlyIncome } : {},
		...data.creditType !== void 0 ? { creditType: data.creditType } : {},
		...data.desiredZone !== void 0 ? { desiredZone: data.desiredZone } : {},
		...data.desiredPropertyType !== void 0 ? { desiredPropertyType: data.desiredPropertyType } : {},
		...data.bedrooms !== void 0 ? { bedrooms: data.bedrooms } : {},
		...data.bathrooms !== void 0 ? { bathrooms: data.bathrooms } : {},
		...data.urgency !== void 0 ? { urgency: data.urgency } : {},
		...data.buyingScore !== void 0 ? { buyingScore: data.buyingScore } : {}
	};
	return toBuyerRow(await prisma.buyer.update({
		where: { id: data.id },
		data: patch
	}));
});
//#endregion
export { createBuyer_createServerFn_handler, getBuyerById_createServerFn_handler, listBuyers_createServerFn_handler, updateBuyer_createServerFn_handler };
