import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as Route } from "./_propertyId-Dvb51jFP.js";
import { t as PageHeader } from "./PageHeader-CGhXjJQ9.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-D2sX26EK.js";
import { t as formatMutationError } from "./mutation-error-0FkRNkSP.js";
import { i as updatePropertyChecklist, n as getPropertyDetail, t as addPropertyImage } from "./properties-crud-DWFUvpWq.js";
import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/properties/$propertyId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx?tsr-split=component";
function PropertyDetailPage() {
	const { propertyId } = Route.useParams();
	const queryClient = useQueryClient();
	const fetchDetail = useServerFn(getPropertyDetail);
	const addImage = useServerFn(addPropertyImage);
	const updateChecklist = useServerFn(updatePropertyChecklist);
	const detailQuery = useQuery({
		queryKey: ["crm-property-detail", propertyId],
		queryFn: () => fetchDetail({ data: { id: propertyId } }),
		enabled: Boolean(propertyId)
	});
	const imageMutation = useMutation({
		mutationFn: (payload) => addImage({ data: {
			propertyId,
			mode: payload.mode,
			url: payload.url,
			alt: payload.mode === "MOCK" ? "Mock Habitra" : "Imagen propiedad"
		} }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
			await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
		}
	});
	const checklistMutation = useMutation({
		mutationFn: (checkedIds) => updateChecklist({ data: {
			propertyId,
			checkedIds
		} }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
			await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
		}
	});
	const checkedIds = useMemo(() => detailQuery.data?.checklist.filter((x) => x.checked).map((x) => x.id) ?? [], [detailQuery.data]);
	if (detailQuery.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando propiedad..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 64,
		columnNumber: 37
	}, this);
	if (detailQuery.isError) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el detalle." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 35
	}, this);
	if (!detailQuery.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Propiedad no encontrada." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 66,
		columnNumber: 33
	}, this);
	const { property, checklist, documents } = detailQuery.data;
	const mutationError = imageMutation.isError || checklistMutation.isError ? formatMutationError(imageMutation.error ?? checklistMutation.error) : null;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: property.title,
				description: `${property.city}, ${property.state} · readiness ${property.readinessScore}%`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 7
			}, this),
			mutationError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: mutationError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 24
			}, this) : null,
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "mb-3 text-lg font-semibold text-habitra-text",
					children: "Readiness checklist"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "space-y-2",
					children: checklist.map((item) => /* @__PURE__ */ jsxDEV("label", {
						className: "flex items-center gap-2 text-sm text-slate-700",
						children: [/* @__PURE__ */ jsxDEV("input", {
							type: "checkbox",
							checked: item.checked,
							onChange: (e) => {
								const next = new Set(checkedIds);
								if (e.target.checked) next.add(item.id);
								else next.delete(item.id);
								checklistMutation.mutate(Array.from(next));
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this), item.label]
					}, item.id, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 34
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ jsxDEV("h3", {
							className: "text-lg font-semibold text-habitra-text",
							children: "Imagenes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV("button", {
							type: "button",
							className: "rounded-lg border border-slate-200 px-3 py-1.5 text-sm",
							onClick: () => imageMutation.mutate({ mode: "MOCK" }),
							children: "Agregar mock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 9
					}, this),
					property.images.length === 0 ? /* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: "Sin imagenes."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 41
					}, this) : null,
					/* @__PURE__ */ jsxDEV("div", {
						className: "grid grid-cols-1 gap-3 md:grid-cols-3",
						children: property.images.map((img) => /* @__PURE__ */ jsxDEV("a", {
							href: img.url,
							target: "_blank",
							rel: "noreferrer",
							className: "overflow-hidden rounded-xl border border-slate-200",
							children: /* @__PURE__ */ jsxDEV("img", {
								src: img.url,
								alt: img.alt ?? "Propiedad",
								className: "h-40 w-full object-cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 15
							}, this)
						}, img.id, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 39
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-3 text-lg font-semibold text-habitra-text",
						children: "Documentos asociados"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 9
					}, this),
					documents.length === 0 ? /* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: "Sin documentos asociados."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 35
					}, this) : null,
					/* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2",
						children: documents.map((doc) => /* @__PURE__ */ jsxDEV("li", {
							className: "text-sm",
							children: /* @__PURE__ */ jsxDEV("a", {
								href: doc.fileUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "font-medium text-emerald-700",
								children: doc.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 15
							}, this)
						}, doc.id, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 33
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 73,
		columnNumber: 10
	}, this);
}
//#endregion
export { PropertyDetailPage as component };
