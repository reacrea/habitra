import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-B4LS3d6E.js";
import { t as getBuyerDashboardData } from "./buyer-portal-DmP1pC4T.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/buyer/dashboard.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/buyer/dashboard.tsx?tsr-split=component";
function BuyerDashboardPage() {
	const fetchFn = useServerFn(getBuyerDashboardData);
	const query = useQuery({
		queryKey: ["buyer-dashboard"],
		queryFn: () => fetchFn()
	});
	if (query.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando dashboard buyer..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 31
	}, this);
	if (query.isError || !query.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el dashboard del comprador." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 44
	}, this);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Mi dashboard"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Resumen de avance de compra y recomendaciones."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxDEV(MetricCard, {
						label: "Transacciones activas",
						value: String(query.data.metrics.activeTransactions)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						label: "Documentos pendientes",
						value: String(query.data.metrics.pendingDocuments)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV(MetricCard, {
						label: "Matches sugeridos",
						value: String(query.data.metrics.matches)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Transacciones recientes"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: query.data.recentTransactions.map((trx) => /* @__PURE__ */ jsxDEV("li", {
						className: "rounded-lg border border-slate-100 p-3",
						children: [
							/* @__PURE__ */ jsxDEV("p", {
								className: "font-semibold",
								children: trx.propertyTitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-slate-600",
								children: [
									trx.status,
									" · ",
									trx.currentStage,
									" · Agente: ",
									trx.agentName
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV(Link, {
								to: "/buyer/transactions/$transactionId",
								params: { transactionId: trx.id },
								className: "mt-1 inline-block text-emerald-700",
								children: "Ver detalle"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 15
							}, this)
						]
					}, trx.id, true, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 53
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-emerald-900",
					children: "Insight AI"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-emerald-900",
					children: query.data.ai.summary
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
function MetricCard({ label, value }) {
	return /* @__PURE__ */ jsxDEV("article", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [/* @__PURE__ */ jsxDEV("p", {
			className: "text-sm text-slate-600",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("p", {
			className: "mt-2 text-2xl font-bold text-habitra-text",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyerDashboardPage as component };
