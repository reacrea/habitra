import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/dashboard")({
  component: AppDashboardPage,
});

function AppDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard Habitra</h1>
        <p className="mt-2 text-slate-600">
          Base inicial de aplicacion lista para evolucionar por modulos en siguientes fases.
        </p>
      </div>
    </main>
  );
}
