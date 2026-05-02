import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { CrmFilterSummary } from "@/components/crm/CrmTableFilterControls";
import { SellersTable } from "@/components/crm/sellers/SellersTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { useCrmColumnFilters } from "@/hooks/use-crm-column-filters";
import { applySellerColumnFilters } from "@/lib/crm-column-filter-apply";
import { listSellers } from "@/server/sellers-crud";

export const Route = createFileRoute("/app/sellers/")({
  component: SellersIndexPage,
});

function SellersIndexPage() {
  const fetchSellers = useServerFn(listSellers);
  const query = useQuery({
    queryKey: ["crm-sellers"],
    queryFn: () => fetchSellers(),
  });

  const sellers = query.data?.sellers ?? [];
  const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
  const filtered = useMemo(() => applySellerColumnFilters(sellers, filters), [sellers, filters]);

  return (
    <div>
      <PageHeader
        title="Vendedores"
        description="Propietarios que buscan colocar su inmueble."
        actions={
          <Link
            to="/app/sellers/new"
            className="inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            Nuevo vendedor
          </Link>
        }
      />

      {query.isPending ? <CrmLoading /> : null}

      {query.isError ? (
        <CrmInlineError message="No se pudieron cargar los vendedores." />
      ) : null}

      {query.data && sellers.length === 0 ? (
        <CrmEmpty title="Sin vendedores" hint="Agrega perfiles de venta para enlazar propiedades." />
      ) : null}

      {query.data && sellers.length > 0 ? (
        <>
          <CrmFilterSummary
            filteredCount={filtered.length}
            totalCount={sellers.length}
            hasActive={hasActive}
            onClear={clearAll}
          />
          <SellersTable sellers={filtered} filters={filters} onFilterChange={setField} />
        </>
      ) : null}
    </div>
  );
}
