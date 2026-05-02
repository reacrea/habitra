import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as entityPickerSearchSchema } from "./crm-picker-DGuRfYZn.js";
import { n as sellerIdPayloadSchema, r as sellerUpdateSchema, t as sellerCreateSchema } from "./seller-DgJC6LKg.js";
import { t as createServerRpc } from "./createServerRpc-BN2FKJAb.js";
import { t as requireCrmOrganization } from "./crm-session-ChoDHV0q.js";
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
function toSellerPropertySummary(row) {
	return {
		id: row.id,
		title: row.title,
		city: row.city,
		status: row.status,
		operationType: row.operationType,
		price: decimalToNumber(row.price) ?? 0
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
		take: 200,
		include: { _count: { select: { properties: true } } }
	});
	return {
		organizationId: ctx.organizationId,
		sellers: rows.map((row) => ({
			...toSellerRow(row),
			propertyCount: row._count.properties
		}))
	};
});
var listSellerOptions_createServerFn_handler = createServerRpc({
	id: "80a1ec452b6c6a7a8eeea7d440eea3a30b9c34cb168affb1c85d2d109758cda8",
	name: "listSellerOptions",
	filename: "src/server/sellers-crud.ts"
}, (opts) => listSellerOptions.__executeServer(opts));
var listSellerOptions = createServerFn({ method: "GET" }).handler(listSellerOptions_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	return { options: await prisma.seller.findMany({
		where: { organizationId: ctx.organizationId },
		select: {
			id: true,
			name: true
		},
		orderBy: { name: "asc" },
		take: 500
	}) };
});
var searchSellersForPicker_createServerFn_handler = createServerRpc({
	id: "486c9b43bdbb9ce3c397971cbc1a3b39bbe6fbd158bb17d2b357d7663554fe2b",
	name: "searchSellersForPicker",
	filename: "src/server/sellers-crud.ts"
}, (opts) => searchSellersForPicker.__executeServer(opts));
var searchSellersForPicker = createServerFn({ method: "POST" }).inputValidator((data) => entityPickerSearchSchema.parse(data)).handler(searchSellersForPicker_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const q = data.q.trim();
	if (q.length === 0) return { items: [] };
	return { items: (await prisma.seller.findMany({
		where: {
			organizationId: ctx.organizationId,
			OR: [
				{ id: {
					contains: q,
					mode: "insensitive"
				} },
				{ name: {
					contains: q,
					mode: "insensitive"
				} },
				{ email: {
					contains: q,
					mode: "insensitive"
				} }
			]
		},
		select: {
			id: true,
			name: true,
			email: true
		},
		take: 25,
		orderBy: { name: "asc" }
	})).map((r) => ({
		id: r.id,
		primary: r.name,
		secondary: [r.email, r.id].filter(Boolean).join(" · ")
	})) };
});
var getSellerWithProperties_createServerFn_handler = createServerRpc({
	id: "4881e3cebbd1025bc60ce390e259601e664590dda62c225df40507b50b1dcb2c",
	name: "getSellerWithProperties",
	filename: "src/server/sellers-crud.ts"
}, (opts) => getSellerWithProperties.__executeServer(opts));
var getSellerWithProperties = createServerFn({ method: "POST" }).inputValidator((data) => sellerIdPayloadSchema.parse(data)).handler(getSellerWithProperties_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.seller.findFirst({
		where: {
			id: data.id,
			organizationId: ctx.organizationId
		},
		include: { properties: {
			select: {
				id: true,
				title: true,
				city: true,
				status: true,
				operationType: true,
				price: true
			},
			orderBy: { updatedAt: "desc" },
			take: 200
		} }
	});
	if (!row) return null;
	const { properties: linkedProps, ...sellerRest } = row;
	const unassigned = await prisma.property.findMany({
		where: {
			organizationId: ctx.organizationId,
			sellerId: null
		},
		select: {
			id: true,
			title: true,
			city: true,
			status: true,
			operationType: true,
			price: true
		},
		orderBy: { updatedAt: "desc" },
		take: 100
	});
	return {
		seller: toSellerRow(sellerRest),
		linkedProperties: linkedProps.map(toSellerPropertySummary),
		unassignedProperties: unassigned.map(toSellerPropertySummary)
	};
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
export { createSeller_createServerFn_handler, getSellerWithProperties_createServerFn_handler, listSellerOptions_createServerFn_handler, listSellers_createServerFn_handler, searchSellersForPicker_createServerFn_handler, updateSeller_createServerFn_handler };
