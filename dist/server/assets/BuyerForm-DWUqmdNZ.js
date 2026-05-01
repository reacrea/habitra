import { a as PROPERTY_TYPE_LABELS, t as CREDIT_TYPE_LABELS } from "./crm-labels-PcpLlboI.js";
import { r as buyerUpdateSchema, t as buyerCreateSchema } from "./buyer-BuWq98Na.js";
import { n as CrmInlineError } from "./CrmStates-DncpktRG.js";
import { jsxDEV } from "react/jsx-dev-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//#region src/components/crm/buyers/BuyerForm.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/crm/buyers/BuyerForm.tsx";
function BuyerFields({ register, errors }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "sm:col-span-2",
				children: [
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-sm font-medium text-slate-700",
						htmlFor: "buyer-name",
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						id: "buyer-name",
						className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
						...register("name")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 9
					}, this),
					errors.name?.message ? /* @__PURE__ */ jsxDEV("p", {
						className: "mt-1 text-sm text-red-600",
						children: String(errors.name.message)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [
				/* @__PURE__ */ jsxDEV("label", {
					className: "text-sm font-medium text-slate-700",
					htmlFor: "buyer-email",
					children: "Correo"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					id: "buyer-email",
					type: "email",
					className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
					...register("email")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				errors.email?.message ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-red-600",
					children: String(errors.email.message)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this) : null
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-phone",
				children: "Telefono"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-phone",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("phone")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-zone",
				children: "Zona deseada"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-zone",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("desiredZone")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-ptype",
				children: "Tipo de propiedad"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("select", {
				id: "buyer-ptype",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("desiredPropertyType"),
				children: [/* @__PURE__ */ jsxDEV("option", {
					value: "",
					children: "Sin especificar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 11
				}, this), Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
					value,
					children: label
				}, value, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 13
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-credit",
				children: "Tipo de credito"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("select", {
				id: "buyer-credit",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("creditType"),
				children: [/* @__PURE__ */ jsxDEV("option", {
					value: "",
					children: "Por defecto (bancario)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this), Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
					value,
					children: label
				}, value, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 13
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-max",
				children: "Presupuesto max."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-max",
				type: "number",
				step: "0.01",
				min: 0,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("maxBudget")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-down",
				children: "Enganche"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-down",
				type: "number",
				step: "0.01",
				min: 0,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("downPayment")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-income",
				children: "Ingreso mensual"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 140,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-income",
				type: "number",
				step: "0.01",
				min: 0,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("monthlyIncome")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-bed",
				children: "Recamaras"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-bed",
				type: "number",
				min: 0,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("bedrooms")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-bath",
				children: "Banos"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 167,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-bath",
				type: "number",
				min: 0,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("bathrooms")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 170,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-urgency",
				children: "Urgencia (1-5)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-urgency",
				type: "number",
				min: 1,
				max: 5,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("urgency")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 183,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 179,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "buyer-score",
				children: "Score compra (0-100)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "buyer-score",
				type: "number",
				min: 0,
				max: 100,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("buyingScore")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
function BuyerCreateForm({ isSubmitting, submitError, onSubmit, onCancel }) {
	const form = useForm({
		resolver: zodResolver(buyerCreateSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			maxBudget: void 0,
			downPayment: void 0,
			monthlyIncome: void 0,
			creditType: void 0,
			desiredZone: "",
			desiredPropertyType: void 0,
			bedrooms: void 0,
			bathrooms: void 0,
			urgency: void 0,
			buyingScore: void 0
		}
	});
	return /* @__PURE__ */ jsxDEV("form", {
		className: "mx-auto max-w-3xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
		onSubmit: form.handleSubmit(onSubmit),
		noValidate: true,
		children: [
			submitError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: submitError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 246,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ jsxDEV(BuyerFields, {
				register: form.register,
				errors: form.formState.errors
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 247,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-wrap gap-3 pt-2",
				children: [/* @__PURE__ */ jsxDEV("button", {
					type: "submit",
					disabled: isSubmitting,
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60",
					children: isSubmitting ? "Guardando..." : "Crear comprador"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 249,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
					children: "Cancelar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 256,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 248,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 241,
		columnNumber: 5
	}, this);
}
function BuyerEditForm({ initial, isSubmitting, submitError, onSubmit, onCancel }) {
	const form = useForm({
		resolver: zodResolver(buyerUpdateSchema),
		defaultValues: {
			id: initial.id,
			name: initial.name,
			email: initial.email ?? "",
			phone: initial.phone ?? "",
			maxBudget: initial.maxBudget ?? void 0,
			downPayment: initial.downPayment ?? void 0,
			monthlyIncome: initial.monthlyIncome ?? void 0,
			creditType: initial.creditType,
			desiredZone: initial.desiredZone ?? "",
			desiredPropertyType: initial.desiredPropertyType ?? void 0,
			bedrooms: initial.bedrooms ?? void 0,
			bathrooms: initial.bathrooms ?? void 0,
			urgency: initial.urgency ?? void 0,
			buyingScore: initial.buyingScore ?? void 0
		}
	});
	return /* @__PURE__ */ jsxDEV("form", {
		className: "mx-auto max-w-3xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
		onSubmit: form.handleSubmit(onSubmit),
		noValidate: true,
		children: [
			/* @__PURE__ */ jsxDEV("input", {
				type: "hidden",
				...form.register("id")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 307,
				columnNumber: 7
			}, this),
			submitError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: submitError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 308,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ jsxDEV(BuyerFields, {
				register: form.register,
				errors: form.formState.errors
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 309,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-wrap gap-3 pt-2",
				children: [/* @__PURE__ */ jsxDEV("button", {
					type: "submit",
					disabled: isSubmitting,
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60",
					children: isSubmitting ? "Guardando..." : "Guardar cambios"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 311,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
					children: "Cancelar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 318,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 310,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 302,
		columnNumber: 5
	}, this);
}
//#endregion
export { BuyerEditForm as n, BuyerCreateForm as t };
