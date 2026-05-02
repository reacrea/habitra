import { z } from "zod";

import { propertyTypeSchema } from "./buyer";

export const operationTypeSchema = z.enum(["VENTA", "RENTA"]);
export const propertyStatusSchema = z.enum([
  "BORRADOR",
  "PUBLICADA",
  "EN_NEGOCIACION",
  "APARTADA",
  "VENDIDA",
  "INACTIVA",
]);

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined));

const optionalNumber = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? n : undefined;
}, z.number().positive().optional());

const optionalInt = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? Math.trunc(n) : undefined;
}, z.number().int().min(0).optional());

/** Superficies y áreas opcionales; `null` en payload limpia el campo en BD. */
const optionalArea = z.union([z.number().min(0), z.null()]).optional();

export const propertyUpdateSchema = z.object({
  id: z.string().min(1),
  title: z.string().trim().min(1).max(250).optional(),
  description: z.string().trim().min(1).max(1000).optional(),
  fullDescription: optionalText(5000),
  propertyType: propertyTypeSchema.optional(),
  operationType: operationTypeSchema.optional(),
  status: propertyStatusSchema.optional(),
  price: optionalNumber,
  address: z.string().trim().min(1).max(300).optional(),
  city: z.string().trim().min(1).max(150).optional(),
  state: z.string().trim().min(1).max(150).optional(),
  neighborhood: optionalText(150),
  postalCode: optionalText(20),
  bedrooms: optionalInt,
  bathrooms: optionalInt,
  parkingSpaces: optionalInt,
  landArea: optionalArea,
  constructionArea: optionalArea,
  /** Reemplaza el set de amenidades (nombres únicos por propiedad). */
  amenityNames: z.array(z.string().trim().min(1).max(120)).max(80).optional(),
  /** Asignar o quitar vendedor en la propiedad (misma organización). */
  sellerId: z.union([z.string().min(1), z.null()]).optional(),
});

export const propertyIdPayloadSchema = z.object({
  id: z.string().min(1),
});

export const propertyChecklistUpdateSchema = z.object({
  propertyId: z.string().min(1),
  checkedIds: z.array(z.string().min(1)),
});

export const propertyImageCreateSchema = z.object({
  propertyId: z.string().min(1),
  mode: z.enum(["URL", "MOCK"]),
  url: z
    .string()
    .trim()
    .url("URL invalida")
    .optional(),
  alt: optionalText(200),
});
