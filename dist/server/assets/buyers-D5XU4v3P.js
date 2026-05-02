import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, n as CrmFilterNumberRange, r as CrmFilterSelect } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { l as PROPERTY_TYPE_LABELS, t as CREDIT_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { r as listBuyers } from "./buyers-crud-DKBe3iYm.js";
import { c as useCrmColumnFilters, t as applyBuyerColumnFilters } from "./crm-column-filter-apply-Xd_LD2y1.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var propertyTypeOptions = Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => ({
	value,
	label
}));
var creditOptions = Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => ({
	value,
	label
}));
function BuyersTable({ buyers, filters, onFilterChange }) {
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
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 40,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Zona"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 41,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 42,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Credito"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Presupuesto"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Score"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 45,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Acciones"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 46,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 39,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("tr", {
					className: "border-t border-slate-200 bg-white normal-case",
					children: [
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("name"),
								onChange: (v) => onFilterChange("name", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 50,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 49,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("zone"),
								onChange: (v) => onFilterChange("zone", v)
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
								value: f("propertyType"),
								onChange: (v) => onFilterChange("propertyType", v),
								options: propertyTypeOptions
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
								value: f("creditType"),
								onChange: (v) => onFilterChange("creditType", v),
								options: creditOptions
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
								minValue: f("budgetMin"),
								maxValue: f("budgetMax"),
								onMinChange: (v) => onFilterChange("budgetMin", v),
								onMaxChange: (v) => onFilterChange("budgetMax", v)
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
							className: "min-w-[6rem] px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterNumberRange, {
								minValue: f("scoreMin"),
								maxValue: f("scoreMax"),
								onMinChange: (v) => onFilterChange("scoreMin", v),
								onMaxChange: (v) => onFilterChange("scoreMax", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 78,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 77,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 85,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 48,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 38,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: buyers.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
					colSpan: 7,
					className: "px-4 py-8 text-center text-sm text-slate-500",
					children: "Ningún resultado con los filtros actuales."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 91,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 90,
					columnNumber: 13
				}, this) : buyers.map((buyer) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: buyer.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 98,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "max-w-[180px] truncate px-4 py-3 text-slate-600",
							children: buyer.desiredZone ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 99,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: buyer.desiredPropertyType ? PROPERTY_TYPE_LABELS[buyer.desiredPropertyType] ?? buyer.desiredPropertyType : "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 100,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: CREDIT_TYPE_LABELS[buyer.creditType] ?? buyer.creditType
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 105,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: formatMoney(buyer.maxBudget)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 106,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: buyer.buyingScore ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 107,
							columnNumber: 17
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
								lineNumber: 109,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 108,
							columnNumber: 17
						}, this)
					]
				}, buyer.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 97,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 88,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 37,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 36,
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
	const buyers = query.data?.buyers ?? [];
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const filtered = useMemo(() => applyBuyerColumnFilters(buyers, filters), [buyers, filters]);
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
				lineNumber: 27,
				columnNumber: 96
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
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los compradores." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 24
		}, this) : null,
		query.data && buyers.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin compradores",
			hint: "Registra compradores para hacer seguimiento."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 44
		}, this) : null,
		query.data && buyers.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
			filteredCount: filtered.length,
			totalCount: buyers.length,
			hasActive,
			onClear: clearAll
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV(BuyersTable, {
			buyers: filtered,
			filters,
			onFilterChange: setField
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 11
		}, this)] }, void 0, true) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyersIndexPage as component };
