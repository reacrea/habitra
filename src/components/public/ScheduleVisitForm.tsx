import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { AuthRequiredDialog } from "@/components/public/AuthRequiredDialog";
import { useRequireAuthAction } from "@/hooks/use-require-auth-action";
import { scheduleVisitFromPublic } from "@/server/public-engagement";
import { formatMutationError } from "@/utils/mutation-error";

export function ScheduleVisitForm({ propertySlug }: { propertySlug: string }) {
  const scheduleFn = useServerFn(scheduleVisitFromPublic);
  const authAction = useRequireAuthAction();
  const [title, setTitle] = useState("Agendar visita");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      scheduleFn({
        data: {
          propertySlug,
          title,
          description: description || undefined,
          dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
        },
      }),
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">Agendar visita</h3>
      <p className="mt-1 text-sm text-slate-600">Crea Task + ActivityLog en CRM (requiere permisos CRM).</p>
      <div className="mt-3 grid gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titulo"
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion (opcional)"
          className="min-h-20 rounded-xl border px-3 py-2 text-sm"
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm"
        />
        <button
          type="button"
          disabled={mutation.isPending || title.trim().length < 3}
          onClick={() => authAction.requireAuth(() => mutation.mutate())}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-60"
        >
          {mutation.isPending ? "Agendando..." : "Crear visita"}
        </button>
      </div>
      {mutation.isError ? (
        <p className="mt-2 text-sm text-red-600">{formatMutationError(mutation.error)}</p>
      ) : null}
      {mutation.isSuccess ? (
        <p className="mt-2 text-sm text-emerald-700">Visita agendada y registrada en CRM.</p>
      ) : null}
      <AuthRequiredDialog {...authAction.authDialog} />
    </section>
  );
}
