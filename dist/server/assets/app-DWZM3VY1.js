import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-C40XB0cl.js";
import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as parseUserRole } from "./user-role-sJpbyopw.js";
import { t as authClient } from "./auth-client-DFSYLhDk.js";
import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
import { BarChart3, Building2, Calendar, ClipboardList, CreditCard, FileText, Handshake, Home, LayoutDashboard, ListTodo, LogOut, Menu, Settings, Shield, UserRound, Users, X } from "lucide-react";
//#region src/constants/app-nav.ts
var agentBrokerRoles = [
	"AGENT",
	"BROKER_OWNER",
	"ADMIN"
];
var mainNavGroups = [{
	label: "Principal",
	items: [
		{
			to: "/app/dashboard",
			label: "Dashboard",
			icon: LayoutDashboard
		},
		{
			to: "/app/transactions",
			label: "Mis operaciones",
			icon: ClipboardList,
			roles: ["BUYER", "SELLER"]
		},
		{
			to: "/app/leads",
			label: "Leads",
			icon: Handshake,
			roles: agentBrokerRoles
		},
		{
			to: "/app/buyers",
			label: "Compradores",
			icon: Users,
			roles: agentBrokerRoles
		},
		{
			to: "/app/sellers",
			label: "Vendedores",
			icon: UserRound,
			roles: agentBrokerRoles
		},
		{
			to: "/app/properties",
			label: "Propiedades",
			icon: Home,
			roles: agentBrokerRoles
		},
		{
			to: "/app/transactions",
			label: "Operaciones",
			icon: ClipboardList,
			roles: agentBrokerRoles
		},
		{
			to: "/app/documents",
			label: "Documentos",
			icon: FileText,
			roles: agentBrokerRoles
		},
		{
			to: "/app/calendar",
			label: "Calendario",
			icon: Calendar,
			roles: agentBrokerRoles
		},
		{
			to: "/app/tasks",
			label: "Tareas",
			icon: ListTodo,
			roles: agentBrokerRoles
		},
		{
			to: "/app/reports",
			label: "Reportes",
			icon: BarChart3,
			roles: agentBrokerRoles
		},
		{
			to: "/app/settings",
			label: "Configuracion",
			icon: Settings
		}
	]
}, {
	label: "Admin",
	items: [
		{
			to: "/app/admin",
			label: "Panel admin",
			icon: Shield,
			roles: ["ADMIN"]
		},
		{
			to: "/app/billing",
			label: "Billing",
			icon: CreditCard,
			roles: ["ADMIN", "BROKER_OWNER"]
		},
		{
			to: "/app/organizations",
			label: "Organizaciones",
			icon: Building2,
			roles: ["ADMIN"]
		}
	]
}];
function filterNavForRole(role) {
	return mainNavGroups.map((group) => ({
		...group,
		items: group.items.filter((item) => {
			if (!item.roles) return true;
			return item.roles.includes(role);
		})
	})).filter((group) => group.items.length > 0);
}
//#endregion
//#region src/server/app-layout-data.ts
var getAppLayoutData = createServerFn({ method: "GET" }).handler(createSsrRpc("602b14db23b728ffff78855a6f6b774c5dabf80cb08b198d6b7642747afbba79"));
//#endregion
//#region src/components/layout/Sidebar.tsx
var _jsxFileName$4 = "C:/Jcrea/Projects/Habitra/src/components/layout/Sidebar.tsx";
function NavLink({ to, label, icon: Icon, onNavigate }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ jsxDEV(Link, {
		to,
		onClick: () => onNavigate?.(),
		className: `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${pathname === to || to !== "/app/dashboard" && pathname.startsWith(`${to}/`) ? "bg-emerald-500/15 text-emerald-100" : "text-emerald-50/85 hover:bg-white/10 hover:text-white"}`,
		children: [/* @__PURE__ */ jsxDEV(Icon, {
			className: "size-4 shrink-0 opacity-90",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 37,
			columnNumber: 7
		}, this), label]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
function Sidebar({ groups, organizationLabel, onNavigate, className = "" }) {
	return /* @__PURE__ */ jsxDEV("aside", {
		className: `flex w-64 shrink-0 flex-col border-r border-emerald-900/40 bg-habitra-deep ${className}`,
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "border-b border-white/10 px-5 py-6",
			children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-emerald-200/80",
					children: "Habitra"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-lg font-semibold text-white",
					children: "Operaciones"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				organizationLabel ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 truncate text-xs text-emerald-100/70",
					title: organizationLabel,
					children: organizationLabel
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 52,
					columnNumber: 11
				}, this) : null
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 48,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("nav", {
			className: "flex-1 space-y-6 overflow-y-auto px-3 py-4",
			children: groups.map((group) => /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
				className: "px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-200/60",
				children: group.label
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 60,
				columnNumber: 13
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-col gap-0.5",
				children: group.items.map((item) => /* @__PURE__ */ jsxDEV(NavLink, {
					to: item.to,
					label: item.label,
					icon: item.icon,
					onNavigate
				}, item.to, false, {
					fileName: _jsxFileName$4,
					lineNumber: 65,
					columnNumber: 17
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 63,
				columnNumber: 13
			}, this)] }, group.label, true, {
				fileName: _jsxFileName$4,
				lineNumber: 59,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 57,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/layout/MobileNav.tsx
var _jsxFileName$3 = "C:/Jcrea/Projects/Habitra/src/components/layout/MobileNav.tsx";
function MobileNav({ open, onOpenChange, groups, organizationLabel }) {
	useEffect(() => {
		if (open) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	if (!open) return null;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "fixed inset-0 z-40 md:hidden",
		role: "dialog",
		"aria-modal": "true",
		children: [/* @__PURE__ */ jsxDEV("button", {
			type: "button",
			className: "absolute inset-0 bg-slate-900/50 backdrop-blur-sm",
			"aria-label": "Cerrar menu",
			onClick: () => onOpenChange(false)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 33,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "absolute left-0 top-0 flex h-full w-[min(100%,20rem)] flex-col shadow-xl",
			children: [/* @__PURE__ */ jsxDEV("div", {
				className: "flex items-center justify-end border-b border-white/10 bg-habitra-deep px-2 py-2",
				children: /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					className: "rounded-xl p-2 text-white hover:bg-white/10",
					onClick: () => onOpenChange(false),
					"aria-label": "Cerrar navegacion",
					children: /* @__PURE__ */ jsxDEV(X, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 47,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 41,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 40,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV(Sidebar, {
				groups,
				organizationLabel,
				onNavigate: () => onOpenChange(false),
				className: "w-full border-0"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 50,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 39,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/layout/Topbar.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/layout/Topbar.tsx";
function Topbar({ title, userName, userEmail, onMenuClick, onSignOut }) {
	return /* @__PURE__ */ jsxDEV("header", {
		className: "sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur md:px-6",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ jsxDEV("button", {
				type: "button",
				className: "inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 md:hidden",
				onClick: onMenuClick,
				"aria-label": "Abrir menu",
				children: /* @__PURE__ */ jsxDEV(Menu, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 22,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ jsxDEV("h2", {
					className: "truncate text-base font-semibold text-habitra-text md:text-lg",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 25,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 15,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "flex shrink-0 items-center gap-3",
			children: [
				/* @__PURE__ */ jsxDEV("div", {
					className: "hidden text-right sm:block",
					children: [/* @__PURE__ */ jsxDEV("p", {
						className: "truncate text-sm font-medium text-habitra-text",
						children: userName
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 30,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("p", {
						className: "truncate text-xs text-slate-500",
						children: userEmail
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 31,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(Link, {
					to: "/",
					className: "hidden rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 sm:inline-flex",
					children: "Sitio publico"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 33,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onSignOut,
					className: "inline-flex items-center gap-2 rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600",
					children: [/* @__PURE__ */ jsxDEV(LogOut, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("span", {
						className: "hidden sm:inline",
						children: "Salir"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 39,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 28,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/layout/AppShell.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/layout/AppShell.tsx";
function titleFromPath(pathname) {
	if (pathname.startsWith("/app/dashboard")) return "Dashboard";
	const segment = pathname.replace("/app/", "").split("/")[0];
	if (!segment) return "Habitra";
	return segment.charAt(0).toUpperCase() + segment.slice(1).replaceAll("-", " ");
}
function AppShellLayout() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { data: session, isPending: sessionPending } = authClient.useSession();
	const fetchLayout = useServerFn(getAppLayoutData);
	const layoutQuery = useQuery({
		queryKey: ["app-layout-data"],
		queryFn: () => fetchLayout(),
		enabled: !sessionPending && Boolean(session?.user)
	});
	const role = useMemo(() => {
		const u = session?.user;
		return parseUserRole(u?.role);
	}, [session?.user]);
	const navGroups = useMemo(() => filterNavForRole(role), [role]);
	const user = session?.user;
	const displayName = user?.name ?? "Usuario";
	const displayEmail = user?.email ?? "";
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-h-screen bg-gradient-to-b from-stone-50 to-habitra-beige/40",
		children: [
			/* @__PURE__ */ jsxDEV(Sidebar, {
				groups: navGroups,
				organizationLabel: layoutQuery.data?.organizationName,
				className: "hidden md:flex"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(MobileNav, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				groups: navGroups,
				organizationLabel: layoutQuery.data?.organizationName
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 64,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ jsxDEV(Topbar, {
					title: titleFromPath(pathname),
					userName: displayName,
					userEmail: displayEmail,
					onMenuClick: () => setMobileOpen(true),
					onSignOut: () => {
						authClient.signOut().then(() => {
							window.location.assign("/login");
						});
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 71,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("main", {
					className: "flex-1 px-4 py-6 md:px-8",
					children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 83,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 82,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 70,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 58,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app.tsx?tsr-split=component";
function AppShell() {
	return /* @__PURE__ */ jsxDEV(AppShellLayout, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { AppShell as component };
