import { z } from "zod";

/** Texto de busqueda para selectores CRM (id o nombre/titulo). */
export const entityPickerSearchSchema = z.object({
  q: z.string().trim().max(120),
});
