import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { prisma } from "@/lib/db/prisma";

function toNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (value && typeof value === "object" && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber();
  }
  return Number(value ?? 0);
}

const cityInputSchema = z.object({
  city: z.string().trim().min(1),
});

const neighborhoodInputSchema = z.object({
  city: z.string().trim().min(1),
  neighborhood: z.string().trim().min(1),
});

export const getZonesOverview = createServerFn({ method: "GET" }).handler(async () => {
  const rows = await prisma.property.groupBy({
    by: ["city"],
    where: { status: "PUBLICADA" },
    _count: { _all: true },
    _avg: { price: true, readinessScore: true },
  });

  return {
    cities: rows
      .map((row) => ({
        city: row.city,
        total: row._count._all,
        avgPrice: toNumber(row._avg.price),
        avgReadiness: Math.round(Number(row._avg.readinessScore ?? 0)),
      }))
      .sort((a, b) => b.total - a.total),
  };
});

export const getZoneCityData = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => cityInputSchema.parse(data))
  .handler(async ({ data }) => {
    const city = decodeURIComponent(data.city);
    const [cityRows, neighborhoods] = await Promise.all([
      prisma.property.findMany({
        where: { status: "PUBLICADA", city: { equals: city, mode: "insensitive" } },
        select: { id: true, title: true, slug: true, price: true, neighborhood: true, operationType: true, propertyType: true },
        orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
        take: 60,
      }),
      prisma.property.groupBy({
        by: ["neighborhood"],
        where: {
          status: "PUBLICADA",
          city: { equals: city, mode: "insensitive" },
          neighborhood: { not: null },
        },
        _count: { _all: true },
        _avg: { price: true },
      }),
    ]);

    if (cityRows.length === 0) return null;

    return {
      city,
      total: cityRows.length,
      properties: cityRows.map((row) => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        price: toNumber(row.price),
        neighborhood: row.neighborhood,
        operationType: row.operationType,
        propertyType: row.propertyType,
      })),
      neighborhoods: neighborhoods
        .filter((n) => n.neighborhood)
        .map((n) => ({
          neighborhood: n.neighborhood as string,
          total: n._count._all,
          avgPrice: toNumber(n._avg.price),
        }))
        .sort((a, b) => b.total - a.total),
    };
  });

export const getZoneNeighborhoodData = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => neighborhoodInputSchema.parse(data))
  .handler(async ({ data }) => {
    const city = decodeURIComponent(data.city);
    const neighborhood = decodeURIComponent(data.neighborhood);
    const rows = await prisma.property.findMany({
      where: {
        status: "PUBLICADA",
        city: { equals: city, mode: "insensitive" },
        neighborhood: { equals: neighborhood, mode: "insensitive" },
      },
      include: {
        images: { orderBy: { order: "asc" }, take: 1 },
      },
      orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
      take: 40,
    });

    if (rows.length === 0) return null;

    return {
      city,
      neighborhood,
      total: rows.length,
      avgPrice: Math.round(rows.reduce((acc, row) => acc + toNumber(row.price), 0) / rows.length),
      properties: rows.map((row) => ({
        id: row.id,
        slug: row.slug,
        title: row.title,
        price: toNumber(row.price),
        operationType: row.operationType,
        propertyType: row.propertyType,
        imageUrl: row.images[0]?.url ?? null,
      })),
    };
  });
