import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-Bh_vY4LQ.js";
import { t as formatMutationError } from "./mutation-error-BrwIK5uA.js";
import { o as updateBuyerProfileData, r as getBuyerProfileData } from "./buyer-portal-CtQMjOPV.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/buyer/profile.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/buyer/profile.tsx?tsr-split=component";
function BuyerProfilePage() {
	const fetchFn = useServerFn(getBuyerProfileData);
	const updateFn = useServerFn(updateBuyerProfileData);
	const query = useQuery({
		queryKey: ["buyer-profile"],
		queryFn: () => fetchFn()
	});
	const mutation = useMutation({ mutationFn: (payload) => updateFn({ data: payload }) });
	if (query.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando perfil buyer..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 31
	}, this);
	if (query.isError || !query.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el perfil." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 44
	}, this);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Mi perfil comprador"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Actualiza presupuesto y preferencias para mejorar tus matches."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			mutation.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutation.error) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 27
			}, this) : null,
			mutation.isSuccess ? /* @__PURE__ */ jsxDEV("p", {
				className: "text-sm text-emerald-700",
				children: "Perfil actualizado."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 29
			}, this) : null,
			/* @__PURE__ */ jsxDEV("form", {
				className: "grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2",
				onSubmit: (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					mutation.mutate({
						phone: String(fd.get("phone") ?? "") || void 0,
						maxBudget: fd.get("maxBudget") ? Number(fd.get("maxBudget")) : void 0,
						downPayment: fd.get("downPayment") ? Number(fd.get("downPayment")) : void 0,
						monthlyIncome: fd.get("monthlyIncome") ? Number(fd.get("monthlyIncome")) : void 0,
						creditType: String(fd.get("creditType") ?? "") || void 0,
						desiredZone: String(fd.get("desiredZone") ?? "") || void 0,
						desiredPropertyType: String(fd.get("desiredPropertyType") ?? "") || void 0,
						bedrooms: fd.get("bedrooms") ? Number(fd.get("bedrooms")) : void 0,
						bathrooms: fd.get("bathrooms") ? Number(fd.get("bathrooms")) : void 0
					});
				},
				children: [
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.phone ?? "",
						name: "phone",
						placeholder: "Telefono",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.maxBudget ?? "",
						name: "maxBudget",
						type: "number",
						placeholder: "Presupuesto maximo",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.downPayment ?? "",
						name: "downPayment",
						type: "number",
						placeholder: "Enganche",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.monthlyIncome ?? "",
						name: "monthlyIncome",
						type: "number",
						placeholder: "Ingreso mensual",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("select", {
						defaultValue: query.data.creditType ?? "BANCARIO",
						name: "creditType",
						className: "rounded-xl border px-3 py-2 text-sm",
						children: [
							/* @__PURE__ */ jsxDEV("option", {
								value: "BANCARIO",
								children: "Bancario"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "INFONAVIT",
								children: "Infonavit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "FOVISSSTE",
								children: "Fovissste"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "COFINAVIT",
								children: "Cofinavit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "CONTADO",
								children: "Contado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "MIXTO",
								children: "Mixto"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "OTRO",
								children: "Otro"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.desiredZone ?? "",
						name: "desiredZone",
						placeholder: "Zona deseada",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("select", {
						defaultValue: query.data.desiredPropertyType ?? "",
						name: "desiredPropertyType",
						className: "rounded-xl border px-3 py-2 text-sm",
						children: [
							/* @__PURE__ */ jsxDEV("option", {
								value: "",
								children: "Tipo de propiedad"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "CASA",
								children: "Casa"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "DEPARTAMENTO",
								children: "Departamento"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "TERRENO",
								children: "Terreno"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "OFICINA",
								children: "Oficina"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "LOCAL_COMERCIAL",
								children: "Local comercial"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "BODEGA",
								children: "Bodega"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "PENTHOUSE",
								children: "Penthouse"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("option", {
								value: "OTRO",
								children: "Otro"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.bedrooms ?? "",
						name: "bedrooms",
						type: "number",
						placeholder: "Recamaras",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						defaultValue: query.data.bathrooms ?? "",
						name: "bathrooms",
						type: "number",
						placeholder: "Banos",
						className: "rounded-xl border px-3 py-2 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("button", {
						disabled: mutation.isPending,
						className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white md:col-span-2",
						children: mutation.isPending ? "Guardando..." : "Guardar perfil"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyerProfilePage as component };
