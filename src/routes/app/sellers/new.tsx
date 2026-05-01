import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { PageHeader } from "@/components/layout/PageHeader";
import { SellerCreateForm } from "@/components/crm/sellers/SellerForm";
import { createSeller } from "@/server/sellers-crud";
import { formatMutationError } from "@/utils/mutation-error";
import type { SellerCreateInput } from "@/validations/seller";

export const Route = createFileRoute("/app/sellers/new")({
  component: SellerNewPage,
});

function SellerNewPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createFn = useServerFn(createSeller);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (data: SellerCreateInput) => createFn({ data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
      await navigate({ to: "/app/sellers" });
    },
    onError: (err) => {
      setSubmitError(formatMutationError(err));
    },
  });

  return (
    <div>
      <PageHeader title="Nuevo vendedor" description="Alta de perfil de venta." />
      <SellerCreateForm
        isSubmitting={mutation.isPending}
        submitError={submitError}
        onSubmit={async (values) => {
          setSubmitError(null);
          mutation.mutate(values);
        }}
        onCancel={() => void navigate({ to: "/app/sellers" })}
      />
    </div>
  );
}
