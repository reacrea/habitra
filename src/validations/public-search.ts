import { z } from "zod";

/** Query params crudos en `/properties` (todo opcional para enlaces parciales). */
export const publicSearchSchema = z.object({
  operation: z.enum(["buy", "rent"]).optional(),
  /** PATCH-4: prioridad sobre `operation` si ambos vienen. */
  operationType: z.enum(["SALE", "RENT"]).optional(),
  city: z.string().optional(),
  type: z.string().optional(),
  propertyType: z.string().optional(),
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

/** Valores efectivos para filtros y API (defaults aplicados). */
export function mergePublicSearchDefaults(raw: PublicSearch): PublicSearch & {
  operation: "buy" | "rent";
  type: string;
} {
  const operation =
    (raw.operationType === "RENT" ? "rent" : raw.operationType === "SALE" ? "buy" : undefined) ??
    raw.operation ??
    "buy";
  const type = (raw.type || raw.propertyType || "").trim();
  return { ...raw, operation, type };
}
