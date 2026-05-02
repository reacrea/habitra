import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, r as CrmFilterSelect } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { a as LEAD_TEMPERATURE_LABELS, i as LEAD_STATUS_LABELS, o as LEAD_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { c as useCrmColumnFilters, r as applyLeadColumnFilters } from "./crm-column-filter-apply-CmPhgmdh.js";
import { r as listLeads } from "./leads-crud-BVI0Al5I.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/leads/LeadsTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/leads/LeadsTable.tsx";
var leadTypeOptions = Object.entries(LEAD_TYPE_LABELS).map(([value, label]) => ({
	value,
	label
}));
var leadStatusOptions = Object.entries(LEAD_STATUS_LABELS).map(([value, label]) => ({
	value,
	label
}));
var leadTempOptions = Object.entries(LEAD_TEMPERATURE_LABELS).map(([value, label]) => ({
	value,
	label
}));
function LeadsTable({ leads, filters, onFilterChange }) {
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
						lineNumber: 32,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 33,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 34,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Temp."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Origen"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 36,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Contacto"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 37,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Acciones"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 38,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 31,
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
								lineNumber: 42,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("type"),
								onChange: (v) => onFilterChange("type", v),
								options: leadTypeOptions
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 45,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 44,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("status"),
								onChange: (v) => onFilterChange("status", v),
								options: leadStatusOptions
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
								value: f("temperature"),
								onChange: (v) => onFilterChange("temperature", v),
								options: leadTempOptions
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 59,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("source"),
								onChange: (v) => onFilterChange("source", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 66,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 65,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("contact"),
								onChange: (v) => onFilterChange("contact", v)
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
							className: "px-4 py-2",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 71,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 40,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 30,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: leads.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
					colSpan: 7,
					className: "px-4 py-8 text-center text-sm text-slate-500",
					children: "Ningún resultado con los filtros actuales."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 77,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 76,
					columnNumber: 13
				}, this) : leads.map((lead) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: lead.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 84,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: LEAD_TYPE_LABELS[lead.type] ?? lead.type
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 85,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: LEAD_STATUS_LABELS[lead.status] ?? lead.status
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 86,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: LEAD_TEMPERATURE_LABELS[lead.temperature] ?? lead.temperature
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 87,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-slate-600",
							children: lead.source
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 88,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "max-w-[200px] truncate px-4 py-3 text-slate-600",
							children: [lead.email, lead.phone].filter(Boolean).join(" · ") || "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 89,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/app/leads/$leadId",
								params: { leadId: lead.id },
								className: "font-semibold text-emerald-700 hover:text-emerald-800",
								children: "Editar"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 93,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 92,
							columnNumber: 17
						}, this)
					]
				}, lead.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 83,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 74,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/leads/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx?tsr-split=component";
function LeadsIndexPage() {
	const fetchLeads = useServerFn(listLeads);
	const query = useQuery({
		queryKey: ["crm-leads"],
		queryFn: () => fetchLeads()
	});
	const leads = query.data?.leads ?? [];
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const filtered = useMemo(() => applyLeadColumnFilters(leads, filters), [leads, filters]);
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Leads",
			description: "Prospectos de tu organizacion.",
			actions: /* @__PURE__ */ jsxDEV(Link, {
				to: "/app/leads/new",
				className: "inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600",
				children: "Nuevo lead"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 87
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
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los leads. Intenta de nuevo." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 24
		}, this) : null,
		query.data && leads.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin leads registrados",
			hint: "Crea el primer lead para comenzar el embudo."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 43
		}, this) : null,
		query.data && leads.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
			filteredCount: filtered.length,
			totalCount: leads.length,
			hasActive,
			onClear: clearAll
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV(LeadsTable, {
			leads: filtered,
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
export { LeadsIndexPage as component };
