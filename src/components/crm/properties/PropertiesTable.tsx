import { Link } from "@tanstack/react-router";

import { OPERATION_TYPE_LABELS, PROPERTY_STATUS_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
import type { PropertyRow } from "@/types/crm";

function formatMoney(value: number) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value);
}

export function PropertiesTable({ properties }: { properties: PropertyRow[] }) {
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
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {properties.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50/80">
              <td className="px-4 py-3 font-medium">{p.title}</td>
              <td className="px-4 py-3">{PROPERTY_TYPE_LABELS[p.propertyType] ?? p.propertyType}</td>
              <td className="px-4 py-3">{OPERATION_TYPE_LABELS[p.operationType] ?? p.operationType}</td>
              <td className="px-4 py-3">{formatMoney(p.price)}</td>
              <td className="px-4 py-3">{PROPERTY_STATUS_LABELS[p.status] ?? p.status}</td>
              <td className="px-4 py-3">{p.readinessScore}%</td>
              <td className="px-4 py-3 text-right">
                <Link to="/app/properties/$propertyId" params={{ propertyId: p.id }} className="font-semibold text-emerald-700">
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
