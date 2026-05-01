import { t as PublicLayout } from "./PublicLayout-Cr82Utv3.js";
import { t as MortgageCalculatorWidget } from "./MortgageCalculatorWidget-htsZLB7-.js";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/mortgage-calculator.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/mortgage-calculator.tsx?tsr-split=component";
function MortgageCalculatorPage() {
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-6",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ jsxDEV(Link, {
					to: "/properties",
					className: "text-sm font-semibold text-emerald-700",
					children: "Ver propiedades"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 8,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("h1", {
					className: "text-3xl font-bold text-habitra-text md:text-4xl",
					children: "Calculadora hipotecaria"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-slate-600",
					children: "Simula mensualidad, costos iniciales y viabilidad antes de agendar una visita."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 9
		}, this), /* @__PURE__ */ jsxDEV(MortgageCalculatorWidget, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { MortgageCalculatorPage as component };
