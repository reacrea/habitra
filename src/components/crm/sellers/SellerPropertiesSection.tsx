import { Link } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError } from "@/components/crm/CrmStates";
import { OPERATION_TYPE_LABELS, PROPERTY_STATUS_LABELS } from "@/constants/crm-labels";
import { updateProperty } from "@/server/properties-crud";
import type { SellerPropertySummary } from "@/types/crm";
import { formatMutationError } from "@/utils/mutation-error";

function formatMoney(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

type SellerPropertiesSectionProps = {
  sellerId: string;
  linkedProperties: SellerPropertySummary[];
  unassignedProperties: SellerPropertySummary[];
};

export function SellerPropertiesSection({
  sellerId,
  linkedProperties,
  unassignedProperties,
}: SellerPropertiesSectionProps) {
  const queryClient = useQueryClient();
  const updateFn = useServerFn(updateProperty);

  const attachMutation = useMutation({
    mutationFn: (propertyId: string) => updateFn({ data: { id: propertyId, sellerId } }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-seller", sellerId] });
      await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
    },
  });

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Propiedades de este vendedor</h3>
        {linkedProperties.length === 0 ? (
          <p className="text-sm text-slate-600">
            Aun no hay inmuebles asociados. Asigna uno desde la lista inferior o desde la ficha de la propiedad.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {linkedProperties.map((p) => (
              <li key={p.id} className="py-3 first:pt-0">
                <Link
                  to="/app/properties/$propertyId"
                  params={{ propertyId: p.id }}
                  className="font-semibold text-emerald-700 hover:underline"
                >
                  {p.title}
                </Link>
                <p className="mt-0.5 text-xs text-slate-500">
                  {p.city} · {OPERATION_TYPE_LABELS[p.operationType]} · {PROPERTY_STATUS_LABELS[p.status]} ·{" "}
                  {formatMoney(p.price)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {unassignedProperties.length > 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-5">
          <h3 className="mb-2 text-sm font-semibold text-habitra-text">
            Propiedades sin vendedor en tu organizacion
          </h3>
          <p className="mb-4 text-xs text-slate-600">Puedes enlazarlas a este perfil con un clic.</p>
          <ul className="space-y-2">
            {unassignedProperties.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <div>
                  <span className="font-medium text-habitra-text">{p.title}</span>
                  <span className="ml-2 text-xs text-slate-500">{p.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/app/properties/$propertyId"
                    params={{ propertyId: p.id }}
                    className="text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    Ver
                  </Link>
                  <button
                    type="button"
                    disabled={attachMutation.isPending}
                    className="rounded-lg bg-habitra-action px-3 py-1 text-xs font-semibold text-white disabled:opacity-50"
                    onClick={() => attachMutation.mutate(p.id)}
                  >
                    Asignar aqui
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {attachMutation.isError ? (
        <CrmInlineError message={formatMutationError(attachMutation.error)} />
      ) : null}
    </div>
  );
}
