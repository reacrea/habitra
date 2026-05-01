import { t as Route$41 } from "./rent-BJyMJfIe.js";
import { t as Route$42 } from "./properties-BHTyQ1VT.js";
import { r as getAppSession, t as Route$43 } from "./login-BeiH5veM.js";
import { t as Route$44 } from "./buy-tKJTCgei.js";
import { t as Route$45 } from "./_slug-oCmCFz6n.js";
import { t as parseUserRole } from "./user-role-Ciqgkypn.js";
import { t as Route$46 } from "./_transactionId-BE_H8Haw.js";
import { t as Route$47 } from "./_transactionId-BoU4bi3J.js";
import { t as Route$48 } from "./_sellerId-CWhWqqP4.js";
import { t as Route$49 } from "./_propertyId-CV7W4uBd.js";
import { t as Route$50 } from "./_leadId-CwE3d089.js";
import { t as Route$51 } from "./_documentId-B6UbWcat.js";
import { t as Route$52 } from "./_buyerId-Q5hdnjPm.js";
import { useState } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/__root.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/__root.tsx";
var Route$40 = createRootRoute({
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
//#region src/routes/sell.tsx
var $$splitComponentImporter$39 = () => import("./sell-5e2nwccq.js");
var Route$39 = createFileRoute("/sell")({ component: lazyRouteComponent($$splitComponentImporter$39, "component") });
//#endregion
//#region src/routes/mortgage-calculator.tsx
var $$splitComponentImporter$38 = () => import("./mortgage-calculator-CGNqKrRr.js");
var Route$38 = createFileRoute("/mortgage-calculator")({ component: lazyRouteComponent($$splitComponentImporter$38, "component") });
//#endregion
//#region src/routes/favorites.tsx
var $$splitComponentImporter$37 = () => import("./favorites-xy9PsWan.js");
var Route$37 = createFileRoute("/favorites")({ component: lazyRouteComponent($$splitComponentImporter$37, "component") });
//#endregion
//#region src/routes/demo.tsx
var $$splitComponentImporter$36 = () => import("./demo-DCLTIWqf.js");
var Route$36 = createFileRoute("/demo")({ component: lazyRouteComponent($$splitComponentImporter$36, "component") });
//#endregion
//#region src/routes/compare.tsx
var $$splitComponentImporter$35 = () => import("./compare-nBhyobXP.js");
var Route$35 = createFileRoute("/compare")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
//#endregion
//#region src/routes/buyer.tsx
var $$splitComponentImporter$34 = () => import("./buyer-BxlYAjAz.js");
var Route$34 = createFileRoute("/buyer")({
	beforeLoad: async ({ location }) => {
		if (!await getAppSession()) throw redirect({
			to: "/login",
			search: { redirect: location.href }
		});
		if (location.pathname === "/buyer" || location.pathname === "/buyer/") throw redirect({ to: "/buyer/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
//#endregion
//#region src/routes/app.tsx
var $$splitComponentImporter$33 = () => import("./app-B78FxCCb.js");
var Route$33 = createFileRoute("/app")({
	beforeLoad: async ({ location }) => {
		if (!await getAppSession()) throw redirect({
			to: "/login",
			search: { redirect: location.href }
		});
		const path = location.pathname;
		if (path === "/app" || path === "/app/") throw redirect({ to: "/app/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$32 = () => import("./routes-C1WakG40.js");
var Route$32 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
//#endregion
//#region src/routes/buyer/transactions.tsx
var $$splitComponentImporter$31 = () => import("./transactions-CxDP5966.js");
var Route$31 = createFileRoute("/buyer/transactions")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
//#endregion
//#region src/routes/buyer/profile.tsx
var $$splitComponentImporter$30 = () => import("./profile-B930MnHg.js");
var Route$30 = createFileRoute("/buyer/profile")({ component: lazyRouteComponent($$splitComponentImporter$30, "component") });
//#endregion
//#region src/routes/buyer/matches.tsx
var $$splitComponentImporter$29 = () => import("./matches-W_iESYPn.js");
var Route$29 = createFileRoute("/buyer/matches")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
//#endregion
//#region src/routes/buyer/dashboard.tsx
var $$splitComponentImporter$28 = () => import("./dashboard-BAeRjDqK.js");
var Route$28 = createFileRoute("/buyer/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
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
//#region src/routes/app/tasks.tsx
var $$splitComponentImporter$27 = () => import("./tasks-DmB5172f.js");
var Route$27 = createFileRoute("/app/tasks")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
//#endregion
//#region src/routes/app/settings.tsx
var $$splitComponentImporter$26 = () => import("./settings-7Ed9CzqE.js");
var Route$26 = createFileRoute("/app/settings")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
//#endregion
//#region src/routes/app/organizations.tsx
var $$splitComponentImporter$25 = () => import("./organizations-DS97UC4f.js");
var Route$25 = createFileRoute("/app/organizations")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
//#endregion
//#region src/routes/app/dashboard.tsx
var $$splitComponentImporter$24 = () => import("./dashboard-BvuVMzZv.js");
var Route$24 = createFileRoute("/app/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
//#endregion
//#region src/routes/app/calendar.tsx
var $$splitComponentImporter$23 = () => import("./calendar-C4GB4sWc.js");
var Route$23 = createFileRoute("/app/calendar")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
//#endregion
//#region src/routes/app/billing.tsx
var $$splitComponentImporter$22 = () => import("./billing-BXCtXklm.js");
var Route$22 = createFileRoute("/app/billing")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
//#endregion
//#region src/routes/app/admin.tsx
var $$splitComponentImporter$21 = () => import("./admin-CYMIWK0J.js");
var Route$21 = createFileRoute("/app/admin")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
//#endregion
//#region src/routes/app/transactions/route.tsx
var $$splitComponentImporter$20 = () => import("./route-Dk5aHAjN.js");
var Route$20 = createFileRoute("/app/transactions")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
//#endregion
//#region src/routes/app/sellers/route.tsx
var $$splitComponentImporter$19 = () => import("./route-BnXU0h_x.js");
var Route$19 = createFileRoute("/app/sellers")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
//#endregion
//#region src/routes/app/reports/route.tsx
var $$splitComponentImporter$18 = () => import("./route-CRlzSBCF.js");
var Route$18 = createFileRoute("/app/reports")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
//#endregion
//#region src/routes/app/properties/route.tsx
var $$splitComponentImporter$17 = () => import("./route-DwgYMtQF.js");
var Route$17 = createFileRoute("/app/properties")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region src/routes/app/leads/route.tsx
var $$splitComponentImporter$16 = () => import("./route-DIJL2xzI.js");
var Route$16 = createFileRoute("/app/leads")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region src/routes/app/documents/route.tsx
var $$splitComponentImporter$15 = () => import("./route-uFNd6_qf.js");
var Route$15 = createFileRoute("/app/documents")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/app/buyers/route.tsx
var $$splitComponentImporter$14 = () => import("./route-Cbuq9joR.js");
var Route$14 = createFileRoute("/app/buyers")({
	beforeLoad: async ({ location }) => {
		await requireCrmRouteSession(location.href);
	},
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/app/transactions/index.tsx
var $$splitComponentImporter$13 = () => import("./transactions-DrJIDVeT.js");
var Route$13 = createFileRoute("/app/transactions/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
//#endregion
//#region src/routes/app/sellers/index.tsx
var $$splitComponentImporter$12 = () => import("./sellers-B8OHCyOV.js");
var Route$12 = createFileRoute("/app/sellers/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
//#endregion
//#region src/routes/app/reports/index.tsx
var $$splitComponentImporter$11 = () => import("./reports-Dr2omRN-.js");
var Route$11 = createFileRoute("/app/reports/")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
//#endregion
//#region src/routes/app/properties/index.tsx
var $$splitComponentImporter$10 = () => import("./properties-CSQJrhNP.js");
var Route$10 = createFileRoute("/app/properties/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
//#endregion
//#region src/routes/app/leads/index.tsx
var $$splitComponentImporter$9 = () => import("./leads-BZ0wTdTT.js");
var Route$9 = createFileRoute("/app/leads/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
//#endregion
//#region src/routes/app/documents/index.tsx
var $$splitComponentImporter$8 = () => import("./documents-_1RqSmpr.js");
var Route$8 = createFileRoute("/app/documents/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
//#endregion
//#region src/routes/app/buyers/index.tsx
var $$splitComponentImporter$7 = () => import("./buyers-BB8BSytR.js");
var Route$7 = createFileRoute("/app/buyers/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
//#endregion
//#region src/routes/app/transactions/new.tsx
var $$splitComponentImporter$6 = () => import("./new-DJNWHUt5.js");
var Route$6 = createFileRoute("/app/transactions/new")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/routes/app/sellers/new.tsx
var $$splitComponentImporter$5 = () => import("./new-CGTwmeTs.js");
var Route$5 = createFileRoute("/app/sellers/new")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/app/reports/simulator.tsx
var $$splitComponentImporter$4 = () => import("./simulator-C-6hhLxS.js");
var Route$4 = createFileRoute("/app/reports/simulator")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/app/reports/ai.tsx
var $$splitComponentImporter$3 = () => import("./ai-D1M0pSBv.js");
var Route$3 = createFileRoute("/app/reports/ai")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/app/leads/new.tsx
var $$splitComponentImporter$2 = () => import("./new-BntarnjT.js");
var Route$2 = createFileRoute("/app/leads/new")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/app/documents/new.tsx
var $$splitComponentImporter$1 = () => import("./new-BQqaJ0Ca.js");
var Route$1 = createFileRoute("/app/documents/new")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/app/buyers/new.tsx
var $$splitComponentImporter = () => import("./new-ejw8Bq7W.js");
var Route = createFileRoute("/app/buyers/new")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var SellRoute = Route$39.update({
	id: "/sell",
	path: "/sell",
	getParentRoute: () => Route$40
});
var RentRoute = Route$41.update({
	id: "/rent",
	path: "/rent",
	getParentRoute: () => Route$40
});
var PropertiesRoute = Route$42.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => Route$40
});
var MortgageCalculatorRoute = Route$38.update({
	id: "/mortgage-calculator",
	path: "/mortgage-calculator",
	getParentRoute: () => Route$40
});
var LoginRoute = Route$43.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$40
});
var FavoritesRoute = Route$37.update({
	id: "/favorites",
	path: "/favorites",
	getParentRoute: () => Route$40
});
var DemoRoute = Route$36.update({
	id: "/demo",
	path: "/demo",
	getParentRoute: () => Route$40
});
var CompareRoute = Route$35.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$40
});
var BuyerRoute = Route$34.update({
	id: "/buyer",
	path: "/buyer",
	getParentRoute: () => Route$40
});
var BuyRoute = Route$44.update({
	id: "/buy",
	path: "/buy",
	getParentRoute: () => Route$40
});
var AppRoute = Route$33.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$40
});
var IndexRoute = Route$32.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$40
});
var PropertiesSlugRoute = Route$45.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PropertiesRoute
});
var BuyerTransactionsRoute = Route$31.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => BuyerRoute
});
var BuyerProfileRoute = Route$30.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => BuyerRoute
});
var BuyerMatchesRoute = Route$29.update({
	id: "/matches",
	path: "/matches",
	getParentRoute: () => BuyerRoute
});
var BuyerDashboardRoute = Route$28.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => BuyerRoute
});
var AppTasksRoute = Route$27.update({
	id: "/tasks",
	path: "/tasks",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$26.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppOrganizationsRoute = Route$25.update({
	id: "/organizations",
	path: "/organizations",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$24.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppCalendarRoute = Route$23.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => AppRoute
});
var AppBillingRoute = Route$22.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => AppRoute
});
var AppAdminRoute = Route$21.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AppRoute
});
var AppTransactionsRouteRoute = Route$20.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => AppRoute
});
var AppSellersRouteRoute = Route$19.update({
	id: "/sellers",
	path: "/sellers",
	getParentRoute: () => AppRoute
});
var AppReportsRouteRoute = Route$18.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AppRoute
});
var AppPropertiesRouteRoute = Route$17.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => AppRoute
});
var AppLeadsRouteRoute = Route$16.update({
	id: "/leads",
	path: "/leads",
	getParentRoute: () => AppRoute
});
var AppDocumentsRouteRoute = Route$15.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => AppRoute
});
var AppBuyersRouteRoute = Route$14.update({
	id: "/buyers",
	path: "/buyers",
	getParentRoute: () => AppRoute
});
var AppTransactionsIndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppTransactionsRouteRoute
});
var AppSellersIndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppSellersRouteRoute
});
var AppReportsIndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppReportsRouteRoute
});
var AppPropertiesIndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppPropertiesRouteRoute
});
var AppLeadsIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppDocumentsIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppDocumentsRouteRoute
});
var AppBuyersIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppBuyersRouteRoute
});
var BuyerTransactionsTransactionIdRoute = Route$46.update({
	id: "/$transactionId",
	path: "/$transactionId",
	getParentRoute: () => BuyerTransactionsRoute
});
var AppTransactionsNewRoute = Route$6.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppTransactionsRouteRoute
});
var AppTransactionsTransactionIdRoute = Route$47.update({
	id: "/$transactionId",
	path: "/$transactionId",
	getParentRoute: () => AppTransactionsRouteRoute
});
var AppSellersNewRoute = Route$5.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppSellersRouteRoute
});
var AppSellersSellerIdRoute = Route$48.update({
	id: "/$sellerId",
	path: "/$sellerId",
	getParentRoute: () => AppSellersRouteRoute
});
var AppReportsSimulatorRoute = Route$4.update({
	id: "/simulator",
	path: "/simulator",
	getParentRoute: () => AppReportsRouteRoute
});
var AppReportsAiRoute = Route$3.update({
	id: "/ai",
	path: "/ai",
	getParentRoute: () => AppReportsRouteRoute
});
var AppPropertiesPropertyIdRoute = Route$49.update({
	id: "/$propertyId",
	path: "/$propertyId",
	getParentRoute: () => AppPropertiesRouteRoute
});
var AppLeadsNewRoute = Route$2.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppLeadsLeadIdRoute = Route$50.update({
	id: "/$leadId",
	path: "/$leadId",
	getParentRoute: () => AppLeadsRouteRoute
});
var AppDocumentsNewRoute = Route$1.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AppDocumentsRouteRoute
});
var AppDocumentsDocumentIdRoute = Route$51.update({
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
	AppBuyersBuyerIdRoute: Route$52.update({
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
var AppReportsRouteRouteChildren = {
	AppReportsAiRoute,
	AppReportsSimulatorRoute,
	AppReportsIndexRoute
};
var AppReportsRouteRouteWithChildren = AppReportsRouteRoute._addFileChildren(AppReportsRouteRouteChildren);
var AppSellersRouteRouteChildren = {
	AppSellersSellerIdRoute,
	AppSellersNewRoute,
	AppSellersIndexRoute
};
var AppSellersRouteRouteWithChildren = AppSellersRouteRoute._addFileChildren(AppSellersRouteRouteChildren);
var AppTransactionsRouteRouteChildren = {
	AppTransactionsTransactionIdRoute,
	AppTransactionsNewRoute,
	AppTransactionsIndexRoute
};
var AppRouteChildren = {
	AppBuyersRouteRoute: AppBuyersRouteRouteWithChildren,
	AppDocumentsRouteRoute: AppDocumentsRouteRouteWithChildren,
	AppLeadsRouteRoute: AppLeadsRouteRouteWithChildren,
	AppPropertiesRouteRoute: AppPropertiesRouteRouteWithChildren,
	AppReportsRouteRoute: AppReportsRouteRouteWithChildren,
	AppSellersRouteRoute: AppSellersRouteRouteWithChildren,
	AppTransactionsRouteRoute: AppTransactionsRouteRoute._addFileChildren(AppTransactionsRouteRouteChildren),
	AppAdminRoute,
	AppBillingRoute,
	AppCalendarRoute,
	AppDashboardRoute,
	AppOrganizationsRoute,
	AppSettingsRoute,
	AppTasksRoute
};
var AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
var BuyerTransactionsRouteChildren = { BuyerTransactionsTransactionIdRoute };
var BuyerRouteChildren = {
	BuyerDashboardRoute,
	BuyerMatchesRoute,
	BuyerProfileRoute,
	BuyerTransactionsRoute: BuyerTransactionsRoute._addFileChildren(BuyerTransactionsRouteChildren)
};
var BuyerRouteWithChildren = BuyerRoute._addFileChildren(BuyerRouteChildren);
var PropertiesRouteChildren = { PropertiesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRouteWithChildren,
	BuyRoute,
	BuyerRoute: BuyerRouteWithChildren,
	CompareRoute,
	DemoRoute,
	FavoritesRoute,
	LoginRoute,
	MortgageCalculatorRoute,
	PropertiesRoute: PropertiesRoute._addFileChildren(PropertiesRouteChildren),
	RentRoute,
	SellRoute
};
var routeTree = Route$40._addFileChildren(rootRouteChildren)._addFileTypes();
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
