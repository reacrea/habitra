import { t as publicSearchSchema } from "./public-search-BDWRUUWG.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/rent.tsx
var $$splitComponentImporter = () => import("./rent-jijTcvhB.js");
var Route = createFileRoute("/rent")({
	validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
