import { n as CrmInlineError } from "./CrmStates-DNZQWVUU.js";
import { a as LEAD_TEMPERATURE_LABELS, i as LEAD_STATUS_LABELS, o as LEAD_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { r as leadUpdateSchema, t as leadCreateSchema } from "./lead-BeEELKnZ.js";
import { jsxDEV } from "react/jsx-dev-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//#region src/components/crm/leads/LeadForm.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/crm/leads/LeadForm.tsx";
function LeadFields({ register, errors }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "sm:col-span-2",
				children: [
					/* @__PURE__ */ jsxDEV("label", {
						className: "text-sm font-medium text-slate-700",
						htmlFor: "lead-name",
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("input", {
						id: "lead-name",
						className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
						...register("name")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					errors.name?.message ? /* @__PURE__ */ jsxDEV("p", {
						className: "mt-1 text-sm text-red-600",
						children: String(errors.name.message)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [
				/* @__PURE__ */ jsxDEV("label", {
					className: "text-sm font-medium text-slate-700",
					htmlFor: "lead-email",
					children: "Correo"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					id: "lead-email",
					type: "email",
					className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
					...register("email")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				errors.email?.message ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-red-600",
					children: String(errors.email.message)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 11
				}, this) : null
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "lead-phone",
				children: "Telefono"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("input", {
				id: "lead-phone",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("phone")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "lead-type",
				children: "Tipo"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("select", {
				id: "lead-type",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("type"),
				children: Object.entries(LEAD_TYPE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
					value,
					children: label
				}, value, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [
				/* @__PURE__ */ jsxDEV("label", {
					className: "text-sm font-medium text-slate-700",
					htmlFor: "lead-source",
					children: "Origen"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					id: "lead-source",
					className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
					...register("source")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 9
				}, this),
				errors.source?.message ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-red-600",
					children: String(errors.source.message)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 11
				}, this) : null
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "lead-status",
				children: "Estado"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("select", {
				id: "lead-status",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("status"),
				children: Object.entries(LEAD_STATUS_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
					value,
					children: label
				}, value, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("label", {
				className: "text-sm font-medium text-slate-700",
				htmlFor: "lead-temp",
				children: "Temperatura"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("select", {
				id: "lead-temp",
				className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
				...register("temperature"),
				children: Object.entries(LEAD_TEMPERATURE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
					value,
					children: label
				}, value, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ jsxDEV("label", {
					className: "text-sm font-medium text-slate-700",
					htmlFor: "lead-notes",
					children: "Notas"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 134,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("textarea", {
					id: "lead-notes",
					rows: 4,
					className: "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
					...register("notesText")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 133,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
function LeadCreateForm({ isSubmitting, submitError, onSubmit, onCancel }) {
	const form = useForm({
		resolver: zodResolver(leadCreateSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			type: "COMPRADOR",
			source: "",
			status: "NUEVO",
			temperature: "TIBIO",
			notesText: ""
		}
	});
	return /* @__PURE__ */ jsxDEV("form", {
		className: "mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
		onSubmit: form.handleSubmit(onSubmit),
		noValidate: true,
		children: [
			submitError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: submitError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 181,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ jsxDEV(LeadFields, {
				register: form.register,
				errors: form.formState.errors
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 182,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "flex flex-wrap gap-3 pt-2",
				children: [/* @__PURE__ */ jsxDEV("button", {
					type: "submit",
					disabled: isSubmitting,
					className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60",
					children: isSubmitting ? "Guardando..." : "Crear lead"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 184,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
					children: "Cancelar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 191,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 183,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 176,
		columnNumber: 5
	}, this);
}
function LeadEditForm({ initial, isSubmitting, submitError, onSubmit, onCancel }) {
	const form = useForm({
		resolver: zodResolver(leadUpdateSchema),
		defaultValues: {
			id: initial.id,
			name: initial.name,
			email: initial.email ?? "",
			phone: initial.phone ?? "",
			type: initial.type,
			source: initial.source,
			status: initial.status,
			temperature: initial.temperature,
			notesText: initial.notesText ?? ""
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
				lineNumber: 239,
				columnNumber: 7
			}, this),
			submitError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: submitError }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 240,
				columnNumber: 22
			}, this) : null,
			/* @__PURE__ */ jsxDEV(LeadFields, {
				register: form.register,
				errors: form.formState.errors
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 241,
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
					lineNumber: 243,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
					children: "Cancelar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 250,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 242,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 234,
		columnNumber: 5
	}, this);
}
//#endregion
export { LeadEditForm as n, LeadCreateForm as t };
