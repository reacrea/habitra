import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as PageHeader } from "./PageHeader-CGhXjJQ9.js";
import { l as PROPERTY_TYPE_LABELS, t as CREDIT_TYPE_LABELS } from "./crm-labels-xMo8NC2G.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-D2sX26EK.js";
import { r as listBuyers } from "./buyers-crud-CUgw-tQk.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/buyers/BuyersTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/buyers/BuyersTable.tsx";
function formatMoney(value) {
	if (value === null || Number.isNaN(value)) return "—";
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function BuyersTable({ buyers }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Zona"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 27,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Credito"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 28,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Presupuesto"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 29,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Score"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Acciones"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 31,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: buyers.map((buyer) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: buyer.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 37,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "max-w-[180px] truncate px-4 py-3 text-slate-600",
							children: buyer.desiredZone ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 38,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: buyer.desiredPropertyType ? PROPERTY_TYPE_LABELS[buyer.desiredPropertyType] ?? buyer.desiredPropertyType : "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 39,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: CREDIT_TYPE_LABELS[buyer.creditType] ?? buyer.creditType
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 44,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: formatMoney(buyer.maxBudget)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: buyer.buyingScore ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 46,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/app/buyers/$buyerId",
								params: { buyerId: buyer.id },
								className: "font-semibold text-emerald-700 hover:text-emerald-800",
								children: "Editar"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 48,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 47,
							columnNumber: 15
						}, this)
					]
				}, buyer.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/buyers/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx?tsr-split=component";
function BuyersIndexPage() {
	const fetchBuyers = useServerFn(listBuyers);
	const query = useQuery({
		queryKey: ["crm-buyers"],
		queryFn: () => fetchBuyers()
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Compradores",
			description: "Perfiles de compra y presupuesto.",
			actions: /* @__PURE__ */ jsxDEV(Link, {
				to: "/app/buyers/new",
				className: "inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600",
				children: "Nuevo comprador"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 96
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
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los compradores." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 24
		}, this) : null,
		query.data && query.data.buyers.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin compradores",
			hint: "Registra compradores para hacer seguimiento."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 55
		}, this) : null,
		query.data && query.data.buyers.length > 0 ? /* @__PURE__ */ jsxDEV(BuyersTable, { buyers: query.data.buyers }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 53
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyersIndexPage as component };
