import { n as CrmInlineError } from "./CrmStates-D2sX26EK.js";
import { r as sellerUpdateSchema, t as sellerCreateSchema } from "./seller-CPZ8FCIF.js";
import { jsxDEV } from "react/jsx-dev-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//#region src/components/crm/sellers/SellerForm.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/crm/sellers/SellerForm.tsx";
function SellerFields({ register, errors }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "sm:col-span-2",
				children: [
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-sm font-medium text-slate-700",
						htmlFor: "seller-name",
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						id: "seller-name",
						className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
						...register("name")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 9
					}, this),
					errors.name?.message ? /* @__PURE__ */ jsxDEV("p", {
						className: "mt-1 text-sm text-red-600",
						children: String(errors.name.message)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [
				/* @__PURE__ */ jsxDEV("label", {
					className: "text-sm font-medium text-slate-700",
					htmlFor: "seller-email",
					children: "Correo"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					id: "seller-email",
					type: "email",
					className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
					...register("email")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				errors.email?.message ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-red-600",
					children: String(errors.email.message)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 11
				}, this) : null
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "seller-phone",
				children: "Telefono"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "seller-phone",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("phone")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "seller-price",
				children: "Precio esperado"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "seller-price",
				type: "number",
				step: "0.01",
				min: 0,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("expectedPrice")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "seller-urgency",
				children: "Urgencia (1-5)"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "seller-urgency",
				type: "number",
				min: 1,
				max: 5,
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("urgency")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ jsxDEV("label", {
					className: "text-sm font-medium text-slate-700",
					htmlFor: "seller-reason",
					children: "Motivo de venta"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("textarea", {
					id: "seller-reason",
					rows: 3,
					className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
					...register("sellingReason")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function SellerCreateForm({ isSubmitting, submitError, onSubmit, onCancel }) {
	const form = useForm({
		resolver: zodResolver(sellerCreateSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			urgency: void 0,
			expectedPrice: void 0,
			sellingReason: ""
		}
	});
	return /* @__PURE__ */ jsxDEV("form", {
		className: "mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
		onSubmit: form.handleSubmit(onSubmit),
		noValidate: true,
		children: [
			submitError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: submitError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ jsxDEV(SellerFields, {
				register: form.register,
				errors: form.formState.errors
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-wrap gap-3 pt-2",
				children: [/* @__PURE__ */ jsxDEV("button", {
					type: "submit",
					disabled: isSubmitting,
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60",
					children: isSubmitting ? "Guardando..." : "Crear vendedor"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 138,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
					children: "Cancelar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 137,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 130,
		columnNumber: 5
	}, this);
}
function SellerEditForm({ initial, isSubmitting, submitError, onSubmit, onCancel }) {
	const form = useForm({
		resolver: zodResolver(sellerUpdateSchema),
		defaultValues: {
			id: initial.id,
			name: initial.name,
			email: initial.email ?? "",
			phone: initial.phone ?? "",
			urgency: initial.urgency ?? void 0,
			expectedPrice: initial.expectedPrice ?? void 0,
			sellingReason: initial.sellingReason ?? ""
		}
	});
	return /* @__PURE__ */ jsxDEV("form", {
		className: "mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
		onSubmit: form.handleSubmit(onSubmit),
		noValidate: true,
		children: [
			/* @__PURE__ */ jsxDEV("input", {
				type: "hidden",
				...form.register("id")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 7
			}, this),
			submitError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: submitError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 190,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ jsxDEV(SellerFields, {
				register: form.register,
				errors: form.formState.errors
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 191,
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
					lineNumber: 193,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
					children: "Cancelar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 192,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 184,
		columnNumber: 5
	}, this);
}
//#endregion
export { SellerEditForm as n, SellerCreateForm as t };
