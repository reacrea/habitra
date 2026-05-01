import { r as getAppSession, t as Route$26 } from "./login-CYKf8T1f.js";
import { t as Route$27 } from "./routes-CmoE6dgL.js";
import { t as parseUserRole } from "./user-role-CIXBgHXV.js";
import { t as Route$28 } from "./_sellerId-FP1rgNY0.js";
import { t as Route$29 } from "./_propertyId-Dvb51jFP.js";
import { t as Route$30 } from "./_leadId-Cp_2R_lv.js";
import { t as Route$31 } from "./_documentId-D0Toda5o.js";
import { t as Route$32 } from "./_buyerId-B77sIjtj.js";
import { useState } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/__root.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/__root.tsx";
var Route$25 = createRootRoute({
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
var $$splitComponentImporter$24 = () => import("./demo-DgliCQ_I.js");
var Route$24 = createFileRoute("/demo")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
//#endregion
//#region src/routes/app.tsx
var $$splitComponentImporter$23 = () => import("./app-BmAB4i03.js");
var Route$23 = createFileRoute("/app")({
	beforeLoad: async ({ location }) => {
		if (!await getAppSession()) throw redirect({
			to: "/login",
			search: { redirect: location.href }
		});
		const path = location.pathname;
		if (path === "/app" || path === "/app/") throw redirect({ to: "/app/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
//#endregion
//#region src/routes/app/transactions.tsx
var $$splitComponentImporter$22 = () => import("./transactions-1DMLSc6P.js");
var Route$22 = createFileRoute("/app/transactions")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
//#endregion
//#region src/routes/app/tasks.tsx
var $$splitComponentImporter$21 = () => import("./tasks-GqqitrzN.js");
var Route$21 = createFileRoute("/app/tasks")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
//#endregion
//#region src/routes/app/settings.tsx
var $$splitComponentImporter$20 = () => import("./settings-DZB_vp5_.js");
var Route$20 = createFileRoute("/app/settings")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
//#endregion
//#region src/routes/app/reports.tsx
var $$splitComponentImporter$19 = () => import("./reports-mLn2QGlH.js");
var Route$19 = createFileRoute("/app/reports")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
//#endregion
//#region src/routes/app/organizations.tsx
var $$splitComponentImporter$18 = () => import("./organizations-C7On-gih.js");
var Route$18 = createFileRoute("/app/organizations")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
//#endregion
//#region src/routes/app/dashboard.tsx
var $$splitComponentImporter$17 = () => import("./dashboard-BehDqbEM.js");
var Route$17 = createFileRoute("/app/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
//#endregion
//#region src/routes/app/calendar.tsx
var $$splitComponentImporter$16 = () => import("./calendar-BBBGLNOJ.js");
var Route$16 = createFileRoute("/app/calendar")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
//#endregion
//#region src/routes/app/billing.tsx
var $$splitComponentImporter$15 = () => import("./billing-D-f54Ii9.js");
var Route$15 = createFileRoute("/app/billing")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
//#endregion
//#region src/routes/app/admin.tsx
var $$splitComponentImporter$14 = () => import("./admin-DCCnxxM-.js");
var Route$14 = createFileRoute("/app/admin")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
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
var $$splitComponentImporter$13 = () => import("./route-Bd50TovL.js");
var Route$13 = createFileRoute("/app/sellers")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/app/properties/route.tsx
var $$splitComponentImporter$12 = () => import("./route-CAPhkYEt.js");
var Route$12 = createFileRoute("/app/properties")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/app/leads/route.tsx
var $$splitComponentImporter$11 = () => import("./route-DioyGF7M.js");
var Route$11 = createFileRoute("/app/leads")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/app/documents/route.tsx
var $$splitComponentImporter$10 = () => import("./route-M0D6vUS2.js");
var Route$10 = createFileRoute("/app/documents")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/app/buyers/route.tsx
var $$splitComponentImporter$9 = () => import("./route-BHuXXOCw.js");
var Route$9 = createFileRoute("/app/buyers")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/app/sellers/index.tsx
var $$splitComponentImporter$8 = () => import("./sellers-BAbdknJa.js");
var Route$8 = createFileRoute("/app/sellers/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
//#endregion
//#region src/routes/app/properties/index.tsx
var $$splitComponentImporter$7 = () => import("./properties-CfQJMHpU.js");
var Route$7 = createFileRoute("/app/properties/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
//#endregion
//#region src/routes/app/leads/index.tsx
var $$splitComponentImporter$6 = () => import("./leads-U05vxNrs.js");
var Route$6 = createFileRoute("/app/leads/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/routes/app/documents/index.tsx
var $$splitComponentImporter$5 = () => import("./documents-CvPsxsMs.js");
var Route$5 = createFileRoute("/app/documents/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/app/buyers/index.tsx
var $$splitComponentImporter$4 = () => import("./buyers-mahx5Qpf.js");
var Route$4 = createFileRoute("/app/buyers/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/app/sellers/new.tsx
var $$splitComponentImporter$3 = () => import("./new-D9w-1BNl.js");
var Route$3 = createFileRoute("/app/sellers/new")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/app/leads/new.tsx
var $$splitComponentImporter$2 = () => import("./new--koguQNu.js");
var Route$2 = createFileRoute("/app/leads/new")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/app/documents/new.tsx
var $$splitComponentImporter$1 = () => import("./new-zzs-9L-D.js");
var Route$1 = createFileRoute("/app/documents/new")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/app/buyers/new.tsx
var $$splitComponentImporter = () => import("./new-Exx2x22A.js");
var Route = createFileRoute("/app/buyers/new")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var LoginRoute = Route$26.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$25
});
var DemoRoute = Route$24.update({
	id: "/demo",
	path: "/demo",
	getParentRoute: () => Route$25
});
var AppRoute = Route$23.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$25
});
var IndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$25
});
var AppTransactionsRoute = Route$22.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => AppRoute
});
var AppTasksRoute = Route$21.update({
	id: "/tasks",
	path: "/tasks",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$20.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppReportsRoute = Route$19.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AppRoute
});
var AppOrganizationsRoute = Route$18.update({
	id: "/organizations",
	path: "/organizations",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$17.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppCalendarRoute = Route$16.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => AppRoute
});
var AppBillingRoute = Route$15.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => AppRoute
});
var AppAdminRoute = Route$14.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AppRoute
});
var AppSellersRouteRoute = Route$13.update({
	id: "/sellers",
	path: "/sellers",
	getParentRoute: () => AppRoute
});
var AppPropertiesRouteRoute = Route$12.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => AppRoute
});
var AppLeadsRouteRoute = Route$11.update({
	id: "/leads",
	path: "/leads",
	getParentRoute: () => AppRoute
});
var AppDocumentsRouteRoute = Route$10.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => AppRoute
});
var AppBuyersRouteRoute = Route$9.update({
	id: "/buyers",
	path: "/buyers",
	getParentRoute: () => AppRoute
});
var AppSellersIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppSellersRouteRoute
});
var AppPropertiesIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppPropertiesRouteRoute
});
var AppLeadsIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppDocumentsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppDocumentsRouteRoute
});
var AppBuyersIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppBuyersRouteRoute
});
var AppSellersNewRoute = Route$3.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppSellersRouteRoute
});
var AppSellersSellerIdRoute = Route$28.update({
	id: "/$sellerId",
	path: "/$sellerId",
	getParentRoute: () => AppSellersRouteRoute
});
var AppPropertiesPropertyIdRoute = Route$29.update({
	id: "/$propertyId",
	path: "/$propertyId",
	getParentRoute: () => AppPropertiesRouteRoute
});
var AppLeadsNewRoute = Route$2.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppLeadsLeadIdRoute = Route$30.update({
	id: "/$leadId",
	path: "/$leadId",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppDocumentsNewRoute = Route$1.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppDocumentsRouteRoute
});
var AppDocumentsDocumentIdRoute = Route$31.update({
	id: "/$documentId",
	path: "/$documentId",
	getParentRoute: () => AppDocumentsRouteRoute
});
var AppBuyersNewRoute = Route.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppBuyersRouteRoute
});
var AppBuyersRouteRouteChildren = {
	AppBuyersBuyerIdRoute: Route$32.update({
		id: "/$buyerId",
		path: "/$buyerId",
		getParentRoute: () => AppBuyersRouteRoute
	}),
	AppBuyersNewRoute,
	AppBuyersIndexRoute
};
var AppBuyersRouteRouteWithChildren = AppBuyersRouteRoute._addFileChildren(AppBuyersRouteRouteChildren);
var AppDocumentsRouteRouteChildren = {
	AppDocumentsDocumentIdRoute,
	AppDocumentsNewRoute,
	AppDocumentsIndexRoute
};
var AppDocumentsRouteRouteWithChildren = AppDocumentsRouteRoute._addFileChildren(AppDocumentsRouteRouteChildren);
var AppLeadsRouteRouteChildren = {
	AppLeadsLeadIdRoute,
	AppLeadsNewRoute,
	AppLeadsIndexRoute
};
var AppLeadsRouteRouteWithChildren = AppLeadsRouteRoute._addFileChildren(AppLeadsRouteRouteChildren);
var AppPropertiesRouteRouteChildren = {
	AppPropertiesPropertyIdRoute,
	AppPropertiesIndexRoute
};
var AppPropertiesRouteRouteWithChildren = AppPropertiesRouteRoute._addFileChildren(AppPropertiesRouteRouteChildren);
var AppSellersRouteRouteChildren = {
	AppSellersSellerIdRoute,
	AppSellersNewRoute,
	AppSellersIndexRoute
};
var AppRouteChildren = {
	AppBuyersRouteRoute: AppBuyersRouteRouteWithChildren,
	AppDocumentsRouteRoute: AppDocumentsRouteRouteWithChildren,
	AppLeadsRouteRoute: AppLeadsRouteRouteWithChildren,
	AppPropertiesRouteRoute: AppPropertiesRouteRouteWithChildren,
	AppSellersRouteRoute: AppSellersRouteRoute._addFileChildren(AppSellersRouteRouteChildren),
	AppAdminRoute,
	AppBillingRoute,
	AppCalendarRoute,
	AppDashboardRoute,
	AppOrganizationsRoute,
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
var routeTree = Route$25._addFileChildren(rootRouteChildren)._addFileTypes();
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
