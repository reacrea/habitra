import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { CrmInlineError } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { runAiDummyInsights } from "@/server/ai-dummy";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/reports/ai")({
  component: AiDummyPage,
});

function AiDummyPage() {
  const runAi = useServerFn(runAiDummyInsights);
  const [prompt, setPrompt] = useState("Resumen de riesgos de mi pipeline actual.");
  const mutation = useMutation({
    mutationFn: () =>
      runAi({
        data: {
          prompt,
        },
      }),
  });

  return (
    <div className="space-y-6">
      <PageHeader title="AI dummy" description="Modulo simulado para recomendaciones operativas." />
      {mutation.isError ? <CrmInlineError message={formatMutationError(mutation.error)} /> : null}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <textarea
          className="h-32 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending}
          className="mt-3 rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white"
        >
          {mutation.isPending ? "Analizando..." : "Generar insights"}
        </button>
      </div>
      {mutation.data ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm">
          <p className="font-semibold text-habitra-text">{mutation.data.summary}</p>
          <p className="mt-2">Riesgo estimado: <strong>{mutation.data.riskScore}</strong></p>
          <p>Sentimiento: <strong>{mutation.data.sentiment}</strong></p>
          <ul className="mt-3 list-disc pl-5">
            {mutation.data.nextActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
