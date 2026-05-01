import { r as getAppSession, t as Route$23 } from "./login-c9ESbZ4N.js";
import { t as Route$24 } from "./routes-In5OP5uB.js";
import { t as parseUserRole } from "./user-role-CIXBgHXV.js";
import { t as Route$25 } from "./_sellerId-PqssPQF_.js";
import { t as Route$26 } from "./_leadId-kfmyysK4.js";
import { t as Route$27 } from "./_buyerId-5aD8ifpH.js";
import { useState } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/__root.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/__root.tsx";
var Route$22 = createRootRoute({
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
	return /* @__PURE__ */ jsxDEV(RootDocument, { children: /* @__PURE__ */ jsxDEV(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 9
		}, this), /* @__PURE__ */ jsxDEV(ReactQueryDevtools, { initialIsOpen: false }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxDEV("html", {
		lang: "es-MX",
		children: [/* @__PURE__ */ jsxDEV("head", { children: /* @__PURE__ */ jsxDEV(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("body", { children: [children, /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/demo.tsx
var $$splitComponentImporter$21 = () => import("./demo-BQ1q9TKo.js");
var Route$21 = createFileRoute("/demo")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
//#endregion
//#region src/routes/app.tsx
var $$splitComponentImporter$20 = () => import("./app-CSWj_92W.js");
var Route$20 = createFileRoute("/app")({
	beforeLoad: async ({ location }) => {
		if (!await getAppSession()) throw redirect({
			to: "/login",
			search: { redirect: location.href }
		});
		const path = location.pathname;
		if (path === "/app" || path === "/app/") throw redirect({ to: "/app/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
//#endregion
//#region src/routes/app/transactions.tsx
var $$splitComponentImporter$19 = () => import("./transactions-N_4djIKG.js");
var Route$19 = createFileRoute("/app/transactions")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
//#endregion
//#region src/routes/app/tasks.tsx
var $$splitComponentImporter$18 = () => import("./tasks-LN5Hlf02.js");
var Route$18 = createFileRoute("/app/tasks")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
//#endregion
//#region src/routes/app/settings.tsx
var $$splitComponentImporter$17 = () => import("./settings-Bet0xsTS.js");
var Route$17 = createFileRoute("/app/settings")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
//#endregion
//#region src/routes/app/reports.tsx
var $$splitComponentImporter$16 = () => import("./reports-gqihYOpV.js");
var Route$16 = createFileRoute("/app/reports")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
//#endregion
//#region src/routes/app/properties.tsx
var $$splitComponentImporter$15 = () => import("./properties-D5F7CPZS.js");
var Route$15 = createFileRoute("/app/properties")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
//#endregion
//#region src/routes/app/organizations.tsx
var $$splitComponentImporter$14 = () => import("./organizations-B-LXApcW.js");
var Route$14 = createFileRoute("/app/organizations")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
//#endregion
//#region src/routes/app/documents.tsx
var $$splitComponentImporter$13 = () => import("./documents-B-3iMRyO.js");
var Route$13 = createFileRoute("/app/documents")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
//#endregion
//#region src/routes/app/dashboard.tsx
var $$splitComponentImporter$12 = () => import("./dashboard-BFb3t4cC.js");
var Route$12 = createFileRoute("/app/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
//#endregion
//#region src/routes/app/calendar.tsx
var $$splitComponentImporter$11 = () => import("./calendar-BMl2egjI.js");
var Route$11 = createFileRoute("/app/calendar")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
//#endregion
//#region src/routes/app/billing.tsx
var $$splitComponentImporter$10 = () => import("./billing-C9jsbCur.js");
var Route$10 = createFileRoute("/app/billing")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
//#endregion
//#region src/routes/app/admin.tsx
var $$splitComponentImporter$9 = () => import("./admin-CHC_B9AP.js");
var Route$9 = createFileRoute("/app/admin")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
//#endregion
//#region src/utils/crm-role.ts
var CRM_ROLES = new Set([
	"ADMIN",
	"BROKER_OWNER",
	"AGENT"
]);
function canAccessCrm(role) {
	return CRM_ROLES.has(role);
}
//#endregion
//#region src/lib/routing/crm-before-load.ts
async function requireCrmRouteSession(locationHref) {
	const session = await getAppSession();
	if (!session) throw redirect({
		to: "/login",
		search: { redirect: locationHref }
	});
	if (!canAccessCrm(parseUserRole(session.role))) throw redirect({ to: "/app/dashboard" });
}
//#endregion
//#region src/routes/app/sellers/route.tsx
var $$splitComponentImporter$8 = () => import("./route-DkXskY1v.js");
var Route$8 = createFileRoute("/app/sellers")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/app/leads/route.tsx
var $$splitComponentImporter$7 = () => import("./route-G3jHhlut.js");
var Route$7 = createFileRoute("/app/leads")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/app/buyers/route.tsx
var $$splitComponentImporter$6 = () => import("./route-Dpk8Fi31.js");
var Route$6 = createFileRoute("/app/buyers")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/app/sellers/index.tsx
var $$splitComponentImporter$5 = () => import("./sellers-GJLMvRvu.js");
var Route$5 = createFileRoute("/app/sellers/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/app/leads/index.tsx
var $$splitComponentImporter$4 = () => import("./leads-LVZxcCw7.js");
var Route$4 = createFileRoute("/app/leads/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/app/buyers/index.tsx
var $$splitComponentImporter$3 = () => import("./buyers-DIWZDcHW.js");
var Route$3 = createFileRoute("/app/buyers/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/app/sellers/new.tsx
var $$splitComponentImporter$2 = () => import("./new-lXd53HA9.js");
var Route$2 = createFileRoute("/app/sellers/new")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/app/leads/new.tsx
var $$splitComponentImporter$1 = () => import("./new-C7AYbjfa.js");
var Route$1 = createFileRoute("/app/leads/new")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/app/buyers/new.tsx
var $$splitComponentImporter = () => import("./new-f_hl7ER-.js");
var Route = createFileRoute("/app/buyers/new")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var LoginRoute = Route$23.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$22
});
var DemoRoute = Route$21.update({
	id: "/demo",
	path: "/demo",
	getParentRoute: () => Route$22
});
var AppRoute = Route$20.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$22
});
var IndexRoute = Route$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$22
});
var AppTransactionsRoute = Route$19.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => AppRoute
});
var AppTasksRoute = Route$18.update({
	id: "/tasks",
	path: "/tasks",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$17.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppReportsRoute = Route$16.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AppRoute
});
var AppPropertiesRoute = Route$15.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => AppRoute
});
var AppOrganizationsRoute = Route$14.update({
	id: "/organizations",
	path: "/organizations",
	getParentRoute: () => AppRoute
});
var AppDocumentsRoute = Route$13.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$12.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppCalendarRoute = Route$11.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => AppRoute
});
var AppBillingRoute = Route$10.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => AppRoute
});
var AppAdminRoute = Route$9.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AppRoute
});
var AppSellersRouteRoute = Route$8.update({
	id: "/sellers",
	path: "/sellers",
	getParentRoute: () => AppRoute
});
var AppLeadsRouteRoute = Route$7.update({
	id: "/leads",
	path: "/leads",
	getParentRoute: () => AppRoute
});
var AppBuyersRouteRoute = Route$6.update({
	id: "/buyers",
	path: "/buyers",
	getParentRoute: () => AppRoute
});
var AppSellersIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppSellersRouteRoute
});
var AppLeadsIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppBuyersIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppBuyersRouteRoute
});
var AppSellersNewRoute = Route$2.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppSellersRouteRoute
});
var AppSellersSellerIdRoute = Route$25.update({
	id: "/$sellerId",
	path: "/$sellerId",
	getParentRoute: () => AppSellersRouteRoute
});
var AppLeadsNewRoute = Route$1.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppLeadsLeadIdRoute = Route$26.update({
	id: "/$leadId",
	path: "/$leadId",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppBuyersNewRoute = Route.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppBuyersRouteRoute
});
var AppBuyersRouteRouteChildren = {
	AppBuyersBuyerIdRoute: Route$27.update({
		id: "/$buyerId",
		path: "/$buyerId",
		getParentRoute: () => AppBuyersRouteRoute
	}),
	AppBuyersNewRoute,
	AppBuyersIndexRoute
};
var AppBuyersRouteRouteWithChildren = AppBuyersRouteRoute._addFileChildren(AppBuyersRouteRouteChildren);
var AppLeadsRouteRouteChildren = {
	AppLeadsLeadIdRoute,
	AppLeadsNewRoute,
	AppLeadsIndexRoute
};
var AppLeadsRouteRouteWithChildren = AppLeadsRouteRoute._addFileChildren(AppLeadsRouteRouteChildren);
var AppSellersRouteRouteChildren = {
	AppSellersSellerIdRoute,
	AppSellersNewRoute,
	AppSellersIndexRoute
};
var AppRouteChildren = {
	AppBuyersRouteRoute: AppBuyersRouteRouteWithChildren,
	AppLeadsRouteRoute: AppLeadsRouteRouteWithChildren,
	AppSellersRouteRoute: AppSellersRouteRoute._addFileChildren(AppSellersRouteRouteChildren),
	AppAdminRoute,
	AppBillingRoute,
	AppCalendarRoute,
	AppDashboardRoute,
	AppDocumentsRoute,
	AppOrganizationsRoute,
	AppPropertiesRoute,
	AppReportsRoute,
	AppSettingsRoute,
	AppTasksRoute,
	AppTransactionsRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	DemoRoute,
	LoginRoute
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
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
