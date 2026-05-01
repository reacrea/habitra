import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { DashboardByRole } from "@/components/dashboard/DashboardByRole";
import { getDashboardMetrics } from "@/server/dashboard-metrics";

export const Route = createFileRoute("/app/dashboard")({
  component: AppDashboardPage,
});

function AppDashboardPage() {
  const fetchMetrics = useServerFn(getDashboardMetrics);
  const metricsQuery = useQuery({
    queryKey: ["dashboard-metrics"],
    queryFn: () => fetchMetrics(),
  });

  if (metricsQuery.isPending) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center rounded-2xl border border-slate-200 bg-white/80 p-8 text-sm text-slate-600 shadow-soft">
        Cargando metricas del dashboard...
      </div>
    );
  }

  if (metricsQuery.isError) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800">
        No se pudieron cargar las metricas. Verifica sesion y base de datos.
      </div>
    );
  }

  if (!metricsQuery.data) {
    return null;
  }

  return <DashboardByRole metrics={metricsQuery.data} />;
}
