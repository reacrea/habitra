import { Link } from "@tanstack/react-router";

import {
  LEAD_STATUS_LABELS,
  LEAD_TEMPERATURE_LABELS,
  LEAD_TYPE_LABELS,
} from "@/constants/crm-labels";
import { CrmFilterSelect, CrmFilterText } from "@/components/crm/CrmTableFilterControls";
import type { LeadRow } from "@/types/crm";

type LeadsTableProps = {
  leads: LeadRow[];
  filters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
};

const leadTypeOptions = Object.entries(LEAD_TYPE_LABELS).map(([value, label]) => ({ value, label }));
const leadStatusOptions = Object.entries(LEAD_STATUS_LABELS).map(([value, label]) => ({ value, label }));
const leadTempOptions = Object.entries(LEAD_TEMPERATURE_LABELS).map(([value, label]) => ({
  value,
  label,
}));

export function LeadsTable({ leads, filters, onFilterChange }: LeadsTableProps) {
  const f = (key: string) => filters[key] ?? "";

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
          <tr className="border-t border-slate-200 bg-white normal-case">
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("name")} onChange={(v) => onFilterChange("name", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("type")}
                onChange={(v) => onFilterChange("type", v)}
                options={leadTypeOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("status")}
                onChange={(v) => onFilterChange("status", v)}
                options={leadStatusOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("temperature")}
                onChange={(v) => onFilterChange("temperature", v)}
                options={leadTempOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("source")} onChange={(v) => onFilterChange("source", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("contact")} onChange={(v) => onFilterChange("contact", v)} />
            </th>
            <th className="px-4 py-2" aria-hidden />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {leads.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                Ningún resultado con los filtros actuales.
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
