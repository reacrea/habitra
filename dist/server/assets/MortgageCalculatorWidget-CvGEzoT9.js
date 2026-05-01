import { t as simulateMortgage } from "./mortgage-7e12zTH9.js";
import { useMemo, useState } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/MortgageCalculatorWidget.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/public/MortgageCalculatorWidget.tsx";
function MortgageCalculatorWidget({ defaultPrice = 25e5, title = "Simulador hipotecario", compact = false }) {
	const [propertyPrice, setPropertyPrice] = useState(defaultPrice);
	const [downPayment, setDownPayment] = useState(Math.round(defaultPrice * .2));
	const [years, setYears] = useState(20);
	const [annualRate, setAnnualRate] = useState(10.5);
	const [notaryCostPct, setNotaryCostPct] = useState(6);
	const [appraisalCost, setAppraisalCost] = useState(12e3);
	const [otherCosts, setOtherCosts] = useState(8e3);
	const [monthlyIncome, setMonthlyIncome] = useState(0);
	const result = useMemo(() => simulateMortgage({
		propertyPrice,
		downPayment,
		years,
		annualRate,
		notaryCostPct,
		appraisalCost,
		otherCosts,
		monthlyIncome: monthlyIncome > 0 ? monthlyIncome : null
	}), [
		annualRate,
		appraisalCost,
		downPayment,
		monthlyIncome,
		notaryCostPct,
		otherCosts,
		propertyPrice,
		years
	]);
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Estimacion orientativa basada en parametros editables."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: `mt-4 grid gap-2 ${compact ? "grid-cols-1" : "md:grid-cols-2"}`,
				children: [
					/* @__PURE__ */ jsxDEV("input", {
						type: "number",
						min: 1,
						value: propertyPrice,
						onChange: (e) => setPropertyPrice(Number(e.target.value)),
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Precio"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						type: "number",
						min: 0,
						value: downPayment,
						onChange: (e) => setDownPayment(Number(e.target.value)),
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Enganche"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						type: "number",
						min: 1,
						max: 40,
						value: years,
						onChange: (e) => setYears(Number(e.target.value)),
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Anos"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						type: "number",
						min: 0,
						max: 100,
						step: "0.1",
						value: annualRate,
						onChange: (e) => setAnnualRate(Number(e.target.value)),
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Tasa anual %"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					!compact ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
						/* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: notaryCostPct,
							onChange: (e) => setNotaryCostPct(Number(e.target.value)),
							className: "rounded-xl border px-3 py-2 text-sm",
							placeholder: "% notaria"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: appraisalCost,
							onChange: (e) => setAppraisalCost(Number(e.target.value)),
							className: "rounded-xl border px-3 py-2 text-sm",
							placeholder: "Avaluo"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: otherCosts,
							onChange: (e) => setOtherCosts(Number(e.target.value)),
							className: "rounded-xl border px-3 py-2 text-sm",
							placeholder: "Otros costos"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: monthlyIncome,
							onChange: (e) => setMonthlyIncome(Number(e.target.value)),
							className: "rounded-xl border px-3 py-2 text-sm",
							placeholder: "Ingreso mensual (opcional)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this)
					] }, void 0, true) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900",
				children: [
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Mensualidad estimada:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 12
						}, this),
						" $",
						result.estimatedMonthly.toLocaleString("es-MX")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Costos de cierre:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 12
						}, this),
						" $",
						result.estimatedClosingCosts.toLocaleString("es-MX")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Total inicial:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 12
						}, this),
						" $",
						result.initialTotalNeeded.toLocaleString("es-MX")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Ratio:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 12
						}, this),
						" ",
						result.affordabilityRatio.toFixed(2)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Recomendacion:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 12
						}, this),
						" ",
						result.recommendation
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
//#endregion
export { MortgageCalculatorWidget as t };
