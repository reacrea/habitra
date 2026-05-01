import { a as propertyTypeSchema, i as creditTypeSchema } from "./buyer-CDG2OgQh.js";
import { z } from "zod";
//#region src/validations/buyer-portal.ts
var buyerPortalProfileUpdateSchema = z.object({
	name: z.string().trim().min(2).max(120).optional(),
	email: z.string().email().optional(),
	phone: z.string().trim().max(40).optional(),
	maxBudget: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().positive().optional()),
	downPayment: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().positive().optional()),
	monthlyIncome: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().positive().optional()),
	creditType: creditTypeSchema.optional(),
	/** Se fusionan en `desiredZone` en servidor (ver `mergeDesiredZone`). */
	city: z.string().trim().max(120).optional(),
	interestZones: z.string().trim().max(500).optional(),
	desiredPropertyType: z.union([propertyTypeSchema, z.null()]).optional(),
	bedrooms: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().int().min(0).max(20).optional()),
	bathrooms: z.preprocess((v) => v === "" || v == null ? void 0 : Number(v), z.number().int().min(0).max(20).optional()),
	urgency: z.number().int().min(1).max(5).optional()
});
var buyerPortalTransactionIdSchema = z.object({ id: z.string().min(1) });
//#endregion
export { buyerPortalTransactionIdSchema as n, buyerPortalProfileUpdateSchema as t };
