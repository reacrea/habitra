import { Outlet, Link, createFileRoute, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { getBuyerTransactionsData } from "@/server/buyer-portal";

export const Route = createFileRoute("/buyer/transactions")({
  component: BuyerTransactionsPage,
});

function BuyerTransactionsPage() {
  const location = useLocation();
  const isDetailPath = /^\/buyer\/transactions\/[^/]+$/.test(location.pathname);
  if (isDetailPath) return <Outlet />;

  const fetchFn = useServerFn(getBuyerTransactionsData);
  const query = useQuery({
    queryKey: ["buyer-transactions"],
    queryFn: () => fetchFn(),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-habitra-text">Mis transacciones</h1>
        <p className="mt-1 text-sm text-slate-600">Seguimiento de estatus, etapas y pendientes.</p>
      </div>
      {query.isPending ? <CrmLoading label="Cargando transacciones..." /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar transacciones." /> : null}
      {query.data && query.data.transactions.length === 0 ? (
        <CrmEmpty title="Sin transacciones" hint="Cuando inicies proceso de compra, apareceran aqui." />
      ) : null}
      {query.data && query.data.transactions.length > 0 ? (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Propiedad</th>
                <th className="px-4 py-3 font-semibold">Estado</th>
                <th className="px-4 py-3 font-semibold">Etapa</th>
                <th className="px-4 py-3 font-semibold">Agente</th>
                <th className="px-4 py-3 font-semibold">Docs</th>
                <th className="px-4 py-3 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {query.data.transactions.map((row) => (
                <tr key={row.id} className="border-t border-slate-100">
                  <td className="px-4 py-3">{row.propertyTitle}</td>
                  <td className="px-4 py-3">{row.status}</td>
                  <td className="px-4 py-3">{row.currentStage}</td>
                  <td className="px-4 py-3">{row.agentName}</td>
                  <td className="px-4 py-3">{row.documentsCount}</td>
                  <td className="px-4 py-3">
                    <Link to="/buyer/transactions/$transactionId" params={{ transactionId: row.id }} className="font-semibold text-emerald-700">
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
