import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PropertiesTable } from "@/components/crm/properties/PropertiesTable";
import { PageHeader } from "@/components/layout/PageHeader";
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

  return (
    <div>
      <PageHeader title="Propiedades" description="Inventario con readiness operativo." />
      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar las propiedades." /> : null}
      {query.data && query.data.properties.length === 0 ? (
        <CrmEmpty title="Sin propiedades" hint="Corre el seed o vincula propiedades nuevas." />
      ) : null}
      {query.data && query.data.properties.length > 0 ? (
        <PropertiesTable properties={query.data.properties} />
      ) : null}
    </div>
  );
}
