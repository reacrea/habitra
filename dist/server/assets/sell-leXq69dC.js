import { t as PublicLayout } from "./PublicLayout-Cr82Utv3.js";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/sell.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/sell.tsx?tsr-split=component";
function SellPage() {
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-5xl space-y-8 px-4 py-16 md:px-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm font-semibold uppercase tracking-wide text-emerald-700",
						children: "Vende con Habitra"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 7,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "text-4xl font-bold leading-tight text-habitra-text md:text-5xl",
						children: "Publica tu propiedad y cierra con mas claridad."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 8,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "max-w-3xl text-lg text-slate-600",
						children: "Ordenamos documentos, seguimiento comercial y operacion para que vender sea mas simple y confiable."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 11,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 6,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					"Valuacion y estrategia de precio",
					"Publicacion en canal digital",
					"Acompanamiento hasta cierre"
				].map((item) => /* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700",
					children: item
				}, item, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 124
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ jsxDEV(Link, {
					to: "/demo",
					className: "rounded-xl bg-habitra-action px-5 py-3 text-sm font-semibold text-white",
					children: "Solicitar asesoria"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV(Link, {
					to: "/app/properties",
					className: "rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700",
					children: "Ver CRM de propiedades"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 10
	}, this);
}
//#endregion
export { SellPage as component };
