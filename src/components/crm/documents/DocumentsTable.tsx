import { Link } from "@tanstack/react-router";

import { DOCUMENT_STATUS_LABELS, DOCUMENT_TYPE_LABELS } from "@/constants/crm-labels";
import { CrmFilterSelect, CrmFilterText } from "@/components/crm/CrmTableFilterControls";
import type { DocumentRow } from "@/types/crm";

const typeOptions = Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => ({ value, label }));
const statusOptions = Object.entries(DOCUMENT_STATUS_LABELS).map(([value, label]) => ({ value, label }));

const assocOptions = [
  { value: "property", label: "Property" },
  { value: "buyer", label: "Buyer" },
  { value: "seller", label: "Seller" },
  { value: "transaction", label: "Transaction" },
  { value: "general", label: "General" },
];

type DocumentsTableProps = {
  documents: DocumentRow[];
  filters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
};

export function DocumentsTable({ documents, filters, onFilterChange }: DocumentsTableProps) {
  const f = (key: string) => filters[key] ?? "";

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Titulo</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Propiedad</th>
            <th className="px-4 py-3">Asociado</th>
            <th className="px-4 py-3 text-right">Accion</th>
          </tr>
          <tr className="border-t border-slate-200 bg-white normal-case">
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("title")} onChange={(v) => onFilterChange("title", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("type")}
                onChange={(v) => onFilterChange("type", v)}
                options={typeOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("status")}
                onChange={(v) => onFilterChange("status", v)}
                options={statusOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("property")} onChange={(v) => onFilterChange("property", v)} placeholder="Titulo inmueble" />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("assoc")}
                onChange={(v) => onFilterChange("assoc", v)}
                options={assocOptions}
                placeholder="Todos"
              />
            </th>
            <th className="px-4 py-2" aria-hidden />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {documents.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                Ningún resultado con los filtros actuales.
              </td>
            </tr>
          ) : (
            documents.map((d) => (
              <tr key={d.id}>
                <td className="px-4 py-3 font-medium">{d.title}</td>
                <td className="px-4 py-3">{DOCUMENT_TYPE_LABELS[d.type] ?? d.type}</td>
                <td className="px-4 py-3">{DOCUMENT_STATUS_LABELS[d.status] ?? d.status}</td>
                <td className="px-4 py-3 text-sm">
                  {d.propertyId ? (
                    <Link
                      to="/app/properties/$propertyId"
                      params={{ propertyId: d.propertyId }}
                      className="font-medium text-emerald-700 hover:underline"
                    >
                      {(d.propertyTitle ?? "").trim() || "Ver propiedad"}
                    </Link>
                  ) : (
                    <span className="text-slate-400">Sin propiedad</span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-slate-600">
                  {d.propertyId
                    ? "Property"
                    : d.buyerId
                      ? "Buyer"
                      : d.sellerId
                        ? "Seller"
                        : d.transactionId
                          ? "Transaction"
                          : "General"}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    to="/app/documents/$documentId"
                    params={{ documentId: d.id }}
                    className="font-semibold text-emerald-700"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
