import { t as authClient } from "./auth-client-DZAfqt4N.js";
import { useState } from "react";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { z } from "zod";
import { jsxDEV } from "react/jsx-dev-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//#region src/validations/auth-register.ts
var registerFormSchema = z.object({
	name: z.string().min(2, "Nombre requerido"),
	email: z.string().email("Correo invalido"),
	password: z.string().min(8, "Minimo 8 caracteres"),
	confirmPassword: z.string().min(8, "Confirma tu contrasena")
}).refine((value) => value.password === value.confirmPassword, {
	message: "Las contrasenas no coinciden",
	path: ["confirmPassword"]
});
//#endregion
//#region src/routes/register.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/register.tsx?tsr-split=component";
function RegisterPage() {
	const navigate = useNavigate();
	const router = useRouter();
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const form = useForm({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	});
	const onSubmit = form.handleSubmit(async (values) => {
		setError(null);
		setSuccess(null);
		try {
			await authClient.signUp.email({
				name: values.name,
				email: values.email,
				password: values.password
			});
			setSuccess("Cuenta creada correctamente. Iniciando sesion...");
			try {
				await authClient.signIn.email({
					email: values.email,
					password: values.password
				});
				await router.invalidate();
				await navigate({ to: "/buyer/dashboard" });
				return;
			} catch {
				await navigate({ to: "/login" });
				return;
			}
		} catch (registerError) {
			setError(registerError instanceof Error ? registerError.message : "No se pudo completar el registro");
		}
	});
	return /* @__PURE__ */ jsxDEV("main", {
		className: "mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "rounded-2xl border border-slate-200 bg-white p-8 shadow-soft",
			children: [
				/* @__PURE__ */ jsxDEV("h1", {
					className: "text-2xl font-semibold text-slate-900",
					children: "Crear cuenta"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-slate-600",
					children: "Registra tu cuenta para guardar favoritos, comparar y avanzar en tu compra."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("form", {
					className: "mt-6 flex flex-col gap-4",
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							className: "flex flex-col gap-1",
							children: [
								/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									htmlFor: "name",
									children: "Nombre"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 61,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("input", {
									id: "name",
									type: "text",
									autoComplete: "name",
									className: "rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
									...form.register("name")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 13
								}, this),
								form.formState.errors.name?.message ? /* @__PURE__ */ jsxDEV("p", {
									className: "text-sm text-red-600",
									children: form.formState.errors.name.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 65,
									columnNumber: 52
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "flex flex-col gap-1",
							children: [
								/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									htmlFor: "email",
									children: "Correo"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("input", {
									id: "email",
									type: "email",
									autoComplete: "email",
									className: "rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
									...form.register("email")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 13
								}, this),
								form.formState.errors.email?.message ? /* @__PURE__ */ jsxDEV("p", {
									className: "text-sm text-red-600",
									children: form.formState.errors.email.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 53
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "flex flex-col gap-1",
							children: [
								/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									htmlFor: "password",
									children: "Contrasena"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("input", {
									id: "password",
									type: "password",
									autoComplete: "new-password",
									className: "rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
									...form.register("password")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 13
								}, this),
								form.formState.errors.password?.message ? /* @__PURE__ */ jsxDEV("p", {
									className: "text-sm text-red-600",
									children: form.formState.errors.password.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 56
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "flex flex-col gap-1",
							children: [
								/* @__PURE__ */ jsxDEV("label", {
									className: "text-sm font-medium text-slate-700",
									htmlFor: "confirmPassword",
									children: "Confirmar contrasena"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("input", {
									id: "confirmPassword",
									type: "password",
									autoComplete: "new-password",
									className: "rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
									...form.register("confirmPassword")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 88,
									columnNumber: 13
								}, this),
								form.formState.errors.confirmPassword?.message ? /* @__PURE__ */ jsxDEV("p", {
									className: "text-sm text-red-600",
									children: form.formState.errors.confirmPassword.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 63
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 11
						}, this),
						error ? /* @__PURE__ */ jsxDEV("p", {
							className: "rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700",
							children: error
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 20
						}, this) : null,
						success ? /* @__PURE__ */ jsxDEV("p", {
							className: "rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700",
							children: success
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 22
						}, this) : null,
						/* @__PURE__ */ jsxDEV("button", {
							type: "submit",
							disabled: form.formState.isSubmitting,
							className: "rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60",
							children: form.formState.isSubmitting ? "Creando..." : "Crear cuenta"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-6 text-center text-sm text-slate-600",
					children: [
						"Ya tienes cuenta?",
						" ",
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/login",
							className: "text-emerald-700 underline",
							children: "Inicia sesion"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 10
	}, this);
}
//#endregion
export { RegisterPage as component };
