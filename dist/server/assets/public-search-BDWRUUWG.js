import { z } from "zod";
//#region src/validations/public-search.ts
var publicSearchSchema = z.object({
	city: z.string().optional(),
	type: z.string().optional(),
	minPrice: z.string().optional(),
	maxPrice: z.string().optional()
});
//#endregion
export { publicSearchSchema as t };
