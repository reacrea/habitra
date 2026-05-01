import { z } from "zod";
//#region src/validations/buyer.ts
var creditTypeSchema = z.enum([
	"INFONAVIT",
	"FOVISSSTE",
	"BANCARIO",
	"COFINAVIT",
	"CONTADO",
	"MIXTO",
	"OTRO"
]);
var propertyTypeSchema = z.enum([
	"CASA",
	"DEPARTAMENTO",
	"TERRENO",
	"OFICINA",
	"LOCAL_COMERCIAL",
	"BODEGA",
	"PENTHOUSE",
	"OTRO"
]);
var optionalEmail = z.union([z.string().length(0), z.string().email("Correo invalido")]).optional().transform((v) => !v ? void 0 : v);
var optionalNullableNumber = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? n : void 0;
}, z.number().positive().optional());
var optionalRooms = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? Math.trunc(n) : void 0;
}, z.number().int().min(0).max(20).optional());
var optionalUrgency = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? Math.trunc(n) : void 0;
}, z.number().int().min(1).max(5).optional());
var optionalCreditType = z.preprocess((val) => val === "" || val === void 0 ? void 0 : val, creditTypeSchema.optional());
var optionalPropertyType = z.preprocess((val) => val === "" || val === void 0 ? void 0 : val, propertyTypeSchema.optional());
var buyerCreateSchema = z.object({
	name: z.string().trim().min(1, "Nombre requerido").max(200),
	email: optionalEmail,
	phone: z.string().trim().max(40).optional().transform((v) => v && v.length > 0 ? v : void 0),
	maxBudget: optionalNullableNumber,
	downPayment: optionalNullableNumber,
	monthlyIncome: optionalNullableNumber,
	creditType: optionalCreditType,
	desiredZone: z.string().trim().max(300).optional().transform((v) => v && v.length > 0 ? v : void 0),
	desiredPropertyType: optionalPropertyType,
	bedrooms: optionalRooms,
	bathrooms: optionalRooms,
	urgency: optionalUrgency,
	buyingScore: z.preprocess((val) => {
		if (val === "" || val === void 0 || val === null) return void 0;
		const n = Number(val);
		return Number.isFinite(n) ? Math.trunc(n) : void 0;
	}, z.number().int().min(0).max(100).optional())
});
var buyerUpdateSchema = buyerCreateSchema.partial().extend({ id: z.string().min(1) });
var buyerIdPayloadSchema = z.object({ id: z.string().min(1) });
//#endregion
export { buyerIdPayloadSchema as n, buyerUpdateSchema as r, buyerCreateSchema as t };
