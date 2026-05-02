import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { t as Route } from "./_sellerId-CZS8q5Vy.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { c as PROPERTY_STATUS_LABELS, s as OPERATION_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { a as updateProperty } from "./properties-crud-dZnPe8Xd.js";
import { a as updateSeller, n as getSellerWithProperties } from "./sellers-crud-Cvuydw3N.js";
import { n as SellerEditForm } from "./SellerForm-BEQrS9CZ.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/sellers/SellerPropertiesSection.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/sellers/SellerPropertiesSection.tsx";
function formatMoney(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function SellerPropertiesSection({ sellerId, linkedProperties, unassignedProperties }) {
	const queryClient = useQueryClient();
	const updateFn = useServerFn(updateProperty);
	const attachMutation = useMutation({
		mutationFn: (propertyId) => updateFn({ data: {
			id: propertyId,
			sellerId
		} }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-seller", sellerId] });
			await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
		}
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "mb-3 text-lg font-semibold text-habitra-text",
					children: "Propiedades de este vendedor"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 45,
					columnNumber: 9
				}, this), linkedProperties.length === 0 ? /* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-slate-600",
					children: "Aun no hay inmuebles asociados. Asigna uno desde la lista inferior o desde la ficha de la propiedad."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 47,
					columnNumber: 11
				}, this) : /* @__PURE__ */ jsxDEV("ul", {
					className: "divide-y divide-slate-100",
					children: linkedProperties.map((p) => /* @__PURE__ */ jsxDEV("li", {
						className: "py-3 first:pt-0",
						children: [/* @__PURE__ */ jsxDEV(Link, {
							to: "/app/properties/$propertyId",
							params: { propertyId: p.id },
							className: "font-semibold text-emerald-700 hover:underline",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 54,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV("p", {
							className: "mt-0.5 text-xs text-slate-500",
							children: [
								p.city,
								" · ",
								OPERATION_TYPE_LABELS[p.operationType],
								" · ",
								PROPERTY_STATUS_LABELS[p.status],
								" ·",
								" ",
								formatMoney(p.price)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 61,
							columnNumber: 17
						}, this)]
					}, p.id, true, {
						fileName: _jsxFileName$1,
						lineNumber: 53,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 51,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			unassignedProperties.length > 0 ? /* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-habitra-text",
						children: "Propiedades sin vendedor en tu organizacion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 73,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mb-4 text-xs text-slate-600",
						children: "Puedes enlazarlas a este perfil con un clic."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 76,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2",
						children: unassignedProperties.map((p) => /* @__PURE__ */ jsxDEV("li", {
							className: "flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm",
							children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("span", {
								className: "font-medium text-habitra-text",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 84,
								columnNumber: 19
							}, this), /* @__PURE__ */ jsxDEV("span", {
								className: "ml-2 text-xs text-slate-500",
								children: p.city
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 85,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 83,
								columnNumber: 17
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsxDEV(Link, {
									to: "/app/properties/$propertyId",
									params: { propertyId: p.id },
									className: "text-xs font-semibold text-emerald-700 hover:underline",
									children: "Ver"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 88,
									columnNumber: 19
								}, this), /* @__PURE__ */ jsxDEV("button", {
									type: "button",
									disabled: attachMutation.isPending,
									className: "rounded-lg bg-habitra-action px-3 py-1 text-xs font-semibold text-white disabled:opacity-50",
									onClick: () => attachMutation.mutate(p.id),
									children: "Asignar aqui"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 95,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 87,
								columnNumber: 17
							}, this)]
						}, p.id, true, {
							fileName: _jsxFileName$1,
							lineNumber: 79,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 77,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 9
			}, this) : null,
			attachMutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(attachMutation.error) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 111,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/sellers/$sellerId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/$sellerId.tsx?tsr-split=component";
function SellerEditPage() {
	const { sellerId } = Route.useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const fetchSeller = useServerFn(getSellerWithProperties);
	const saveSeller = useServerFn(updateSeller);
	const [submitError, setSubmitError] = useState(null);
	const query = useQuery({
		queryKey: ["crm-seller", sellerId],
		queryFn: () => fetchSeller({ data: { id: sellerId } }),
		enabled: Boolean(sellerId)
	});
	const mutation = useMutation({
		mutationFn: (data) => saveSeller({ data }),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
			await queryClient.invalidateQueries({ queryKey: ["crm-seller", sellerId] });
			await navigate({ to: "/app/sellers" });
		},
		onError: (err) => {
			setSubmitError(formatMutationError(err));
		}
	});
	useEffect(() => {
		setSubmitError(null);
	}, [sellerId]);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, { title: "Editar vendedor" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando vendedor..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el vendedor." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 24
			}, this) : null,
			query.data === null && query.isFetched ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Vendedor no encontrado." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 49
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(SellerPropertiesSection, {
				sellerId,
				linkedProperties: query.data.linkedProperties,
				unassignedProperties: query.data.unassignedProperties
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV(SellerEditForm, {
				initial: query.data.seller,
				isSubmitting: mutation.isPending,
				submitError,
				onSubmit: async (values) => {
					setSubmitError(null);
					mutation.mutate(values);
				},
				onCancel: () => void navigate({ to: "/app/sellers" })
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 11
			}, this)] }, void 0, true) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 10
	}, this);
}
//#endregion
export { SellerEditPage as component };
