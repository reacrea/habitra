import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { n as financialSimulationSchema } from "./phase8-BCoPc5mU.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/server/financial-simulator.ts
var getFinancialSimulationOptions = createServerFn({ method: "GET" }).handler(createSsrRpc("70e854e4f79775e7edc3eed5d0674373d12648d913d003034cc63288978db009"));
var runFinancialSimulation = createServerFn({ method: "POST" }).inputValidator((data) => financialSimulationSchema.parse(data)).handler(createSsrRpc("18d22bfe3612c3f8eeab69f8735b3766b2998b250008ecdf07fe588b4212b0dc"));
//#endregion
//#region src/routes/app/reports/simulator.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/reports/simulator.tsx?tsr-split=component";
function FinancialSimulatorPage() {
	const fetchOptions = useServerFn(getFinancialSimulationOptions);
	const simulateFn = useServerFn(runFinancialSimulation);
	const optionsQuery = useQuery({
		queryKey: ["financial-simulation-options"],
		queryFn: () => fetchOptions()
	});
	const mutation = useMutation({ mutationFn: (payload) => simulateFn({ data: payload }) });
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Simulador financiero",
				description: "Calcula mensualidad, costos de cierre y recomendacion."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			optionsQuery.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando opciones..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 33
			}, this) : null,
			optionsQuery.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar opciones de simulacion." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 31
			}, this) : null,
			mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 27
			}, this) : null,
			optionsQuery.data ? /* @__PURE__ */ jsxDEV("form", {
				className: "grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2",
				onSubmit: (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					mutation.mutate({
						buyerId: String(fd.get("buyerId") ?? "") || void 0,
						propertyId: String(fd.get("propertyId") ?? "") || void 0,
						transactionId: String(fd.get("transactionId") ?? "") || void 0,
						propertyPrice: Number(fd.get("propertyPrice")),
						downPayment: Number(fd.get("downPayment")),
						years: Number(fd.get("years")),
						annualRate: Number(fd.get("annualRate")),
						creditType: String(fd.get("creditType")),
						notaryCostPct: Number(fd.get("notaryCostPct")),
						appraisalCost: Number(fd.get("appraisalCost")),
						otherCosts: Number(fd.get("otherCosts")),
						monthlyIncome: fd.get("monthlyIncome") ? Number(fd.get("monthlyIncome")) : void 0
					});
				},
				children: [
					/* @__PURE__ */ jsxDEV("select", {
						name: "buyerId",
						className: "rounded-xl border px-3 py-2",
						children: [/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Buyer (opcional)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this), optionsQuery.data.buyers.map((x) => /* @__PURE__ */ jsxDEV("option", {
							value: x.id,
							children: x.label
						}, x.id, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 48
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("select", {
						name: "propertyId",
						className: "rounded-xl border px-3 py-2",
						children: [/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Property (opcional)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this), optionsQuery.data.properties.map((x) => /* @__PURE__ */ jsxDEV("option", {
							value: x.id,
							children: x.label
						}, x.id, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 52
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "propertyPrice",
						type: "number",
						min: 1,
						required: true,
						placeholder: "Precio propiedad",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "downPayment",
						type: "number",
						min: 0,
						required: true,
						placeholder: "Enganche",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "years",
						type: "number",
						min: 1,
						max: 40,
						required: true,
						placeholder: "Plazo años",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "annualRate",
						type: "number",
						min: 0,
						max: 100,
						required: true,
						placeholder: "Tasa anual %",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("select", {
						name: "creditType",
						defaultValue: "BANCARIO",
						className: "rounded-xl border px-3 py-2",
						children: [
							/* @__PURE__ */ jsxDEV("option", {
								value: "BANCARIO",
								children: "Bancario"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "INFONAVIT",
								children: "Infonavit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "FOVISSSTE",
								children: "Fovissste"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "COFINAVIT",
								children: "Cofinavit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "CONTADO",
								children: "Contado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "MIXTO",
								children: "Mixto"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "OTRO",
								children: "Otro"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "notaryCostPct",
						type: "number",
						min: 0,
						max: 30,
						defaultValue: 6,
						required: true,
						placeholder: "% notaria",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "appraisalCost",
						type: "number",
						min: 0,
						defaultValue: 12e3,
						required: true,
						placeholder: "Costo avaluo",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "otherCosts",
						type: "number",
						min: 0,
						defaultValue: 8e3,
						required: true,
						placeholder: "Otros costos",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						name: "monthlyIncome",
						type: "number",
						min: 0,
						placeholder: "Ingreso mensual (opcional)",
						className: "rounded-xl border px-3 py-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("button", {
						disabled: mutation.isPending,
						className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white md:col-span-2",
						children: mutation.isPending ? "Simulando..." : "Ejecutar simulacion"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 28
			}, this) : null,
			mutation.data ? /* @__PURE__ */ jsxDEV("div", {
				className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900",
				children: [
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Mensualidad estimada:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 14
						}, this),
						" $",
						mutation.data.estimatedMonthly.toLocaleString("es-MX")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Costos cierre:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 14
						}, this),
						" $",
						mutation.data.estimatedClosingCosts.toLocaleString("es-MX")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Total inicial:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 14
						}, this),
						" $",
						mutation.data.initialTotalNeeded.toLocaleString("es-MX")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Affordability ratio:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 14
						}, this),
						" ",
						mutation.data.affordabilityRatio.toFixed(2)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", { children: [
						/* @__PURE__ */ jsxDEV("strong", { children: "Recomendacion:" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 14
						}, this),
						" ",
						mutation.data.recommendation
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 24
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 10
	}, this);
}
//#endregion
export { FinancialSimulatorPage as component };
