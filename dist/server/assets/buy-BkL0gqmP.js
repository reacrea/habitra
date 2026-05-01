import { t as publicSearchSchema } from "./public-search-BacHjz2P.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/buy.tsx
var $$splitComponentImporter = () => import("./buy-COOTP1-9.js");
var Route = createFileRoute("/buy")({
	validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
