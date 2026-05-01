import { z } from "zod";
//#region src/validations/document.ts
var documentTypeSchema = z.enum([
	"ESCRITURA",
	"IDENTIFICACION",
	"COMPROBANTE_DOMICILIO",
	"PREDIAL",
	"AGUA",
	"LIBERTAD_GRAVAMEN",
	"AVALUO",
	"CARTA_OFERTA",
	"CONTRATO_PROMESA",
	"CARTA_APROBACION_CREDITO",
	"ESTADO_CUENTA",
	"OTROS"
]);
var documentStatusSchema = z.enum([
	"PENDIENTE",
	"CARGADO",
	"EN_REVISION",
	"APROBADO",
	"RECHAZADO"
]);
var optionalText = (max) => z.string().trim().max(max).optional().transform((v) => v && v.length > 0 ? v : void 0);
var documentCreateSchema = z.object({
	title: z.string().trim().min(1, "Titulo requerido").max(200),
	type: documentTypeSchema,
	status: documentStatusSchema.optional(),
	fileUrl: z.string().trim().url("URL invalida"),
	fileName: optionalText(200),
	description: optionalText(800),
	buyerId: optionalText(80),
	sellerId: optionalText(80),
	propertyId: optionalText(80),
	transactionId: optionalText(80)
});
var documentUpdateSchema = documentCreateSchema.partial().extend({ id: z.string().min(1) });
var documentIdPayloadSchema = z.object({ id: z.string().min(1) });
//#endregion
export { documentIdPayloadSchema as n, documentUpdateSchema as r, documentCreateSchema as t };
