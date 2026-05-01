import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { LeadEditForm } from "@/components/crm/leads/LeadForm";
import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { getLeadById, updateLead } from "@/server/leads-crud";
import { formatMutationError } from "@/utils/mutation-error";
import type { LeadUpdateInput } from "@/validations/lead";

export const Route = createFileRoute("/app/leads/$leadId")({
  component: LeadEditPage,
});

function LeadEditPage() {
  const { leadId } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchLead = useServerFn(getLeadById);
  const saveLead = useServerFn(updateLead);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const query = useQuery({
    queryKey: ["crm-lead", leadId],
    queryFn: () => fetchLead({ data: { id: leadId } }),
    enabled: Boolean(leadId),
  });

  const mutation = useMutation({
    mutationFn: (data: LeadUpdateInput) => saveLead({ data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-leads"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-lead", leadId] });
      await navigate({ to: "/app/leads" });
    },
    onError: (err) => {
      setSubmitError(formatMutationError(err));
    },
  });

  useEffect(() => {
    setSubmitError(null);
  }, [leadId]);

  return (
    <div>
      <PageHeader title="Editar lead" description="Actualiza datos del prospecto." />

      {query.isPending ? <CrmLoading label="Cargando lead..." /> : null}

      {query.isError ? (
        <CrmInlineError message="No se pudo cargar el lead." />
      ) : null}

      {query.data === null && query.isFetched ? (
        <CrmInlineError message="Lead no encontrado." />
      ) : null}

      {query.data ? (
        <LeadEditForm
          initial={query.data}
          isSubmitting={mutation.isPending}
          submitError={submitError}
          onSubmit={async (values) => {
            setSubmitError(null);
            mutation.mutate(values);
          }}
          onCancel={() => void navigate({ to: "/app/leads" })}
        />
      ) : null}
    </div>
  );
}
