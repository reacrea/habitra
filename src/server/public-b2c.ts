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
  bedrooms: z.number().int().min(0).optional(),
  bathrooms: z.number().int().min(0).optional(),
  sort: z
    .enum(["relevance", "price_asc", "price_desc", "recent", "readiness_desc"])
    .optional(),
  limit: z.number().int().min(1).max(60).optional(),
});

const publicPropertySlugInput = z.object({
  slug: z.string().trim().min(1),
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

export type PublicDocumentClarityItem = {
  type: "ESCRITURA" | "PREDIAL" | "AGUA" | "LIBERTAD_GRAVAMEN";
  available: boolean;
};

export type PublicPropertyDetail = PublicPropertyCard & {
  description: string;
  fullDescription: string | null;
  address: string;
  state: string;
  postalCode: string | null;
  risks: string[];
  images: Array<{ id: string; url: string; alt: string | null; isPrimary: boolean }>;
  landArea: number | null;
  constructionArea: number | null;
  age: number | null;
  documentClarityScore: number;
  documentClarity: PublicDocumentClarityItem[];
  agent: {
    id: string | null;
    name: string;
    email: string | null;
    phone: string | null;
    image: string | null;
    organizationName: string;
  };
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
    const orderBy =
      data.sort === "price_asc"
        ? [{ price: "asc" as const }]
        : data.sort === "price_desc"
          ? [{ price: "desc" as const }]
          : data.sort === "recent"
            ? [{ createdAt: "desc" as const }]
            : data.sort === "readiness_desc"
              ? [{ readinessScore: "desc" as const }]
              : [{ readinessScore: "desc" as const }, { createdAt: "desc" as const }];

    const rows = await prisma.property.findMany({
      where: {
        status: "PUBLICADA",
        ...(data.operationType ? { operationType: data.operationType } : {}),
        ...(data.city
          ? {
              OR: [
                { city: { contains: data.city, mode: "insensitive" } },
                { neighborhood: { contains: data.city, mode: "insensitive" } },
              ],
            }
          : {}),
        ...(data.propertyType ? { propertyType: data.propertyType } : {}),
        ...(data.minPrice || data.maxPrice
          ? {
              price: {
                ...(data.minPrice ? { gte: data.minPrice } : {}),
                ...(data.maxPrice ? { lte: data.maxPrice } : {}),
              },
            }
          : {}),
        ...(data.bedrooms !== undefined ? { bedrooms: { gte: data.bedrooms } } : {}),
        ...(data.bathrooms !== undefined ? { bathrooms: { gte: data.bathrooms } } : {}),
      },
      include: {
        images: { orderBy: { order: "asc" }, take: 1 },
        organization: { select: { name: true } },
      },
      orderBy,
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

function isDocumentAvailable(status: string): boolean {
  return status === "CARGADO" || status === "EN_REVISION" || status === "APROBADO";
}

export const getPublicPropertyBySlug = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => publicPropertySlugInput.parse(data))
  .handler(async ({ data }): Promise<{
    property: PublicPropertyDetail;
    estimatedTimeline: Array<{ id: string; title: string; description: string }>;
  } | null> => {
    const row = await prisma.property.findFirst({
      where: { slug: data.slug, status: "PUBLICADA" },
      include: {
        images: { orderBy: { order: "asc" } },
        organization: { select: { name: true } },
        assignedAgent: {
          select: { id: true, name: true, email: true, phone: true, image: true },
        },
        documents: {
          where: {
            type: { in: ["ESCRITURA", "PREDIAL", "AGUA", "LIBERTAD_GRAVAMEN"] },
          },
          select: { type: true, status: true },
        },
      },
    });
    if (!row) return null;

    const documentTypes: PublicDocumentClarityItem["type"][] = [
      "ESCRITURA",
      "PREDIAL",
      "AGUA",
      "LIBERTAD_GRAVAMEN",
    ];
    const clarity = documentTypes.map((type) => {
      const doc = row.documents.find((d) => d.type === type);
      return {
        type,
        available: doc ? isDocumentAvailable(doc.status) : false,
      };
    });
    const documentClarityScore = Math.round(
      (clarity.filter((x) => x.available).length / clarity.length) * 100,
    );

    const property: PublicPropertyDetail = {
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
      description: row.description,
      fullDescription: row.fullDescription,
      address: row.address,
      state: row.state,
      postalCode: row.postalCode,
      risks: row.risks,
      images: row.images.map((img) => ({
        id: img.id,
        url: img.url,
        alt: img.alt,
        isPrimary: img.isPrimary,
      })),
      landArea: toNumber(row.landArea) || null,
      constructionArea: toNumber(row.constructionArea) || null,
      age: row.age,
      documentClarityScore,
      documentClarity: clarity,
      agent: {
        id: row.assignedAgent?.id ?? null,
        name: row.assignedAgent?.name ?? "Equipo Habitra",
        email: row.assignedAgent?.email ?? null,
        phone: row.assignedAgent?.phone ?? null,
        image: row.assignedAgent?.image ?? null,
        organizationName: row.organization.name,
      },
    };

    const estimatedTimeline = [
      { id: "contact", title: "Contacto inicial", description: "24-48 horas" },
      { id: "visit", title: "Visita y validacion", description: "2-5 dias" },
      { id: "offer", title: "Oferta y negociacion", description: "3-10 dias" },
      { id: "credit", title: "Credito o validacion de pago", description: "2-6 semanas" },
      { id: "notary", title: "Notaria y firma", description: "1-3 semanas" },
      { id: "handover", title: "Entrega", description: "Cierre final" },
    ];

    return { property, estimatedTimeline };
  });

export const getPublicSimilarProperties = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => publicPropertySlugInput.parse(data))
  .handler(async ({ data }): Promise<{ similar: PublicPropertyCard[] }> => {
    const source = await prisma.property.findFirst({
      where: { slug: data.slug, status: "PUBLICADA" },
      select: { id: true, city: true, propertyType: true, operationType: true },
    });
    if (!source) return { similar: [] };

    const rows = await prisma.property.findMany({
      where: {
        status: "PUBLICADA",
        id: { not: source.id },
        city: source.city,
        propertyType: source.propertyType,
        operationType: source.operationType,
      },
      include: {
        images: { orderBy: { order: "asc" }, take: 1 },
        organization: { select: { name: true } },
      },
      orderBy: [{ readinessScore: "desc" }, { createdAt: "desc" }],
      take: 6,
    });

    return {
      similar: rows.map((row) => ({
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
