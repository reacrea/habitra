import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { TransactionsTable } from "@/components/crm/transactions/TransactionsTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { listTransactions } from "@/server/transactions-crud";

export const Route = createFileRoute("/app/transactions/")({
  component: TransactionsIndexPage,
});

function TransactionsIndexPage() {
  const fetchTransactions = useServerFn(listTransactions);
  const query = useQuery({
    queryKey: ["crm-transactions"],
    queryFn: () => fetchTransactions(),
  });

  return (
    <div>
      <PageHeader
        title="Operaciones"
        description="Pipeline de compra/venta entre buyer, seller y property."
        actions={
          <Link
            to="/app/transactions/new"
            className="inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            Nueva operacion
          </Link>
        }
      />

      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar las operaciones." /> : null}
      {query.data && query.data.transactions.length === 0 ? (
        <CrmEmpty title="Sin operaciones" hint="Crea una operacion para conectar buyer/seller/property/agent." />
      ) : null}
      {query.data && query.data.transactions.length > 0 ? (
        <TransactionsTable transactions={query.data.transactions} />
      ) : null}
    </div>
  );
}
