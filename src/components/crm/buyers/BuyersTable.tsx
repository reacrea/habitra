import { Link } from "@tanstack/react-router";

import { CREDIT_TYPE_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
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
};

export function BuyersTable({ buyers }: BuyersTableProps) {
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
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {buyers.map((buyer) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
