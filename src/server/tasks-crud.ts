import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";

import { requireCrmOrganization } from "./crm-session";

export type TaskListRow = {
  id: string;
  title: string;
  description: string | null;
  status: string;
  dueDate: string | null;
  assigneeId: string | null;
  assigneeName: string | null;
  propertyTitle: string | null;
  leadName: string | null;
  createdAt: string;
};

export const listTasks = createServerFn({ method: "GET" }).handler(async (): Promise<{ tasks: TaskListRow[] }> => {
  const ctx = await requireCrmOrganization();
  const rows = await prisma.task.findMany({
    where: {
      organizationId: ctx.organizationId,
      ...(ctx.role === "AGENT" ? { assigneeId: ctx.userId } : {}),
    },
    include: {
      assignee: { select: { name: true } },
      property: { select: { title: true } },
      lead: { select: { name: true } },
    },
    orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
    take: 300,
  });

  return {
    tasks: rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      dueDate: row.dueDate?.toISOString() ?? null,
      assigneeId: row.assigneeId,
      assigneeName: row.assignee?.name ?? null,
      propertyTitle: row.property?.title ?? null,
      leadName: row.lead?.name ?? null,
      createdAt: row.createdAt.toISOString(),
    })),
  };
});
