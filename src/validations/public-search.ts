import { z } from "zod";

export const publicSearchSchema = z.object({
  city: z.string().optional(),
  type: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
});

export type PublicSearch = z.infer<typeof publicSearchSchema>;
