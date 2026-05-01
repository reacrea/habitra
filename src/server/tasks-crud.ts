import type { UserRole } from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import { updateTaskAssigneeSchema } from "@/validations/task";

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

export type TaskAssignableUser = { id: string; name: string };

function canReassignTasks(role: UserRole): boolean {
  return role === "ADMIN" || role === "BROKER_OWNER";
}

async function listAssignableUsersForOrg(organizationId: string): Promise<TaskAssignableUser[]> {
  const memberships = await prisma.membership.findMany({
    where: {
      organizationId,
      role: { in: ["AGENT", "MANAGER", "OWNER"] },
    },
    include: { user: { select: { id: true, name: true } } },
  });
  const byId = new Map<string, string>();
  for (const m of memberships) {
    byId.set(m.user.id, m.user.name);
  }
  return Array.from(byId.entries())
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export const listTasks = createServerFn({ method: "GET" }).handler(
  async (): Promise<{
    tasks: TaskListRow[];
    canAssignTasks: boolean;
    assignableUsers: TaskAssignableUser[];
  }> => {
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

    const canAssign = canReassignTasks(ctx.role);
    const assignableUsers = canAssign ? await listAssignableUsersForOrg(ctx.organizationId) : [];

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
      canAssignTasks: canAssign,
      assignableUsers,
    };
  },
);

export const updateTaskAssignee = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => updateTaskAssigneeSchema.parse(data))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const ctx = await requireCrmOrganization();
    if (!canReassignTasks(ctx.role)) {
      throw new Response("Forbidden", { status: 403 });
    }

    const task = await prisma.task.findFirst({
      where: { id: data.taskId, organizationId: ctx.organizationId },
      select: { id: true },
    });
    if (!task) {
      throw new Response("Tarea no encontrada", { status: 404 });
    }

    if (data.assigneeId === null) {
      await prisma.task.update({
        where: { id: task.id },
        data: { assigneeId: null },
      });
      return { ok: true };
    }

    const assigneeOk = await prisma.membership.findFirst({
      where: {
        organizationId: ctx.organizationId,
        userId: data.assigneeId,
        role: { in: ["AGENT", "MANAGER", "OWNER"] },
      },
    });
    if (!assigneeOk) {
      throw new Response("El usuario no puede recibir tareas en esta organizacion", { status: 400 });
    }

    await prisma.task.update({
      where: { id: task.id },
      data: { assigneeId: data.assigneeId },
    });
    return { ok: true };
  });
