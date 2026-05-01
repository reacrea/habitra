import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-B8OM2uQA.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-oy5QnFbN.js");
var getPlatformMessage = createServerFn({ method: "GET" }).handler(createSsrRpc("db8b8d17a81e6a91b62ecb5dc1f9478957904daf88c90cf85344bd0406bbdf57"));
var Route = createFileRoute("/")({
	loader: () => getPlatformMessage(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
