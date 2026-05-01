/** Opciones del formulario público "Contactar agente" (PATCH-1). */

export const CONTACT_INTEREST_TYPES = [
  { value: "COMPRAR", label: "Comprar vivienda" },
  { value: "RENTAR", label: "Rentar" },
  { value: "INVERTIR", label: "Invertir" },
  { value: "INFORMES", label: "Solo informes / explorar" },
  { value: "OTRO", label: "Otro" },
] as const;

export const CONTACT_AVAILABILITY = [
  { value: "MANANA", label: "Mañana (hora laboral)" },
  { value: "TARDE", label: "Tarde" },
  { value: "FIN_SEMANA", label: "Fines de semana" },
  { value: "CUALQUIERA", label: "Cualquier horario" },
  { value: "AGENDAR", label: "Prefiero agendar cita" },
  { value: "OTRO", label: "Otro" },
] as const;

export const CONTACT_PREFERRED_METHODS = [
  { value: "WHATSAPP", label: "WhatsApp" },
  { value: "LLAMADA", label: "Llamada telefónica" },
  { value: "EMAIL", label: "Correo electrónico" },
  { value: "VIDEO", label: "Videollamada" },
  { value: "CUALQUIERA", label: "Cualquiera" },
] as const;

export type ContactInterestType = (typeof CONTACT_INTEREST_TYPES)[number]["value"];
export type ContactAvailability = (typeof CONTACT_AVAILABILITY)[number]["value"];
export type ContactPreferredMethod = (typeof CONTACT_PREFERRED_METHODS)[number]["value"];
