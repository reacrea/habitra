import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { BuyerProfileSection } from "@/components/buyer/BuyerProfileSection";
import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { getBuyerDashboardData } from "@/server/buyer-portal";

export const Route = createFileRoute("/buyer/dashboard")({
  component: BuyerDashboardPage,
});

function BuyerDashboardPage() {
  const fetchFn = useServerFn(getBuyerDashboardData);
  const query = useQuery({
    queryKey: ["buyer-dashboard"],
    queryFn: () => fetchFn(),
  });

  if (query.isPending) return <CrmLoading label="Cargando dashboard buyer..." />;
  if (query.isError || !query.data) return <CrmInlineError message="No se pudo cargar el dashboard del comprador." />;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-habitra-text">Mi dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">Resumen de avance de compra y recomendaciones.</p>
      </div>
      <BuyerProfileSection
        title="Perfil del comprador"
        description="Tus datos de contacto y preferencias. Edita para que el agente te asesore mejor."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Transacciones activas" value={String(query.data.metrics.activeTransactions)} />
        <MetricCard label="Documentos pendientes" value={String(query.data.metrics.pendingDocuments)} />
        <MetricCard label="Matches sugeridos" value={String(query.data.metrics.matches)} />
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-habitra-text">Transacciones recientes</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {query.data.recentTransactions.map((trx) => (
            <li key={trx.id} className="rounded-lg border border-slate-100 p-3">
              <p className="font-semibold">{trx.propertyTitle}</p>
              <p className="text-slate-600">{trx.status} · {trx.currentStage} · Agente: {trx.agentName}</p>
              <Link to="/buyer/transactions/$transactionId" params={{ transactionId: trx.id }} className="mt-1 inline-block text-emerald-700">
                Ver detalle
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold text-emerald-900">Insight AI</h2>
        <p className="mt-2 text-sm text-emerald-900">{query.data.ai.summary}</p>
      </section>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-2 text-2xl font-bold text-habitra-text">{value}</p>
    </article>
  );
}
