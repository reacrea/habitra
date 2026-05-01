import { i as creditTypeSchema } from "./buyer-CqyIju1J.js";
import { z } from "zod";
//#region src/validations/transaction.ts
var transactionStatusSchema = z.enum([
	"ACTIVA",
	"PAUSADA",
	"EN_RIESGO",
	"CANCELADA",
	"CERRADA"
]);
var transactionStageSchema = z.enum([
	"LEAD_CREADO",
	"COMPRADOR_CALIFICADO",
	"PROPIEDAD_SELECCIONADA",
	"VISITA_REALIZADA",
	"OFERTA_ENVIADA",
	"OFERTA_ACEPTADA",
	"APARTADO_PROMESA",
	"CREDITO_EN_PROCESO",
	"AVALUO_SOLICITADO",
	"AVALUO_COMPLETADO",
	"EXPEDIENTE_NOTARIAL",
	"FIRMA_PROGRAMADA",
	"ESCRITURA_FIRMADA",
	"REGISTRO_EN_PROCESO",
	"ENTREGA_COMPLETADA",
	"CERRADA"
]);
var timelineStepStatusSchema = z.enum([
	"PENDIENTE",
	"EN_PROGRESO",
	"COMPLETADO",
	"BLOQUEADO"
]);
var taskStatusSchema = z.enum([
	"PENDIENTE",
	"EN_PROGRESO",
	"COMPLETADA",
	"BLOQUEADA"
]);
var optionalNumber = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? n : void 0;
}, z.number().positive().optional());
var optionalInt = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? Math.trunc(n) : void 0;
}, z.number().int().min(0).max(100).optional());
var optionalDate = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	return typeof val === "string" ? val : void 0;
}, z.string().datetime().optional());
var optionalText = (max) => z.string().trim().max(max).optional().transform((v) => v && v.length > 0 ? v : void 0);
var createTransactionSchema = z.object({
	propertyId: z.string().min(1, "Propiedad requerida"),
	buyerId: z.string().min(1, "Comprador requerido"),
	sellerId: z.string().min(1, "Vendedor requerido"),
	agentId: z.string().min(1, "Agente requerido"),
	offeredPrice: optionalNumber,
	acceptedPrice: optionalNumber,
	paymentType: z.enum([
		"CONTADO",
		"CREDITO",
		"MIXTO"
	]).optional(),
	creditType: z.preprocess((v) => v === "" ? void 0 : v, creditTypeSchema.optional()),
	estimatedClosingDate: optionalDate,
	probabilityToClose: optionalInt,
	notesText: optionalText(2e3)
});
var transactionIdPayloadSchema = z.object({ id: z.string().min(1) });
var updateTransactionStageSchema = z.object({
	transactionId: z.string().min(1),
	stage: transactionStageSchema,
	status: transactionStatusSchema.optional()
});
var addTimelineStepSchema = z.object({
	transactionId: z.string().min(1),
	name: z.string().trim().min(1).max(160),
	description: optionalText(1e3),
	responsibleRole: z.enum([
		"ADMIN",
		"BROKER_OWNER",
		"AGENT",
		"BUYER",
		"SELLER"
	]),
	estimatedDate: optionalDate,
	status: timelineStepStatusSchema.optional(),
	notes: optionalText(1e3)
});
var createTaskSchema = z.object({
	transactionId: z.string().min(1),
	title: z.string().trim().min(1).max(200),
	description: optionalText(1e3),
	status: taskStatusSchema.optional(),
	dueDate: optionalDate,
	assigneeId: optionalText(80)
});
var createNoteSchema = z.object({
	transactionId: z.string().min(1),
	content: z.string().trim().min(1).max(4e3)
});
//#endregion
export { transactionIdPayloadSchema as a, createTransactionSchema as i, createNoteSchema as n, updateTransactionStageSchema as o, createTaskSchema as r, addTimelineStepSchema as t };
