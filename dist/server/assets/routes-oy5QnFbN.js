import { t as Route } from "./routes-CmoE6dgL.js";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/index.tsx?tsr-split=component";
function LandingPage() {
	const message = Route.useLoaderData();
	return /* @__PURE__ */ jsxDEV("main", {
		className: "min-h-screen bg-stone-50 text-slate-800",
		children: /* @__PURE__ */ jsxDEV("section", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20",
			children: [
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm font-semibold uppercase tracking-wide text-emerald-700",
					children: "Habitra"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 7,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("h1", {
					className: "max-w-3xl text-4xl font-bold leading-tight md:text-6xl",
					children: "Compra, vende y cierra propiedades con claridad."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 8,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "max-w-2xl text-lg text-slate-600",
					children: [message, ". Habitra organiza leads, documentos, compradores, vendedores y operaciones en un solo lugar."]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsxDEV(Link, {
						to: "/demo",
						className: "rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700",
						children: "Solicitar demo"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 16,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV(Link, {
						to: "/app/dashboard",
						className: "rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50",
						children: "Ver plataforma"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { LandingPage as component };
