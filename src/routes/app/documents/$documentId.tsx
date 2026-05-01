import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { DOCUMENT_STATUS_LABELS, DOCUMENT_TYPE_LABELS } from "@/constants/crm-labels";
import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { getDocumentById, updateDocument } from "@/server/documents-crud";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/documents/$documentId")({
  component: DocumentEditPage,
});

function DocumentEditPage() {
  const { documentId } = Route.useParams();
  const queryClient = useQueryClient();
  const fetchDocument = useServerFn(getDocumentById);
  const saveDocument = useServerFn(updateDocument);
  const [error, setError] = useState<string | null>(null);

  const query = useQuery({
    queryKey: ["crm-document", documentId],
    queryFn: () => fetchDocument({ data: { id: documentId } }),
    enabled: Boolean(documentId),
  });

  const mutation = useMutation({
    mutationFn: (payload: {
      title: string;
      type: string;
      status: string;
      fileUrl: string;
    }) =>
      saveDocument({
        data: {
          id: documentId,
          title: payload.title,
          type: payload.type as never,
          status: payload.status as never,
          fileUrl: payload.fileUrl,
        },
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-document", documentId] });
      await queryClient.invalidateQueries({ queryKey: ["crm-documents"] });
    },
    onError: (e) => setError(formatMutationError(e)),
  });

  if (query.isPending) return <CrmLoading label="Cargando documento..." />;
  if (query.isError) return <CrmInlineError message="No se pudo cargar el documento." />;
  if (!query.data) return <CrmInlineError message="Documento no encontrado." />;

  const doc = query.data;
  return (
    <div>
      <PageHeader title={`Editar documento: ${doc.title}`} />
      {error ? <CrmInlineError message={error} /> : null}
      <form
        className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          mutation.mutate({
            title: String(fd.get("title") ?? ""),
            type: String(fd.get("type") ?? doc.type),
            status: String(fd.get("status") ?? doc.status),
            fileUrl: String(fd.get("fileUrl") ?? ""),
          });
        }}
      >
        <input name="title" defaultValue={doc.title} className="w-full rounded-xl border px-3 py-2" />
        <select name="type" defaultValue={doc.type} className="w-full rounded-xl border px-3 py-2">
          {Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        <select name="status" defaultValue={doc.status} className="w-full rounded-xl border px-3 py-2">
          {Object.entries(DOCUMENT_STATUS_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        <input name="fileUrl" defaultValue={doc.fileUrl} className="w-full rounded-xl border px-3 py-2" />
        <button className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white" disabled={mutation.isPending}>
          {mutation.isPending ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </div>
  );
}
