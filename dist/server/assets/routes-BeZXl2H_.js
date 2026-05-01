import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "../server.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DYtvR37Q.js");
var getPlatformMessage = createServerFn({ method: "GET" }).handler(createSsrRpc("db8b8d17a81e6a91b62ecb5dc1f9478957904daf88c90cf85344bd0406bbdf57"));
var Route = createFileRoute("/")({
	loader: () => getPlatformMessage(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
