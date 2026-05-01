import { z } from "zod";

export const leadTypeSchema = z.enum(["COMPRADOR", "VENDEDOR", "INVERSIONISTA", "ARRENDATARIO"]);

export const leadStatusSchema = z.enum([
  "NUEVO",
  "CONTACTADO",
  "CALIFICADO",
  "DESCARTADO",
  "CONVERTIDO",
]);

export const leadTemperatureSchema = z.enum(["FRIO", "TIBIO", "CALIENTE"]);

const optionalEmail = z
  .union([z.string().length(0), z.string().email("Correo invalido")])
  .optional()
  .transform((v) => (!v ? undefined : v));

export const leadCreateSchema = z.object({
  name: z.string().trim().min(1, "Nombre requerido").max(200),
  email: optionalEmail,
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
  type: leadTypeSchema,
  source: z.string().trim().min(1, "Origen requerido").max(120),
  status: leadStatusSchema.optional(),
  temperature: leadTemperatureSchema.optional(),
  notesText: z
    .string()
    .trim()
    .max(5000)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
});

export type LeadCreateInput = z.infer<typeof leadCreateSchema>;

export const leadUpdateSchema = leadCreateSchema.partial().extend({
  id: z.string().min(1),
});

export type LeadUpdateInput = z.infer<typeof leadUpdateSchema>;

export const leadIdPayloadSchema = z.object({
  id: z.string().min(1),
});
