import { a as propertyTypeSchema, i as creditTypeSchema } from "./buyer-PpPeDnfn.js";
import { z } from "zod";
//#region src/validations/buyer-portal.ts
var buyerPortalProfileUpdateSchema = z.object({
	phone: z.string().trim().max(40).optional(),
	maxBudget: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().positive().optional()),
	downPayment: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().positive().optional()),
	monthlyIncome: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().positive().optional()),
	creditType: creditTypeSchema.optional(),
	desiredZone: z.string().trim().max(300).optional(),
	desiredPropertyType: propertyTypeSchema.optional(),
	bedrooms: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().int().min(0).max(20).optional()),
	bathrooms: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().int().min(0).max(20).optional())
});
var buyerPortalTransactionIdSchema = z.object({ id: z.string().min(1) });
//#endregion
export { buyerPortalTransactionIdSchema as n, buyerPortalProfileUpdateSchema as t };
