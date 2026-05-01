import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { TransactionCreateForm } from "@/components/crm/transactions/TransactionCreateForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { createTransaction, getTransactionCreateOptions } from "@/server/transactions-crud";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/transactions/new")({
  component: TransactionNewPage,
});

function TransactionNewPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchOptions = useServerFn(getTransactionCreateOptions);
  const createFn = useServerFn(createTransaction);

  const optionsQuery = useQuery({
    queryKey: ["crm-transaction-options"],
    queryFn: () => fetchOptions(),
  });

  const mutation = useMutation({
    mutationFn: (payload: Record<string, unknown>) => createFn({ data: payload }),
    onSuccess: async (created) => {
      await queryClient.invalidateQueries({ queryKey: ["crm-transactions"] });
      await navigate({ to: "/app/transactions/$transactionId", params: { transactionId: created.id } });
    },
  });

  return (
    <div>
      <PageHeader title="Nueva operacion" description="Conecta buyer/seller/property/agent." />
      {optionsQuery.isPending ? <CrmLoading label="Cargando opciones..." /> : null}
      {optionsQuery.isError ? <CrmInlineError message="No se pudieron cargar opciones." /> : null}
      {mutation.isError ? <CrmInlineError message={formatMutationError(mutation.error)} /> : null}
      {optionsQuery.data ? (
        <TransactionCreateForm
          buyers={optionsQuery.data.buyers}
          sellers={optionsQuery.data.sellers}
          properties={optionsQuery.data.properties}
          agents={optionsQuery.data.agents}
          isSubmitting={mutation.isPending}
          onSubmit={(values) => mutation.mutate(values)}
        />
      ) : null}
    </div>
  );
}
