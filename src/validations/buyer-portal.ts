import { z } from "zod";

import { creditTypeSchema, propertyTypeSchema } from "./buyer";

export const buyerPortalProfileUpdateSchema = z.object({
  phone: z.string().trim().max(40).optional(),
  maxBudget: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().positive().optional()),
  downPayment: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().positive().optional()),
  monthlyIncome: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().positive().optional()),
  creditType: creditTypeSchema.optional(),
  desiredZone: z.string().trim().max(300).optional(),
  desiredPropertyType: propertyTypeSchema.optional(),
  bedrooms: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().int().min(0).max(20).optional()),
  bathrooms: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().int().min(0).max(20).optional()),
});

export const buyerPortalTransactionIdSchema = z.object({
  id: z.string().min(1),
});
