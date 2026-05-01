import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as PageHeader } from "./PageHeader-fKJQFkAH.js";
import { f as TRANSACTION_STAGE_LABELS, p as TRANSACTION_STATUS_LABELS } from "./crm-labels-D8Q8XEcK.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { s as listTransactions } from "./transactions-crud-D0Qa66z-.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/transactions/TransactionsTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/transactions/TransactionsTable.tsx";
function formatMoney(value) {
	if (value == null) return "—";
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function TransactionsTable({ transactions }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Propiedad"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Buyer / Seller"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Agente"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 23,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Etapa"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 24,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Precio"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Accion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 27,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: transactions.map((tx) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: tx.propertyTitle
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 33,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: [
								tx.buyerName,
								" / ",
								tx.sellerName
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 34,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: tx.agentName
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 35,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: TRANSACTION_STAGE_LABELS[tx.currentStage] ?? tx.currentStage
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: TRANSACTION_STATUS_LABELS[tx.status] ?? tx.status
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 37,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: formatMoney(tx.acceptedPrice ?? tx.offeredPrice)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 38,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/app/transactions/$transactionId",
								params: { transactionId: tx.id },
								className: "font-semibold text-emerald-700",
								children: "Ver detalle"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 40,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 39,
							columnNumber: 15
						}, this)
					]
				}, tx.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 32,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 30,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/transactions/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/index.tsx?tsr-split=component";
function TransactionsIndexPage() {
	const fetchTransactions = useServerFn(listTransactions);
	const query = useQuery({
		queryKey: ["crm-transactions"],
		queryFn: () => fetchTransactions()
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Operaciones",
			description: "Pipeline de compra/venta entre buyer, seller y property.",
			actions: /* @__PURE__ */ jsxDEV(Link, {
				to: "/app/transactions/new",
				className: "inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600",
				children: "Nueva operacion"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 119
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar las operaciones." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 24
		}, this) : null,
		query.data && query.data.transactions.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin operaciones",
			hint: "Crea una operacion para conectar buyer/seller/property/agent."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 61
		}, this) : null,
		query.data && query.data.transactions.length > 0 ? /* @__PURE__ */ jsxDEV(TransactionsTable, { transactions: query.data.transactions }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 59
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { TransactionsIndexPage as component };
