import { t as canAccessCrm } from "./crm-role-CsXre7wn.js";
import { t as parseUserRole } from "./user-role-CRCPQyMw.js";
import { t as authClient } from "./auth-client-C-8kn0qt.js";
import { Link } from "@tanstack/react-router";
import { UserRole } from "@prisma/client";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/PublicFooter.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/public/PublicFooter.tsx";
function PublicFooter() {
	return /* @__PURE__ */ jsxDEV("footer", {
		className: "border-t border-slate-200 bg-white",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm md:grid-cols-3 md:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "text-base font-semibold text-habitra-text",
					children: "Habitra"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 8,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-slate-600",
					children: "Plataforma de compra inteligente para encontrar propiedades que si puedes comprar."
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 9,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 7,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "font-semibold text-habitra-text",
					children: "Explorar"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "mt-2 flex flex-col gap-1 text-slate-600",
					children: [
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/buy",
							children: "Comprar"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 16,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/rent",
							children: "Rentar"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 17,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/sell",
							children: "Vender"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 18,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/zones",
							children: "Zonas"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 19,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 15,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "font-semibold text-habitra-text",
					children: "Plataforma"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 23,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "mt-2 flex flex-col gap-1 text-slate-600",
					children: [/* @__PURE__ */ jsxDEV(Link, {
						to: "/demo",
						children: "Solicitar demo"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 25,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV(Link, {
						to: "/login",
						children: "Acceso agentes"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 26,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 24,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 22,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PublicHeader.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/public/PublicHeader.tsx";
/** Avatar: CRM al dashboard interno; comprador al portal buyer; otros (p. ej. seller B2C) al inicio. */
function getAvatarDestination(role) {
	if (!role) return "/buyer/dashboard";
	const r = parseUserRole(role);
	if (canAccessCrm(r)) return "/app/dashboard";
	if (r === UserRole.BUYER) return "/buyer/dashboard";
	return "/";
}
function getUserInitial(name) {
	const raw = name?.trim();
	if (!raw) return "U";
	return raw.charAt(0).toUpperCase();
}
function PublicHeader() {
	const { data: session } = authClient.useSession();
	const user = session?.user;
	const isAuthenticated = Boolean(user);
	const userRole = user?.role ?? null;
	const showCrm = userRole ? canAccessCrm(parseUserRole(userRole)) : false;
	const profileRoute = getAvatarDestination(userRole);
	return /* @__PURE__ */ jsxDEV("header", {
		className: "sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6",
			children: [
				/* @__PURE__ */ jsxDEV(Link, {
					to: "/",
					className: "text-lg font-bold text-habitra-text",
					children: "Habitra"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("nav", {
					className: "hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex",
					children: [
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/buy",
							className: "hover:text-habitra-action",
							children: "Comprar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 42,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/rent",
							className: "hover:text-habitra-action",
							children: "Rentar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/sell",
							className: "hover:text-habitra-action",
							children: "Vender"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 48,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/mortgage-calculator",
							className: "hover:text-habitra-action",
							children: "Calculadora"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/favorites",
							className: "hover:text-habitra-action",
							children: "Favoritos"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 54,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/compare",
							className: "hover:text-habitra-action",
							children: "Comparar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/buyer/dashboard",
							className: "hover:text-habitra-action",
							children: "Mi compra"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 60,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex items-center gap-2",
					children: !isAuthenticated ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("a", {
						href: "/register",
						className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
						children: "Registrarse"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 67,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV(Link, {
						to: "/login",
						className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
						children: "Iniciar sesion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 73,
						columnNumber: 15
					}, this)] }, void 0, true) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
						showCrm ? /* @__PURE__ */ jsxDEV(Link, {
							to: "/app/dashboard",
							className: "rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white",
							children: "CRM"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 80,
							columnNumber: 17
						}, this) : null,
						/* @__PURE__ */ jsxDEV(Link, {
							to: profileRoute,
							className: "flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs font-bold text-slate-700",
							"aria-label": "Ir a mi perfil",
							children: getUserInitial(user?.name)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 84,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("button", {
							type: "button",
							onClick: () => {
								authClient.signOut().then(() => {
									window.location.assign("/login");
								});
							},
							className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
							children: "Cerrar sesion"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 91,
							columnNumber: 15
						}, this)
					] }, void 0, true)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 64,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 37,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 36,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PublicLayout.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/public/PublicLayout.tsx";
function PublicLayout({ children }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "min-h-screen bg-gradient-to-b from-stone-50 to-habitra-beige/40 text-slate-800",
		children: [
			/* @__PURE__ */ jsxDEV(PublicHeader, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("main", { children }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(PublicFooter, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
//#endregion
export { PublicLayout as t };
