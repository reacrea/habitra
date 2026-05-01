import { Link, createFileRoute } from "@tanstack/react-router";

import { PublicLayout } from "@/components/public/PublicLayout";

export const Route = createFileRoute("/sell")({
  component: SellPage,
});

function SellPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-5xl space-y-8 px-4 py-16 md:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Vende con Habitra</p>
          <h1 className="text-4xl font-bold leading-tight text-habitra-text md:text-5xl">
            Publica tu propiedad y cierra con mas claridad.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Ordenamos documentos, seguimiento comercial y operacion para que vender sea mas simple y confiable.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Valuacion y estrategia de precio",
            "Publicacion en canal digital",
            "Acompanamiento hasta cierre",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/demo" className="rounded-xl bg-habitra-action px-5 py-3 text-sm font-semibold text-white">
            Solicitar asesoria
          </Link>
          <Link to="/app/properties" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
            Ver CRM de propiedades
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
