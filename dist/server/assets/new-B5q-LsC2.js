import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { r as DOCUMENT_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { t as createDocument } from "./documents-crud-CZ73DTKb.js";
import { a as searchPropertiesForPicker } from "./properties-crud-DJ72vQKB.js";
import { a as searchSellersForPicker } from "./sellers-crud-nJ3oVoRF.js";
import { useCallback, useEffect, useId, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/CrmEntitySearchField.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/CrmEntitySearchField.tsx";
var inputClass = "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text outline-none focus:border-emerald-600";
function CrmEntitySearchField({ label, hint, selectedId, selectedPrimary, selectedSecondary, onSelect, onClear, loadItems }) {
	const listId = useId();
	const [input, setInput] = useState("");
	const [debounced, setDebounced] = useState("");
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => setDebounced(input), 350);
		return () => clearTimeout(t);
	}, [input]);
	const runSearch = useCallback(async () => {
		const q = debounced.trim();
		if (q.length === 0) {
			setItems([]);
			return;
		}
		setLoading(true);
		try {
			setItems(await loadItems(q));
		} catch {
			setItems([]);
		} finally {
			setLoading(false);
		}
	}, [debounced, loadItems]);
	useEffect(() => {
		if (selectedId) return;
		runSearch();
	}, [
		debounced,
		runSearch,
		selectedId
	]);
	const hasSelection = Boolean(selectedId);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			hint ? /* @__PURE__ */ jsxDEV("p", {
				className: "text-xs text-slate-500",
				children: hint
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 73,
				columnNumber: 15
			}, this) : null,
			hasSelection ? /* @__PURE__ */ jsxDEV("div", {
				className: "mt-1 flex items-start justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsxDEV("p", {
						className: "truncate text-sm font-medium text-habitra-text",
						children: selectedPrimary || selectedId
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 78,
						columnNumber: 13
					}, this), selectedSecondary ? /* @__PURE__ */ jsxDEV("p", {
						className: "truncate text-xs text-slate-500",
						children: selectedSecondary
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 34
					}, this) : null]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 77,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: () => {
						onClear();
						setInput("");
						setItems([]);
						setOpen(false);
					},
					className: "shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",
					children: "Quitar"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 81,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 76,
				columnNumber: 9
			}, this) : /* @__PURE__ */ jsxDEV("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsxDEV("input", {
					type: "search",
					autoComplete: "off",
					value: input,
					onChange: (e) => {
						setInput(e.target.value);
						setOpen(true);
					},
					onFocus: () => setOpen(true),
					className: inputClass,
					placeholder: "Escribe id, nombre o titulo…",
					role: "combobox",
					"aria-expanded": open,
					"aria-controls": listId,
					"aria-autocomplete": "list"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 96,
					columnNumber: 11
				}, this), open && (debounced.trim().length > 0 || loading) ? /* @__PURE__ */ jsxDEV("ul", {
					id: listId,
					role: "listbox",
					className: "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg",
					children: loading ? /* @__PURE__ */ jsxDEV("li", {
						className: "px-3 py-2 text-sm text-slate-500",
						children: "Buscando…"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 119,
						columnNumber: 17
					}, this) : items.length === 0 ? /* @__PURE__ */ jsxDEV("li", {
						className: "px-3 py-2 text-sm text-slate-500",
						children: debounced.trim().length === 0 ? "Escribe para buscar." : "Sin resultados."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 121,
						columnNumber: 17
					}, this) : items.map((item) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						role: "option",
						className: "w-full px-3 py-2 text-left hover:bg-slate-50",
						onMouseDown: (e) => e.preventDefault(),
						onClick: () => {
							onSelect(item);
							setInput("");
							setItems([]);
							setOpen(false);
						},
						children: [/* @__PURE__ */ jsxDEV("span", {
							className: "block truncate text-sm font-medium text-habitra-text",
							children: item.primary
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 139,
							columnNumber: 23
						}, this), /* @__PURE__ */ jsxDEV("span", {
							className: "block truncate text-xs text-slate-500",
							children: item.secondary
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 140,
							columnNumber: 23
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 127,
						columnNumber: 21
					}, this) }, item.id, false, {
						fileName: _jsxFileName$1,
						lineNumber: 126,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 113,
					columnNumber: 13
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 95,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 71,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/documents/new.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx?tsr-split=component";
function DocumentNewPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const createFn = useServerFn(createDocument);
	const searchPropServer = useServerFn(searchPropertiesForPicker);
	const searchSellerServer = useServerFn(searchSellersForPicker);
	const [form, setForm] = useState({
		title: "",
		type: "OTROS",
		fileUrl: "",
		buyerId: "",
		transactionId: ""
	});
	const [propertyPick, setPropertyPick] = useState(null);
	const [sellerPick, setSellerPick] = useState(null);
	const loadProperties = useCallback(async (q) => {
		return (await searchPropServer({ data: { q } })).items;
	}, [searchPropServer]);
	const loadSellers = useCallback(async (q) => {
		return (await searchSellerServer({ data: { q } })).items;
	}, [searchSellerServer]);
	const mutation = useMutation({
		mutationFn: () => createFn({ data: {
			title: form.title,
			type: form.type,
			fileUrl: form.fileUrl,
			propertyId: propertyPick?.id || void 0,
			buyerId: form.buyerId || void 0,
			sellerId: sellerPick?.id || void 0,
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
			lineNumber: 66,
			columnNumber: 7
		}, this),
		mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
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
					className: "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
					placeholder: "Titulo",
					value: form.title,
					onChange: (e) => setForm((f) => ({
						...f,
						title: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					className: "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
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
						lineNumber: 80,
						columnNumber: 73
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
					placeholder: "URL archivo",
					value: form.fileUrl,
					onChange: (e) => setForm((f) => ({
						...f,
						fileUrl: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(CrmEntitySearchField, {
					label: "Propiedad (opcional)",
					hint: "Busca por titulo, ciudad, slug o fragmento del id.",
					selectedId: propertyPick?.id ?? "",
					selectedPrimary: propertyPick?.primary ?? "",
					selectedSecondary: propertyPick?.secondary ?? "",
					onSelect: setPropertyPick,
					onClear: () => setPropertyPick(null),
					loadItems: loadProperties
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
					placeholder: "Buyer ID (opcional)",
					value: form.buyerId,
					onChange: (e) => setForm((f) => ({
						...f,
						buyerId: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(CrmEntitySearchField, {
					label: "Vendedor (opcional)",
					hint: "Busca por nombre, email o fragmento del id.",
					selectedId: sellerPick?.id ?? "",
					selectedPrimary: sellerPick?.primary ?? "",
					selectedSecondary: sellerPick?.secondary ?? "",
					onSelect: setSellerPick,
					onClear: () => setSellerPick(null),
					loadItems: loadSellers
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
					placeholder: "Transaction ID (opcional)",
					value: form.transactionId,
					onChange: (e) => setForm((f) => ({
						...f,
						transactionId: e.target.value
					}))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					type: "submit",
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",
					disabled: mutation.isPending,
					children: mutation.isPending ? "Guardando..." : "Crear documento"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 10
	}, this);
}
//#endregion
export { DocumentNewPage as component };
