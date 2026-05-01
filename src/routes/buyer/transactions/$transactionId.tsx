import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { getBuyerTransactionDetailData } from "@/server/buyer-portal";

export const Route = createFileRoute("/buyer/transactions/$transactionId")({
  component: BuyerTransactionDetailPage,
});

function BuyerTransactionDetailPage() {
  const { transactionId } = Route.useParams();
  const fetchFn = useServerFn(getBuyerTransactionDetailData);
  const query = useQuery({
    queryKey: ["buyer-transaction-detail", transactionId],
    queryFn: () => fetchFn({ data: { id: transactionId } }),
    enabled: Boolean(transactionId),
  });

  if (query.isPending) return <CrmLoading label="Cargando detalle de transaccion..." />;
  if (query.isError || !query.data) return <CrmInlineError message="No se pudo cargar el detalle de la transaccion." />;

  const { transaction, documents, timeline, tasks, ai } = query.data;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Link to="/buyer/transactions" className="text-sm font-semibold text-emerald-700">Volver</Link>
        <h1 className="text-3xl font-bold text-habitra-text">{transaction.property.title}</h1>
        <p className="text-sm text-slate-600">{transaction.status} · {transaction.currentStage}</p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-habitra-text">Timeline</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {timeline.map((t) => (
            <li key={t.id} className="rounded-lg border border-slate-100 px-3 py-2">
              <p className="font-semibold">{t.name}</p>
              <p className="text-slate-600">{t.status}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-habitra-text">Documentos</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {documents.map((d) => (
            <li key={d.id} className="rounded-lg border border-slate-100 px-3 py-2">
              <p className="font-semibold">{d.title}</p>
              <p className="text-slate-600">{d.type} · {d.status}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-habitra-text">Tasks relacionadas</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {tasks.map((t) => (
            <li key={t.id} className="rounded-lg border border-slate-100 px-3 py-2">
              <p className="font-semibold">{t.title}</p>
              <p className="text-slate-600">{t.status}{t.dueDate ? ` · ${new Date(t.dueDate).toLocaleDateString("es-MX")}` : ""}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold text-emerald-900">AI insight</h2>
        <p className="mt-2 text-sm text-emerald-900">{ai.summary}</p>
      </section>
    </div>
  );
}
