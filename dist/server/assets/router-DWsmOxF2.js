import { t as Route$3 } from "./routes-BeZXl2H_.js";
import { useState } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//#region src/routes/__root.tsx
var Route$2 = createRootRoute({
	head: () => ({ meta: [
		{ charSet: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		},
		{ title: "Habitra" },
		{
			name: "description",
			content: "Infraestructura para transacciones inmobiliarias en Mexico."
		}
	] }),
	component: RootComponent
});
function RootComponent() {
	const [queryClient] = useState(() => new QueryClient());
	return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(ReactQueryDevtools, { initialIsOpen: false })]
	}) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "es-MX",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
//#endregion
//#region src/routes/demo.tsx
var $$splitComponentImporter$1 = () => import("./demo-DHSZRXDi.js");
var Route$1 = createFileRoute("/demo")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/app/dashboard.tsx
var $$splitComponentImporter = () => import("./dashboard-BIfYR0BW.js");
var Route = createFileRoute("/app/dashboard")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var DemoRoute = Route$1.update({
	id: "/demo",
	path: "/demo",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	DemoRoute,
	AppDashboardRoute: Route.update({
		id: "/app/dashboard",
		path: "/app/dashboard",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { getRouter };
