import { PropertyType } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { prisma } from "@/lib/db/prisma";

const publicListingsInput = z.object({
  operationType: z.enum(["VENTA", "RENTA"]).optional(),
  city: z.string().trim().min(1).optional(),
  propertyType: z.nativeEnum(PropertyType).optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  limit: z.number().int().min(1).max(60).optional(),
});

function toNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (value && typeof value === "object" && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber();
  }
  return Number(value ?? 0);
}

export type PublicPropertyCard = {
  id: string;
  slug: string;
  title: string;
  operationType: "VENTA" | "RENTA";
  propertyType: PropertyType;
  price: number;
  city: string;
  neighborhood: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parkingSpaces: number | null;
  readinessScore: number;
  imageUrl: string | null;
  organizationName: string;
};

export const getPublicHomeData = createServerFn({ method: "GET" }).handler(async () => {
  const [featuredSaleRows, featuredRentRows, cityRows] = await Promise.all([
    prisma.property.findMany({
      where: { status: "PUBLICADA", operationType: "VENTA" },
      include: {
        images: { orderBy: { order: "asc" }, take: 1 },
        organization: { select: { name: true } },
      },
      orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
      take: 8,
    }),
    prisma.property.findMany({
      where: { status: "PUBLICADA", operationType: "RENTA" },
      include: {
        images: { orderBy: { order: "asc" }, take: 1 },
        organization: { select: { name: true } },
      },
      orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
      take: 8,
    }),
    prisma.property.groupBy({
      by: ["city"],
      where: { status: "PUBLICADA" },
      _count: { _all: true },
    }),
  ]);

  const mapRow = (row: (typeof featuredSaleRows)[number]): PublicPropertyCard => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    operationType: row.operationType,
    propertyType: row.propertyType,
    price: toNumber(row.price),
    city: row.city,
    neighborhood: row.neighborhood,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    parkingSpaces: row.parkingSpaces,
    readinessScore: row.readinessScore,
    imageUrl: row.images[0]?.url ?? null,
    organizationName: row.organization.name,
  });

  return {
    featuredSale: featuredSaleRows.map(mapRow),
    featuredRent: featuredRentRows.map(mapRow),
    cities: cityRows
      .map((row) => ({ city: row.city, total: row._count._all }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 10),
  };
});

export const getPublicListings = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => publicListingsInput.parse(data))
  .handler(async ({ data }) => {
    const rows = await prisma.property.findMany({
      where: {
        status: "PUBLICADA",
        ...(data.operationType ? { operationType: data.operationType } : {}),
        ...(data.city ? { city: { equals: data.city, mode: "insensitive" } } : {}),
        ...(data.propertyType ? { propertyType: data.propertyType } : {}),
        ...(data.minPrice || data.maxPrice
          ? {
              price: {
                ...(data.minPrice ? { gte: data.minPrice } : {}),
                ...(data.maxPrice ? { lte: data.maxPrice } : {}),
              },
            }
          : {}),
      },
      include: {
        images: { orderBy: { order: "asc" }, take: 1 },
        organization: { select: { name: true } },
      },
      orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
      take: data.limit ?? 24,
    });

    return {
      properties: rows.map((row) => ({
        id: row.id,
        slug: row.slug,
        title: row.title,
        operationType: row.operationType,
        propertyType: row.propertyType,
        price: toNumber(row.price),
        city: row.city,
        neighborhood: row.neighborhood,
        bedrooms: row.bedrooms,
        bathrooms: row.bathrooms,
        parkingSpaces: row.parkingSpaces,
        readinessScore: row.readinessScore,
        imageUrl: row.images[0]?.url ?? null,
        organizationName: row.organization.name,
      })),
    };
  });
