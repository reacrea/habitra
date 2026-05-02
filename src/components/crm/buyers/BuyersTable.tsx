import { Link } from "@tanstack/react-router";

import { CREDIT_TYPE_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
import {
  CrmFilterNumberRange,
  CrmFilterSelect,
  CrmFilterText,
} from "@/components/crm/CrmTableFilterControls";
import type { BuyerRow } from "@/types/crm";

function formatMoney(value: number | null): string {
  if (value === null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

type BuyersTableProps = {
  buyers: BuyerRow[];
  filters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
};

const propertyTypeOptions = Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => ({
  value,
  label,
}));
const creditOptions = Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => ({ value, label }));

export function BuyersTable({ buyers, filters, onFilterChange }: BuyersTableProps) {
  const f = (key: string) => filters[key] ?? "";

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Zona</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Credito</th>
            <th className="px-4 py-3">Presupuesto</th>
            <th className="px-4 py-3">Score</th>
            <th className="px-4 py-3 text-right">Acciones</th>
          </tr>
          <tr className="border-t border-slate-200 bg-white normal-case">
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("name")} onChange={(v) => onFilterChange("name", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("zone")} onChange={(v) => onFilterChange("zone", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("propertyType")}
                onChange={(v) => onFilterChange("propertyType", v)}
                options={propertyTypeOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("creditType")}
                onChange={(v) => onFilterChange("creditType", v)}
                options={creditOptions}
              />
            </th>
            <th className="min-w-[8rem] px-4 py-2 align-top font-normal">
              <CrmFilterNumberRange
                minValue={f("budgetMin")}
                maxValue={f("budgetMax")}
                onMinChange={(v) => onFilterChange("budgetMin", v)}
                onMaxChange={(v) => onFilterChange("budgetMax", v)}
              />
            </th>
            <th className="min-w-[6rem] px-4 py-2 align-top font-normal">
              <CrmFilterNumberRange
                minValue={f("scoreMin")}
                maxValue={f("scoreMax")}
                onMinChange={(v) => onFilterChange("scoreMin", v)}
                onMaxChange={(v) => onFilterChange("scoreMax", v)}
              />
            </th>
            <th className="px-4 py-2" aria-hidden />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {buyers.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                Ningún resultado con los filtros actuales.
              </td>
            </tr>
          ) : (
            buyers.map((buyer) => (
              <tr key={buyer.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-medium">{buyer.name}</td>
                <td className="max-w-[180px] truncate px-4 py-3 text-slate-600">{buyer.desiredZone ?? "—"}</td>
                <td className="px-4 py-3">
                  {buyer.desiredPropertyType
                    ? (PROPERTY_TYPE_LABELS[buyer.desiredPropertyType] ?? buyer.desiredPropertyType)
                    : "—"}
                </td>
                <td className="px-4 py-3">{CREDIT_TYPE_LABELS[buyer.creditType] ?? buyer.creditType}</td>
                <td className="px-4 py-3 tabular-nums">{formatMoney(buyer.maxBudget)}</td>
                <td className="px-4 py-3 tabular-nums">{buyer.buyingScore ?? "—"}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    to="/app/buyers/$buyerId"
                    params={{ buyerId: buyer.id }}
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
