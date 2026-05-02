import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { i as propertyDocumentCreateSchema } from "./document-ByUETWWA.js";
import { t as entityPickerSearchSchema } from "./crm-picker-DGuRfYZn.js";
import { i as propertyUpdateSchema, n as propertyIdPayloadSchema, r as propertyImageCreateSchema, t as propertyChecklistUpdateSchema } from "./property-CPXLTy2i.js";
import { t as createServerRpc } from "./createServerRpc-BN2FKJAb.js";
import { t as requireCrmOrganization } from "./crm-session-ChoDHV0q.js";
import { DocumentStatus } from "@prisma/client";
//#region src/server/property-permissions.ts
/**
* PATCH-8: Admin y broker owner editan cualquier propiedad de la org;
* el agente solo si es el asignado en el anuncio.
*/
function canEditCrmProperty(ctx, property) {
	if (ctx.role === "ADMIN" || ctx.role === "BROKER_OWNER") return true;
	if (ctx.role === "AGENT") return property.assignedAgentId === ctx.userId;
	return false;
}
function assertCanEditCrmProperty(ctx, property) {
	if (!canEditCrmProperty(ctx, property)) throw new Response("No tienes permiso para editar esta propiedad", { status: 403 });
}
//#endregion
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
	return {
		id: row.id,
		propertyId: row.propertyId,
		url: row.url,
		alt: row.alt,
		isPrimary: row.isPrimary,
		order: row.order
	};
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
	const names = row.amenities?.map((a) => a.name) ?? [];
	return {
		id: row.id,
		organizationId: row.organizationId,
		slug: row.slug,
		title: row.title,
		description: row.description,
		fullDescription: row.fullDescription,
		propertyType: row.propertyType,
		operationType: row.operationType,
		price: decimalToNumber(row.price) ?? 0,
		currency: row.currency,
		address: row.address,
		city: row.city,
		state: row.state,
		neighborhood: row.neighborhood,
		postalCode: row.postalCode,
		bedrooms: row.bedrooms,
		bathrooms: row.bathrooms,
		parkingSpaces: row.parkingSpaces,
		landArea: decimalToNumber(row.landArea ?? null),
		constructionArea: decimalToNumber(row.constructionArea ?? null),
		amenities: [...names].sort((a, b) => a.localeCompare(b, "es")),
		status: row.status,
		sellerId: row.sellerId,
		assignedAgentId: row.assignedAgentId,
		readinessScore: row.readinessScore,
		risks: row.risks,
		images: row.images,
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
		include: {
			images: { orderBy: { order: "asc" } },
			amenities: { select: { name: true } }
		},
		orderBy: { createdAt: "desc" },
		take: 200
	})).map((row) => mapProperty({
		...row,
		currency: row.currency,
		images: row.images.map(mapImage),
		amenities: row.amenities
	})) };
});
var searchPropertiesForPicker_createServerFn_handler = createServerRpc({
	id: "0ff1d73703e792e89f539cf5b65c04309a7572d42ef4e2c536d424c18c764e65",
	name: "searchPropertiesForPicker",
	filename: "src/server/properties-crud.ts"
}, (opts) => searchPropertiesForPicker.__executeServer(opts));
var searchPropertiesForPicker = createServerFn({ method: "POST" }).inputValidator((data) => entityPickerSearchSchema.parse(data)).handler(searchPropertiesForPicker_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const q = data.q.trim();
	if (q.length === 0) return { items: [] };
	return { items: (await prisma.property.findMany({
		where: {
			organizationId: ctx.organizationId,
			OR: [
				{ id: {
					contains: q,
					mode: "insensitive"
				} },
				{ title: {
					contains: q,
					mode: "insensitive"
				} },
				{ slug: {
					contains: q,
					mode: "insensitive"
				} },
				{ city: {
					contains: q,
					mode: "insensitive"
				} }
			]
		},
		select: {
			id: true,
			title: true,
			city: true
		},
		take: 25,
		orderBy: { updatedAt: "desc" }
	})).map((r) => ({
		id: r.id,
		primary: r.title,
		secondary: `${r.city} · ${r.id}`
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
			},
			amenities: { select: { name: true } },
			assignedAgent: { select: { name: true } },
			seller: { select: { name: true } }
		}
	});
	if (!row) return null;
	const property = mapProperty({
		...row,
		currency: row.currency,
		images: row.images.map(mapImage),
		amenities: row.amenities
	});
	const documents = row.documents.map(mapDocument);
	return {
		property,
		checklist: checklistFromProperty(row, row.images.length, row.documents.length),
		documents,
		canEditProperty: canEditCrmProperty(ctx, row),
		assignedAgentName: row.assignedAgent?.name ?? null,
		sellerName: row.seller?.name ?? null
	};
});
var updateProperty_createServerFn_handler = createServerRpc({
	id: "33c20999285b191f9c2ddeb0b1f432146e64e667080910535e975b9b0eb5cd7d",
	name: "updateProperty",
	filename: "src/server/properties-crud.ts"
}, (opts) => updateProperty.__executeServer(opts));
var updateProperty = createServerFn({ method: "POST" }).inputValidator((data) => propertyUpdateSchema.parse(data)).handler(updateProperty_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const found = await prisma.property.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} });
	if (!found) throw new Response("Propiedad no encontrada", { status: 404 });
	assertCanEditCrmProperty(ctx, found);
	if (data.sellerId) {
		if (!await prisma.seller.findFirst({
			where: {
				id: data.sellerId,
				organizationId: ctx.organizationId
			},
			select: { id: true }
		})) throw new Response("Vendedor no encontrado en esta organizacion", { status: 400 });
	}
	return prisma.$transaction(async (tx) => {
		if (data.amenityNames !== void 0) {
			await tx.propertyAmenity.deleteMany({ where: { propertyId: data.id } });
			const unique = [...new Set(data.amenityNames.map((n) => n.trim()).filter((n) => n.length > 0))];
			if (unique.length > 0) await tx.propertyAmenity.createMany({
				data: unique.map((name) => ({
					propertyId: data.id,
					name
				})),
				skipDuplicates: true
			});
		}
		const updated = await tx.property.update({
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
				...data.parkingSpaces !== void 0 ? { parkingSpaces: data.parkingSpaces } : {},
				...data.landArea !== void 0 ? { landArea: data.landArea } : {},
				...data.constructionArea !== void 0 ? { constructionArea: data.constructionArea } : {},
				...data.sellerId !== void 0 ? { sellerId: data.sellerId } : {}
			},
			include: {
				images: { orderBy: { order: "asc" } },
				amenities: { select: { name: true } }
			}
		});
		return mapProperty({
			...updated,
			currency: updated.currency,
			images: updated.images.map(mapImage),
			amenities: updated.amenities
		});
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
	assertCanEditCrmProperty(ctx, row);
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
	assertCanEditCrmProperty(ctx, property);
	const url = data.mode === "MOCK" ? `https://picsum.photos/seed/habitra-${Date.now()}/1200/800` : data.url ?? "";
	return mapImage(await prisma.propertyImage.create({ data: {
		propertyId: property.id,
		url,
		alt: data.alt ?? null,
		isPrimary: property.images.length === 0,
		order: property.images.length
	} }));
});
var createPropertyDocument_createServerFn_handler = createServerRpc({
	id: "70cbec16f14fdbba39dabb4441dc84ee05151b6808e2fddfbf81dce76772427d",
	name: "createPropertyDocument",
	filename: "src/server/properties-crud.ts"
}, (opts) => createPropertyDocument.__executeServer(opts));
var createPropertyDocument = createServerFn({ method: "POST" }).inputValidator((data) => propertyDocumentCreateSchema.parse(data)).handler(createPropertyDocument_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const property = await prisma.property.findFirst({
		where: {
			id: data.propertyId,
			organizationId: ctx.organizationId
		},
		select: {
			id: true,
			assignedAgentId: true
		}
	});
	if (!property) throw new Response("Propiedad no encontrada", { status: 404 });
	assertCanEditCrmProperty(ctx, property);
	return mapDocument(await prisma.document.create({ data: {
		organizationId: ctx.organizationId,
		type: data.type,
		status: data.status ?? DocumentStatus.PENDIENTE,
		title: data.title,
		description: data.description ?? null,
		fileName: data.fileName ?? null,
		fileUrl: data.fileUrl,
		propertyId: property.id,
		uploadedByUserId: ctx.userId
	} }));
});
//#endregion
export { addPropertyImage_createServerFn_handler, createPropertyDocument_createServerFn_handler, getPropertyDetail_createServerFn_handler, listProperties_createServerFn_handler, searchPropertiesForPicker_createServerFn_handler, updatePropertyChecklist_createServerFn_handler, updateProperty_createServerFn_handler };
