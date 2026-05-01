import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { startBuyingProcessFromPublic } from "@/server/public-engagement";
import { formatMutationError } from "@/utils/mutation-error";

type Props = {
  propertySlug: string;
  open: boolean;
  onOpenChange: (next: boolean) => void;
};

export function StartBuyingProcessModal({ propertySlug, open, onOpenChange }: Props) {
  const startFn = useServerFn(startBuyingProcessFromPublic);
  const [offeredPrice, setOfferedPrice] = useState("");
  const [paymentType, setPaymentType] = useState<"CONTADO" | "CREDITO" | "MIXTO">("CREDITO");
  const [creditType, setCreditType] = useState<
    "INFONAVIT" | "FOVISSSTE" | "BANCARIO" | "COFINAVIT" | "CONTADO" | "MIXTO" | "OTRO"
  >("BANCARIO");
  const [notesText, setNotesText] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      startFn({
        data: {
          propertySlug,
          offeredPrice: offeredPrice ? Number(offeredPrice) : undefined,
          paymentType,
          creditType: paymentType === "CREDITO" || paymentType === "MIXTO" ? creditType : undefined,
          notesText: notesText || undefined,
        },
      }),
    onSuccess: () => onOpenChange(false),
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-habitra-text">Iniciar proceso de compra</h3>
          <button type="button" onClick={() => onOpenChange(false)} className="text-sm font-semibold text-slate-500">
            Cerrar
          </button>
        </div>
        <p className="mt-1 text-sm text-slate-600">Crea una Transaction conectada al CRM.</p>
        <div className="mt-4 grid gap-2">
          <input
            type="number"
            min={1}
            value={offeredPrice}
            onChange={(e) => setOfferedPrice(e.target.value)}
            placeholder="Precio de oferta (opcional)"
            className="rounded-xl border px-3 py-2 text-sm"
          />
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value as "CONTADO" | "CREDITO" | "MIXTO")}
            className="rounded-xl border px-3 py-2 text-sm"
          >
            <option value="CREDITO">Credito</option>
            <option value="CONTADO">Contado</option>
            <option value="MIXTO">Mixto</option>
          </select>
          {paymentType !== "CONTADO" ? (
            <select
              value={creditType}
              onChange={(e) =>
                setCreditType(
                  e.target.value as
                    | "INFONAVIT"
                    | "FOVISSSTE"
                    | "BANCARIO"
                    | "COFINAVIT"
                    | "CONTADO"
                    | "MIXTO"
                    | "OTRO",
                )
              }
              className="rounded-xl border px-3 py-2 text-sm"
            >
              <option value="BANCARIO">Bancario</option>
              <option value="INFONAVIT">Infonavit</option>
              <option value="FOVISSSTE">Fovissste</option>
              <option value="COFINAVIT">Cofinavit</option>
              <option value="MIXTO">Mixto</option>
              <option value="OTRO">Otro</option>
            </select>
          ) : null}
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Notas (opcional)"
            className="min-h-20 rounded-xl border px-3 py-2 text-sm"
          />
          <button
            type="button"
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
            className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {mutation.isPending ? "Creando..." : "Iniciar proceso"}
          </button>
        </div>
        {mutation.isError ? (
          <p className="mt-2 text-sm text-red-600">{formatMutationError(mutation.error)}</p>
        ) : null}
      </div>
    </div>
  );
}
