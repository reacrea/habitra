import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { SellerPropertiesSection } from "@/components/crm/sellers/SellerPropertiesSection";
import { SellerEditForm } from "@/components/crm/sellers/SellerForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { getSellerWithProperties, updateSeller } from "@/server/sellers-crud";
import { formatMutationError } from "@/utils/mutation-error";
import type { SellerUpdateInput } from "@/validations/seller";

export const Route = createFileRoute("/app/sellers/$sellerId")({
  component: SellerEditPage,
});

function SellerEditPage() {
  const { sellerId } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchSeller = useServerFn(getSellerWithProperties);
  const saveSeller = useServerFn(updateSeller);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const query = useQuery({
    queryKey: ["crm-seller", sellerId],
    queryFn: () => fetchSeller({ data: { id: sellerId } }),
    enabled: Boolean(sellerId),
  });

  const mutation = useMutation({
    mutationFn: (data: SellerUpdateInput) => saveSeller({ data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-seller", sellerId] });
      await navigate({ to: "/app/sellers" });
    },
    onError: (err) => {
      setSubmitError(formatMutationError(err));
    },
  });

  useEffect(() => {
    setSubmitError(null);
  }, [sellerId]);

  return (
    <div className="space-y-8">
      <PageHeader title="Editar vendedor" />

      {query.isPending ? <CrmLoading label="Cargando vendedor..." /> : null}

      {query.isError ? <CrmInlineError message="No se pudo cargar el vendedor." /> : null}

      {query.data === null && query.isFetched ? (
        <CrmInlineError message="Vendedor no encontrado." />
      ) : null}

      {query.data ? (
        <>
          <SellerPropertiesSection
            sellerId={sellerId}
            linkedProperties={query.data.linkedProperties}
            unassignedProperties={query.data.unassignedProperties}
          />

          <SellerEditForm
            initial={query.data.seller}
            isSubmitting={mutation.isPending}
            submitError={submitError}
            onSubmit={async (values) => {
              setSubmitError(null);
              mutation.mutate(values);
            }}
            onCancel={() => void navigate({ to: "/app/sellers" })}
          />
        </>
      ) : null}
    </div>
  );
}
