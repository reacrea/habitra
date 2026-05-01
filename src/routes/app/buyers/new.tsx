import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { BuyerCreateForm } from "@/components/crm/buyers/BuyerForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { createBuyer } from "@/server/buyers-crud";
import { formatMutationError } from "@/utils/mutation-error";
import type { BuyerCreateInput } from "@/validations/buyer";

export const Route = createFileRoute("/app/buyers/new")({
  component: BuyerNewPage,
});

function BuyerNewPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createFn = useServerFn(createBuyer);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (data: BuyerCreateInput) => createFn({ data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-buyers"] });
      await navigate({ to: "/app/buyers" });
    },
    onError: (err) => {
      setSubmitError(formatMutationError(err));
    },
  });

  return (
    <div>
      <PageHeader title="Nuevo comprador" description="Alta de perfil de compra." />
      <BuyerCreateForm
        isSubmitting={mutation.isPending}
        submitError={submitError}
        onSubmit={async (values) => {
          setSubmitError(null);
          mutation.mutate(values);
        }}
        onCancel={() => void navigate({ to: "/app/buyers" })}
      />
    </div>
  );
}
