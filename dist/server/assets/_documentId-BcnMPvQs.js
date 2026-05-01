import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as Route } from "./_documentId-B6UbWcat.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-DgTnD89b.js";
import { t as formatMutationError } from "./mutation-error-D-XfFHYy.js";
import { n as DOCUMENT_STATUS_LABELS, r as DOCUMENT_TYPE_LABELS } from "./crm-labels-BOcv4cCI.js";
import { i as updateDocument, n as getDocumentById } from "./documents-crud-DcfwfzW5.js";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/documents/$documentId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/documents/$documentId.tsx?tsr-split=component";
function DocumentEditPage() {
	const { documentId } = Route.useParams();
	const queryClient = useQueryClient();
	const fetchDocument = useServerFn(getDocumentById);
	const saveDocument = useServerFn(updateDocument);
	const [error, setError] = useState(null);
	const query = useQuery({
		queryKey: ["crm-document", documentId],
		queryFn: () => fetchDocument({ data: { id: documentId } }),
		enabled: Boolean(documentId)
	});
	const mutation = useMutation({
		mutationFn: (payload) => saveDocument({ data: {
			id: documentId,
			title: payload.title,
			type: payload.type,
			status: payload.status,
			fileUrl: payload.fileUrl
		} }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-document", documentId] });
			await queryClient.invalidateQueries({ queryKey: ["crm-documents"] });
		},
		onError: (e) => setError(formatMutationError(e))
	});
	if (query.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando documento..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 31
	}, this);
	if (query.isError) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el documento." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 29
	}, this);
	if (!query.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Documento no encontrado." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 27
	}, this);
	const doc = query.data;
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, { title: `Editar documento: ${doc.title}` }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this),
		error ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: error }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 16
		}, this) : null,
		/* @__PURE__ */ jsxDEV("form", {
			className: "mx-auto max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6",
			onSubmit: (e) => {
				e.preventDefault();
				const fd = new FormData(e.currentTarget);
				mutation.mutate({
					title: String(fd.get("title") ?? ""),
					type: String(fd.get("type") ?? doc.type),
					status: String(fd.get("status") ?? doc.status),
					fileUrl: String(fd.get("fileUrl") ?? "")
				});
			},
			children: [
				/* @__PURE__ */ jsxDEV("input", {
					name: "title",
					defaultValue: doc.title,
					className: "w-full rounded-xl border px-3 py-2"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "type",
					defaultValue: doc.type,
					className: "w-full rounded-xl border px-3 py-2",
					children: Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
						value,
						children: label
					}, value, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 73
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					name: "status",
					defaultValue: doc.status,
					className: "w-full rounded-xl border px-3 py-2",
					children: Object.entries(DOCUMENT_STATUS_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
						value,
						children: label
					}, value, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 75
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					name: "fileUrl",
					defaultValue: doc.fileUrl,
					className: "w-full rounded-xl border px-3 py-2"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
					disabled: mutation.isPending,
					children: mutation.isPending ? "Guardando..." : "Guardar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 10
	}, this);
}
//#endregion
export { DocumentEditPage as component };
