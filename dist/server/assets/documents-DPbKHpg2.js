import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, r as CrmFilterSelect } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { n as DOCUMENT_STATUS_LABELS, r as DOCUMENT_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { c as useCrmColumnFilters, n as applyDocumentColumnFilters } from "./crm-column-filter-apply-Xd_LD2y1.js";
import { r as listDocuments } from "./documents-crud-CZ73DTKb.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/documents/DocumentsTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/documents/DocumentsTable.tsx";
var typeOptions = Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => ({
	value,
	label
}));
var statusOptions = Object.entries(DOCUMENT_STATUS_LABELS).map(([value, label]) => ({
	value,
	label
}));
var assocOptions = [
	{
		value: "property",
		label: "Property"
	},
	{
		value: "buyer",
		label: "Buyer"
	},
	{
		value: "seller",
		label: "Seller"
	},
	{
		value: "transaction",
		label: "Transaction"
	},
	{
		value: "general",
		label: "General"
	}
];
function DocumentsTable({ documents, filters, onFilterChange }) {
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
						children: "Asociado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Accion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 36,
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
								value: f("title"),
								onChange: (v) => onFilterChange("title", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 40,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 39,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("type"),
								onChange: (v) => onFilterChange("type", v),
								options: typeOptions
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
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("status"),
								onChange: (v) => onFilterChange("status", v),
								options: statusOptions
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
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("assoc"),
								onChange: (v) => onFilterChange("assoc", v),
								options: assocOptions,
								placeholder: "Todos"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 57,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 38,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 30,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: documents.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
					colSpan: 5,
					className: "px-4 py-8 text-center text-sm text-slate-500",
					children: "Ningún resultado con los filtros actuales."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 70,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 69,
					columnNumber: 13
				}, this) : documents.map((d) => /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3 font-medium",
						children: d.title
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 77,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: DOCUMENT_TYPE_LABELS[d.type] ?? d.type
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 78,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: DOCUMENT_STATUS_LABELS[d.status] ?? d.status
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3 text-xs text-slate-600",
						children: d.propertyId ? "Property" : d.buyerId ? "Buyer" : d.sellerId ? "Seller" : d.transactionId ? "Transaction" : "General"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 80,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3 text-right",
						children: /* @__PURE__ */ jsxDEV(Link, {
							to: "/app/documents/$documentId",
							params: { documentId: d.id },
							className: "font-semibold text-emerald-700",
							children: "Editar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 92,
							columnNumber: 19
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 91,
						columnNumber: 17
					}, this)
				] }, d.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 76,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 67,
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
//#region src/routes/app/documents/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/documents/index.tsx?tsr-split=component";
function DocumentsPage() {
	const fetchDocuments = useServerFn(listDocuments);
	const query = useQuery({
		queryKey: ["crm-documents"],
		queryFn: () => fetchDocuments()
	});
	const documents = query.data?.documents ?? [];
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const filtered = useMemo(() => applyDocumentColumnFilters(documents, filters), [documents, filters]);
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Documentos",
			description: "Repositorio documental con asociaciones basicas.",
			actions: /* @__PURE__ */ jsxDEV(Link, {
				to: "/app/documents/new",
				className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
				children: "Nuevo documento"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 110
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los documentos." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 24
		}, this) : null,
		query.data && documents.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin documentos",
			hint: "Crea documentos para property/buyer/seller/transaction."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 47
		}, this) : null,
		query.data && documents.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
			filteredCount: filtered.length,
			totalCount: documents.length,
			hasActive,
			onClear: clearAll
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV(DocumentsTable, {
			documents: filtered,
			filters,
			onFilterChange: setField
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 11
		}, this)] }, void 0, true) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { DocumentsPage as component };
