import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { n as sellerIdPayloadSchema, r as sellerUpdateSchema, t as sellerCreateSchema } from "./seller-zONALpge.js";
import { t as createServerRpc } from "./createServerRpc-CdoWqxdu.js";
import { t as requireCrmOrganization } from "./crm-session-rkUrL6Rc.js";
//#region src/server/sellers-crud.ts?tss-serverfn-split
function decimalToNumber(value) {
	if (value === null || value === void 0) return null;
	if (typeof value === "number") return value;
	if (typeof value === "object" && value !== null && "toNumber" in value) return value.toNumber();
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}
function toSellerRow(row) {
	return {
		id: row.id,
		organizationId: row.organizationId,
		userId: row.userId,
		sourceLeadId: row.sourceLeadId,
		name: row.name,
		email: row.email,
		phone: row.phone,
		urgency: row.urgency,
		expectedPrice: decimalToNumber(row.expectedPrice),
		sellingReason: row.sellingReason,
		assignedAgentId: row.assignedAgentId,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
var listSellers_createServerFn_handler = createServerRpc({
	id: "3469f877d7055ecf9ceec4282d96a8dde629170127705f44aa63d7030553c650",
	name: "listSellers",
	filename: "src/server/sellers-crud.ts"
}, (opts) => listSellers.__executeServer(opts));
var listSellers = createServerFn({ method: "GET" }).handler(listSellers_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const rows = await prisma.seller.findMany({
		where: { organizationId: ctx.organizationId },
		orderBy: { createdAt: "desc" },
		take: 200
	});
	return {
		organizationId: ctx.organizationId,
		sellers: rows.map(toSellerRow)
	};
});
var getSellerById_createServerFn_handler = createServerRpc({
	id: "7c118fa3faa78432195d37ce6bb939d63ae1c840513f9bd3d787b9b7d6cd2229",
	name: "getSellerById",
	filename: "src/server/sellers-crud.ts"
}, (opts) => getSellerById.__executeServer(opts));
var getSellerById = createServerFn({ method: "POST" }).inputValidator((data) => sellerIdPayloadSchema.parse(data)).handler(getSellerById_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.seller.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} });
	return row ? toSellerRow(row) : null;
});
var createSeller_createServerFn_handler = createServerRpc({
	id: "05da3d02fdf6162abc21e4be545554878d63902c3875f38ac6b44c94c114126e",
	name: "createSeller",
	filename: "src/server/sellers-crud.ts"
}, (opts) => createSeller.__executeServer(opts));
var createSeller = createServerFn({ method: "POST" }).inputValidator((data) => sellerCreateSchema.parse(data)).handler(createSeller_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const assignedAgentId = ctx.role === "AGENT" ? ctx.userId : null;
	return toSellerRow(await prisma.seller.create({ data: {
		organizationId: ctx.organizationId,
		name: data.name,
		email: data.email ?? null,
		phone: data.phone ?? null,
		urgency: data.urgency ?? null,
		expectedPrice: data.expectedPrice ?? null,
		sellingReason: data.sellingReason ?? null,
		assignedAgentId
	} }));
});
var updateSeller_createServerFn_handler = createServerRpc({
	id: "4c167f198e2fc3d046cce1bb567ef6113e3fec12b8ec414bbe73cdf672b4eb64",
	name: "updateSeller",
	filename: "src/server/sellers-crud.ts"
}, (opts) => updateSeller.__executeServer(opts));
var updateSeller = createServerFn({ method: "POST" }).inputValidator((data) => sellerUpdateSchema.parse(data)).handler(updateSeller_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	if (!await prisma.seller.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} })) throw new Response("Vendedor no encontrado", { status: 404 });
	const patch = {
		...data.name !== void 0 ? { name: data.name } : {},
		...data.email !== void 0 ? { email: data.email } : {},
		...data.phone !== void 0 ? { phone: data.phone } : {},
		...data.urgency !== void 0 ? { urgency: data.urgency } : {},
		...data.expectedPrice !== void 0 ? { expectedPrice: data.expectedPrice } : {},
		...data.sellingReason !== void 0 ? { sellingReason: data.sellingReason } : {}
	};
	return toSellerRow(await prisma.seller.update({
		where: { id: data.id },
		data: patch
	}));
});
//#endregion
export { createSeller_createServerFn_handler, getSellerById_createServerFn_handler, listSellers_createServerFn_handler, updateSeller_createServerFn_handler };
