import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo } from "react";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  addPropertyImage,
  getPropertyDetail,
  updatePropertyChecklist,
} from "@/server/properties-crud";
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

  const checkedIds = useMemo(
    () => detailQuery.data?.checklist.filter((x) => x.checked).map((x) => x.id) ?? [],
    [detailQuery.data],
  );

  if (detailQuery.isPending) return <CrmLoading label="Cargando propiedad..." />;
  if (detailQuery.isError) return <CrmInlineError message="No se pudo cargar el detalle." />;
  if (!detailQuery.data) return <CrmInlineError message="Propiedad no encontrada." />;

  const { property, checklist, documents } = detailQuery.data;
  const mutationError =
    imageMutation.isError || checklistMutation.isError
      ? formatMutationError(imageMutation.error ?? checklistMutation.error)
      : null;

  return (
    <div className="space-y-6">
      <PageHeader
        title={property.title}
        description={`${property.city}, ${property.state} · readiness ${property.readinessScore}%`}
      />

      {mutationError ? <CrmInlineError message={mutationError} /> : null}

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
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
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-habitra-text">Imagenes</h3>
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
            onClick={() => imageMutation.mutate({ mode: "MOCK" })}
          >
            Agregar mock
          </button>
        </div>
        {property.images.length === 0 ? <p className="text-sm text-slate-600">Sin imagenes.</p> : null}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {property.images.map((img) => (
            <a key={img.id} href={img.url} target="_blank" rel="noreferrer" className="overflow-hidden rounded-xl border border-slate-200">
              <img src={img.url} alt={img.alt ?? "Propiedad"} className="h-40 w-full object-cover" />
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Documentos asociados</h3>
        {documents.length === 0 ? <p className="text-sm text-slate-600">Sin documentos asociados.</p> : null}
        <ul className="space-y-2">
          {documents.map((doc) => (
            <li key={doc.id} className="text-sm">
              <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="font-medium text-emerald-700">
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
