import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PropertyCrmOverview } from "@/components/crm/properties/PropertyCrmOverview";
import { PropertyDocumentsSection } from "@/components/crm/properties/PropertyDocumentsSection";
import { PropertyEditModal } from "@/components/crm/properties/PropertyEditModal";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  addPropertyImage,
  getPropertyDetail,
  updateProperty,
  updatePropertyChecklist,
} from "@/server/properties-crud";
import { listSellerOptions } from "@/server/sellers-crud";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/properties/$propertyId")({
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { propertyId } = Route.useParams();
  const queryClient = useQueryClient();
  const fetchDetail = useServerFn(getPropertyDetail);
  const addImage = useServerFn(addPropertyImage);
  const updateChecklist = useServerFn(updatePropertyChecklist);
  const fetchSellerOptions = useServerFn(listSellerOptions);
  const saveProperty = useServerFn(updateProperty);

  const [editOpen, setEditOpen] = useState(false);
  const [saveBanner, setSaveBanner] = useState<string | null>(null);

  const detailQuery = useQuery({
    queryKey: ["crm-property-detail", propertyId],
    queryFn: () => fetchDetail({ data: { id: propertyId } }),
    enabled: Boolean(propertyId),
  });

  const imageMutation = useMutation({
    mutationFn: (payload: { mode: "URL" | "MOCK"; url?: string }) =>
      addImage({
        data: {
          propertyId,
          mode: payload.mode,
          url: payload.url,
          alt: payload.mode === "MOCK" ? "Mock Habitra" : "Imagen propiedad",
        },
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
      await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
    },
  });

  const checklistMutation = useMutation({
    mutationFn: (checkedIds: string[]) =>
      updateChecklist({
        data: {
          propertyId,
          checkedIds,
        },
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
      await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
    },
  });

  const sellerOptionsQuery = useQuery({
    queryKey: ["crm-seller-options"],
    queryFn: () => fetchSellerOptions(),
    staleTime: 60_000,
    enabled: Boolean(propertyId),
  });

  const sellerMutation = useMutation({
    mutationFn: (sellerId: string | null) => saveProperty({ data: { id: propertyId, sellerId } }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
      await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-seller"] });
      setSaveBanner("Vendedor actualizado.");
      setTimeout(() => setSaveBanner(null), 4000);
    },
  });

  const checkedIds = useMemo(
    () => detailQuery.data?.checklist.filter((x) => x.checked).map((x) => x.id) ?? [],
    [detailQuery.data],
  );

  if (detailQuery.isPending) return <CrmLoading label="Cargando propiedad..." />;
  if (detailQuery.isError) return <CrmInlineError message="No se pudo cargar el detalle." />;
  if (!detailQuery.data) return <CrmInlineError message="Propiedad no encontrada." />;

  const { property, checklist, documents, canEditProperty, assignedAgentName, sellerName } = detailQuery.data;
  const mutationError =
    imageMutation.isError || checklistMutation.isError || sellerMutation.isError
      ? formatMutationError(
          imageMutation.error ?? checklistMutation.error ?? sellerMutation.error,
        )
      : null;

  return (
    <div className="space-y-6">
      <PageHeader
        title={property.title}
        description={`${property.city}, ${property.state} · readiness ${property.readinessScore}%`}
      />

      {saveBanner ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-900">
          {saveBanner}
        </p>
      ) : null}

      {mutationError ? <CrmInlineError message={mutationError} /> : null}

      {!canEditProperty ? (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Vista solo lectura: solo administradores, brokers o el agente asignado pueden editar esta propiedad.
        </p>
      ) : null}

      <PropertyCrmOverview
        property={property}
        assignedAgentName={assignedAgentName}
        sellerName={sellerName}
        canEdit={canEditProperty}
        onEditClick={() => setEditOpen(true)}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-2 text-lg font-semibold text-habitra-text">Vendedor</h3>
        <p className="mb-3 text-sm text-slate-600">
          Asigna el perfil de vendedor asociado a este inmueble (misma organizacion).
        </p>
        {sellerOptionsQuery.isPending ? (
          <p className="text-sm text-slate-500">Cargando vendedores...</p>
        ) : null}
        {sellerOptionsQuery.data ? (
          <select
            className="max-w-md rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text disabled:cursor-not-allowed disabled:bg-slate-50"
            disabled={!canEditProperty || sellerMutation.isPending}
            value={property.sellerId ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              sellerMutation.mutate(v === "" ? null : v);
            }}
          >
            <option value="">Sin vendedor</option>
            {sellerOptionsQuery.data.options.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        ) : null}
      </section>

      <fieldset
        disabled={!canEditProperty || checklistMutation.isPending}
        className="rounded-2xl border border-slate-200 bg-white p-5 disabled:opacity-60"
      >
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Readiness checklist</h3>
        <div className="space-y-2">
          {checklist.map((item) => (
            <label key={item.id} className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => {
                  const next = new Set(checkedIds);
                  if (e.target.checked) next.add(item.id);
                  else next.delete(item.id);
                  checklistMutation.mutate(Array.from(next));
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-habitra-text">Imagenes</h3>
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!canEditProperty || imageMutation.isPending}
            onClick={() => imageMutation.mutate({ mode: "MOCK" })}
          >
            Agregar mock
          </button>
        </div>
        {property.images.length === 0 ? <p className="text-sm text-slate-600">Sin imagenes.</p> : null}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {property.images.map((img) => (
            <a
              key={img.id}
              href={img.url}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-xl border border-slate-200"
            >
              <img src={img.url} alt={img.alt ?? "Propiedad"} className="h-40 w-full object-cover" />
            </a>
          ))}
        </div>
      </section>

      <PropertyDocumentsSection propertyId={propertyId} documents={documents} canEdit={canEditProperty} />

      <PropertyEditModal
        open={editOpen}
        property={property}
        onClose={() => setEditOpen(false)}
        onSaved={() => {
          setSaveBanner("Propiedad actualizada.");
          setTimeout(() => setSaveBanner(null), 4000);
        }}
      />
    </div>
  );
}
