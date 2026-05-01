import type { DashboardMetrics } from "@/server/dashboard-metrics";

import { MetricCard } from "../layout/MetricCard";
import { PageHeader } from "../layout/PageHeader";
import { SimpleBarChart } from "./SimpleBarChart";

type DashboardByRoleProps = {
  metrics: DashboardMetrics;
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

export function DashboardByRole({ metrics }: DashboardByRoleProps) {
  switch (metrics.role) {
    case "ADMIN":
      return (
        <>
          <PageHeader
            title="Dashboard administrador"
            description="Vision global de la plataforma y planes activos (datos seed)."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard title="Organizaciones" value={metrics.organizations} />
            <MetricCard title="Usuarios" value={metrics.users} />
            <MetricCard title="Operaciones registradas" value={metrics.transactions} />
            <MetricCard title="Leads totales" value={metrics.leads} />
            <MetricCard
              title="MRR estimado (seed)"
              value={formatMoney(metrics.estimatedMrr)}
              hint="Suma aproximada de suscripciones demo"
            />
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <SimpleBarChart
              title="Suscripciones activas por plan"
              data={metrics.plansBreakdown.map((p) => ({
                stage: p.planName,
                count: p.subscriptions,
              }))}
              emptyLabel="Sin suscripciones en seed"
            />
          </div>
        </>
      );
    case "BROKER_OWNER":
      return (
        <>
          <PageHeader
            title="Dashboard inmobiliaria"
            description="Productividad y pipeline consolidado de tu organizacion."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard title="Agentes" value={metrics.agents} hint="Membresias con rol agente" />
            <MetricCard title="Operaciones activas" value={metrics.activeTransactions} />
            <MetricCard title="Leads" value={metrics.totalLeads} />
            <MetricCard title="Propiedades listadas" value={metrics.propertiesListed} />
            <MetricCard title="Valor pipeline" value={formatMoney(metrics.pipelineValue)} />
          </div>
          <div className="mt-8">
            <SimpleBarChart title="Operaciones por etapa" data={metrics.pipelineByStage} />
          </div>
        </>
      );
    case "AGENT":
      return (
        <>
          <PageHeader
            title="Dashboard agente"
            description="Prioriza leads, operaciones y documentacion con datos en vivo del seed."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard title="Leads nuevos" value={metrics.newLeads} />
            <MetricCard title="Operaciones activas" value={metrics.activeTransactions} />
            <MetricCard title="Propiedades activas" value={metrics.activeProperties} />
            <MetricCard title="Compradores calificados" value={metrics.qualifiedBuyers} hint="Score 70 o mas" />
            <MetricCard title="Valor pipeline" value={formatMoney(metrics.pipelineValue)} />
          </div>
          {metrics.alerts.length > 0 ? (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              <p className="font-semibold">Alertas</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {metrics.alerts.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-8">
            <SimpleBarChart title="Pipeline por etapa (tus operaciones)" data={metrics.pipelineByStage} />
          </div>
        </>
      );
    case "BUYER":
      return (
        <>
          <PageHeader
            title="Dashboard comprador"
            description="Tu perfil financiero y actividad conectada al seed demo."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard title="Operaciones" value={metrics.transactions} />
            <MetricCard title="Documentos" value={metrics.documents} />
            <MetricCard title="Simulaciones guardadas" value={metrics.simulations} />
            <MetricCard
              title="Score de compra (dummy)"
              value={metrics.buyingScore ?? "—"}
              hint="Se refina en modulos de scoring"
            />
            <MetricCard
              title="Presupuesto maximo"
              value={metrics.maxBudget != null ? formatMoney(metrics.maxBudget) : "—"}
            />
          </div>
        </>
      );
    case "SELLER":
      return (
        <>
          <PageHeader
            title="Dashboard vendedor"
            description="Estado de tus propiedades y documentacion asociada al seed."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard title="Propiedades" value={metrics.properties} />
            <MetricCard title="Operaciones" value={metrics.transactions} />
            <MetricCard title="Documentos" value={metrics.documents} />
            <MetricCard
              title="Readiness promedio"
              value={`${metrics.readinessAvg}%`}
              hint="Promedio de readinessScore en tus propiedades"
            />
          </div>
        </>
      );
    default:
      return null;
  }
}
