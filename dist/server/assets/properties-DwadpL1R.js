import { t as publicSearchSchema } from "./public-search-BacHjz2P.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/properties.tsx
var $$splitComponentImporter = () => import("./properties-BrkKzQu9.js");
var Route = createFileRoute("/properties")({
	validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
