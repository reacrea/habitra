import { z } from "zod";

const optionalEmail = z
  .union([z.string().length(0), z.string().email("Correo invalido")])
  .optional()
  .transform((v) => (!v ? undefined : v));

const optionalNullableNumber = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? n : undefined;
}, z.number().positive().optional());

const optionalNullableInt = z.preprocess((val) => {
  if (val === "" || val === undefined || val === null) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? Math.trunc(n) : undefined;
}, z.number().int().min(1).max(5).optional());

export const sellerCreateSchema = z.object({
  name: z.string().trim().min(1, "Nombre requerido").max(200),
  email: optionalEmail,
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
  urgency: optionalNullableInt,
  expectedPrice: optionalNullableNumber,
  sellingReason: z
    .string()
    .trim()
    .max(500)
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
});

export type SellerCreateInput = z.infer<typeof sellerCreateSchema>;

export const sellerUpdateSchema = sellerCreateSchema.partial().extend({
  id: z.string().min(1),
});

export type SellerUpdateInput = z.infer<typeof sellerUpdateSchema>;

export const sellerIdPayloadSchema = z.object({
  id: z.string().min(1),
});
