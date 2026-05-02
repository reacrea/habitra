import { z } from "zod";

export const documentTypeSchema = z.enum([
  "ESCRITURA",
  "IDENTIFICACION",
  "COMPROBANTE_DOMICILIO",
  "PREDIAL",
  "AGUA",
  "LIBERTAD_GRAVAMEN",
  "AVALUO",
  "CARTA_OFERTA",
  "CONTRATO_PROMESA",
  "CARTA_APROBACION_CREDITO",
  "ESTADO_CUENTA",
  "OTROS",
]);

export const documentStatusSchema = z.enum([
  "PENDIENTE",
  "CARGADO",
  "EN_REVISION",
  "APROBADO",
  "RECHAZADO",
]);

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined));

export const documentCreateSchema = z.object({
  title: z.string().trim().min(1, "Titulo requerido").max(200),
  type: documentTypeSchema,
  status: documentStatusSchema.optional(),
  fileUrl: z.string().trim().url("URL invalida"),
  fileName: optionalText(200),
  description: optionalText(800),
  buyerId: optionalText(80),
  sellerId: optionalText(80),
  propertyId: optionalText(80),
  transactionId: optionalText(80),
});

export const documentUpdateSchema = documentCreateSchema.partial().extend({
  id: z.string().min(1),
});

export const documentIdPayloadSchema = z.object({
  id: z.string().min(1),
});

/** Documento creado desde el detalle CRM de una propiedad (siempre con `propertyId`). */
export const propertyDocumentCreateSchema = z.object({
  propertyId: z.string().min(1),
  title: z.string().trim().min(1, "Titulo requerido").max(200),
  type: documentTypeSchema,
  status: documentStatusSchema.optional(),
  fileUrl: z.string().trim().url("URL invalida"),
  fileName: optionalText(200),
  description: optionalText(800),
});
