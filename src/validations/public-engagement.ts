import { z } from "zod";

/** Payload B2C; nombre/email/teléfono los resuelve el servidor desde sesión + Buyer. */
export const contactAgentSchema = z.object({
  propertySlug: z.string().trim().min(1),
  message: z.string().trim().max(2000).optional(),
  interestType: z.enum(["COMPRAR", "RENTAR", "INVERTIR", "INFORMES", "OTRO"]),
  availability: z.enum(["MANANA", "TARDE", "FIN_SEMANA", "CUALQUIERA", "AGENDAR", "OTRO"]),
  preferredContactMethod: z.enum(["WHATSAPP", "LLAMADA", "EMAIL", "VIDEO", "CUALQUIERA"]),
});

export const scheduleVisitSchema = z.object({
  propertySlug: z.string().trim().min(1),
  title: z.string().trim().min(3).max(140),
  description: z.string().trim().max(1000).optional(),
  dueDate: z.string().datetime().optional(),
});

export const startBuyingProcessSchema = z.object({
  propertySlug: z.string().trim().min(1),
  offeredPrice: z.number().positive().optional(),
  paymentType: z.enum(["CONTADO", "CREDITO", "MIXTO"]).optional(),
  creditType: z
    .enum(["INFONAVIT", "FOVISSSTE", "BANCARIO", "COFINAVIT", "CONTADO", "MIXTO", "OTRO"])
    .optional(),
  notesText: z.string().trim().max(1000).optional(),
});
