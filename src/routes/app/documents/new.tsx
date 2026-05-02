import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useState } from "react";

import { CrmEntitySearchField, type CrmPickerSearchItem } from "@/components/crm/CrmEntitySearchField";
import { DOCUMENT_TYPE_LABELS } from "@/constants/crm-labels";
import { CrmInlineError } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { createDocument } from "@/server/documents-crud";
import { searchPropertiesForPicker } from "@/server/properties-crud";
import { searchSellersForPicker } from "@/server/sellers-crud";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/documents/new")({
  component: DocumentNewPage,
});

function DocumentNewPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createFn = useServerFn(createDocument);
  const searchPropServer = useServerFn(searchPropertiesForPicker);
  const searchSellerServer = useServerFn(searchSellersForPicker);

  const [form, setForm] = useState({
    title: "",
    type: "OTROS",
    fileUrl: "",
    buyerId: "",
    transactionId: "",
  });
  const [propertyPick, setPropertyPick] = useState<CrmPickerSearchItem | null>(null);
  const [sellerPick, setSellerPick] = useState<CrmPickerSearchItem | null>(null);

  const loadProperties = useCallback(
    async (q: string) => {
      const r = await searchPropServer({ data: { q } });
      return r.items;
    },
    [searchPropServer],
  );

  const loadSellers = useCallback(
    async (q: string) => {
      const r = await searchSellerServer({ data: { q } });
      return r.items;
    },
    [searchSellerServer],
  );

  const mutation = useMutation({
    mutationFn: () =>
      createFn({
        data: {
          title: form.title,
          type: form.type as never,
          fileUrl: form.fileUrl,
          propertyId: propertyPick?.id || undefined,
          buyerId: form.buyerId || undefined,
          sellerId: sellerPick?.id || undefined,
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
        <input
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="Titulo"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
        />
        <select
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          value={form.type}
          onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
        >
          {Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <input
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="URL archivo"
          value={form.fileUrl}
          onChange={(e) => setForm((f) => ({ ...f, fileUrl: e.target.value }))}
        />

        <CrmEntitySearchField
          label="Propiedad (opcional)"
          hint="Busca por titulo, ciudad, slug o fragmento del id."
          selectedId={propertyPick?.id ?? ""}
          selectedPrimary={propertyPick?.primary ?? ""}
          selectedSecondary={propertyPick?.secondary ?? ""}
          onSelect={setPropertyPick}
          onClear={() => setPropertyPick(null)}
          loadItems={loadProperties}
        />

        <input
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="Buyer ID (opcional)"
          value={form.buyerId}
          onChange={(e) => setForm((f) => ({ ...f, buyerId: e.target.value }))}
        />

        <CrmEntitySearchField
          label="Vendedor (opcional)"
          hint="Busca por nombre, email o fragmento del id."
          selectedId={sellerPick?.id ?? ""}
          selectedPrimary={sellerPick?.primary ?? ""}
          selectedSecondary={sellerPick?.secondary ?? ""}
          onSelect={setSellerPick}
          onClear={() => setSellerPick(null)}
          loadItems={loadSellers}
        />

        <input
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="Transaction ID (opcional)"
          value={form.transactionId}
          onChange={(e) => setForm((f) => ({ ...f, transactionId: e.target.value }))}
        />

        <button
          type="submit"
          className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Guardando..." : "Crear documento"}
        </button>
      </form>
    </div>
  );
}
