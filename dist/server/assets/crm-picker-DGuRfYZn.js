import { z } from "zod";
//#region src/validations/crm-picker.ts
/** Texto de busqueda para selectores CRM (id o nombre/titulo). */
var entityPickerSearchSchema = z.object({ q: z.string().trim().max(120) });
//#endregion
export { entityPickerSearchSchema as t };
