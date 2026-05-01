import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { AuthRequiredDialog } from "@/components/public/AuthRequiredDialog";
import {
  CONTACT_AVAILABILITY,
  CONTACT_INTEREST_TYPES,
  CONTACT_PREFERRED_METHODS,
  type ContactAvailability,
  type ContactInterestType,
  type ContactPreferredMethod,
} from "@/constants/public-contact-agent";
import { useRequireAuthAction } from "@/hooks/use-require-auth-action";
import { contactAgentFromPublic } from "@/server/public-engagement";
import { formatMutationError } from "@/utils/mutation-error";

export function ContactAgentForm({ propertySlug }: { propertySlug: string }) {
  const contactFn = useServerFn(contactAgentFromPublic);
  const authAction = useRequireAuthAction("Inicia sesion o registrate para contactar al agente.");
  const [message, setMessage] = useState("");
  const [interestType, setInterestType] = useState<ContactInterestType>("COMPRAR");
  const [availability, setAvailability] = useState<ContactAvailability>("MANANA");
  const [preferredContactMethod, setPreferredContactMethod] =
    useState<ContactPreferredMethod>("WHATSAPP");

  const mutation = useMutation({
    mutationFn: () =>
      contactFn({
        data: {
          propertySlug,
          message: message.trim() ? message.trim() : undefined,
          interestType,
          availability,
          preferredContactMethod,
        },
      }),
  });

  const handleSubmit = () => {
    authAction.requireAuth(() => mutation.mutate());
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">Contactar agente</h3>

      {!authAction.isAuthenticated ? (
        <div className="mt-3 space-y-3">
          <p className="text-sm text-slate-600">
            Para enviar un mensaje al agente necesitas una cuenta. No permitimos contacto anonimo.
          </p>
          <button
            type="button"
            onClick={() => authAction.requireAuth(() => {})}
            className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white"
          >
            Iniciar sesion o registrarse
          </button>
        </div>
      ) : (
        <>
          <p className="mt-2 text-sm text-slate-600">
            Usamos tu nombre, correo y telefono de tu cuenta y perfil de comprador cuando existan.
          </p>
          <div className="mt-3 grid gap-2">
            <label className="text-xs font-semibold uppercase text-slate-500">
              Tipo de interes
              <select
                value={interestType}
                onChange={(e) => setInterestType(e.target.value as ContactInterestType)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text"
              >
                {CONTACT_INTEREST_TYPES.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs font-semibold uppercase text-slate-500">
              Disponibilidad para contacto
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value as ContactAvailability)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text"
              >
                {CONTACT_AVAILABILITY.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs font-semibold uppercase text-slate-500">
              Metodo preferido
              <select
                value={preferredContactMethod}
                onChange={(e) =>
                  setPreferredContactMethod(e.target.value as ContactPreferredMethod)
                }
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text"
              >
                {CONTACT_PREFERRED_METHODS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs font-semibold uppercase text-slate-500">
              Mensaje (opcional)
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Comentarios adicionales para el agente..."
                className="mt-1 min-h-24 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
            </label>
            <button
              type="button"
              disabled={mutation.isPending}
              onClick={handleSubmit}
              className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {mutation.isPending ? "Enviando..." : "Enviar contacto"}
            </button>
          </div>
        </>
      )}

      {mutation.isError ? (
        <p className="mt-2 text-sm text-red-600">{formatMutationError(mutation.error)}</p>
      ) : null}
      {mutation.isSuccess ? (
        <p className="mt-2 text-sm text-emerald-700">Contacto enviado. Se genero un lead en CRM.</p>
      ) : null}
      <AuthRequiredDialog {...authAction.authDialog} />
    </section>
  );
}
