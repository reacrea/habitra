import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { LeadCreateForm } from "@/components/crm/leads/LeadForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { createLead } from "@/server/leads-crud";
import { formatMutationError } from "@/utils/mutation-error";
import type { LeadCreateInput } from "@/validations/lead";

export const Route = createFileRoute("/app/leads/new")({
  component: LeadNewPage,
});

function LeadNewPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createFn = useServerFn(createLead);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (data: LeadCreateInput) => createFn({ data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-leads"] });
      await navigate({ to: "/app/leads" });
    },
    onError: (err) => {
      setSubmitError(formatMutationError(err));
    },
  });

  return (
    <div>
      <PageHeader title="Nuevo lead" description="Registra un prospecto en el CRM." />
      <LeadCreateForm
        isSubmitting={mutation.isPending}
        submitError={submitError}
        onSubmit={async (values) => {
          setSubmitError(null);
          mutation.mutate(values);
        }}
        onCancel={() => void navigate({ to: "/app/leads" })}
      />
    </div>
  );
}
