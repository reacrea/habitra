import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-C40XB0cl.js";
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
var getPublicHomeData = createServerFn({ method: "GET" }).handler(createSsrRpc("a870149fbe3efcb39f82f6b00ae1bc71e3c292a40f7884c0420a07c23059e41b"));
var getPublicListings = createServerFn({ method: "POST" }).inputValidator((data) => publicListingsInput.parse(data)).handler(createSsrRpc("c63035c9133b3fccc81a1b55c50f66ccb7287e5efb92f671368b80d61ca8f5b6"));
//#endregion
export { getPublicListings as n, getPublicHomeData as t };
