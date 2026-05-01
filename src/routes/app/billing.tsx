import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { getPricingData } from "@/server/pricing-admin";

export const Route = createFileRoute("/app/billing")({
  component: BillingPage,
});

function BillingPage() {
  const fetchPricing = useServerFn(getPricingData);
  const query = useQuery({
    queryKey: ["pricing-data"],
    queryFn: () => fetchPricing(),
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Pricing y Billing" description="Planes, suscripcion actual y estimacion mensual." />
      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message="No se pudo cargar pricing." /> : null}
      {query.data ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {query.data.plans.map((plan) => (
              <div key={plan.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-habitra-text">{plan.name}</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  ${plan.priceMxn.toLocaleString("es-MX")} MXN
                </p>
                <p className="text-xs text-slate-500">{plan.billingCadence}</p>
                <p className="mt-2 text-xs text-slate-600">{plan.description ?? "Sin descripcion"}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-habitra-text">Suscripcion actual</h3>
            {query.data.currentSubscription ? (
              <div className="mt-2 text-sm text-slate-700">
                <p>Plan: <strong>{query.data.currentSubscription.planName}</strong></p>
                <p>Seats: <strong>{query.data.currentSubscription.seats}</strong></p>
                <p>Status: <strong>{query.data.currentSubscription.status}</strong></p>
                <p>Estimado mensual: <strong>${query.data.currentSubscription.estimatedMonthly.toLocaleString("es-MX")} MXN</strong></p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-slate-600">Sin suscripcion registrada.</p>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
