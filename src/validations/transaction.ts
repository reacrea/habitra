import { z } from "zod";

import { creditTypeSchema } from "./buyer";

export const transactionStatusSchema = z.enum([
  "ACTIVA",
  "PAUSADA",
  "EN_RIESGO",
  "CANCELADA",
  "CERRADA",
]);

export const transactionStageSchema = z.enum([
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
  "CERRADA",
]);

export const timelineStepStatusSchema = z.enum([
  "PENDIENTE",
  "EN_PROGRESO",
  "COMPLETADO",
  "BLOQUEADO",
]);

export const taskStatusSchema = z.enum([
  "PENDIENTE",
  "EN_PROGRESO",
  "COMPLETADA",
  "BLOQUEADA",
]);

const optionalNumber = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? n : undefined;
}, z.number().positive().optional());

const optionalInt = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? Math.trunc(n) : undefined;
}, z.number().int().min(0).max(100).optional());

const optionalDate = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  return typeof val === "string" ? val : undefined;
}, z.string().datetime().optional());

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined));

export const createTransactionSchema = z.object({
  propertyId: z.string().min(1, "Propiedad requerida"),
  buyerId: z.string().min(1, "Comprador requerido"),
  sellerId: z.string().min(1, "Vendedor requerido"),
  agentId: z.string().min(1, "Agente requerido"),
  offeredPrice: optionalNumber,
  acceptedPrice: optionalNumber,
  paymentType: z.enum(["CONTADO", "CREDITO", "MIXTO"]).optional(),
  creditType: z.preprocess((v) => (v === "" ? undefined : v), creditTypeSchema.optional()),
  estimatedClosingDate: optionalDate,
  probabilityToClose: optionalInt,
  notesText: optionalText(2000),
});

export const transactionIdPayloadSchema = z.object({
  id: z.string().min(1),
});

export const updateTransactionStageSchema = z.object({
  transactionId: z.string().min(1),
  stage: transactionStageSchema,
  status: transactionStatusSchema.optional(),
});

export const addTimelineStepSchema = z.object({
  transactionId: z.string().min(1),
  name: z.string().trim().min(1).max(160),
  description: optionalText(1000),
  responsibleRole: z.enum(["ADMIN", "BROKER_OWNER", "AGENT", "BUYER", "SELLER"]),
  estimatedDate: optionalDate,
  status: timelineStepStatusSchema.optional(),
  notes: optionalText(1000),
});

export const createTaskSchema = z.object({
  transactionId: z.string().min(1),
  title: z.string().trim().min(1).max(200),
  description: optionalText(1000),
  status: taskStatusSchema.optional(),
  dueDate: optionalDate,
  assigneeId: optionalText(80),
});

export const createNoteSchema = z.object({
  transactionId: z.string().min(1),
  content: z.string().trim().min(1).max(4000),
});
