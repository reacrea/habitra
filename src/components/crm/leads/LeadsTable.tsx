import { Link } from "@tanstack/react-router";

import {
  LEAD_STATUS_LABELS,
  LEAD_TEMPERATURE_LABELS,
  LEAD_TYPE_LABELS,
} from "@/constants/crm-labels";
import type { LeadRow } from "@/types/crm";

type LeadsTableProps = {
  leads: LeadRow[];
};

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Temp.</th>
            <th className="px-4 py-3">Origen</th>
            <th className="px-4 py-3">Contacto</th>
            <th className="px-4 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-slate-50/80">
              <td className="px-4 py-3 font-medium">{lead.name}</td>
              <td className="px-4 py-3">{LEAD_TYPE_LABELS[lead.type] ?? lead.type}</td>
              <td className="px-4 py-3">{LEAD_STATUS_LABELS[lead.status] ?? lead.status}</td>
              <td className="px-4 py-3">{LEAD_TEMPERATURE_LABELS[lead.temperature] ?? lead.temperature}</td>
              <td className="px-4 py-3 text-slate-600">{lead.source}</td>
              <td className="max-w-[200px] truncate px-4 py-3 text-slate-600">
                {[lead.email, lead.phone].filter(Boolean).join(" · ") || "—"}
              </td>
              <td className="px-4 py-3 text-right">
                <Link
                  to="/app/leads/$leadId"
                  params={{ leadId: lead.id }}
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
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
