import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute, redirect, useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { authClient } from "@/lib/auth/auth-client";
import { getAppSession } from "@/server/get-app-session";
import {
  registerFormSchema,
  type RegisterFormValues,
} from "@/validations/auth-register";

export const Route = createFileRoute("/register")({
  beforeLoad: async () => {
    const session = await getAppSession();
    if (session) {
      throw redirect({ to: "/buyer/profile" });
    }
  },
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setError(null);
    setSuccess(null);
    try {
      await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      setSuccess("Cuenta creada correctamente. Iniciando sesion...");

      try {
        await authClient.signIn.email({
          email: values.email,
          password: values.password,
        });
        await router.invalidate();
        await navigate({ to: "/buyer/profile" });
        return;
      } catch {
        await navigate({ to: "/login" });
        return;
      }
    } catch (registerError) {
      const message =
        registerError instanceof Error
          ? registerError.message
          : "No se pudo completar el registro";
      setError(message);
    }
  });

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-semibold text-slate-900">Crear cuenta</h1>
        <p className="mt-2 text-sm text-slate-600">
          Registra tu cuenta para guardar favoritos, comparar y avanzar en tu compra.
        </p>

        <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit} noValidate>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
              {...form.register("name")}
            />
            {form.formState.errors.name?.message ? (
              <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
            ) : null}
          </div>

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
              autoComplete="new-password"
              className="rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
              {...form.register("password")}
            />
            {form.formState.errors.password?.message ? (
              <p className="text-sm text-red-600">{form.formState.errors.password.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700" htmlFor="confirmPassword">
              Confirmar contrasena
            </label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
              {...form.register("confirmPassword")}
            />
            {form.formState.errors.confirmPassword?.message ? (
              <p className="text-sm text-red-600">
                {form.formState.errors.confirmPassword.message}
              </p>
            ) : null}
          </div>

          {error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}
          {success ? (
            <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {success}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {form.formState.isSubmitting ? "Creando..." : "Crear cuenta"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Ya tienes cuenta?{" "}
          <Link to="/login" className="text-emerald-700 underline">
            Inicia sesion
          </Link>
        </p>
      </div>
    </main>
  );
}
