import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { BuyersTable } from "@/components/crm/buyers/BuyersTable";
import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { CrmFilterSummary } from "@/components/crm/CrmTableFilterControls";
import { PageHeader } from "@/components/layout/PageHeader";
import { useCrmColumnFilters } from "@/hooks/use-crm-column-filters";
import { applyBuyerColumnFilters } from "@/lib/crm-column-filter-apply";
import { listBuyers } from "@/server/buyers-crud";

export const Route = createFileRoute("/app/buyers/")({
  component: BuyersIndexPage,
});

function BuyersIndexPage() {
  const fetchBuyers = useServerFn(listBuyers);
  const query = useQuery({
    queryKey: ["crm-buyers"],
    queryFn: () => fetchBuyers(),
  });

  const buyers = query.data?.buyers ?? [];
  const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
  const filtered = useMemo(() => applyBuyerColumnFilters(buyers, filters), [buyers, filters]);

  return (
    <div>
      <PageHeader
        title="Compradores"
        description="Perfiles de compra y presupuesto."
        actions={
          <Link
            to="/app/buyers/new"
            className="inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            Nuevo comprador
          </Link>
        }
      />

      {query.isPending ? <CrmLoading /> : null}

      {query.isError ? <CrmInlineError message="No se pudieron cargar los compradores." /> : null}

      {query.data && buyers.length === 0 ? (
        <CrmEmpty title="Sin compradores" hint="Registra compradores para hacer seguimiento." />
      ) : null}

      {query.data && buyers.length > 0 ? (
        <>
          <CrmFilterSummary
            filteredCount={filtered.length}
            totalCount={buyers.length}
            hasActive={hasActive}
            onClear={clearAll}
          />
          <BuyersTable buyers={filtered} filters={filters} onFilterChange={setField} />
        </>
      ) : null}
    </div>
  );
}
