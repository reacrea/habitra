import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as createServerRpc } from "./createServerRpc-BN2FKJAb.js";
import { z } from "zod";
import { PropertyType } from "@prisma/client";
//#region src/server/public-b2c.ts?tss-serverfn-split
var publicListingsInput = z.object({
	operationType: z.enum(["VENTA", "RENTA"]).optional(),
	city: z.string().trim().min(1).optional(),
	propertyType: z.nativeEnum(PropertyType).optional(),
	minPrice: z.number().positive().optional(),
	maxPrice: z.number().positive().optional(),
	bedrooms: z.number().int().min(0).optional(),
	bathrooms: z.number().int().min(0).optional(),
	sort: z.enum([
		"relevance",
		"price_asc",
		"price_desc",
		"recent",
		"readiness_desc"
	]).optional(),
	limit: z.number().int().min(1).max(60).optional()
});
var publicPropertySlugInput = z.object({ slug: z.string().trim().min(1) });
function toNumber(value) {
	if (typeof value === "number") return value;
	if (value && typeof value === "object" && "toNumber" in value) return value.toNumber();
	return Number(value ?? 0);
}
var getPublicHomeData_createServerFn_handler = createServerRpc({
	id: "a870149fbe3efcb39f82f6b00ae1bc71e3c292a40f7884c0420a07c23059e41b",
	name: "getPublicHomeData",
	filename: "src/server/public-b2c.ts"
}, (opts) => getPublicHomeData.__executeServer(opts));
var getPublicHomeData = createServerFn({ method: "GET" }).handler(getPublicHomeData_createServerFn_handler, async () => {
	const [featuredSaleRows, featuredRentRows, cityRows] = await Promise.all([
		prisma.property.findMany({
			where: {
				status: "PUBLICADA",
				operationType: "VENTA"
			},
			include: {
				images: {
					orderBy: { order: "asc" },
					take: 1
				},
				organization: { select: { name: true } }
			},
			orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
			take: 8
		}),
		prisma.property.findMany({
			where: {
				status: "PUBLICADA",
				operationType: "RENTA"
			},
			include: {
				images: {
					orderBy: { order: "asc" },
					take: 1
				},
				organization: { select: { name: true } }
			},
			orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
			take: 8
		}),
		prisma.property.groupBy({
			by: ["city"],
			where: { status: "PUBLICADA" },
			_count: { _all: true }
		})
	]);
	const mapRow = (row) => ({
		id: row.id,
		slug: row.slug,
		title: row.title,
		operationType: row.operationType,
		propertyType: row.propertyType,
		price: toNumber(row.price),
		city: row.city,
		neighborhood: row.neighborhood,
		bedrooms: row.bedrooms,
		bathrooms: row.bathrooms,
		parkingSpaces: row.parkingSpaces,
		readinessScore: row.readinessScore,
		imageUrl: row.images[0]?.url ?? null,
		organizationName: row.organization.name
	});
	return {
		featuredSale: featuredSaleRows.map(mapRow),
		featuredRent: featuredRentRows.map(mapRow),
		cities: cityRows.map((row) => ({
			city: row.city,
			total: row._count._all
		})).sort((a, b) => b.total - a.total).slice(0, 10)
	};
});
var getPublicListings_createServerFn_handler = createServerRpc({
	id: "c63035c9133b3fccc81a1b55c50f66ccb7287e5efb92f671368b80d61ca8f5b6",
	name: "getPublicListings",
	filename: "src/server/public-b2c.ts"
}, (opts) => getPublicListings.__executeServer(opts));
var getPublicListings = createServerFn({ method: "POST" }).inputValidator((data) => publicListingsInput.parse(data)).handler(getPublicListings_createServerFn_handler, async ({ data }) => {
	const orderBy = data.sort === "price_asc" ? [{ price: "asc" }] : data.sort === "price_desc" ? [{ price: "desc" }] : data.sort === "recent" ? [{ createdAt: "desc" }] : data.sort === "readiness_desc" ? [{ readinessScore: "desc" }] : [{ readinessScore: "desc" }, { createdAt: "desc" }];
	return { properties: (await prisma.property.findMany({
		where: {
			status: "PUBLICADA",
			...data.operationType ? { operationType: data.operationType } : {},
			...data.city ? { OR: [{ city: {
				contains: data.city,
				mode: "insensitive"
			} }, { neighborhood: {
				contains: data.city,
				mode: "insensitive"
			} }] } : {},
			...data.propertyType ? { propertyType: data.propertyType } : {},
			...data.minPrice || data.maxPrice ? { price: {
				...data.minPrice ? { gte: data.minPrice } : {},
				...data.maxPrice ? { lte: data.maxPrice } : {}
			} } : {},
			...data.bedrooms !== void 0 ? { bedrooms: { gte: data.bedrooms } } : {},
			...data.bathrooms !== void 0 ? { bathrooms: { gte: data.bathrooms } } : {}
		},
		include: {
			images: {
				orderBy: { order: "asc" },
				take: 1
			},
			organization: { select: { name: true } }
		},
		orderBy,
		take: data.limit ?? 24
	})).map((row) => ({
		id: row.id,
		slug: row.slug,
		title: row.title,
		operationType: row.operationType,
		propertyType: row.propertyType,
		price: toNumber(row.price),
		city: row.city,
		neighborhood: row.neighborhood,
		bedrooms: row.bedrooms,
		bathrooms: row.bathrooms,
		parkingSpaces: row.parkingSpaces,
		readinessScore: row.readinessScore,
		imageUrl: row.images[0]?.url ?? null,
		organizationName: row.organization.name
	})) };
});
function isDocumentAvailable(status) {
	return status === "CARGADO" || status === "EN_REVISION" || status === "APROBADO";
}
var getPublicPropertyBySlug_createServerFn_handler = createServerRpc({
	id: "6e61e18b31d382298d80cf632c5b8b62ae5f4c0c36ada03d627817e80b81b9eb",
	name: "getPublicPropertyBySlug",
	filename: "src/server/public-b2c.ts"
}, (opts) => getPublicPropertyBySlug.__executeServer(opts));
var getPublicPropertyBySlug = createServerFn({ method: "POST" }).inputValidator((data) => publicPropertySlugInput.parse(data)).handler(getPublicPropertyBySlug_createServerFn_handler, async ({ data }) => {
	const row = await prisma.property.findFirst({
		where: {
			slug: data.slug,
			status: "PUBLICADA"
		},
		include: {
			images: { orderBy: { order: "asc" } },
			organization: { select: { name: true } },
			assignedAgent: { select: {
				id: true,
				name: true,
				email: true,
				phone: true,
				image: true
			} },
			documents: {
				where: { type: { in: [
					"ESCRITURA",
					"PREDIAL",
					"AGUA",
					"LIBERTAD_GRAVAMEN"
				] } },
				select: {
					type: true,
					status: true
				}
			}
		}
	});
	if (!row) return null;
	const clarity = [
		"ESCRITURA",
		"PREDIAL",
		"AGUA",
		"LIBERTAD_GRAVAMEN"
	].map((type) => {
		const doc = row.documents.find((d) => d.type === type);
		return {
			type,
			available: doc ? isDocumentAvailable(doc.status) : false
		};
	});
	const documentClarityScore = Math.round(clarity.filter((x) => x.available).length / clarity.length * 100);
	return {
		property: {
			id: row.id,
			slug: row.slug,
			title: row.title,
			operationType: row.operationType,
			propertyType: row.propertyType,
			price: toNumber(row.price),
			city: row.city,
			neighborhood: row.neighborhood,
			bedrooms: row.bedrooms,
			bathrooms: row.bathrooms,
			parkingSpaces: row.parkingSpaces,
			readinessScore: row.readinessScore,
			imageUrl: row.images[0]?.url ?? null,
			organizationName: row.organization.name,
			description: row.description,
			fullDescription: row.fullDescription,
			address: row.address,
			state: row.state,
			postalCode: row.postalCode,
			risks: row.risks,
			images: row.images.map((img) => ({
				id: img.id,
				url: img.url,
				alt: img.alt,
				isPrimary: img.isPrimary
			})),
			landArea: toNumber(row.landArea) || null,
			constructionArea: toNumber(row.constructionArea) || null,
			age: row.age,
			documentClarityScore,
			documentClarity: clarity,
			agent: {
				id: row.assignedAgent?.id ?? null,
				name: row.assignedAgent?.name ?? "Equipo Habitra",
				email: row.assignedAgent?.email ?? null,
				phone: row.assignedAgent?.phone ?? null,
				image: row.assignedAgent?.image ?? null,
				organizationName: row.organization.name
			}
		},
		estimatedTimeline: [
			{
				id: "contact",
				title: "Contacto inicial",
				description: "24-48 horas"
			},
			{
				id: "visit",
				title: "Visita y validacion",
				description: "2-5 dias"
			},
			{
				id: "offer",
				title: "Oferta y negociacion",
				description: "3-10 dias"
			},
			{
				id: "credit",
				title: "Credito o validacion de pago",
				description: "2-6 semanas"
			},
			{
				id: "notary",
				title: "Notaria y firma",
				description: "1-3 semanas"
			},
			{
				id: "handover",
				title: "Entrega",
				description: "Cierre final"
			}
		]
	};
});
var getPublicSimilarProperties_createServerFn_handler = createServerRpc({
	id: "4de9b7e8e90a6e9d34b30a75b3ff9da0bf696e649554efbb7c5e482c4ac6faaa",
	name: "getPublicSimilarProperties",
	filename: "src/server/public-b2c.ts"
}, (opts) => getPublicSimilarProperties.__executeServer(opts));
var getPublicSimilarProperties = createServerFn({ method: "POST" }).inputValidator((data) => publicPropertySlugInput.parse(data)).handler(getPublicSimilarProperties_createServerFn_handler, async ({ data }) => {
	const source = await prisma.property.findFirst({
		where: {
			slug: data.slug,
			status: "PUBLICADA"
		},
		select: {
			id: true,
			city: true,
			propertyType: true,
			operationType: true
		}
	});
	if (!source) return { similar: [] };
	return { similar: (await prisma.property.findMany({
		where: {
			status: "PUBLICADA",
			id: { not: source.id },
			city: source.city,
			propertyType: source.propertyType,
			operationType: source.operationType
		},
		include: {
			images: {
				orderBy: { order: "asc" },
				take: 1
			},
			organization: { select: { name: true } }
		},
		orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
		take: 6
	})).map((row) => ({
		id: row.id,
		slug: row.slug,
		title: row.title,
		operationType: row.operationType,
		propertyType: row.propertyType,
		price: toNumber(row.price),
		city: row.city,
		neighborhood: row.neighborhood,
		bedrooms: row.bedrooms,
		bathrooms: row.bathrooms,
		parkingSpaces: row.parkingSpaces,
		readinessScore: row.readinessScore,
		imageUrl: row.images[0]?.url ?? null,
		organizationName: row.organization.name
	})) };
});
//#endregion
export { getPublicHomeData_createServerFn_handler, getPublicListings_createServerFn_handler, getPublicPropertyBySlug_createServerFn_handler, getPublicSimilarProperties_createServerFn_handler };
