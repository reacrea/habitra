import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { l as PROPERTY_TYPE_LABELS, t as CREDIT_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { o as updateBuyerProfileData, r as getBuyerProfileData } from "./buyer-portal-BCqeCmGB.js";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/buyer/BuyerProfileSection.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/buyer/BuyerProfileSection.tsx";
function formatMoney(n) {
	if (n == null || Number.isNaN(n)) return "—";
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(n);
}
function toDraft(d) {
	return {
		name: d.name ?? "",
		email: d.email ?? "",
		phone: d.phone ?? "",
		city: d.city ?? "",
		interestZones: d.interestZones ?? "",
		maxBudget: d.maxBudget != null ? String(d.maxBudget) : "",
		downPayment: d.downPayment != null ? String(d.downPayment) : "",
		monthlyIncome: d.monthlyIncome != null ? String(d.monthlyIncome) : "",
		creditType: d.creditType ?? "BANCARIO",
		desiredPropertyType: d.desiredPropertyType ?? "",
		bedrooms: d.bedrooms != null ? String(d.bedrooms) : "",
		bathrooms: d.bathrooms != null ? String(d.bathrooms) : "",
		urgency: String(d.urgency ?? 3)
	};
}
function BuyerProfileSection({ title, description }) {
	const queryClient = useQueryClient();
	const fetchFn = useServerFn(getBuyerProfileData);
	const updateFn = useServerFn(updateBuyerProfileData);
	const query = useQuery({
		queryKey: ["buyer-profile"],
		queryFn: () => fetchFn()
	});
	const [editing, setEditing] = useState(false);
	const [draft, setDraft] = useState(null);
	const [savedBanner, setSavedBanner] = useState(false);
	const mutation = useMutation({
		mutationFn: (payload) => updateFn({ data: payload }),
		onSuccess: async () => {
			setEditing(false);
			setSavedBanner(true);
			await queryClient.invalidateQueries({ queryKey: ["buyer-profile"] });
			await queryClient.invalidateQueries({ queryKey: ["buyer-dashboard"] });
			window.setTimeout(() => setSavedBanner(false), 4e3);
		}
	});
	const startEdit = () => {
		if (query.data) {
			setDraft(toDraft(query.data));
			setEditing(true);
		}
	};
	const cancelEdit = () => {
		setEditing(false);
		setDraft(null);
		queryClient.invalidateQueries({ queryKey: ["buyer-profile"] });
	};
	const save = () => {
		if (!draft) return;
		mutation.mutate({
			name: draft.name.trim(),
			email: draft.email.trim(),
			phone: draft.phone.trim() || void 0,
			city: draft.city.trim() || void 0,
			interestZones: draft.interestZones.trim() || void 0,
			maxBudget: draft.maxBudget ? Number(draft.maxBudget) : void 0,
			downPayment: draft.downPayment ? Number(draft.downPayment) : void 0,
			monthlyIncome: draft.monthlyIncome ? Number(draft.monthlyIncome) : void 0,
			creditType: draft.creditType,
			desiredPropertyType: draft.desiredPropertyType === "" ? null : draft.desiredPropertyType,
			bedrooms: draft.bedrooms ? Number(draft.bedrooms) : void 0,
			bathrooms: draft.bathrooms ? Number(draft.bathrooms) : void 0,
			urgency: Number(draft.urgency)
		});
	};
	if (query.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando perfil..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 31
	}, this);
	if (query.isError || !query.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el perfil." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 44
	}, this);
	const d = query.data;
	const creditLabel = CREDIT_TYPE_LABELS[d.creditType] ?? d.creditType;
	const typeLabel = d.desiredPropertyType ? PROPERTY_TYPE_LABELS[d.desiredPropertyType] ?? d.desiredPropertyType : "—";
	const readRows = [
		{
			label: "Nombre",
			value: d.name || "—"
		},
		{
			label: "Email",
			value: d.email || "—"
		},
		{
			label: "Telefono",
			value: d.phone || "—"
		},
		{
			label: "Ciudad de interes",
			value: d.city?.trim() ? d.city : "—"
		},
		{
			label: "Zonas de interes",
			value: d.interestZones?.trim() ? d.interestZones : "—"
		},
		{
			label: "Presupuesto maximo",
			value: formatMoney(d.maxBudget)
		},
		{
			label: "Enganche",
			value: formatMoney(d.downPayment)
		},
		{
			label: "Ingreso mensual",
			value: formatMoney(d.monthlyIncome)
		},
		{
			label: "Tipo de credito",
			value: creditLabel
		},
		{
			label: "Tipo de propiedad deseada",
			value: typeLabel
		},
		{
			label: "Recamaras",
			value: d.bedrooms != null ? String(d.bedrooms) : "—"
		},
		{
			label: "Banos",
			value: d.bathrooms != null ? String(d.bathrooms) : "—"
		},
		{
			label: "Urgencia (1-5)",
			value: String(d.urgency ?? 3)
		}
	];
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-slate-600",
					children: description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 143,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 9
				}, this), !editing ? /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: startEdit,
					className: "shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
					children: "Editar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 11
				}, this) : /* @__PURE__ */ jsxDEV("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ jsxDEV("button", {
						type: "button",
						disabled: mutation.isPending,
						onClick: save,
						className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",
						children: mutation.isPending ? "Guardando..." : "Guardar cambios"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						disabled: mutation.isPending,
						onClick: cancelEdit,
						className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
						children: "Cancelar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 140,
				columnNumber: 7
			}, this),
			savedBanner ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900",
				role: "status",
				children: "Cambios guardados correctamente."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 176,
				columnNumber: 9
			}, this) : null,
			mutation.isError ? /* @__PURE__ */ jsxDEV("p", {
				className: "mt-4 text-sm text-red-600",
				children: formatMutationError(mutation.error)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 181,
				columnNumber: 9
			}, this) : null,
			!editing ? /* @__PURE__ */ jsxDEV("dl", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: readRows.map((row) => /* @__PURE__ */ jsxDEV("div", {
					className: "rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3",
					children: [/* @__PURE__ */ jsxDEV("dt", {
						className: "text-xs font-semibold uppercase text-slate-500",
						children: row.label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("dd", {
						className: "mt-1 text-sm text-habitra-text",
						children: row.value
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 15
					}, this)]
				}, row.label, true, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 9
			}, this) : draft ? /* @__PURE__ */ jsxDEV("div", {
				className: "mt-6 grid gap-3 md:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Nombre", /* @__PURE__ */ jsxDEV("input", {
							value: draft.name,
							onChange: (e) => setDraft({
								...draft,
								name: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Email", /* @__PURE__ */ jsxDEV("input", {
							type: "email",
							value: draft.email,
							onChange: (e) => setDraft({
								...draft,
								email: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Telefono", /* @__PURE__ */ jsxDEV("input", {
							value: draft.phone,
							onChange: (e) => setDraft({
								...draft,
								phone: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 214,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 212,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Ciudad de interes", /* @__PURE__ */ jsxDEV("input", {
							value: draft.city,
							onChange: (e) => setDraft({
								...draft,
								city: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600 md:col-span-2",
						children: ["Zonas de interes", /* @__PURE__ */ jsxDEV("textarea", {
							value: draft.interestZones,
							onChange: (e) => setDraft({
								...draft,
								interestZones: e.target.value
							}),
							className: "mt-1 min-h-20 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 230,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Presupuesto maximo (MXN)", /* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: draft.maxBudget,
							onChange: (e) => setDraft({
								...draft,
								maxBudget: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 238,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 236,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Enganche (MXN)", /* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: draft.downPayment,
							onChange: (e) => setDraft({
								...draft,
								downPayment: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 248,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Ingreso mensual (MXN)", /* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: draft.monthlyIncome,
							onChange: (e) => setDraft({
								...draft,
								monthlyIncome: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 258,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 256,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Tipo de credito", /* @__PURE__ */ jsxDEV("select", {
							value: draft.creditType,
							onChange: (e) => setDraft({
								...draft,
								creditType: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
							children: Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
								value,
								children: label
							}, value, false, {
								fileName: _jsxFileName,
								lineNumber: 274,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 268,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 266,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Tipo de propiedad deseada", /* @__PURE__ */ jsxDEV("select", {
							value: draft.desiredPropertyType,
							onChange: (e) => setDraft({
								...draft,
								desiredPropertyType: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
							children: [/* @__PURE__ */ jsxDEV("option", {
								value: "",
								children: "Sin definir"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 287,
								columnNumber: 15
							}, this), Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
								value,
								children: label
							}, value, false, {
								fileName: _jsxFileName,
								lineNumber: 289,
								columnNumber: 17
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 282,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 280,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Recamaras", /* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: draft.bedrooms,
							onChange: (e) => setDraft({
								...draft,
								bedrooms: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 297,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 295,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Banos", /* @__PURE__ */ jsxDEV("input", {
							type: "number",
							min: 0,
							value: draft.bathrooms,
							onChange: (e) => setDraft({
								...draft,
								bathrooms: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 307,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 305,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-xs font-semibold text-slate-600",
						children: ["Urgencia (1 = baja, 5 = alta)", /* @__PURE__ */ jsxDEV("select", {
							value: draft.urgency,
							onChange: (e) => setDraft({
								...draft,
								urgency: e.target.value
							}),
							className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ jsxDEV("option", {
								value: String(n),
								children: n
							}, n, false, {
								fileName: _jsxFileName,
								lineNumber: 323,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 317,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 315,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 139,
		columnNumber: 5
	}, this);
}
//#endregion
export { BuyerProfileSection as t };
