import { z } from "zod";
//#region src/validations/public-engagement.ts
var contactAgentSchema = z.object({
	propertySlug: z.string().trim().min(1),
	name: z.string().trim().min(2),
	email: z.string().email().optional(),
	phone: z.string().trim().min(7).max(30).optional(),
	message: z.string().trim().max(1e3).optional()
});
var scheduleVisitSchema = z.object({
	propertySlug: z.string().trim().min(1),
	title: z.string().trim().min(3).max(140),
	description: z.string().trim().max(1e3).optional(),
	dueDate: z.string().datetime().optional()
});
var startBuyingProcessSchema = z.object({
	propertySlug: z.string().trim().min(1),
	offeredPrice: z.number().positive().optional(),
	paymentType: z.enum([
		"CONTADO",
		"CREDITO",
		"MIXTO"
	]).optional(),
	creditType: z.enum([
		"INFONAVIT",
		"FOVISSSTE",
		"BANCARIO",
		"COFINAVIT",
		"CONTADO",
		"MIXTO",
		"OTRO"
	]).optional(),
	notesText: z.string().trim().max(1e3).optional()
});
//#endregion
export { scheduleVisitSchema as n, startBuyingProcessSchema as r, contactAgentSchema as t };
