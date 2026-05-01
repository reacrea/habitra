import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo")({
  component: DemoPage,
});

function DemoPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-slate-900">Solicitar demo</h1>
      <p className="mt-3 text-slate-600">
        Esta pantalla queda lista para conectar formulario comercial en siguientes fases.
      </p>
    </main>
  );
}
