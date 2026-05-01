import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute, redirect, useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { authClient } from "@/lib/auth/auth-client";
import { getAppSession } from "@/server/get-app-session";
import { loginFormSchema, loginSearchSchema, type LoginFormValues } from "@/validations/auth-login";

export const Route = createFileRoute("/login")({
  validateSearch: (search) => loginSearchSchema.parse(search ?? {}),
  beforeLoad: async () => {
    const session = await getAppSession();
    if (session) {
      throw redirect({ to: "/app/dashboard" });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const search = Route.useSearch();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setError(null);
    try {
      await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });
    } catch (signInError) {
      const message =
        signInError instanceof Error ? signInError.message : "No se pudo iniciar sesion";
      setError(message);
      return;
    }
    await router.invalidate();

    let to = "/app/dashboard";
    const raw = search.redirect;
    if (raw) {
      try {
        const url = new URL(raw, window.location.origin);
        if (url.origin === window.location.origin) {
          to = `${url.pathname}${url.search}`;
        }
      } catch {
        /* ignorar URL invalida */
      }
    }
    await navigate({ to });
  });

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-semibold text-slate-900">Iniciar sesion</h1>
        <p className="mt-2 text-sm text-slate-600">Usa las credenciales demo del seed (por ejemplo agente1@habitra.mx).</p>

        <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit} noValidate>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Correo
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
              {...form.register("email")}
            />
            {form.formState.errors.email?.message ? (
              <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="password">
              Contrasena
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
              {...form.register("password")}
            />
            {form.formState.errors.password?.message ? (
              <p className="text-sm text-red-600">{form.formState.errors.password.message}</p>
            ) : null}
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          No tienes cuenta?{" "}
          <Link to="/register" className="text-emerald-700 underline">
            Registrate
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-slate-600">
          <Link to="/" className="text-emerald-700 underline">
            Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}
