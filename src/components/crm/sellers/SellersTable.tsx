import { Link } from "@tanstack/react-router";

import type { SellerRow } from "@/types/crm";

function formatMoney(value: number | null): string {
  if (value === null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

type SellersTableProps = {
  sellers: SellerRow[];
};

export function SellersTable({ sellers }: SellersTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Contacto</th>
            <th className="px-4 py-3">Precio esperado</th>
            <th className="px-4 py-3">Urgencia</th>
            <th className="px-4 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {sellers.map((seller) => (
            <tr key={seller.id} className="hover:bg-slate-50/80">
              <td className="px-4 py-3 font-medium">{seller.name}</td>
              <td className="max-w-[220px] truncate px-4 py-3 text-slate-600">
                {[seller.email, seller.phone].filter(Boolean).join(" · ") || "—"}
              </td>
              <td className="px-4 py-3 tabular-nums">{formatMoney(seller.expectedPrice)}</td>
              <td className="px-4 py-3 tabular-nums">{seller.urgency ?? "—"}</td>
              <td className="px-4 py-3 text-right">
                <Link
                  to="/app/sellers/$sellerId"
                  params={{ sellerId: seller.id }}
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
