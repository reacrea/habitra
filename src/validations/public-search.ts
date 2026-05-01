import { z } from "zod";

export const publicSearchSchema = z.object({
  operation: z.enum(["buy", "rent"]).optional(),
  city: z.string().optional(),
  type: z.string().optional(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  sort: z
    .enum([
      "relevance",
      "price_asc",
      "price_desc",
      "recent",
      "readiness_desc",
    ])
    .optional(),
  view: z.enum(["list", "map"]).optional(),
});

export type PublicSearch = z.infer<typeof publicSearchSchema>;
