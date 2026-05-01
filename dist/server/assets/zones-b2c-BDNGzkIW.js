import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as createServerRpc } from "./createServerRpc-DaHnQtmK.js";
import { z } from "zod";
//#region src/server/zones-b2c.ts?tss-serverfn-split
function toNumber(value) {
	if (typeof value === "number") return value;
	if (value && typeof value === "object" && "toNumber" in value) return value.toNumber();
	return Number(value ?? 0);
}
var cityInputSchema = z.object({ city: z.string().trim().min(1) });
var neighborhoodInputSchema = z.object({
	city: z.string().trim().min(1),
	neighborhood: z.string().trim().min(1)
});
var getZonesOverview_createServerFn_handler = createServerRpc({
	id: "b313bc1c1d966933b74cc775a1e60a18d6f93ae5cd83dbd71629db37d4cfd476",
	name: "getZonesOverview",
	filename: "src/server/zones-b2c.ts"
}, (opts) => getZonesOverview.__executeServer(opts));
var getZonesOverview = createServerFn({ method: "GET" }).handler(getZonesOverview_createServerFn_handler, async () => {
	return { cities: (await prisma.property.groupBy({
		by: ["city"],
		where: { status: "PUBLICADA" },
		_count: { _all: true },
		_avg: {
			price: true,
			readinessScore: true
		}
	})).map((row) => ({
		city: row.city,
		total: row._count._all,
		avgPrice: toNumber(row._avg.price),
		avgReadiness: Math.round(Number(row._avg.readinessScore ?? 0))
	})).sort((a, b) => b.total - a.total) };
});
var getZoneCityData_createServerFn_handler = createServerRpc({
	id: "87544689e896b3d6ad1d6e1fa7cc76930b30c99f74d30f270d5c67455d480fe4",
	name: "getZoneCityData",
	filename: "src/server/zones-b2c.ts"
}, (opts) => getZoneCityData.__executeServer(opts));
var getZoneCityData = createServerFn({ method: "POST" }).inputValidator((data) => cityInputSchema.parse(data)).handler(getZoneCityData_createServerFn_handler, async ({ data }) => {
	const city = decodeURIComponent(data.city);
	const [cityRows, neighborhoods] = await Promise.all([prisma.property.findMany({
		where: {
			status: "PUBLICADA",
			city: {
				equals: city,
				mode: "insensitive"
			}
		},
		select: {
			id: true,
			title: true,
			slug: true,
			price: true,
			neighborhood: true,
			operationType: true,
			propertyType: true
		},
		orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
		take: 60
	}), prisma.property.groupBy({
		by: ["neighborhood"],
		where: {
			status: "PUBLICADA",
			city: {
				equals: city,
				mode: "insensitive"
			},
			neighborhood: { not: null }
		},
		_count: { _all: true },
		_avg: { price: true }
	})]);
	if (cityRows.length === 0) return null;
	return {
		city,
		total: cityRows.length,
		properties: cityRows.map((row) => ({
			id: row.id,
			title: row.title,
			slug: row.slug,
			price: toNumber(row.price),
			neighborhood: row.neighborhood,
			operationType: row.operationType,
			propertyType: row.propertyType
		})),
		neighborhoods: neighborhoods.filter((n) => n.neighborhood).map((n) => ({
			neighborhood: n.neighborhood,
			total: n._count._all,
			avgPrice: toNumber(n._avg.price)
		})).sort((a, b) => b.total - a.total)
	};
});
var getZoneNeighborhoodData_createServerFn_handler = createServerRpc({
	id: "f5e7820b2bd82098250be79117a53688851ecd38196268c5fd3673e230ab368e",
	name: "getZoneNeighborhoodData",
	filename: "src/server/zones-b2c.ts"
}, (opts) => getZoneNeighborhoodData.__executeServer(opts));
var getZoneNeighborhoodData = createServerFn({ method: "POST" }).inputValidator((data) => neighborhoodInputSchema.parse(data)).handler(getZoneNeighborhoodData_createServerFn_handler, async ({ data }) => {
	const city = decodeURIComponent(data.city);
	const neighborhood = decodeURIComponent(data.neighborhood);
	const rows = await prisma.property.findMany({
		where: {
			status: "PUBLICADA",
			city: {
				equals: city,
				mode: "insensitive"
			},
			neighborhood: {
				equals: neighborhood,
				mode: "insensitive"
			}
		},
		include: { images: {
			orderBy: { order: "asc" },
			take: 1
		} },
		orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
		take: 40
	});
	if (rows.length === 0) return null;
	return {
		city,
		neighborhood,
		total: rows.length,
		avgPrice: Math.round(rows.reduce((acc, row) => acc + toNumber(row.price), 0) / rows.length),
		properties: rows.map((row) => ({
			id: row.id,
			slug: row.slug,
			title: row.title,
			price: toNumber(row.price),
			operationType: row.operationType,
			propertyType: row.propertyType,
			imageUrl: row.images[0]?.url ?? null
		}))
	};
});
//#endregion
export { getZoneCityData_createServerFn_handler, getZoneNeighborhoodData_createServerFn_handler, getZonesOverview_createServerFn_handler };
