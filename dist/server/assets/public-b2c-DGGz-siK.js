import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as createServerRpc } from "./createServerRpc-Cr4-9oPI.js";
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
//#endregion
export { getPublicHomeData_createServerFn_handler, getPublicListings_createServerFn_handler };
