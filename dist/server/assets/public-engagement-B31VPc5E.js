import { z } from "zod";
//#region src/constants/public-contact-agent.ts
/** Opciones del formulario público "Contactar agente" (PATCH-1). */
var CONTACT_INTEREST_TYPES = [
	{
		value: "COMPRAR",
		label: "Comprar vivienda"
	},
	{
		value: "RENTAR",
		label: "Rentar"
	},
	{
		value: "INVERTIR",
		label: "Invertir"
	},
	{
		value: "INFORMES",
		label: "Solo informes / explorar"
	},
	{
		value: "OTRO",
		label: "Otro"
	}
];
var CONTACT_AVAILABILITY = [
	{
		value: "MANANA",
		label: "Mañana (hora laboral)"
	},
	{
		value: "TARDE",
		label: "Tarde"
	},
	{
		value: "FIN_SEMANA",
		label: "Fines de semana"
	},
	{
		value: "CUALQUIERA",
		label: "Cualquier horario"
	},
	{
		value: "AGENDAR",
		label: "Prefiero agendar cita"
	},
	{
		value: "OTRO",
		label: "Otro"
	}
];
var CONTACT_PREFERRED_METHODS = [
	{
		value: "WHATSAPP",
		label: "WhatsApp"
	},
	{
		value: "LLAMADA",
		label: "Llamada telefónica"
	},
	{
		value: "EMAIL",
		label: "Correo electrónico"
	},
	{
		value: "VIDEO",
		label: "Videollamada"
	},
	{
		value: "CUALQUIERA",
		label: "Cualquiera"
	}
];
//#endregion
//#region src/validations/public-engagement.ts
/** Payload B2C; nombre/email/teléfono los resuelve el servidor desde sesión + Buyer. */
var contactAgentSchema = z.object({
	propertySlug: z.string().trim().min(1),
	message: z.string().trim().max(2e3).optional(),
	interestType: z.enum([
		"COMPRAR",
		"RENTAR",
		"INVERTIR",
		"INFORMES",
		"OTRO"
	]),
	availability: z.enum([
		"MANANA",
		"TARDE",
		"FIN_SEMANA",
		"CUALQUIERA",
		"AGENDAR",
		"OTRO"
	]),
	preferredContactMethod: z.enum([
		"WHATSAPP",
		"LLAMADA",
		"EMAIL",
		"VIDEO",
		"CUALQUIERA"
	])
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
export { CONTACT_INTEREST_TYPES as a, CONTACT_AVAILABILITY as i, scheduleVisitSchema as n, CONTACT_PREFERRED_METHODS as o, startBuyingProcessSchema as r, contactAgentSchema as t };
