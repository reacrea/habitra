import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getPlatformMessage = createServerFn({ method: "GET" }).handler(async () => {
  return "Donde las operaciones inmobiliarias si cierran";
});

export const Route = createFileRoute("/")({
  loader: () => getPlatformMessage(),
  component: LandingPage,
});

function LandingPage() {
  const message = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-stone-50 text-slate-800">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Habitra</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Compra, vende y cierra propiedades con claridad.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          {message}. Habitra organiza leads, documentos, compradores, vendedores y operaciones en
          un solo lugar.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/demo"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Solicitar demo
          </Link>
          <Link
            to="/app/dashboard"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Ver plataforma
          </Link>
        </div>
      </section>
    </main>
  );
}
