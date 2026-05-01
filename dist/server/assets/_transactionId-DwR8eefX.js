import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as Route } from "./_transactionId-DQxppBbQ.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-B4LS3d6E.js";
import { i as getBuyerTransactionDetailData } from "./buyer-portal-DmP1pC4T.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/buyer/transactions/$transactionId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/buyer/transactions/$transactionId.tsx?tsr-split=component";
function BuyerTransactionDetailPage() {
	const { transactionId } = Route.useParams();
	const fetchFn = useServerFn(getBuyerTransactionDetailData);
	const query = useQuery({
		queryKey: ["buyer-transaction-detail", transactionId],
		queryFn: () => fetchFn({ data: { id: transactionId } }),
		enabled: Boolean(transactionId)
	});
	if (query.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando detalle de transaccion..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 31
	}, this);
	if (query.isError || !query.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el detalle de la transaccion." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 44
	}, this);
	const { transaction, documents, timeline, tasks, ai } = query.data;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/buyer/transactions",
						className: "text-sm font-semibold text-emerald-700",
						children: "Volver"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "text-3xl font-bold text-habitra-text",
						children: transaction.property.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: [
							transaction.status,
							" · ",
							transaction.currentStage
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Timeline"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: timeline.map((t) => /* @__PURE__ */ jsxDEV("li", {
						className: "rounded-lg border border-slate-100 px-3 py-2",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "font-semibold",
							children: t.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("p", {
							className: "text-slate-600",
							children: t.status
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 15
						}, this)]
					}, t.id, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Documentos"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: documents.map((d) => /* @__PURE__ */ jsxDEV("li", {
						className: "rounded-lg border border-slate-100 px-3 py-2",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "font-semibold",
							children: d.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("p", {
							className: "text-slate-600",
							children: [
								d.type,
								" · ",
								d.status
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 15
						}, this)]
					}, d.id, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Tasks relacionadas"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: tasks.map((t) => /* @__PURE__ */ jsxDEV("li", {
						className: "rounded-lg border border-slate-100 px-3 py-2",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "font-semibold",
							children: t.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("p", {
							className: "text-slate-600",
							children: [t.status, t.dueDate ? ` · ${new Date(t.dueDate).toLocaleDateString("es-MX")}` : ""]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 15
						}, this)]
					}, t.id, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 27
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-emerald-900",
					children: "AI insight"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-emerald-900",
					children: ai.summary
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyerTransactionDetailPage as component };
