import { Link } from "@tanstack/react-router";

import { TRANSACTION_STAGE_LABELS, TRANSACTION_STATUS_LABELS } from "@/constants/crm-labels";
import type { TransactionRow } from "@/types/crm";

function formatMoney(value: number | null): string {
  if (value == null) return "—";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

export function TransactionsTable({ transactions }: { transactions: TransactionRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Propiedad</th>
            <th className="px-4 py-3">Buyer / Seller</th>
            <th className="px-4 py-3">Agente</th>
            <th className="px-4 py-3">Etapa</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3 text-right">Accion</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-slate-50/80">
              <td className="px-4 py-3 font-medium">{tx.propertyTitle}</td>
              <td className="px-4 py-3">{tx.buyerName} / {tx.sellerName}</td>
              <td className="px-4 py-3">{tx.agentName}</td>
              <td className="px-4 py-3">{TRANSACTION_STAGE_LABELS[tx.currentStage] ?? tx.currentStage}</td>
              <td className="px-4 py-3">{TRANSACTION_STATUS_LABELS[tx.status] ?? tx.status}</td>
              <td className="px-4 py-3">{formatMoney(tx.acceptedPrice ?? tx.offeredPrice)}</td>
              <td className="px-4 py-3 text-right">
                <Link to="/app/transactions/$transactionId" params={{ transactionId: tx.id }} className="font-semibold text-emerald-700">
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
