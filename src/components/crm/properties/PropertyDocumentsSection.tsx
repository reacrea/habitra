import { Link } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { CrmInlineError } from "@/components/crm/CrmStates";
import { DOCUMENT_STATUS_LABELS, DOCUMENT_TYPE_LABELS } from "@/constants/crm-labels";
import { createPropertyDocument } from "@/server/properties-crud";
import type { DocumentRow } from "@/types/crm";
import { propertyDocumentCreateSchema } from "@/validations/document";
import { formatMutationError } from "@/utils/mutation-error";

/** URL de ejemplo válida (PDF público de prueba W3C). */
const EXAMPLE_DOC_URL = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

type Props = {
  propertyId: string;
  documents: DocumentRow[];
  canEdit: boolean;
};

export function PropertyDocumentsSection({ propertyId, documents, canEdit }: Props) {
  const queryClient = useQueryClient();
  const createFn = useServerFn(createPropertyDocument);
  const [modalOpen, setModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    type: "OTROS",
    status: "PENDIENTE",
    fileUrl: "",
    fileName: "",
    description: "",
  });

  useEffect(() => {
    if (!modalOpen) return;
    setForm({
      title: "",
      type: "OTROS",
      status: "PENDIENTE",
      fileUrl: "",
      fileName: "",
      description: "",
    });
  }, [modalOpen]);

  useEffect(() => {
    if (!successMsg) return;
    const t = setTimeout(() => setSuccessMsg(null), 4000);
    return () => clearTimeout(t);
  }, [successMsg]);

  const mutation = useMutation({
    mutationFn: () =>
      createFn({
        data: propertyDocumentCreateSchema.parse({
          propertyId,
          title: form.title,
          type: form.type,
          status: form.status,
          fileUrl: form.fileUrl,
          fileName: form.fileName || undefined,
          description: form.description || undefined,
        }),
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", propertyId] });
      await queryClient.invalidateQueries({ queryKey: ["crm-documents"] });
      setModalOpen(false);
      setSuccessMsg("Documento registrado y asociado al inmueble.");
    },
  });

  const inputClass =
    "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text outline-none focus:border-emerald-600";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-habitra-text">Documentos asociados</h3>
        {canEdit ? (
          <button
            type="button"
            className="rounded-lg border border-emerald-700 bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
            disabled={mutation.isPending}
            onClick={() => setModalOpen(true)}
          >
            Subir documento
          </button>
        ) : null}
      </div>

      {successMsg ? (
        <p className="mb-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-900">{successMsg}</p>
      ) : null}

      {mutation.isError ? <CrmInlineError message={formatMutationError(mutation.error)} /> : null}

      {documents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/80 px-4 py-8 text-center">
          <p className="text-sm font-medium text-slate-700">Aún no hay documentos en esta propiedad</p>
          <p className="mt-1 text-sm text-slate-500">
            {canEdit
              ? 'Usa "Subir documento" para registrar un archivo (URL) y vincularlo al inmueble.'
              : "Los documentos cargados por el equipo aparecerán aquí."}
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {documents.map((doc) => (
            <li key={doc.id} className="rounded-xl border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <Link
                  to="/app/documents/$documentId"
                  params={{ documentId: doc.id }}
                  className="font-medium text-emerald-700 hover:underline"
                >
                  {doc.title}
                </Link>
                <span className="text-xs text-slate-500">
                  {DOCUMENT_TYPE_LABELS[doc.type] ?? doc.type} · {DOCUMENT_STATUS_LABELS[doc.status] ?? doc.status}
                </span>
              </div>
              {doc.description ? <p className="mt-1 text-xs text-slate-600">{doc.description}</p> : null}
              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-xs text-emerald-600 hover:underline"
              >
                Abrir archivo
              </a>
            </li>
          ))}
        </ul>
      )}

      {modalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Cerrar"
            onClick={() => !mutation.isPending && setModalOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-doc-modal-title"
            className="relative z-10 w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <h4 id="property-doc-modal-title" className="text-lg font-semibold text-habitra-text">
              Nuevo documento en la propiedad
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              El archivo debe estar accesible por URL (almacenamiento externo o enlace de prueba).
            </p>

            <div className="mt-4 space-y-3">
              <label className="block text-sm text-slate-700">
                Tipo
                <select
                  className={inputClass}
                  value={form.type}
                  onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                >
                  {Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-slate-700">
                Nombre / titulo
                <input
                  className={inputClass}
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Ej. Escritura titulo I"
                />
              </label>
              <label className="block text-sm text-slate-700">
                URL del archivo
                <input
                  className={inputClass}
                  value={form.fileUrl}
                  onChange={(e) => setForm((f) => ({ ...f, fileUrl: e.target.value }))}
                  placeholder="https://..."
                />
                <button
                  type="button"
                  className="mt-1 text-xs font-medium text-emerald-700 hover:underline"
                  onClick={() => setForm((f) => ({ ...f, fileUrl: EXAMPLE_DOC_URL }))}
                >
                  Usar URL de ejemplo (PDF de prueba)
                </button>
              </label>
              <label className="block text-sm text-slate-700">
                Nombre de archivo (opcional)
                <input
                  className={inputClass}
                  value={form.fileName}
                  onChange={(e) => setForm((f) => ({ ...f, fileName: e.target.value }))}
                  placeholder="documento.pdf"
                />
              </label>
              <label className="block text-sm text-slate-700">
                Estatus inicial
                <select
                  className={inputClass}
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                >
                  {Object.entries(DOCUMENT_STATUS_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-slate-700">
                Comentarios
                <textarea
                  className={`${inputClass} min-h-[88px]`}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Notas internas u observaciones"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm disabled:opacity-50"
                disabled={mutation.isPending}
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                disabled={mutation.isPending || !form.title.trim() || !form.fileUrl.trim()}
                onClick={() => mutation.mutate()}
              >
                {mutation.isPending ? "Guardando..." : "Guardar documento"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
