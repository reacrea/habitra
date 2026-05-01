import { z } from "zod";
//#region src/validations/seller.ts
var optionalEmail = z.union([z.string().length(0), z.string().email("Correo invalido")]).optional().transform((v) => !v ? void 0 : v);
var optionalNullableNumber = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? n : void 0;
}, z.number().positive().optional());
var optionalNullableInt = z.preprocess((val) => {
	if (val === "" || val === void 0 || val === null) return void 0;
	const n = Number(val);
	return Number.isFinite(n) ? Math.trunc(n) : void 0;
}, z.number().int().min(1).max(5).optional());
var sellerCreateSchema = z.object({
	name: z.string().trim().min(1, "Nombre requerido").max(200),
	email: optionalEmail,
	phone: z.string().trim().max(40).optional().transform((v) => v && v.length > 0 ? v : void 0),
	urgency: optionalNullableInt,
	expectedPrice: optionalNullableNumber,
	sellingReason: z.string().trim().max(500).optional().transform((v) => v && v.length > 0 ? v : void 0)
});
var sellerUpdateSchema = sellerCreateSchema.partial().extend({ id: z.string().min(1) });
var sellerIdPayloadSchema = z.object({ id: z.string().min(1) });
//#endregion
export { sellerIdPayloadSchema as n, sellerUpdateSchema as r, sellerCreateSchema as t };
