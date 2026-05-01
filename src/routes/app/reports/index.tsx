import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { getReportsData } from "@/server/reports-data";

export const Route = createFileRoute("/app/reports/")({
  component: ReportsPage,
});

function ChartCard({ title, data }: { title: string; data: Array<{ key: string; value: number }> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-habitra-text">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="key" tick={{ fontSize: 10 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ReportsPage() {
  const fetchReports = useServerFn(getReportsData);
  const query = useQuery({
    queryKey: ["reports-data"],
    queryFn: () => fetchReports(),
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reportes"
        description="Indicadores de leads, operaciones y propiedades."
        actions={
          <>
            <Link to="/app/reports/simulator" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold">
              Simulador financiero
            </Link>
            <Link to="/app/reports/ai" className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white">
              AI dummy
            </Link>
          </>
        }
      />
      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar reportes." /> : null}
      {query.data ? (
        <div className="grid gap-4 md:grid-cols-2">
          <ChartCard title="Leads por estado" data={query.data.leadsByStatus} />
          <ChartCard title="Operaciones por etapa" data={query.data.transactionsByStage} />
          <ChartCard title="Propiedades por estado" data={query.data.propertiesByStatus} />
          <ChartCard title="Cierres por mes" data={query.data.closingsByMonth} />
        </div>
      ) : null}
    </div>
  );
}
