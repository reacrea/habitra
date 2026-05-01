import { CREDIT_TYPE_LABELS } from "@/constants/crm-labels";
import type { TransactionOption } from "@/types/crm";

type TransactionCreateValues = {
  propertyId: string;
  buyerId: string;
  sellerId: string;
  agentId: string;
  offeredPrice?: number;
  acceptedPrice?: number;
  paymentType?: "CONTADO" | "CREDITO" | "MIXTO";
  creditType?: string;
  probabilityToClose?: number;
  notesText?: string;
};

type Props = {
  buyers: TransactionOption[];
  sellers: TransactionOption[];
  properties: TransactionOption[];
  agents: TransactionOption[];
  isSubmitting: boolean;
  onSubmit: (values: TransactionCreateValues) => void;
};

export function TransactionCreateForm({
  buyers,
  sellers,
  properties,
  agents,
  isSubmitting,
  onSubmit,
}: Props) {
  return (
    <form
      className="mx-auto max-w-3xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        onSubmit({
          propertyId: String(fd.get("propertyId") ?? ""),
          buyerId: String(fd.get("buyerId") ?? ""),
          sellerId: String(fd.get("sellerId") ?? ""),
          agentId: String(fd.get("agentId") ?? ""),
          offeredPrice: fd.get("offeredPrice") ? Number(fd.get("offeredPrice")) : undefined,
          acceptedPrice: fd.get("acceptedPrice") ? Number(fd.get("acceptedPrice")) : undefined,
          paymentType: (fd.get("paymentType") as "CONTADO" | "CREDITO" | "MIXTO" | null) ?? undefined,
          creditType: String(fd.get("creditType") ?? "") || undefined,
          probabilityToClose: fd.get("probabilityToClose")
            ? Number(fd.get("probabilityToClose"))
            : undefined,
          notesText: String(fd.get("notesText") ?? "") || undefined,
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="propertyId" required className="rounded-xl border px-3 py-2">
          <option value="">Propiedad</option>
          {properties.map((x) => (
            <option key={x.id} value={x.id}>{x.label}</option>
          ))}
        </select>
        <select name="agentId" required className="rounded-xl border px-3 py-2">
          <option value="">Agente</option>
          {agents.map((x) => (
            <option key={x.id} value={x.id}>{x.label}</option>
          ))}
        </select>
        <select name="buyerId" required className="rounded-xl border px-3 py-2">
          <option value="">Comprador</option>
          {buyers.map((x) => (
            <option key={x.id} value={x.id}>{x.label}</option>
          ))}
        </select>
        <select name="sellerId" required className="rounded-xl border px-3 py-2">
          <option value="">Vendedor</option>
          {sellers.map((x) => (
            <option key={x.id} value={x.id}>{x.label}</option>
          ))}
        </select>
        <input name="offeredPrice" type="number" step="0.01" min={0} placeholder="Precio oferta" className="rounded-xl border px-3 py-2" />
        <input name="acceptedPrice" type="number" step="0.01" min={0} placeholder="Precio aceptado" className="rounded-xl border px-3 py-2" />
        <select name="paymentType" className="rounded-xl border px-3 py-2">
          <option value="">Tipo pago (default credito)</option>
          <option value="CONTADO">Contado</option>
          <option value="CREDITO">Credito</option>
          <option value="MIXTO">Mixto</option>
        </select>
        <select name="creditType" className="rounded-xl border px-3 py-2">
          <option value="">Tipo credito</option>
          {Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <input name="probabilityToClose" type="number" min={0} max={100} placeholder="Probabilidad cierre (0-100)" className="rounded-xl border px-3 py-2" />
        <textarea name="notesText" rows={3} placeholder="Notas" className="rounded-xl border px-3 py-2 sm:col-span-2" />
      </div>
      <button disabled={isSubmitting} className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white">
        {isSubmitting ? "Creando..." : "Crear operacion"}
      </button>
    </form>
  );
}
