/**
 * Ciudades destacadas en home pública (slug URL → filtros `/zones/$city`).
 * `dbMatchVariants` alinea nombres con `Property.city` en BD para conteos desde groupBy.
 */
export type HomeFeaturedCity = {
  slug: string;
  label: string;
  /** Imagen representativa estable (CDN) */
  imageUrl: string;
  dbMatchVariants: readonly string[];
};

export const HOME_FEATURED_CITIES: readonly HomeFeaturedCity[] = [
  {
    slug: "guadalajara",
    label: "Guadalajara",
    imageUrl:
      "https://images.unsplash.com/photo-1599809275677-bbef26eff999?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["Guadalajara", "guadalajara"],
  },
  {
    slug: "zapopan",
    label: "Zapopan",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["Zapopan", "zapopan"],
  },
  {
    slug: "cdmx",
    label: "CDMX",
    imageUrl:
      "https://images.unsplash.com/photo-1518105779142-e6cfa90f045e?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["CDMX", "Cdmx", "Ciudad de Mexico", "Ciudad de México"],
  },
  {
    slug: "monterrey",
    label: "Monterrey",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["Monterrey", "monterrey"],
  },
  {
    slug: "queretaro",
    label: "Querétaro",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["Queretaro", "Querétaro", "queretaro"],
  },
  {
    slug: "merida",
    label: "Mérida",
    imageUrl:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["Merida", "Mérida", "merida"],
  },
  {
    slug: "puebla",
    label: "Puebla",
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=720&q=80",
    dbMatchVariants: ["Puebla", "puebla"],
  },
];

export function totalForFeaturedCity(
  rows: readonly { city: string; total: number }[],
  variants: readonly string[],
): number | undefined {
  const set = new Set(variants.map((v) => v.trim().toLowerCase()));
  for (const row of rows) {
    if (set.has(row.city.trim().toLowerCase())) {
      return row.total;
    }
  }
  return undefined;
}
