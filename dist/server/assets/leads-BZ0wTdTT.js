import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-DgTnD89b.js";
import { a as LEAD_TEMPERATURE_LABELS, i as LEAD_STATUS_LABELS, o as LEAD_TYPE_LABELS } from "./crm-labels-BOcv4cCI.js";
import { r as listLeads } from "./leads-crud-BSSH0_DZ.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/leads/LeadsTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/leads/LeadsTable.tsx";
function LeadsTable({ leads }) {
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
						lineNumber: 20,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Temp."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 23,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Origen"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 24,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Contacto"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Acciones"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 19,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: leads.map((lead) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: lead.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 32,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: LEAD_TYPE_LABELS[lead.type] ?? lead.type
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 33,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: LEAD_STATUS_LABELS[lead.status] ?? lead.status
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 34,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: LEAD_TEMPERATURE_LABELS[lead.temperature] ?? lead.temperature
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 35,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-slate-600",
							children: lead.source
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "max-w-[200px] truncate px-4 py-3 text-slate-600",
							children: [lead.email, lead.phone].filter(Boolean).join(" · ") || "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 37,
							columnNumber: 15
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
								lineNumber: 41,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 40,
							columnNumber: 15
						}, this)
					]
				}, lead.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 31,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 29,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 16,
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
				lineNumber: 15,
				columnNumber: 87
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
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los leads. Intenta de nuevo." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 24
		}, this) : null,
		query.data && query.data.leads.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin leads registrados",
			hint: "Crea el primer lead para comenzar el embudo."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 54
		}, this) : null,
		query.data && query.data.leads.length > 0 ? /* @__PURE__ */ jsxDEV(LeadsTable, { leads: query.data.leads }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 52
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { LeadsIndexPage as component };
