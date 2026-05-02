import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, n as CrmFilterNumberRange, r as CrmFilterSelect } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { f as TRANSACTION_STAGE_LABELS, p as TRANSACTION_STATUS_LABELS } from "./crm-labels-DF9xqjOX.js";
import { c as useCrmColumnFilters, s as applyTransactionColumnFilters } from "./crm-column-filter-apply-CmPhgmdh.js";
import { s as listTransactions } from "./transactions-crud-D_7XF6aW.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var stageOptions = Object.entries(TRANSACTION_STAGE_LABELS).map(([value, label]) => ({
	value,
	label
}));
var statusOptions = Object.entries(TRANSACTION_STATUS_LABELS).map(([value, label]) => ({
	value,
	label
}));
function TransactionsTable({ transactions, filters, onFilterChange }) {
	const f = (key) => filters[key] ?? "";
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: [/* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Propiedad"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 33,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Buyer / Seller"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 34,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Agente"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Etapa"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 36,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 37,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Precio"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 38,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Accion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 39,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 32,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("tr", {
					className: "border-t border-slate-200 bg-white normal-case",
					children: [
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("property"),
								onChange: (v) => onFilterChange("property", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 43,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("parties"),
								onChange: (v) => onFilterChange("parties", v),
								placeholder: "Buyer o seller"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 46,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("agent"),
								onChange: (v) => onFilterChange("agent", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 53,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 52,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("stage"),
								onChange: (v) => onFilterChange("stage", v),
								options: stageOptions
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 56,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 55,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("status"),
								onChange: (v) => onFilterChange("status", v),
								options: statusOptions
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 63,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "min-w-[8rem] px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterNumberRange, {
								minValue: f("priceMin"),
								maxValue: f("priceMax"),
								onMinChange: (v) => onFilterChange("priceMin", v),
								onMaxChange: (v) => onFilterChange("priceMax", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 70,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 69,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 77,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 41,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 31,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: transactions.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
					colSpan: 7,
					className: "px-4 py-8 text-center text-sm text-slate-500",
					children: "Ningún resultado con los filtros actuales."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 83,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 82,
					columnNumber: 13
				}, this) : transactions.map((tx) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: tx.propertyTitle
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 90,
							columnNumber: 17
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
							lineNumber: 91,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: tx.agentName
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 94,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: TRANSACTION_STAGE_LABELS[tx.currentStage] ?? tx.currentStage
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 95,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: TRANSACTION_STATUS_LABELS[tx.status] ?? tx.status
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 96,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: formatMoney(tx.acceptedPrice ?? tx.offeredPrice)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 97,
							columnNumber: 17
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
								lineNumber: 99,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 98,
							columnNumber: 17
						}, this)
					]
				}, tx.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 80,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 29,
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
	const transactions = query.data?.transactions ?? [];
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const filtered = useMemo(() => applyTransactionColumnFilters(transactions, filters), [transactions, filters]);
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
				lineNumber: 27,
				columnNumber: 119
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar las operaciones." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 24
		}, this) : null,
		query.data && transactions.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin operaciones",
			hint: "Crea una operacion para conectar buyer/seller/property/agent."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 50
		}, this) : null,
		query.data && transactions.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
			filteredCount: filtered.length,
			totalCount: transactions.length,
			hasActive,
			onClear: clearAll
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV(TransactionsTable, {
			transactions: filtered,
			filters,
			onFilterChange: setField
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 11
		}, this)] }, void 0, true) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { TransactionsIndexPage as component };
