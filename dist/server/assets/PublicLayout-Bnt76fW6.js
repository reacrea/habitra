import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
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
					lineNumber: 22,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "mt-2 flex flex-col gap-1 text-slate-600",
					children: [/* @__PURE__ */ jsxDEV(Link, {
						to: "/demo",
						children: "Solicitar demo"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 24,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV(Link, {
						to: "/login",
						children: "Acceso agentes"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 25,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 23,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 21,
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
function PublicHeader() {
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
					lineNumber: 7,
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
							lineNumber: 11,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/rent",
							className: "hover:text-habitra-action",
							children: "Rentar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 14,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/sell",
							className: "hover:text-habitra-action",
							children: "Vender"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 17,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsxDEV(Link, {
						to: "/login",
						className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
						children: "Iniciar sesion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV(Link, {
						to: "/app/dashboard",
						className: "rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white",
						children: "CRM"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 21,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 5,
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
