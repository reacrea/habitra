import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";

import { requireCrmOrganization } from "./crm-session";

type KV = { key: string; value: number };

export const getReportsData = createServerFn({ method: "GET" }).handler(async (): Promise<{
  leadsByStatus: KV[];
  transactionsByStage: KV[];
  propertiesByStatus: KV[];
  closingsByMonth: KV[];
}> => {
  const ctx = await requireCrmOrganization();

  const [leadRows, transactionRows, propertyRows, closingRows] = await Promise.all([
    prisma.lead.groupBy({
      by: ["status"],
      where: { organizationId: ctx.organizationId },
      _count: { _all: true },
    }),
    prisma.transaction.groupBy({
      by: ["currentStage"],
      where: { organizationId: ctx.organizationId },
      _count: { _all: true },
    }),
    prisma.property.groupBy({
      by: ["status"],
      where: { organizationId: ctx.organizationId },
      _count: { _all: true },
    }),
    prisma.transaction.findMany({
      where: { organizationId: ctx.organizationId },
      select: { createdAt: true, status: true },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const monthly = new Map<string, number>();
  for (const row of closingRows) {
    if (row.status !== "CERRADA") continue;
    const key = `${row.createdAt.getFullYear()}-${String(row.createdAt.getMonth() + 1).padStart(2, "0")}`;
    monthly.set(key, (monthly.get(key) ?? 0) + 1);
  }

  return {
    leadsByStatus: leadRows.map((r) => ({ key: r.status, value: r._count._all })),
    transactionsByStage: transactionRows.map((r) => ({ key: r.currentStage, value: r._count._all })),
    propertiesByStatus: propertyRows.map((r) => ({ key: r.status, value: r._count._all })),
    closingsByMonth: Array.from(monthly.entries()).map(([key, value]) => ({ key, value })),
  };
});
