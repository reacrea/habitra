import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { t as Route } from "./_propertyId-uyulfdJx.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { c as PROPERTY_STATUS_LABELS, l as PROPERTY_TYPE_LABELS, s as OPERATION_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { i as propertyUpdateSchema } from "./property-iIiYQS5Z.js";
import { a as updatePropertyChecklist, i as updateProperty, n as getPropertyDetail, t as addPropertyImage } from "./properties-crud-DhZhquUB.js";
import { r as listSellerOptions } from "./sellers-crud-Cvuydw3N.js";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
import { useForm } from "react-hook-form";
//#region src/components/crm/properties/PropertyCrmOverview.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/crm/properties/PropertyCrmOverview.tsx";
function formatMoney(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function formatArea(value) {
	if (value === null || Number.isNaN(value)) return "—";
	return `${new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 }).format(value)} m²`;
}
function PropertyCrmOverview({ property, assignedAgentName, sellerName, canEdit, onEditClick }) {
	const rows = [
		{
			label: "Titulo",
			value: property.title
		},
		{
			label: "Descripcion corta",
			value: property.description
		},
		{
			label: "Descripcion extendida",
			value: property.fullDescription?.trim() ? property.fullDescription : "—"
		},
		{
			label: "Tipo",
			value: PROPERTY_TYPE_LABELS[property.propertyType] ?? property.propertyType
		},
		{
			label: "Operacion",
			value: OPERATION_TYPE_LABELS[property.operationType] ?? property.operationType
		},
		{
			label: "Precio",
			value: formatMoney(property.price)
		},
		{
			label: "Ciudad",
			value: property.city
		},
		{
			label: "Estado",
			value: property.state
		},
		{
			label: "Colonia",
			value: property.neighborhood ?? "—"
		},
		{
			label: "Direccion",
			value: property.address
		},
		{
			label: "CP",
			value: property.postalCode ?? "—"
		},
		{
			label: "Recamaras",
			value: property.bedrooms != null ? String(property.bedrooms) : "—"
		},
		{
			label: "Banos",
			value: property.bathrooms != null ? String(property.bathrooms) : "—"
		},
		{
			label: "Estacionamientos",
			value: property.parkingSpaces != null ? String(property.parkingSpaces) : "—"
		},
		{
			label: "Terreno",
			value: formatArea(property.landArea)
		},
		{
			label: "Construccion",
			value: formatArea(property.constructionArea)
		},
		{
			label: "Amenidades",
			value: property.amenities.length > 0 ? property.amenities.join(", ") : "—"
		},
		{
			label: "Estatus",
			value: PROPERTY_STATUS_LABELS[property.status] ?? property.status
		},
		{
			label: "Readiness",
			value: `${property.readinessScore}%`
		},
		{
			label: "Agente asignado",
			value: assignedAgentName ?? (property.assignedAgentId ? "—" : "Sin agente")
		},
		{
			label: "Vendedor",
			value: sellerName ?? (property.sellerId ? "—" : "Sin vendedor")
		},
		{
			label: "Slug publico",
			value: property.slug
		}
	];
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "mb-4 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Ficha de propiedad"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 85,
				columnNumber: 9
			}, this), canEdit ? /* @__PURE__ */ jsxDEV("button", {
				type: "button",
				onClick: onEditClick,
				className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600",
				children: "Editar propiedad"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 87,
				columnNumber: 11
			}, this) : /* @__PURE__ */ jsxDEV("p", {
				className: "text-xs text-slate-500",
				children: "Solo lectura en esta ficha."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 95,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 84,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("dl", {
			className: "grid gap-3 sm:grid-cols-2",
			children: rows.map((r) => /* @__PURE__ */ jsxDEV("div", {
				className: "border-b border-slate-100 pb-2 sm:border-0 sm:pb-0",
				children: [/* @__PURE__ */ jsxDEV("dt", {
					className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
					children: r.label
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 101,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("dd", {
					className: "mt-0.5 text-sm text-habitra-text whitespace-pre-wrap",
					children: r.value
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 102,
					columnNumber: 13
				}, this)]
			}, r.label, true, {
				fileName: _jsxFileName$2,
				lineNumber: 100,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 98,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 83,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/crm/properties/PropertyEditModal.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/properties/PropertyEditModal.tsx";
function PropertyEditModal({ open, property, onClose, onSaved }) {
	const queryClient = useQueryClient();
	const saveFn = useServerFn(updateProperty);
	const form = useForm({ defaultValues: buildDefaults(property) });
	useEffect(() => {
		if (open) form.reset(buildDefaults(property));
	}, [
		open,
		property,
		form
	]);
	const mutation = useMutation({
		mutationFn: (payload) => saveFn({ data: payload }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", property.id] });
			await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-seller"] });
			onSaved();
			onClose();
		}
	});
	if (!open) return null;
	const inputClass = "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text outline-none focus:border-emerald-600";
	return /* @__PURE__ */ jsxDEV("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ jsxDEV("button", {
			type: "button",
			className: "absolute inset-0 bg-black/40",
			"aria-label": "Cerrar",
			onClick: () => !mutation.isPending && onClose()
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 76,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl",
			children: [/* @__PURE__ */ jsxDEV("h3", {
				className: "mb-4 text-lg font-semibold text-habitra-text",
				children: "Editar propiedad"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 83,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("form", {
				className: "space-y-4",
				onSubmit: form.handleSubmit((values) => {
					const amenityNames = values.amenityText.split(/\r?\n/).map((s) => s.trim()).filter((s) => s.length > 0);
					const payload = propertyUpdateSchema.parse({
						id: property.id,
						title: values.title,
						description: values.description,
						fullDescription: values.fullDescription.trim() ? values.fullDescription : void 0,
						propertyType: values.propertyType,
						operationType: values.operationType,
						status: values.status,
						price: optPositiveNumber(values.price),
						address: values.address,
						city: values.city,
						state: values.state,
						neighborhood: values.neighborhood.trim() ? values.neighborhood : void 0,
						postalCode: values.postalCode.trim() ? values.postalCode : void 0,
						bedrooms: optInt(values.bedrooms),
						bathrooms: optInt(values.bathrooms),
						parkingSpaces: optInt(values.parkingSpaces),
						landArea: optArea(values.landArea),
						constructionArea: optArea(values.constructionArea),
						amenityNames
					});
					mutation.mutate(payload);
				}),
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsxDEV("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									children: "Titulo"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 118,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("input", {
									className: inputClass,
									...form.register("title")
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 119,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 117,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									children: "Descripcion"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 122,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("textarea", {
									className: `${inputClass} min-h-[80px]`,
									...form.register("description")
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 123,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 121,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									children: "Descripcion completa (opcional)"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 126,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("textarea", {
									className: `${inputClass} min-h-[100px]`,
									...form.register("fullDescription")
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 127,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 125,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Tipo"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 130,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("select", {
								className: inputClass,
								...form.register("propertyType"),
								children: Object.entries(PROPERTY_TYPE_LABELS).map(([k, label]) => /* @__PURE__ */ jsxDEV("option", {
									value: k,
									children: label
								}, k, false, {
									fileName: _jsxFileName$1,
									lineNumber: 133,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 131,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 129,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Operacion"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 140,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("select", {
								className: inputClass,
								...form.register("operationType"),
								children: Object.entries(OPERATION_TYPE_LABELS).map(([k, label]) => /* @__PURE__ */ jsxDEV("option", {
									value: k,
									children: label
								}, k, false, {
									fileName: _jsxFileName$1,
									lineNumber: 143,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 141,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 139,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Precio (MXN)"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 150,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								type: "text",
								inputMode: "decimal",
								className: inputClass,
								...form.register("price")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 151,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 149,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Estatus"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 154,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("select", {
								className: inputClass,
								...form.register("status"),
								children: Object.entries(PROPERTY_STATUS_LABELS).map(([k, label]) => /* @__PURE__ */ jsxDEV("option", {
									value: k,
									children: label
								}, k, false, {
									fileName: _jsxFileName$1,
									lineNumber: 157,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 155,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 153,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									children: "Direccion"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 164,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("input", {
									className: inputClass,
									...form.register("address")
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 165,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 163,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Ciudad"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 168,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								className: inputClass,
								...form.register("city")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 169,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 167,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Estado"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 172,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								className: inputClass,
								...form.register("state")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 173,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 171,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Colonia"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 176,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								className: inputClass,
								...form.register("neighborhood")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 177,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 175,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Codigo postal"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 180,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								className: inputClass,
								...form.register("postalCode")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 181,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 179,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Recamaras"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 184,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								type: "text",
								inputMode: "numeric",
								className: inputClass,
								...form.register("bedrooms")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 185,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 183,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Banos"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 188,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								type: "text",
								inputMode: "numeric",
								className: inputClass,
								...form.register("bathrooms")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 189,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 187,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Estacionamientos"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 192,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								type: "text",
								inputMode: "numeric",
								className: inputClass,
								...form.register("parkingSpaces")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 193,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 191,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Terreno (m²)"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 196,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								type: "text",
								inputMode: "decimal",
								className: inputClass,
								...form.register("landArea")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 197,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 195,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
								className: "text-sm font-medium text-slate-700",
								children: "Construccion (m²)"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 200,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("input", {
								type: "text",
								inputMode: "decimal",
								className: inputClass,
								...form.register("constructionArea")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 201,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 199,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									children: "Amenidades (una por linea; reemplaza la lista actual al guardar)"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 204,
									columnNumber: 15
								}, this), /* @__PURE__ */ jsxDEV("textarea", {
									className: `${inputClass} min-h-[100px] font-mono text-xs`,
									...form.register("amenityText")
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 207,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 203,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 116,
						columnNumber: 11
					}, this),
					mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 212,
						columnNumber: 13
					}, this) : null,
					/* @__PURE__ */ jsxDEV("div", {
						className: "flex flex-wrap justify-end gap-2 pt-2",
						children: [/* @__PURE__ */ jsxDEV("button", {
							type: "button",
							className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
							disabled: mutation.isPending,
							onClick: onClose,
							children: "Cancelar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 216,
							columnNumber: 13
						}, this), /* @__PURE__ */ jsxDEV("button", {
							type: "submit",
							disabled: mutation.isPending,
							className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-50",
							children: mutation.isPending ? "Guardando..." : "Guardar cambios"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 224,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 215,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 85,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 82,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 75,
		columnNumber: 5
	}, this);
}
function optPositiveNumber(raw) {
	const t = raw.trim();
	if (!t) return void 0;
	const n = Number(t);
	if (!Number.isFinite(n) || n <= 0) return void 0;
	return n;
}
function optInt(raw) {
	const t = raw.trim();
	if (!t) return void 0;
	const n = Number.parseInt(t, 10);
	return Number.isFinite(n) && n >= 0 ? n : void 0;
}
function optArea(raw) {
	const t = raw.trim();
	if (!t) return void 0;
	const n = Number(t);
	if (!Number.isFinite(n) || n < 0) return void 0;
	return n;
}
function buildDefaults(p) {
	return {
		title: p.title,
		description: p.description,
		fullDescription: p.fullDescription ?? "",
		propertyType: p.propertyType,
		operationType: p.operationType,
		status: p.status,
		price: String(p.price),
		address: p.address,
		city: p.city,
		state: p.state,
		neighborhood: p.neighborhood ?? "",
		postalCode: p.postalCode ?? "",
		bedrooms: p.bedrooms != null ? String(p.bedrooms) : "",
		bathrooms: p.bathrooms != null ? String(p.bathrooms) : "",
		parkingSpaces: p.parkingSpaces != null ? String(p.parkingSpaces) : "",
		landArea: p.landArea != null ? String(p.landArea) : "",
		constructionArea: p.constructionArea != null ? String(p.constructionArea) : "",
		amenityText: p.amenities.length > 0 ? p.amenities.join("\n") : ""
	};
}
//#endregion
//#region src/routes/app/properties/$propertyId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx?tsr-split=component";
function PropertyDetailPage() {
	const { propertyId } = Route.useParams();
	const queryClient = useQueryClient();
	const fetchDetail = useServerFn(getPropertyDetail);
	const addImage = useServerFn(addPropertyImage);
	const updateChecklist = useServerFn(updatePropertyChecklist);
	const fetchSellerOptions = useServerFn(listSellerOptions);
	const saveProperty = useServerFn(updateProperty);
	const [editOpen, setEditOpen] = useState(false);
	const [saveBanner, setSaveBanner] = useState(null);
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
	const sellerOptionsQuery = useQuery({
		queryKey: ["crm-seller-options"],
		queryFn: () => fetchSellerOptions(),
		staleTime: 6e4,
		enabled: Boolean(propertyId)
	});
	const sellerMutation = useMutation({
		mutationFn: (sellerId) => saveProperty({ data: {
			id: propertyId,
			sellerId
		} }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
			await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-seller"] });
			setSaveBanner("Vendedor actualizado.");
			setTimeout(() => setSaveBanner(null), 4e3);
		}
	});
	const checkedIds = useMemo(() => detailQuery.data?.checklist.filter((x) => x.checked).map((x) => x.id) ?? [], [detailQuery.data]);
	if (detailQuery.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando propiedad..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 37
	}, this);
	if (detailQuery.isError) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el detalle." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 102,
		columnNumber: 35
	}, this);
	if (!detailQuery.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Propiedad no encontrada." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 103,
		columnNumber: 33
	}, this);
	const { property, checklist, documents, canEditProperty, assignedAgentName, sellerName } = detailQuery.data;
	const mutationError = imageMutation.isError || checklistMutation.isError || sellerMutation.isError ? formatMutationError(imageMutation.error ?? checklistMutation.error ?? sellerMutation.error) : null;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: property.title,
				description: `${property.city}, ${property.state} · readiness ${property.readinessScore}%`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 7
			}, this),
			saveBanner ? /* @__PURE__ */ jsxDEV("p", {
				className: "rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-900",
				children: saveBanner
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 21
			}, this) : null,
			mutationError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: mutationError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 24
			}, this) : null,
			!canEditProperty ? /* @__PURE__ */ jsxDEV("p", {
				className: "rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950",
				children: "Vista solo lectura: solo administradores, brokers o el agente asignado pueden editar esta propiedad."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 27
			}, this) : null,
			/* @__PURE__ */ jsxDEV(PropertyCrmOverview, {
				property,
				assignedAgentName,
				sellerName,
				canEdit: canEditProperty,
				onEditClick: () => setEditOpen(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-2 text-lg font-semibold text-habitra-text",
						children: "Vendedor"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mb-3 text-sm text-slate-600",
						children: "Asigna el perfil de vendedor asociado a este inmueble (misma organizacion)."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 9
					}, this),
					sellerOptionsQuery.isPending ? /* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-500",
						children: "Cargando vendedores..."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 41
					}, this) : null,
					sellerOptionsQuery.data ? /* @__PURE__ */ jsxDEV("select", {
						className: "max-w-md rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text disabled:cursor-not-allowed disabled:bg-slate-50",
						disabled: !canEditProperty || sellerMutation.isPending,
						value: property.sellerId ?? "",
						onChange: (e) => {
							const v = e.target.value;
							sellerMutation.mutate(v === "" ? null : v);
						},
						children: [/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Sin vendedor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this), sellerOptionsQuery.data.options.map((s) => /* @__PURE__ */ jsxDEV("option", {
							value: s.id,
							children: s.name
						}, s.id, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 55
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 36
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 128,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("fieldset", {
				disabled: !canEditProperty || checklistMutation.isPending,
				className: "rounded-2xl border border-slate-200 bg-white p-5 disabled:opacity-60",
				children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "mb-3 text-lg font-semibold text-habitra-text",
					children: "Readiness checklist"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
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
							lineNumber: 149,
							columnNumber: 15
						}, this), item.label]
					}, item.id, true, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 34
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 145,
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
							lineNumber: 161,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV("button", {
							type: "button",
							className: "rounded-lg border border-slate-200 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50",
							disabled: !canEditProperty || imageMutation.isPending,
							onClick: () => imageMutation.mutate({ mode: "MOCK" }),
							children: "Agregar mock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 9
					}, this),
					property.images.length === 0 ? /* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: "Sin imagenes."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 168,
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
								lineNumber: 171,
								columnNumber: 15
							}, this)
						}, img.id, false, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 39
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 169,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 159,
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
						lineNumber: 177,
						columnNumber: 9
					}, this),
					documents.length === 0 ? /* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: "Sin documentos asociados."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
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
								lineNumber: 181,
								columnNumber: 15
							}, this)
						}, doc.id, false, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 33
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(PropertyEditModal, {
				open: editOpen,
				property,
				onClose: () => setEditOpen(false),
				onSaved: () => {
					setSaveBanner("Propiedad actualizada.");
					setTimeout(() => setSaveBanner(null), 4e3);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 188,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 113,
		columnNumber: 10
	}, this);
}
//#endregion
export { PropertyDetailPage as component };
