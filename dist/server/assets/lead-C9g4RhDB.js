import { z } from "zod";
//#region src/validations/lead.ts
var leadTypeSchema = z.enum([
	"COMPRADOR",
	"VENDEDOR",
	"INVERSIONISTA",
	"ARRENDATARIO"
]);
var leadStatusSchema = z.enum([
	"NUEVO",
	"CONTACTADO",
	"CALIFICADO",
	"DESCARTADO",
	"CONVERTIDO"
]);
var leadTemperatureSchema = z.enum([
	"FRIO",
	"TIBIO",
	"CALIENTE"
]);
var optionalEmail = z.union([z.string().length(0), z.string().email("Correo invalido")]).optional().transform((v) => !v ? void 0 : v);
var leadCreateSchema = z.object({
	name: z.string().trim().min(1, "Nombre requerido").max(200),
	email: optionalEmail,
	phone: z.string().trim().max(40).optional().transform((v) => v && v.length > 0 ? v : void 0),
	type: leadTypeSchema,
	source: z.string().trim().min(1, "Origen requerido").max(120),
	status: leadStatusSchema.optional(),
	temperature: leadTemperatureSchema.optional(),
	notesText: z.string().trim().max(5e3).optional().transform((v) => v && v.length > 0 ? v : void 0)
});
var leadUpdateSchema = leadCreateSchema.partial().extend({ id: z.string().min(1) });
var leadIdPayloadSchema = z.object({ id: z.string().min(1) });
//#endregion
export { leadIdPayloadSchema as n, leadUpdateSchema as r, leadCreateSchema as t };
