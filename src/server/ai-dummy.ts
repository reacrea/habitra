import { createServerFn } from "@tanstack/react-start";

import { aiDummySchema } from "@/validations/phase8";

import { requireCrmOrganization } from "./crm-session";

export const runAiDummyInsights = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => aiDummySchema.parse(data))
  .handler(async ({ data }) => {
    await requireCrmOrganization();
    const text = data.prompt.toLowerCase();
    const riskScore = text.includes("riesgo") || text.includes("atraso") ? 74 : 38;
    const sentiment = text.includes("urgente") ? "ALTO" : "MEDIO";
    const nextActions = [
      "Priorizar contacto con buyer y validar capacidad de pago.",
      "Confirmar checklist documental y siguientes hitos.",
      "Revisar probabilidad de cierre y actualizar etapa.",
    ];
    const summary =
      "Analisis AI (dummy): se detectan patrones de seguimiento comercial y riesgos operativos moderados.";

    return {
      summary,
      riskScore,
      sentiment,
      nextActions,
      generatedAt: new Date().toISOString(),
      context: {
        transactionId: data.transactionId ?? null,
        buyerId: data.buyerId ?? null,
        propertyId: data.propertyId ?? null,
      },
    };
  });
