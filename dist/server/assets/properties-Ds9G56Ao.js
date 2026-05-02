import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/validations/public-search.ts
/** Query params crudos en `/properties` (todo opcional para enlaces parciales). */
var publicSearchSchema = z.object({
	operation: z.enum(["buy", "rent"]).optional(),
	/** PATCH-4: prioridad sobre `operation` si ambos vienen. */
	operationType: z.enum(["SALE", "RENT"]).optional(),
	city: z.string().optional(),
	type: z.string().optional(),
	propertyType: z.string().optional(),
	minPrice: z.string().optional(),
	maxPrice: z.string().optional(),
	bedrooms: z.string().optional(),
	bathrooms: z.string().optional(),
	sort: z.enum([
		"relevance",
		"price_asc",
		"price_desc",
		"recent",
		"readiness_desc"
	]).optional(),
	view: z.enum(["list", "map"]).optional()
});
/** Valores efectivos para filtros y API (defaults aplicados). */
function mergePublicSearchDefaults(raw) {
	const operation = (raw.operationType === "RENT" ? "rent" : raw.operationType === "SALE" ? "buy" : void 0) ?? raw.operation ?? "buy";
	const type = (raw.type || raw.propertyType || "").trim();
	return {
		...raw,
		operation,
		type
	};
}
//#endregion
//#region src/routes/properties.tsx
var $$splitComponentImporter = () => import("./properties-MCdL2Kkb.js");
var Route = createFileRoute("/properties")({
	validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { mergePublicSearchDefaults as n, publicSearchSchema as r, Route as t };
