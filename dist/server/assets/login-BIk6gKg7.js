import { n as loginFormSchema, t as Route } from "./login-CJRU0EkL.js";
import { t as authClient } from "./auth-client-DZAfqt4N.js";
import { useState } from "react";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//#region src/routes/login.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/login.tsx?tsr-split=component";
function LoginPage() {
	const navigate = useNavigate();
	const router = useRouter();
	const search = Route.useSearch();
	const [error, setError] = useState(null);
	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	});
	const onSubmit = form.handleSubmit(async (values) => {
		setError(null);
		try {
			await authClient.signIn.email({
				email: values.email,
				password: values.password
			});
		} catch (signInError) {
			setError(signInError instanceof Error ? signInError.message : "No se pudo iniciar sesion");
			return;
		}
		await router.invalidate();
		let to = "/app/dashboard";
		const raw = search.redirect;
		if (raw) try {
			const url = new URL(raw, window.location.origin);
			if (url.origin === window.location.origin) to = `${url.pathname}${url.search}`;
		} catch {}
		await navigate({ to });
	});
	return /* @__PURE__ */ jsxDEV("main", {
		className: "mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "rounded-2xl border border-slate-200 bg-white p-8 shadow-soft",
			children: [
				/* @__PURE__ */ jsxDEV("h1", {
					className: "text-2xl font-semibold text-slate-900",
					children: "Iniciar sesion"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-slate-600",
					children: "Usa las credenciales demo del seed (por ejemplo agente1@habitra.mx)."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
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
									htmlFor: "email",
									children: "Correo"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
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
									lineNumber: 59,
									columnNumber: 13
								}, this),
								form.formState.errors.email?.message ? /* @__PURE__ */ jsxDEV("p", {
									className: "text-sm text-red-600",
									children: form.formState.errors.email.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 53
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
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
									lineNumber: 64,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ jsxDEV("input", {
									id: "password",
									type: "password",
									autoComplete: "current-password",
									className: "rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600",
									...form.register("password")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 13
								}, this),
								form.formState.errors.password?.message ? /* @__PURE__ */ jsxDEV("p", {
									className: "text-sm text-red-600",
									children: form.formState.errors.password.message
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 56
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 11
						}, this),
						error ? /* @__PURE__ */ jsxDEV("p", {
							className: "text-sm text-red-600",
							children: error
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 20
						}, this) : null,
						/* @__PURE__ */ jsxDEV("button", {
							type: "submit",
							disabled: form.formState.isSubmitting,
							className: "rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60",
							children: form.formState.isSubmitting ? "Entrando..." : "Entrar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-6 text-center text-sm text-slate-600",
					children: [
						"No tienes cuenta?",
						" ",
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/register",
							className: "text-emerald-700 underline",
							children: "Registrate"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-center text-sm text-slate-600",
					children: /* @__PURE__ */ jsxDEV(Link, {
						to: "/",
						className: "text-emerald-700 underline",
						children: "Volver al inicio"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 10
	}, this);
}
//#endregion
export { LoginPage as component };
