import { Link } from "@tanstack/react-router";

import { TRANSACTION_STAGE_LABELS, TRANSACTION_STATUS_LABELS } from "@/constants/crm-labels";
import { CrmFilterNumberRange, CrmFilterSelect, CrmFilterText } from "@/components/crm/CrmTableFilterControls";
import type { TransactionRow } from "@/types/crm";

function formatMoney(value: number | null): string {
  if (value == null) return "—";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

const stageOptions = Object.entries(TRANSACTION_STAGE_LABELS).map(([value, label]) => ({ value, label }));
const statusOptions = Object.entries(TRANSACTION_STATUS_LABELS).map(([value, label]) => ({ value, label }));

type TransactionsTableProps = {
  transactions: TransactionRow[];
  filters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
};

export function TransactionsTable({ transactions, filters, onFilterChange }: TransactionsTableProps) {
  const f = (key: string) => filters[key] ?? "";

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
          <tr className="border-t border-slate-200 bg-white normal-case">
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("property")} onChange={(v) => onFilterChange("property", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText
                value={f("parties")}
                onChange={(v) => onFilterChange("parties", v)}
                placeholder="Buyer o seller"
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("agent")} onChange={(v) => onFilterChange("agent", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("stage")}
                onChange={(v) => onFilterChange("stage", v)}
                options={stageOptions}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("status")}
                onChange={(v) => onFilterChange("status", v)}
                options={statusOptions}
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
            <th className="px-4 py-2" aria-hidden />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                Ningún resultado con los filtros actuales.
              </td>
            </tr>
          ) : (
            transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-medium">{tx.propertyTitle}</td>
                <td className="px-4 py-3">
                  {tx.buyerName} / {tx.sellerName}
                </td>
                <td className="px-4 py-3">{tx.agentName}</td>
                <td className="px-4 py-3">{TRANSACTION_STAGE_LABELS[tx.currentStage] ?? tx.currentStage}</td>
                <td className="px-4 py-3">{TRANSACTION_STATUS_LABELS[tx.status] ?? tx.status}</td>
                <td className="px-4 py-3">{formatMoney(tx.acceptedPrice ?? tx.offeredPrice)}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    to="/app/transactions/$transactionId"
                    params={{ transactionId: tx.id }}
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
