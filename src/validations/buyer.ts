import { z } from "zod";

export const creditTypeSchema = z.enum([
  "INFONAVIT",
  "FOVISSSTE",
  "BANCARIO",
  "COFINAVIT",
  "CONTADO",
  "MIXTO",
  "OTRO",
]);

export const propertyTypeSchema = z.enum([
  "CASA",
  "DEPARTAMENTO",
  "TERRENO",
  "OFICINA",
  "LOCAL_COMERCIAL",
  "BODEGA",
  "PENTHOUSE",
  "OTRO",
]);

const optionalEmail = z
  .union([z.string().length(0), z.string().email("Correo invalido")])
  .optional()
  .transform((v) => (!v ? undefined : v));

const optionalNullableNumber = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? n : undefined;
}, z.number().positive().optional());

const optionalRooms = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? Math.trunc(n) : undefined;
}, z.number().int().min(0).max(20).optional());

const optionalUrgency = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? Math.trunc(n) : undefined;
}, z.number().int().min(1).max(5).optional());

const optionalCreditType = z.preprocess(
  (val) => (val === "" || val === undefined ? undefined : val),
  creditTypeSchema.optional(),
);

const optionalPropertyType = z.preprocess(
  (val) => (val === "" || val === undefined ? undefined : val),
  propertyTypeSchema.optional(),
);

export const buyerCreateSchema = z.object({
  name: z.string().trim().min(1, "Nombre requerido").max(200),
  email: optionalEmail,
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
  maxBudget: optionalNullableNumber,
  downPayment: optionalNullableNumber,
  monthlyIncome: optionalNullableNumber,
  creditType: optionalCreditType,
  desiredZone: z
    .string()
    .trim()
    .max(300)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
  desiredPropertyType: optionalPropertyType,
  bedrooms: optionalRooms,
  bathrooms: optionalRooms,
  urgency: optionalUrgency,
  buyingScore: z.preprocess((val) => {
    if (val === "" || val === undefined || val === null) return undefined;
    const n = Number(val);
    return Number.isFinite(n) ? Math.trunc(n) : undefined;
  }, z.number().int().min(0).max(100).optional()),
});

export type BuyerCreateInput = z.infer<typeof buyerCreateSchema>;

export const buyerUpdateSchema = buyerCreateSchema.partial().extend({
  id: z.string().min(1),
});

export type BuyerUpdateInput = z.infer<typeof buyerUpdateSchema>;

export const buyerIdPayloadSchema = z.object({
  id: z.string().min(1),
});
