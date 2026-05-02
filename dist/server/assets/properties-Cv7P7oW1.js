import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, n as CrmFilterNumberRange, r as CrmFilterSelect } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { c as PROPERTY_STATUS_LABELS, l as PROPERTY_TYPE_LABELS, s as OPERATION_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { c as useCrmColumnFilters, i as applyPropertyColumnFilters } from "./crm-column-filter-apply-CmPhgmdh.js";
import { i as listProperties } from "./properties-crud-DJ72vQKB.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/properties/PropertiesTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/properties/PropertiesTable.tsx";
function formatMoney(value) {
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
var operationOptions = Object.entries(OPERATION_TYPE_LABELS).map(([value, label]) => ({
	value,
	label
}));
var statusOptions = Object.entries(PROPERTY_STATUS_LABELS).map(([value, label]) => ({
	value,
	label
}));
function PropertiesTable({ properties, filters, onFilterChange }) {
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
						children: "Titulo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 42,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Operacion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Precio"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 45,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 46,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Readiness"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 47,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Accion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 48,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 41,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("tr", {
					className: "border-t border-slate-200 bg-white normal-case",
					children: [
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("title"),
								onChange: (v) => onFilterChange("title", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 52,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 51,
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
								lineNumber: 55,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 54,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("operationType"),
								onChange: (v) => onFilterChange("operationType", v),
								options: operationOptions
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 62,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 61,
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
								lineNumber: 69,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 68,
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
								lineNumber: 77,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 76,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "min-w-[6rem] px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterNumberRange, {
								minValue: f("readinessMin"),
								maxValue: f("readinessMax"),
								minPlaceholder: "% min",
								maxPlaceholder: "% max",
								onMinChange: (v) => onFilterChange("readinessMin", v),
								onMaxChange: (v) => onFilterChange("readinessMax", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 84,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 83,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 93,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 50,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 40,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: properties.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
					colSpan: 7,
					className: "px-4 py-8 text-center text-sm text-slate-500",
					children: "Ningún resultado con los filtros actuales."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 99,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 98,
					columnNumber: 13
				}, this) : properties.map((p) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 106,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: PROPERTY_TYPE_LABELS[p.propertyType] ?? p.propertyType
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 107,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: OPERATION_TYPE_LABELS[p.operationType] ?? p.operationType
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 108,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: formatMoney(p.price)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 109,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: PROPERTY_STATUS_LABELS[p.status] ?? p.status
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 110,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: [p.readinessScore, "%"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 111,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/app/properties/$propertyId",
								params: { propertyId: p.id },
								className: "font-semibold text-emerald-700",
								children: "Ver detalle"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 113,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 112,
							columnNumber: 17
						}, this)
					]
				}, p.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 105,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 96,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 39,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/properties/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx?tsr-split=component";
function PropertiesPage() {
	const fetchProperties = useServerFn(listProperties);
	const query = useQuery({
		queryKey: ["crm-properties"],
		queryFn: () => fetchProperties()
	});
	const properties = query.data?.properties ?? [];
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const filtered = useMemo(() => applyPropertyColumnFilters(properties, filters), [properties, filters]);
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Propiedades",
			description: "Inventario con readiness operativo."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar las propiedades." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 24
		}, this) : null,
		query.data && properties.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin propiedades",
			hint: "Corre el seed o vincula propiedades nuevas."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 48
		}, this) : null,
		query.data && properties.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
			filteredCount: filtered.length,
			totalCount: properties.length,
			hasActive,
			onClear: clearAll
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV(PropertiesTable, {
			properties: filtered,
			filters,
			onFilterChange: setField
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 11
		}, this)] }, void 0, true) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
//#endregion
export { PropertiesPage as component };
