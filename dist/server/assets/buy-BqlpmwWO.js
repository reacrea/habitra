import { t as publicSearchSchema } from "./public-search-BDWRUUWG.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/buy.tsx
var $$splitComponentImporter = () => import("./buy-BvkcCtOZ.js");
var Route = createFileRoute("/buy")({
	validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
