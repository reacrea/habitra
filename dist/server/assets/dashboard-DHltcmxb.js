import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-C40XB0cl.js";
import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as PageHeader } from "./PageHeader-CFdE2-fE.js";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region src/components/layout/MetricCard.tsx
var _jsxFileName$3 = "C:/Jcrea/Projects/Habitra/src/components/layout/MetricCard.tsx";
function MetricCard({ title, value, hint, trend = "neutral" }) {
	const trendColor = trend === "up" ? "text-emerald-600" : trend === "down" ? "text-amber-600" : "text-slate-500";
	return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft",
		children: [
			/* @__PURE__ */ jsxDEV("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-2 text-2xl font-semibold text-habitra-text",
				children: value
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			hint ? /* @__PURE__ */ jsxDEV("p", {
				className: `mt-1 text-xs ${trendColor}`,
				children: hint
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 16,
				columnNumber: 15
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/dashboard/SimpleBarChart.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/dashboard/SimpleBarChart.tsx";
function SimpleBarChart({ title, data, emptyLabel = "Sin datos para graficar" }) {
	if (data.length === 0) return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500 shadow-soft",
		children: emptyLabel
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 22,
		columnNumber: 7
	}, this);
	const chartData = data.map((row) => ({
		name: row.stage.replaceAll("_", " "),
		total: row.count
	}));
	return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft md:p-6",
		children: [/* @__PURE__ */ jsxDEV("h3", {
			className: "mb-4 text-sm font-semibold text-habitra-text",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 35,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "h-64 w-full",
			children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ jsxDEV(BarChart, {
					data: chartData,
					margin: {
						top: 8,
						right: 8,
						left: 0,
						bottom: 32
					},
					children: [
						/* @__PURE__ */ jsxDEV(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "#e5e7eb"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 39,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(XAxis, {
							dataKey: "name",
							tick: { fontSize: 10 },
							interval: 0,
							angle: -25,
							textAnchor: "end",
							height: 60
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 40,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(YAxis, {
							allowDecimals: false,
							tick: { fontSize: 11 }
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Tooltip, { contentStyle: {
							borderRadius: 12,
							borderColor: "#e5e7eb",
							fontSize: 12
						} }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(Bar, {
							dataKey: "total",
							fill: "#22C55E",
							radius: [
								8,
								8,
								0,
								0
							],
							name: "Operaciones"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 38,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 37,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 36,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 34,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/dashboard/DashboardByRole.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/dashboard/DashboardByRole.tsx";
function formatMoney(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function DashboardByRole({ metrics }) {
	switch (metrics.role) {
		case "ADMIN": return /* @__PURE__ */ jsxDEV(Fragment, { children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Dashboard administrador",
				description: "Vision global de la plataforma y planes activos (datos seed)."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 24,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Organizaciones",
						value: metrics.organizations
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 29,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Usuarios",
						value: metrics.users
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Operaciones registradas",
						value: metrics.transactions
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 31,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Leads totales",
						value: metrics.leads
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 32,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "MRR estimado (seed)",
						value: formatMoney(metrics.estimatedMrr),
						hint: "Suma aproximada de suscripciones demo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 33,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-2",
				children: /* @__PURE__ */ jsxDEV(SimpleBarChart, {
					title: "Suscripciones activas por plan",
					data: metrics.plansBreakdown.map((p) => ({
						stage: p.planName,
						count: p.subscriptions
					})),
					emptyLabel: "Sin suscripciones en seed"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 40,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 39,
				columnNumber: 11
			}, this)
		] }, void 0, true);
		case "BROKER_OWNER": return /* @__PURE__ */ jsxDEV(Fragment, { children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Dashboard inmobiliaria",
				description: "Productividad y pipeline consolidado de tu organizacion."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 54,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Agentes",
						value: metrics.agents,
						hint: "Membresias con rol agente"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 59,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Operaciones activas",
						value: metrics.activeTransactions
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 60,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Leads",
						value: metrics.totalLeads
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Propiedades listadas",
						value: metrics.propertiesListed
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 62,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Valor pipeline",
						value: formatMoney(metrics.pipelineValue)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 63,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 58,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-8",
				children: /* @__PURE__ */ jsxDEV(SimpleBarChart, {
					title: "Operaciones por etapa",
					data: metrics.pipelineByStage
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 66,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 65,
				columnNumber: 11
			}, this)
		] }, void 0, true);
		case "AGENT": return /* @__PURE__ */ jsxDEV(Fragment, { children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Dashboard agente",
				description: "Prioriza leads, operaciones y documentacion con datos en vivo del seed."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 73,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Leads nuevos",
						value: metrics.newLeads
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 78,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Operaciones activas",
						value: metrics.activeTransactions
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Propiedades activas",
						value: metrics.activeProperties
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 80,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Compradores calificados",
						value: metrics.qualifiedBuyers,
						hint: "Score 70 o mas"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 81,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						title: "Valor pipeline",
						value: formatMoney(metrics.pipelineValue)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 82,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 11
			}, this),
			metrics.alerts.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
				className: "mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900",
				children: [/* @__PURE__ */ jsxDEV("p", {
					className: "font-semibold",
					children: "Alertas"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 86,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-2 list-disc space-y-1 pl-5",
					children: metrics.alerts.map((a) => /* @__PURE__ */ jsxDEV("li", { children: a }, a, false, {
						fileName: _jsxFileName$1,
						lineNumber: 89,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 87,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 85,
				columnNumber: 13
			}, this) : null,
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-8",
				children: /* @__PURE__ */ jsxDEV(SimpleBarChart, {
					title: "Pipeline por etapa (tus operaciones)",
					data: metrics.pipelineByStage
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 95,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 94,
				columnNumber: 11
			}, this)
		] }, void 0, true);
		case "BUYER": return /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Dashboard comprador",
			description: "Tu perfil financiero y actividad conectada al seed demo."
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 102,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Operaciones",
					value: metrics.transactions
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 107,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Documentos",
					value: metrics.documents
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 108,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Simulaciones guardadas",
					value: metrics.simulations
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 109,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Score de compra (dummy)",
					value: metrics.buyingScore ?? "—",
					hint: "Se refina en modulos de scoring"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 110,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Presupuesto maximo",
					value: metrics.maxBudget != null ? formatMoney(metrics.maxBudget) : "—"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 115,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 106,
			columnNumber: 11
		}, this)] }, void 0, true);
		case "SELLER": return /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Dashboard vendedor",
			description: "Estado de tus propiedades y documentacion asociada al seed."
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 125,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Propiedades",
					value: metrics.properties
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 130,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Operaciones",
					value: metrics.transactions
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 131,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Documentos",
					value: metrics.documents
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 132,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(MetricCard, {
					title: "Readiness promedio",
					value: `${metrics.readinessAvg}%`,
					hint: "Promedio de readinessScore en tus propiedades"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 133,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 129,
			columnNumber: 11
		}, this)] }, void 0, true);
		default: return null;
	}
}
//#endregion
//#region src/server/dashboard-metrics.ts
var getDashboardMetrics = createServerFn({ method: "GET" }).handler(createSsrRpc("733d61339d01d5150d0dd72aaee28e5ecbe2e0c9c3c1974e8c0d7865daf2609c"));
//#endregion
//#region src/routes/app/dashboard.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/dashboard.tsx?tsr-split=component";
function AppDashboardPage() {
	const fetchMetrics = useServerFn(getDashboardMetrics);
	const metricsQuery = useQuery({
		queryKey: ["dashboard-metrics"],
		queryFn: () => fetchMetrics()
	});
	if (metricsQuery.isPending) return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-h-[40vh] items-center justify-center rounded-2xl border border-slate-200 bg-white/80 p-8 text-sm text-slate-600 shadow-soft",
		children: "Cargando metricas del dashboard..."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 12
	}, this);
	if (metricsQuery.isError) return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800",
		children: "No se pudieron cargar las metricas. Verifica sesion y base de datos."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 12
	}, this);
	if (!metricsQuery.data) return null;
	return /* @__PURE__ */ jsxDEV(DashboardByRole, { metrics: metricsQuery.data }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
//#endregion
export { AppDashboardPage as component };
