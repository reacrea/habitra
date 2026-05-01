import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { parseUserRole } from "@/utils/user-role";

import { requireCrmOrganization } from "./crm-session";

function toNumber(value: unknown): number {
  if (value == null) return 0;
  if (typeof value === "number") return value;
  if (typeof value === "object" && value !== null && "toNumber" in value) {
    return (value as { toNumber: () => number }).toNumber();
  }
  return Number(value);
}

export const getPricingData = createServerFn({ method: "GET" }).handler(async () => {
  const ctx = await requireCrmOrganization();
  const [plans, subscription] = await Promise.all([
    prisma.plan.findMany({
      where: { isActive: true },
      orderBy: { priceMxn: "asc" },
    }),
    prisma.subscription.findFirst({
      where: { organizationId: ctx.organizationId },
      include: { plan: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return {
    plans: plans.map((p) => ({
      id: p.id,
      type: p.type,
      name: p.name,
      priceMxn: toNumber(p.priceMxn),
      billingCadence: p.billingCadence,
      minUsers: p.minUsers,
      maxUsers: p.maxUsers,
      description: p.description,
      successFeePercent: toNumber(p.successFeePercent),
    })),
    currentSubscription: subscription
      ? {
          id: subscription.id,
          planName: subscription.plan.name,
          seats: subscription.seats,
          status: subscription.status,
          startDate: subscription.startDate.toISOString(),
          endDate: subscription.endDate?.toISOString() ?? null,
          estimatedMonthly: toNumber(subscription.plan.priceMxn) * subscription.seats,
        }
      : null,
  };
});

export const getAdminBasicData = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw new Response("Unauthorized", { status: 401 });
  }
  const role = parseUserRole((session.user as typeof session.user & { role?: string | null }).role);
  if (role !== "ADMIN") {
    throw new Response("Forbidden", { status: 403 });
  }

  const [organizations, users, activeSubscriptions, activeTransactions, recentUsers] = await Promise.all([
    prisma.organization.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: { id: true, name: true, city: true, state: true, createdAt: true },
    }),
    prisma.user.count(),
    prisma.subscription.count({ where: { status: "ACTIVE" } }),
    prisma.transaction.count({ where: { status: { in: ["ACTIVA", "EN_RIESGO", "PAUSADA"] } } }),
    prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: { id: true, name: true, email: true, role: true, isActive: true, createdAt: true },
    }),
  ]);

  return {
    summary: {
      organizations: organizations.length,
      users,
      activeSubscriptions,
      activeTransactions,
    },
    organizations: organizations.map((o) => ({
      ...o,
      createdAt: o.createdAt.toISOString(),
    })),
    recentUsers: recentUsers.map((u) => ({
      ...u,
      createdAt: u.createdAt.toISOString(),
    })),
  };
});
