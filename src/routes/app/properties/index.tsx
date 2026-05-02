import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { CrmFilterSummary } from "@/components/crm/CrmTableFilterControls";
import { PropertiesTable } from "@/components/crm/properties/PropertiesTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { useCrmColumnFilters } from "@/hooks/use-crm-column-filters";
import { applyPropertyColumnFilters } from "@/lib/crm-column-filter-apply";
import { listProperties } from "@/server/properties-crud";

export const Route = createFileRoute("/app/properties/")({
  component: PropertiesPage,
});

function PropertiesPage() {
  const fetchProperties = useServerFn(listProperties);
  const query = useQuery({
    queryKey: ["crm-properties"],
    queryFn: () => fetchProperties(),
  });

  const properties = query.data?.properties ?? [];
  const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
  const filtered = useMemo(() => applyPropertyColumnFilters(properties, filters), [properties, filters]);

  return (
    <div>
      <PageHeader title="Propiedades" description="Inventario con readiness operativo." />
      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar las propiedades." /> : null}
      {query.data && properties.length === 0 ? (
        <CrmEmpty title="Sin propiedades" hint="Corre el seed o vincula propiedades nuevas." />
      ) : null}
      {query.data && properties.length > 0 ? (
        <>
          <CrmFilterSummary
            filteredCount={filtered.length}
            totalCount={properties.length}
            hasActive={hasActive}
            onClear={clearAll}
          />
          <PropertiesTable properties={filtered} filters={filters} onFilterChange={setField} />
        </>
      ) : null}
    </div>
  );
}
