import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/routes/properties/$slug.tsx
var $$splitComponentImporter = () => import("./_slug-Dr3H3tnx.js");
var propertyDetailSearchSchema = z.object({}).catchall(z.unknown());
var Route = createFileRoute("/properties/$slug")({
	validateSearch: (search) => propertyDetailSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
