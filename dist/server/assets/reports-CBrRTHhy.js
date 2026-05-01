import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BfYjltVw.js";
import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-Bh_vY4LQ.js";
import { t as PageHeader } from "./PageHeader-C8OGwtR3.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region src/server/reports-data.ts
var getReportsData = createServerFn({ method: "GET" }).handler(createSsrRpc("c7fbf06e5cb79b7cb65cd4e096ea781f84cecfb92d6aae8dca822103eef2e49a"));
//#endregion
//#region src/routes/app/reports/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/reports/index.tsx?tsr-split=component";
function ChartCard({ title, data }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
		children: [/* @__PURE__ */ jsxDEV("h3", {
			className: "mb-3 text-sm font-semibold text-habitra-text",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "h-64",
			children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ jsxDEV(BarChart, {
					data,
					children: [
						/* @__PURE__ */ jsxDEV(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "#e5e7eb"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(XAxis, {
							dataKey: "key",
							tick: { fontSize: 10 }
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(YAxis, {
							allowDecimals: false,
							tick: { fontSize: 11 }
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Tooltip, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Bar, {
							dataKey: "value",
							fill: "#22c55e",
							radius: [
								6,
								6,
								0,
								0
							]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 10
	}, this);
}
function ReportsPage() {
	const fetchReports = useServerFn(getReportsData);
	const query = useQuery({
		queryKey: ["reports-data"],
		queryFn: () => fetchReports()
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Reportes",
				description: "Indicadores de leads, operaciones y propiedades.",
				actions: /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(Link, {
					to: "/app/reports/simulator",
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold",
					children: "Simulador financiero"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV(Link, {
					to: "/app/reports/ai",
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
					children: "AI dummy"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 13
				}, this)] }, void 0, true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar reportes." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 24
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxDEV(ChartCard, {
						title: "Leads por estado",
						data: query.data.leadsByStatus
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV(ChartCard, {
						title: "Operaciones por etapa",
						data: query.data.transactionsByStage
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV(ChartCard, {
						title: "Propiedades por estado",
						data: query.data.propertiesByStatus
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV(ChartCard, {
						title: "Cierres por mes",
						data: query.data.closingsByMonth
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 21
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 10
	}, this);
}
//#endregion
export { ReportsPage as component };
