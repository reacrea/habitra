import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  getFinancialSimulationOptions,
  runFinancialSimulation,
} from "@/server/financial-simulator";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/reports/simulator")({
  component: FinancialSimulatorPage,
});

function FinancialSimulatorPage() {
  const fetchOptions = useServerFn(getFinancialSimulationOptions);
  const simulateFn = useServerFn(runFinancialSimulation);
  const optionsQuery = useQuery({
    queryKey: ["financial-simulation-options"],
    queryFn: () => fetchOptions(),
  });

  const mutation = useMutation({
    mutationFn: (payload: Record<string, unknown>) => simulateFn({ data: payload }),
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Simulador financiero" description="Calcula mensualidad, costos de cierre y recomendacion." />
      {optionsQuery.isPending ? <CrmLoading label="Cargando opciones..." /> : null}
      {optionsQuery.isError ? <CrmInlineError message="No se pudieron cargar opciones de simulacion." /> : null}
      {mutation.isError ? <CrmInlineError message={formatMutationError(mutation.error)} /> : null}

      {optionsQuery.data ? (
        <form
          className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            mutation.mutate({
              buyerId: String(fd.get("buyerId") ?? "") || undefined,
              propertyId: String(fd.get("propertyId") ?? "") || undefined,
              transactionId: String(fd.get("transactionId") ?? "") || undefined,
              propertyPrice: Number(fd.get("propertyPrice")),
              downPayment: Number(fd.get("downPayment")),
              years: Number(fd.get("years")),
              annualRate: Number(fd.get("annualRate")),
              creditType: String(fd.get("creditType")),
              notaryCostPct: Number(fd.get("notaryCostPct")),
              appraisalCost: Number(fd.get("appraisalCost")),
              otherCosts: Number(fd.get("otherCosts")),
              monthlyIncome: fd.get("monthlyIncome") ? Number(fd.get("monthlyIncome")) : undefined,
            });
          }}
        >
          <select name="buyerId" className="rounded-xl border px-3 py-2">
            <option value="">Buyer (opcional)</option>
            {optionsQuery.data.buyers.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
          </select>
          <select name="propertyId" className="rounded-xl border px-3 py-2">
            <option value="">Property (opcional)</option>
            {optionsQuery.data.properties.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
          </select>
          <input name="propertyPrice" type="number" min={1} required placeholder="Precio propiedad" className="rounded-xl border px-3 py-2" />
          <input name="downPayment" type="number" min={0} required placeholder="Enganche" className="rounded-xl border px-3 py-2" />
          <input name="years" type="number" min={1} max={40} required placeholder="Plazo años" className="rounded-xl border px-3 py-2" />
          <input name="annualRate" type="number" min={0} max={100} required placeholder="Tasa anual %" className="rounded-xl border px-3 py-2" />
          <select name="creditType" defaultValue="BANCARIO" className="rounded-xl border px-3 py-2">
            <option value="BANCARIO">Bancario</option>
            <option value="INFONAVIT">Infonavit</option>
            <option value="FOVISSSTE">Fovissste</option>
            <option value="COFINAVIT">Cofinavit</option>
            <option value="CONTADO">Contado</option>
            <option value="MIXTO">Mixto</option>
            <option value="OTRO">Otro</option>
          </select>
          <input name="notaryCostPct" type="number" min={0} max={30} defaultValue={6} required placeholder="% notaria" className="rounded-xl border px-3 py-2" />
          <input name="appraisalCost" type="number" min={0} defaultValue={12000} required placeholder="Costo avaluo" className="rounded-xl border px-3 py-2" />
          <input name="otherCosts" type="number" min={0} defaultValue={8000} required placeholder="Otros costos" className="rounded-xl border px-3 py-2" />
          <input name="monthlyIncome" type="number" min={0} placeholder="Ingreso mensual (opcional)" className="rounded-xl border px-3 py-2" />
          <button disabled={mutation.isPending} className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white md:col-span-2">
            {mutation.isPending ? "Simulando..." : "Ejecutar simulacion"}
          </button>
        </form>
      ) : null}

      {mutation.data ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
          <p><strong>Mensualidad estimada:</strong> ${mutation.data.estimatedMonthly.toLocaleString("es-MX")}</p>
          <p><strong>Costos cierre:</strong> ${mutation.data.estimatedClosingCosts.toLocaleString("es-MX")}</p>
          <p><strong>Total inicial:</strong> ${mutation.data.initialTotalNeeded.toLocaleString("es-MX")}</p>
          <p><strong>Affordability ratio:</strong> {mutation.data.affordabilityRatio.toFixed(2)}</p>
          <p><strong>Recomendacion:</strong> {mutation.data.recommendation}</p>
        </div>
      ) : null}
    </div>
  );
}
