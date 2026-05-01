import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { LeadsTable } from "@/components/crm/leads/LeadsTable";
import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
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

      {query.data && query.data.leads.length === 0 ? (
        <CrmEmpty title="Sin leads registrados" hint="Crea el primer lead para comenzar el embudo." />
      ) : null}

      {query.data && query.data.leads.length > 0 ? <LeadsTable leads={query.data.leads} /> : null}
    </div>
  );
}
