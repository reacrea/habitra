import { LeadStatus, LeadTemperature } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import type { LeadRow } from "@/types/crm";
import {
  leadCreateSchema,
  leadIdPayloadSchema,
  leadUpdateSchema,
} from "@/validations/lead";

import { requireCrmOrganization } from "./crm-session";

function toLeadRow(row: {
  id: string;
  organizationId: string;
  name: string;
  email: string | null;
  phone: string | null;
  type: LeadRow["type"];
  source: string;
  status: LeadRow["status"];
  temperature: LeadRow["temperature"];
  notesText: string | null;
  assignedAgentId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): LeadRow {
  return {
    ...row,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export const listLeads = createServerFn({ method: "GET" }).handler(async (): Promise<{
  organizationId: string;
  leads: LeadRow[];
}> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.lead.findMany({
    where: { organizationId: ctx.organizationId },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return {
    organizationId: ctx.organizationId,
    leads: rows.map(toLeadRow),
  };
});

export const getLeadById = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadIdPayloadSchema.parse(data))
  .handler(async ({ data }): Promise<LeadRow | null> => {
    const ctx = await requireCrmOrganization();
    const row = await prisma.lead.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    return row ? toLeadRow(row) : null;
  });

export const createLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadCreateSchema.parse(data))
  .handler(async ({ data }): Promise<LeadRow> => {
    const ctx = await requireCrmOrganization();
    const assignedAgentId = ctx.role === "AGENT" ? ctx.userId : null;
    const row = await prisma.lead.create({
      data: {
        organizationId: ctx.organizationId,
        name: data.name,
        email: data.email ?? null,
        phone: data.phone ?? null,
        type: data.type,
        source: data.source,
        status: data.status ?? LeadStatus.NUEVO,
        temperature: data.temperature ?? LeadTemperature.TIBIO,
        notesText: data.notesText ?? null,
        assignedAgentId,
      },
    });
    return toLeadRow(row);
  });

export const updateLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadUpdateSchema.parse(data))
  .handler(async ({ data }): Promise<LeadRow> => {
    const ctx = await requireCrmOrganization();
    const existing = await prisma.lead.findFirst({
      where: { id: data.id, organizationId: ctx.organizationId },
    });
    if (!existing) {
      throw new Response("Lead no encontrado", { status: 404 });
    }

    const {
      id,
      name,
      email,
      phone,
      type,
      source,
      status,
      temperature,
      notesText,
    } = data;

    const row = await prisma.lead.update({
      where: { id },
      data: {
        ...(name !== undefined ? { name } : {}),
        ...(email !== undefined ? { email } : {}),
        ...(phone !== undefined ? { phone } : {}),
        ...(type !== undefined ? { type } : {}),
        ...(source !== undefined ? { source } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(temperature !== undefined ? { temperature } : {}),
        ...(notesText !== undefined ? { notesText } : {}),
      },
    });
    return toLeadRow(row);
  });
