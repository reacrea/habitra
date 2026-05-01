import { DocumentStatus } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type { DocumentRow } from "@/types/crm";
import { documentCreateSchema, documentIdPayloadSchema, documentUpdateSchema } from "@/validations/document";

import { requireCrmOrganization } from "./crm-session";

function mapDocument(row: {
  id: string;
  organizationId: string;
  type: DocumentRow["type"];
  status: DocumentRow["status"];
  title: string;
  description: string | null;
  fileName: string | null;
  fileUrl: string;
  buyerId: string | null;
  sellerId: string | null;
  propertyId: string | null;
  transactionId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): DocumentRow {
  return {
    ...row,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export const listDocuments = createServerFn({ method: "GET" }).handler(async (): Promise<{ documents: DocumentRow[] }> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.document.findMany({
    where: { organizationId: ctx.organizationId },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return { documents: rows.map(mapDocument) };
});

export const getDocumentById = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => documentIdPayloadSchema.parse(data))
  .handler(async ({ data }): Promise<DocumentRow | null> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.document.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    return row ? mapDocument(row) : null;
  });

export const createDocument = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => documentCreateSchema.parse(data))
  .handler(async ({ data }): Promise<DocumentRow> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.document.create({
      data: {
        organizationId: ctx.organizationId,
        type: data.type,
        status: data.status ?? DocumentStatus.PENDIENTE,
        title: data.title,
        description: data.description ?? null,
        fileName: data.fileName ?? null,
        fileUrl: data.fileUrl,
        buyerId: data.buyerId ?? null,
        sellerId: data.sellerId ?? null,
        propertyId: data.propertyId ?? null,
        transactionId: data.transactionId ?? null,
        uploadedByUserId: ctx.userId,
      },
    });
    return mapDocument(row);
  });

export const updateDocument = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => documentUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<DocumentRow> => {
    const ctx = await requireCrmOrganization();
    const found = await prisma.document.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    if (!found) throw new Response("Documento no encontrado", { status: 404 });
    const row = await prisma.document.update({
      where: { id: data.id },
      data: {
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.type !== undefined ? { type: data.type } : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
        ...(data.description !== undefined ? { description: data.description } : {}),
        ...(data.fileName !== undefined ? { fileName: data.fileName } : {}),
        ...(data.fileUrl !== undefined ? { fileUrl: data.fileUrl } : {}),
        ...(data.buyerId !== undefined ? { buyerId: data.buyerId } : {}),
        ...(data.sellerId !== undefined ? { sellerId: data.sellerId } : {}),
        ...(data.propertyId !== undefined ? { propertyId: data.propertyId } : {}),
        ...(data.transactionId !== undefined ? { transactionId: data.transactionId } : {}),
      },
    });
    return mapDocument(row);
  });
