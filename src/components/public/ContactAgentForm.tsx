import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { AuthRequiredDialog } from "@/components/public/AuthRequiredDialog";
import { useRequireAuthAction } from "@/hooks/use-require-auth-action";
import { contactAgentFromPublic } from "@/server/public-engagement";
import { formatMutationError } from "@/utils/mutation-error";

export function ContactAgentForm({ propertySlug }: { propertySlug: string }) {
  const contactFn = useServerFn(contactAgentFromPublic);
  const authAction = useRequireAuthAction();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      contactFn({
        data: {
          propertySlug,
          name,
          email: email || undefined,
          phone: phone || undefined,
          message: message || undefined,
        },
      }),
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">Contactar agente</h3>
      <div className="mt-3 grid gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre completo"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (opcional)"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefono (opcional)"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensaje (opcional)"
          className="min-h-20 rounded-xl border px-3 py-2 text-sm"
        />
        <button
          type="button"
          disabled={mutation.isPending || name.trim().length < 2}
          onClick={() => authAction.requireAuth(() => mutation.mutate())}
          className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          {mutation.isPending ? "Enviando..." : "Enviar contacto"}
        </button>
      </div>
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
