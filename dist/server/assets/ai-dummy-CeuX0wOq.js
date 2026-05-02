import { r as createServerFn } from "../server.js";
import { t as aiDummySchema } from "./phase8-Bn-lFwKt.js";
import { t as createServerRpc } from "./createServerRpc-CmfUkpu4.js";
import { t as requireCrmOrganization } from "./crm-session-DN1EVmTq.js";
//#region src/server/ai-dummy.ts?tss-serverfn-split
function buildAiDummyInsights(data) {
	const text = data.prompt.toLowerCase();
	return {
		summary: "Analisis AI (dummy): se detectan patrones de seguimiento comercial y riesgos operativos moderados.",
		riskScore: text.includes("riesgo") || text.includes("atraso") ? 74 : 38,
		sentiment: text.includes("urgente") ? "ALTO" : "MEDIO",
		nextActions: [
			"Priorizar contacto con buyer y validar capacidad de pago.",
			"Confirmar checklist documental y siguientes hitos.",
			"Revisar probabilidad de cierre y actualizar etapa."
		],
		generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		context: {
			transactionId: data.transactionId ?? null,
			buyerId: data.buyerId ?? null,
			propertyId: data.propertyId ?? null
		}
	};
}
var runAiDummyInsights_createServerFn_handler = createServerRpc({
	id: "4fab45921e2c270410c0f0ed84da104aa3d01dbf79708a89e125a3b43111ec75",
	name: "runAiDummyInsights",
	filename: "src/server/ai-dummy.ts"
}, (opts) => runAiDummyInsights.__executeServer(opts));
var runAiDummyInsights = createServerFn({ method: "POST" }).inputValidator((data) => aiDummySchema.parse(data)).handler(runAiDummyInsights_createServerFn_handler, async ({ data }) => {
	await requireCrmOrganization();
	return buildAiDummyInsights(data);
});
//#endregion
export { runAiDummyInsights_createServerFn_handler };
