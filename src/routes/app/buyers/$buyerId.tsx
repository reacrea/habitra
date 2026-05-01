import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { BuyerEditForm } from "@/components/crm/buyers/BuyerForm";
import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { getBuyerById, updateBuyer } from "@/server/buyers-crud";
import { formatMutationError } from "@/utils/mutation-error";
import type { BuyerUpdateInput } from "@/validations/buyer";

export const Route = createFileRoute("/app/buyers/$buyerId")({
  component: BuyerEditPage,
});

function BuyerEditPage() {
  const { buyerId } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchBuyer = useServerFn(getBuyerById);
  const saveBuyer = useServerFn(updateBuyer);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const query = useQuery({
    queryKey: ["crm-buyer", buyerId],
    queryFn: () => fetchBuyer({ data: { id: buyerId } }),
    enabled: Boolean(buyerId),
  });

  const mutation = useMutation({
    mutationFn: (data: BuyerUpdateInput) => saveBuyer({ data }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-buyers"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-buyer", buyerId] });
      await navigate({ to: "/app/buyers" });
    },
    onError: (err) => {
      setSubmitError(formatMutationError(err));
    },
  });

  useEffect(() => {
    setSubmitError(null);
  }, [buyerId]);

  return (
    <div>
      <PageHeader title="Editar comprador" />

      {query.isPending ? <CrmLoading label="Cargando comprador..." /> : null}

      {query.isError ? <CrmInlineError message="No se pudo cargar el comprador." /> : null}

      {query.data === null && query.isFetched ? (
        <CrmInlineError message="Comprador no encontrado." />
      ) : null}

      {query.data ? (
        <BuyerEditForm
          initial={query.data}
          isSubmitting={mutation.isPending}
          submitError={submitError}
          onSubmit={async (values) => {
            setSubmitError(null);
            mutation.mutate(values);
          }}
          onCancel={() => void navigate({ to: "/app/buyers" })}
        />
      ) : null}
    </div>
  );
}
