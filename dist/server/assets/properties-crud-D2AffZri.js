import { r as createServerFn } from "../server.js";
import { r as prisma } from "./better-auth-D17gZsHD.js";
import { i as propertyUpdateSchema, n as propertyIdPayloadSchema, r as propertyImageCreateSchema, t as propertyChecklistUpdateSchema } from "./property-DpnGUiKo.js";
import { t as createServerRpc } from "./createServerRpc-mCF48Le0.js";
import { t as requireCrmOrganization } from "./crm-session-CCFmRB67.js";
//#region src/server/properties-crud.ts?tss-serverfn-split
var CHECKLIST_ITEMS = [
	{
		id: "price",
		label: "Precio definido"
	},
	{
		id: "location",
		label: "Direccion completa"
	},
	{
		id: "description",
		label: "Descripcion detallada"
	},
	{
		id: "seller",
		label: "Vendedor asignado"
	},
	{
		id: "images",
		label: "Al menos una imagen"
	},
	{
		id: "documents",
		label: "Al menos un documento"
	}
];
function decimalToNumber(value) {
	if (value === null || value === void 0) return null;
	if (typeof value === "number") return value;
	if (typeof value === "object" && value !== null && "toNumber" in value) return value.toNumber();
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}
function mapImage(row) {
	return row;
}
function mapDocument(row) {
	return {
		...row,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
function checklistFromProperty(property, imageCount, documentCount) {
	const base = /* @__PURE__ */ new Set();
	if ((decimalToNumber(property.price) ?? 0) > 0) base.add("price");
	if (property.address && property.city && property.state) base.add("location");
	if ((property.fullDescription ?? property.description).trim().length >= 30) base.add("description");
	if (property.sellerId) base.add("seller");
	if (imageCount > 0) base.add("images");
	if (documentCount > 0) base.add("documents");
	for (const risk of property.risks) {
		if (risk.startsWith("CHECKLIST_DONE:")) base.add(risk.replace("CHECKLIST_DONE:", ""));
		if (risk.startsWith("CHECKLIST_MISSING:")) base.delete(risk.replace("CHECKLIST_MISSING:", ""));
	}
	return CHECKLIST_ITEMS.map((item) => ({
		id: item.id,
		label: item.label,
		checked: base.has(item.id)
	}));
}
function mapProperty(row) {
	return {
		...row,
		price: decimalToNumber(row.price) ?? 0,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
var listProperties_createServerFn_handler = createServerRpc({
	id: "3da34a1b7e81612f50224260633be5ea5241a81a6f880c0b8d0bfe9334191345",
	name: "listProperties",
	filename: "src/server/properties-crud.ts"
}, (opts) => listProperties.__executeServer(opts));
var listProperties = createServerFn({ method: "GET" }).handler(listProperties_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	return { properties: (await prisma.property.findMany({
		where: { organizationId: ctx.organizationId },
		include: { images: { orderBy: { order: "asc" } } },
		orderBy: { createdAt: "desc" },
		take: 200
	})).map((row) => mapProperty({
		...row,
		currency: row.currency,
		images: row.images.map(mapImage)
	})) };
});
var getPropertyDetail_createServerFn_handler = createServerRpc({
	id: "58f82a1fdf9017ce837cdb459358b7ba501caa8c1f078ac40ea0c9d33abfb98b",
	name: "getPropertyDetail",
	filename: "src/server/properties-crud.ts"
}, (opts) => getPropertyDetail.__executeServer(opts));
var getPropertyDetail = createServerFn({ method: "POST" }).inputValidator((data) => propertyIdPayloadSchema.parse(data)).handler(getPropertyDetail_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.property.findFirst({
		where: {
			id: data.id,
			organizationId: ctx.organizationId
		},
		include: {
			images: { orderBy: { order: "asc" } },
			documents: {
				orderBy: { createdAt: "desc" },
				take: 50
			}
		}
	});
	if (!row) return null;
	const property = mapProperty({
		...row,
		currency: row.currency,
		images: row.images.map(mapImage)
	});
	const documents = row.documents.map(mapDocument);
	return {
		property,
		checklist: checklistFromProperty(row, row.images.length, row.documents.length),
		documents
	};
});
var updateProperty_createServerFn_handler = createServerRpc({
	id: "33c20999285b191f9c2ddeb0b1f432146e64e667080910535e975b9b0eb5cd7d",
	name: "updateProperty",
	filename: "src/server/properties-crud.ts"
}, (opts) => updateProperty.__executeServer(opts));
var updateProperty = createServerFn({ method: "POST" }).inputValidator((data) => propertyUpdateSchema.parse(data)).handler(updateProperty_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	if (!await prisma.property.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} })) throw new Response("Propiedad no encontrada", { status: 404 });
	const updated = await prisma.property.update({
		where: { id: data.id },
		data: {
			...data.title !== void 0 ? { title: data.title } : {},
			...data.description !== void 0 ? { description: data.description } : {},
			...data.fullDescription !== void 0 ? { fullDescription: data.fullDescription } : {},
			...data.propertyType !== void 0 ? { propertyType: data.propertyType } : {},
			...data.operationType !== void 0 ? { operationType: data.operationType } : {},
			...data.status !== void 0 ? { status: data.status } : {},
			...data.price !== void 0 ? { price: data.price } : {},
			...data.address !== void 0 ? { address: data.address } : {},
			...data.city !== void 0 ? { city: data.city } : {},
			...data.state !== void 0 ? { state: data.state } : {},
			...data.neighborhood !== void 0 ? { neighborhood: data.neighborhood } : {},
			...data.postalCode !== void 0 ? { postalCode: data.postalCode } : {},
			...data.bedrooms !== void 0 ? { bedrooms: data.bedrooms } : {},
			...data.bathrooms !== void 0 ? { bathrooms: data.bathrooms } : {},
			...data.parkingSpaces !== void 0 ? { parkingSpaces: data.parkingSpaces } : {}
		},
		include: { images: { orderBy: { order: "asc" } } }
	});
	return mapProperty({
		...updated,
		currency: updated.currency,
		images: updated.images.map(mapImage)
	});
});
var updatePropertyChecklist_createServerFn_handler = createServerRpc({
	id: "f6a8e645b5f969cfb5b547ff343e80648cda798b9b379452bc61c9c9b18bafb5",
	name: "updatePropertyChecklist",
	filename: "src/server/properties-crud.ts"
}, (opts) => updatePropertyChecklist.__executeServer(opts));
var updatePropertyChecklist = createServerFn({ method: "POST" }).inputValidator((data) => propertyChecklistUpdateSchema.parse(data)).handler(updatePropertyChecklist_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.property.findFirst({
		where: {
			id: data.propertyId,
			organizationId: ctx.organizationId
		},
		include: {
			images: true,
			documents: { take: 1 }
		}
	});
	if (!row) throw new Response("Propiedad no encontrada", { status: 404 });
	const nonChecklistRisks = row.risks.filter((risk) => !risk.startsWith("CHECKLIST_"));
	const checklist = CHECKLIST_ITEMS.map((item) => ({
		id: item.id,
		label: item.label,
		checked: data.checkedIds.includes(item.id)
	}));
	const checklistRisks = checklist.filter((item) => !item.checked).map((item) => `CHECKLIST_MISSING:${item.id}`);
	const score = Math.round(checklist.filter((x) => x.checked).length / checklist.length * 100);
	await prisma.property.update({
		where: { id: row.id },
		data: {
			readinessScore: score,
			risks: [...nonChecklistRisks, ...checklistRisks]
		}
	});
	return {
		readinessScore: score,
		checklist
	};
});
var addPropertyImage_createServerFn_handler = createServerRpc({
	id: "f8c4be80127ff912b4879e204b7a4eb143c739058a7bec7d96945b3bcba71352",
	name: "addPropertyImage",
	filename: "src/server/properties-crud.ts"
}, (opts) => addPropertyImage.__executeServer(opts));
var addPropertyImage = createServerFn({ method: "POST" }).inputValidator((data) => propertyImageCreateSchema.parse(data)).handler(addPropertyImage_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const property = await prisma.property.findFirst({
		where: {
			id: data.propertyId,
			organizationId: ctx.organizationId
		},
		include: { images: true }
	});
	if (!property) throw new Response("Propiedad no encontrada", { status: 404 });
	const url = data.mode === "MOCK" ? `https://picsum.photos/seed/habitra-${Date.now()}/1200/800` : data.url ?? "";
	return mapImage(await prisma.propertyImage.create({ data: {
		propertyId: property.id,
		url,
		alt: data.alt ?? null,
		isPrimary: property.images.length === 0,
		order: property.images.length
	} }));
});
//#endregion
export { addPropertyImage_createServerFn_handler, getPropertyDetail_createServerFn_handler, listProperties_createServerFn_handler, updatePropertyChecklist_createServerFn_handler, updateProperty_createServerFn_handler };
