import { t as publicSearchSchema } from "./public-search-BacHjz2P.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/rent.tsx
var $$splitComponentImporter = () => import("./rent-D5Wj_vNa.js");
var Route = createFileRoute("/rent")({
	validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
