import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError } from "./CrmStates-B4LS3d6E.js";
import { t as PageHeader } from "./PageHeader-C0qh1Y-M.js";
import { t as formatMutationError } from "./mutation-error-D0IZCg1w.js";
import { r as DOCUMENT_TYPE_LABELS } from "./crm-labels-CTNtOYLy.js";
import { t as createDocument } from "./documents-crud-56MOlzFX.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/documents/new.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx?tsr-split=component";
function DocumentNewPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const createFn = useServerFn(createDocument);
	const [form, setForm] = useState({
		title: "",
		type: "OTROS",
		fileUrl: "",
		propertyId: "",
		buyerId: "",
		sellerId: "",
		transactionId: ""
	});
	const mutation = useMutation({
		mutationFn: () => createFn({ data: {
			title: form.title,
			type: form.type,
			fileUrl: form.fileUrl,
			propertyId: form.propertyId || void 0,
			buyerId: form.buyerId || void 0,
			sellerId: form.sellerId || void 0,
			transactionId: form.transactionId || void 0
		} }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-documents"] });
			await navigate({ to: "/app/documents" });
		}
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, { title: "Nuevo documento" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 7
		}, this),
		mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 27
		}, this) : null,
		/* @__PURE__ */ jsxDEV("form", {
			className: "mx-auto max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6",
			onSubmit: (e) => {
				e.preventDefault();
				mutation.mutate();
			},
			children: [
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2",
					placeholder: "Titulo",
					value: form.title,
					onChange: (e) => setForm((f) => ({
						...f,
						title: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					className: "w-full rounded-xl border px-3 py-2",
					value: form.type,
					onChange: (e) => setForm((f) => ({
						...f,
						type: e.target.value
					})),
					children: Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
						value,
						children: label
					}, value, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 73
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2",
					placeholder: "URL archivo",
					value: form.fileUrl,
					onChange: (e) => setForm((f) => ({
						...f,
						fileUrl: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2",
					placeholder: "Property ID (opcional)",
					value: form.propertyId,
					onChange: (e) => setForm((f) => ({
						...f,
						propertyId: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2",
					placeholder: "Buyer ID (opcional)",
					value: form.buyerId,
					onChange: (e) => setForm((f) => ({
						...f,
						buyerId: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2",
					placeholder: "Seller ID (opcional)",
					value: form.sellerId,
					onChange: (e) => setForm((f) => ({
						...f,
						sellerId: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2",
					placeholder: "Transaction ID (opcional)",
					value: form.transactionId,
					onChange: (e) => setForm((f) => ({
						...f,
						transactionId: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
					disabled: mutation.isPending,
					children: mutation.isPending ? "Guardando..." : "Crear documento"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 10
	}, this);
}
//#endregion
export { DocumentNewPage as component };
