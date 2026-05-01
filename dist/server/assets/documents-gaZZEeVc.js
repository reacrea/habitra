import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as PageHeader } from "./PageHeader-fKJQFkAH.js";
import { n as DOCUMENT_STATUS_LABELS, r as DOCUMENT_TYPE_LABELS } from "./crm-labels-D8Q8XEcK.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { r as listDocuments } from "./documents-crud-B5b_gj5h.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/documents/DocumentsTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/documents/DocumentsTable.tsx";
function DocumentsTable({ documents }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Titulo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 12,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 13,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 14,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Asociado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 15,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Accion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 16,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 11,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 10,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: documents.map((d) => /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3 font-medium",
						children: d.title
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: DOCUMENT_TYPE_LABELS[d.type] ?? d.type
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 23,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: DOCUMENT_STATUS_LABELS[d.status] ?? d.status
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 24,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3 text-xs text-slate-600",
						children: d.propertyId ? "Property" : d.buyerId ? "Buyer" : d.sellerId ? "Seller" : d.transactionId ? "Transaction" : "General"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 15
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
							lineNumber: 29,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 28,
						columnNumber: 15
					}, this)
				] }, d.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 21,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
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
				lineNumber: 15,
				columnNumber: 110
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los documentos." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 24
		}, this) : null,
		query.data && query.data.documents.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin documentos",
			hint: "Crea documentos para property/buyer/seller/transaction."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 58
		}, this) : null,
		query.data && query.data.documents.length > 0 ? /* @__PURE__ */ jsxDEV(DocumentsTable, { documents: query.data.documents }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 56
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { DocumentsPage as component };
