import { Link } from "@tanstack/react-router";

type Props = {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  message?: string;
};

export function AuthRequiredDialog({ open, onOpenChange, message }: Props) {
  if (!open) return null;

  const redirect =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : undefined;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
        <h3 className="text-lg font-semibold text-habitra-text">Inicia sesion para continuar</h3>
        <p className="mt-2 text-sm text-slate-600">
          {message ?? "Para continuar, inicia sesion o crea una cuenta."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/login"
            search={redirect ? { redirect } : undefined}
            className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white"
            onClick={() => onOpenChange(false)}
          >
            Iniciar sesion
          </Link>
          <a
            href="/register"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
            onClick={() => onOpenChange(false)}
          >
            Registrarse
          </a>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="ml-auto rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
