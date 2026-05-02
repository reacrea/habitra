import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { CrmFilterSummary } from "@/components/crm/CrmTableFilterControls";
import { DocumentsTable } from "@/components/crm/documents/DocumentsTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { useCrmColumnFilters } from "@/hooks/use-crm-column-filters";
import { applyDocumentColumnFilters } from "@/lib/crm-column-filter-apply";
import { listDocuments } from "@/server/documents-crud";

export const Route = createFileRoute("/app/documents/")({
  component: DocumentsPage,
});

function DocumentsPage() {
  const fetchDocuments = useServerFn(listDocuments);
  const query = useQuery({
    queryKey: ["crm-documents"],
    queryFn: () => fetchDocuments(),
  });

  const documents = query.data?.documents ?? [];
  const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
  const filtered = useMemo(() => applyDocumentColumnFilters(documents, filters), [documents, filters]);

  return (
    <div>
      <PageHeader
        title="Documentos"
        description="Repositorio documental con asociaciones basicas."
        actions={
          <Link to="/app/documents/new" className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white">
            Nuevo documento
          </Link>
        }
      />
      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar los documentos." /> : null}
      {query.data && documents.length === 0 ? (
        <CrmEmpty title="Sin documentos" hint="Crea documentos para property/buyer/seller/transaction." />
      ) : null}
      {query.data && documents.length > 0 ? (
        <>
          <CrmFilterSummary
            filteredCount={filtered.length}
            totalCount={documents.length}
            hasActive={hasActive}
            onClear={clearAll}
          />
          <DocumentsTable documents={filtered} filters={filters} onFilterChange={setField} />
        </>
      ) : null}
    </div>
  );
}
