import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BfYjltVw.js";
import { z } from "zod";
import { PropertyType } from "@prisma/client";
//#region src/server/public-b2c.ts
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
var getPublicHomeData = createServerFn({ method: "GET" }).handler(createSsrRpc("a870149fbe3efcb39f82f6b00ae1bc71e3c292a40f7884c0420a07c23059e41b"));
var getPublicListings = createServerFn({ method: "POST" }).inputValidator((data) => publicListingsInput.parse(data)).handler(createSsrRpc("c63035c9133b3fccc81a1b55c50f66ccb7287e5efb92f671368b80d61ca8f5b6"));
var getPublicPropertyBySlug = createServerFn({ method: "POST" }).inputValidator((data) => publicPropertySlugInput.parse(data)).handler(createSsrRpc("6e61e18b31d382298d80cf632c5b8b62ae5f4c0c36ada03d627817e80b81b9eb"));
var getPublicSimilarProperties = createServerFn({ method: "POST" }).inputValidator((data) => publicPropertySlugInput.parse(data)).handler(createSsrRpc("4de9b7e8e90a6e9d34b30a75b3ff9da0bf696e649554efbb7c5e482c4ac6faaa"));
//#endregion
export { getPublicSimilarProperties as i, getPublicListings as n, getPublicPropertyBySlug as r, getPublicHomeData as t };
