import { Link } from "@tanstack/react-router";

import { DOCUMENT_STATUS_LABELS, DOCUMENT_TYPE_LABELS } from "@/constants/crm-labels";
import type { DocumentRow } from "@/types/crm";

export function DocumentsTable({ documents }: { documents: DocumentRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Titulo</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Asociado</th>
            <th className="px-4 py-3 text-right">Accion</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {documents.map((d) => (
            <tr key={d.id}>
              <td className="px-4 py-3 font-medium">{d.title}</td>
              <td className="px-4 py-3">{DOCUMENT_TYPE_LABELS[d.type] ?? d.type}</td>
              <td className="px-4 py-3">{DOCUMENT_STATUS_LABELS[d.status] ?? d.status}</td>
              <td className="px-4 py-3 text-xs text-slate-600">
                {d.propertyId ? "Property" : d.buyerId ? "Buyer" : d.sellerId ? "Seller" : d.transactionId ? "Transaction" : "General"}
              </td>
              <td className="px-4 py-3 text-right">
                <Link to="/app/documents/$documentId" params={{ documentId: d.id }} className="font-semibold text-emerald-700">
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
