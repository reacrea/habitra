import { a as propertyTypeSchema } from "./buyer-PpPeDnfn.js";
import { z } from "zod";
//#region src/validations/property.ts
var operationTypeSchema = z.enum(["VENTA", "RENTA"]);
var propertyStatusSchema = z.enum([
	"BORRADOR",
	"PUBLICADA",
	"EN_NEGOCIACION",
	"APARTADA",
	"VENDIDA",
	"INACTIVA"
]);
var optionalText = (max) => z.string().trim().max(max).optional().transform((v) => v && v.length > 0 ? v : void 0);
var optionalNumber = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? n : void 0;
}, z.number().positive().optional());
var optionalInt = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? Math.trunc(n) : void 0;
}, z.number().int().min(0).optional());
var propertyUpdateSchema = z.object({
	id: z.string().min(1),
	title: z.string().trim().min(1).max(250).optional(),
	description: z.string().trim().min(1).max(1e3).optional(),
	fullDescription: optionalText(5e3),
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
	parkingSpaces: optionalInt
});
var propertyIdPayloadSchema = z.object({ id: z.string().min(1) });
var propertyChecklistUpdateSchema = z.object({
	propertyId: z.string().min(1),
	checkedIds: z.array(z.string().min(1))
});
var propertyImageCreateSchema = z.object({
	propertyId: z.string().min(1),
	mode: z.enum(["URL", "MOCK"]),
	url: z.string().trim().url("URL invalida").optional(),
	alt: optionalText(200)
});
//#endregion
export { propertyUpdateSchema as i, propertyIdPayloadSchema as n, propertyImageCreateSchema as r, propertyChecklistUpdateSchema as t };
