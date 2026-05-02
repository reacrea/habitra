import { Link } from "@tanstack/react-router";

import {
  OPERATION_TYPE_LABELS,
  PROPERTY_STATUS_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/constants/crm-labels";
import {
  CrmFilterNumberRange,
  CrmFilterSelect,
  CrmFilterText,
} from "@/components/crm/CrmTableFilterControls";
import type { PropertyRow } from "@/types/crm";

function formatMoney(value: number) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(
    value,
  );
}

const propertyTypeOptions = Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => ({
  value,
  label,
}));
const operationOptions = Object.entries(OPERATION_TYPE_LABELS).map(([value, label]) => ({ value, label }));
const statusOptions = Object.entries(PROPERTY_STATUS_LABELS).map(([value, label]) => ({ value, label }));

type PropertiesTableProps = {
  properties: PropertyRow[];
  filters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
};

export function PropertiesTable({ properties, filters, onFilterChange }: PropertiesTableProps) {
  const f = (key: string) => filters[key] ?? "";

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Titulo</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Operacion</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Readiness</th>
            <th className="px-4 py-3 text-right">Accion</th>
          </tr>
          <tr className="border-t border-slate-200 bg-white normal-case">
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("title")} onChange={(v) => onFilterChange("title", v)} />
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
                value={f("operationType")}
                onChange={(v) => onFilterChange("operationType", v)}
                options={operationOptions}
              />
            </th>
            <th className="min-w-[8rem] px-4 py-2 align-top font-normal">
              <CrmFilterNumberRange
                minValue={f("priceMin")}
                maxValue={f("priceMax")}
                onMinChange={(v) => onFilterChange("priceMin", v)}
                onMaxChange={(v) => onFilterChange("priceMax", v)}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("status")}
                onChange={(v) => onFilterChange("status", v)}
                options={statusOptions}
              />
            </th>
            <th className="min-w-[6rem] px-4 py-2 align-top font-normal">
              <CrmFilterNumberRange
                minValue={f("readinessMin")}
                maxValue={f("readinessMax")}
                minPlaceholder="% min"
                maxPlaceholder="% max"
                onMinChange={(v) => onFilterChange("readinessMin", v)}
                onMaxChange={(v) => onFilterChange("readinessMax", v)}
              />
            </th>
            <th className="px-4 py-2" aria-hidden />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {properties.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                Ningún resultado con los filtros actuales.
              </td>
            </tr>
          ) : (
            properties.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3">{PROPERTY_TYPE_LABELS[p.propertyType] ?? p.propertyType}</td>
                <td className="px-4 py-3">{OPERATION_TYPE_LABELS[p.operationType] ?? p.operationType}</td>
                <td className="px-4 py-3">{formatMoney(p.price)}</td>
                <td className="px-4 py-3">{PROPERTY_STATUS_LABELS[p.status] ?? p.status}</td>
                <td className="px-4 py-3">{p.readinessScore}%</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    to="/app/properties/$propertyId"
                    params={{ propertyId: p.id }}
                    className="font-semibold text-emerald-700"
                  >
                    Ver detalle
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
