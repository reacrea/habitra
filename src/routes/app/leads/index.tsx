import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmFilterSummary } from "@/components/crm/CrmTableFilterControls";
import { LeadsTable } from "@/components/crm/leads/LeadsTable";
import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { useCrmColumnFilters } from "@/hooks/use-crm-column-filters";
import { applyLeadColumnFilters } from "@/lib/crm-column-filter-apply";
import { listLeads } from "@/server/leads-crud";

export const Route = createFileRoute("/app/leads/")({
  component: LeadsIndexPage,
});

function LeadsIndexPage() {
  const fetchLeads = useServerFn(listLeads);
  const query = useQuery({
    queryKey: ["crm-leads"],
    queryFn: () => fetchLeads(),
  });

  const leads = query.data?.leads ?? [];
  const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
  const filtered = useMemo(() => applyLeadColumnFilters(leads, filters), [leads, filters]);

  return (
    <div>
      <PageHeader
        title="Leads"
        description="Prospectos de tu organizacion."
        actions={
          <Link
            to="/app/leads/new"
            className="inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            Nuevo lead
          </Link>
        }
      />

      {query.isPending ? <CrmLoading /> : null}

      {query.isError ? (
        <CrmInlineError message="No se pudieron cargar los leads. Intenta de nuevo." />
      ) : null}

      {query.data && leads.length === 0 ? (
        <CrmEmpty title="Sin leads registrados" hint="Crea el primer lead para comenzar el embudo." />
      ) : null}

      {query.data && leads.length > 0 ? (
        <>
          <CrmFilterSummary
            filteredCount={filtered.length}
            totalCount={leads.length}
            hasActive={hasActive}
            onClear={clearAll}
          />
          <LeadsTable leads={filtered} filters={filters} onFilterChange={setField} />
        </>
      ) : null}
    </div>
  );
}
