import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { DOCUMENT_TYPE_LABELS } from "@/constants/crm-labels";
import { CrmInlineError } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { createDocument } from "@/server/documents-crud";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/documents/new")({
  component: DocumentNewPage,
});

function DocumentNewPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createFn = useServerFn(createDocument);
  const [form, setForm] = useState({
    title: "",
    type: "OTROS",
    fileUrl: "",
    propertyId: "",
    buyerId: "",
    sellerId: "",
    transactionId: "",
  });

  const mutation = useMutation({
    mutationFn: () =>
      createFn({
        data: {
          title: form.title,
          type: form.type as never,
          fileUrl: form.fileUrl,
          propertyId: form.propertyId || undefined,
          buyerId: form.buyerId || undefined,
          sellerId: form.sellerId || undefined,
          transactionId: form.transactionId || undefined,
        },
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-documents"] });
      await navigate({ to: "/app/documents" });
    },
  });

  return (
    <div>
      <PageHeader title="Nuevo documento" />
      {mutation.isError ? <CrmInlineError message={formatMutationError(mutation.error)} /> : null}
      <form
        className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate();
        }}
      >
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Titulo" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
        <select className="w-full rounded-xl border px-3 py-2" value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}>
          {Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        <input className="w-full rounded-xl border px-3 py-2" placeholder="URL archivo" value={form.fileUrl} onChange={(e) => setForm((f) => ({ ...f, fileUrl: e.target.value }))} />
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Property ID (opcional)" value={form.propertyId} onChange={(e) => setForm((f) => ({ ...f, propertyId: e.target.value }))} />
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Buyer ID (opcional)" value={form.buyerId} onChange={(e) => setForm((f) => ({ ...f, buyerId: e.target.value }))} />
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Seller ID (opcional)" value={form.sellerId} onChange={(e) => setForm((f) => ({ ...f, sellerId: e.target.value }))} />
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Transaction ID (opcional)" value={form.transactionId} onChange={(e) => setForm((f) => ({ ...f, transactionId: e.target.value }))} />
        <button className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white" disabled={mutation.isPending}>
          {mutation.isPending ? "Guardando..." : "Crear documento"}
        </button>
      </form>
    </div>
  );
}
