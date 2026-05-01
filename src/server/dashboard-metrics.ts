import type { Prisma } from "@prisma/client";
import {
  LeadStatus,
  MembershipRole,
  PropertyStatus,
  TransactionStatus,
  UserRole,
} from "@prisma/client";
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { getOrganizationScope } from "@/server/org-access";
import { parseUserRole } from "@/utils/user-role";

export type StageCount = { stage: string; count: number };

export type AgentDashboard = {
  role: "AGENT";
  newLeads: number;
  activeTransactions: number;
  activeProperties: number;
  qualifiedBuyers: number;
  pipelineValue: number;
  alerts: string[];
  pipelineByStage: StageCount[];
};

export type BrokerDashboard = {
  role: "BROKER_OWNER";
  agents: number;
  activeTransactions: number;
  totalLeads: number;
  pipelineValue: number;
  propertiesListed: number;
  pipelineByStage: StageCount[];
};

export type AdminDashboard = {
  role: "ADMIN";
  organizations: number;
  users: number;
  transactions: number;
  leads: number;
  estimatedMrr: number;
  plansBreakdown: { planName: string; subscriptions: number }[];
};

export type BuyerDashboard = {
  role: "BUYER";
  transactions: number;
  documents: number;
  simulations: number;
  buyingScore: number | null;
  maxBudget: number | null;
};

export type SellerDashboard = {
  role: "SELLER";
  properties: number;
  transactions: number;
  documents: number;
  readinessAvg: number;
};

export type DashboardMetrics =
  | AgentDashboard
  | BrokerDashboard
  | AdminDashboard
  | BuyerDashboard
  | SellerDashboard;

function money(n: unknown): number {
  if (n == null) {
    return 0;
  }
  return Number(n);
}

async function pipelineByStage(where: Prisma.TransactionWhereInput): Promise<StageCount[]> {
  const rows = await prisma.transaction.groupBy({
    by: ["currentStage"],
    where: {
      status: { notIn: [TransactionStatus.CANCELADA, TransactionStatus.CERRADA] },
      ...where,
    },
    _count: { _all: true },
  });
  return rows
    .map((row) => ({
      stage: row.currentStage,
      count: row._count._all,
    }))
    .sort((a, b) => b.count - a.count);
}

export const getDashboardMetrics = createServerFn({ method: "GET" }).handler(async (): Promise<DashboardMetrics> => {
  const request = getRequest();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const user = session.user as typeof session.user & { id: string; role?: string | null };
  const userId = user.id;
  const role = parseUserRole(user.role);
  const scope = await getOrganizationScope(userId, role);

  if (role === UserRole.ADMIN) {
    const [organizations, users, transactions, leads, subscriptions] = await Promise.all([
      prisma.organization.count(),
      prisma.user.count(),
      prisma.transaction.count(),
      prisma.lead.count(),
      prisma.subscription.findMany({
        include: { plan: { select: { name: true, priceMxn: true } } },
      }),
    ]);

    const estimatedMrr = subscriptions.reduce(
      (sum, sub) => sum + money(sub.plan.priceMxn) * (sub.seats ?? 1),
      0,
    );

    const planNames = [...new Set(subscriptions.map((s) => s.plan.name))];
    const plansBreakdown = planNames.map((planName) => ({
      planName,
      subscriptions: subscriptions.filter((s) => s.plan.name === planName).length,
    }));

    return {
      role: "ADMIN",
      organizations,
      users,
      transactions,
      leads,
      estimatedMrr,
      plansBreakdown,
    };
  }

  const orgIds = scope.kind === "ALL" ? [] : scope.organizationIds;
  const primaryOrgId = orgIds[0];

  if (!primaryOrgId && (role === UserRole.AGENT || role === UserRole.BROKER_OWNER)) {
    if (role === UserRole.BROKER_OWNER) {
      return {
        role: "BROKER_OWNER",
        agents: 0,
        activeTransactions: 0,
        totalLeads: 0,
        pipelineValue: 0,
        propertiesListed: 0,
        pipelineByStage: [],
      };
    }
    return {
      role: "AGENT",
      newLeads: 0,
      activeTransactions: 0,
      activeProperties: 0,
      qualifiedBuyers: 0,
      pipelineValue: 0,
      alerts: ["Sin organizacion asignada"],
      pipelineByStage: [],
    };
  }

  if (role === UserRole.BROKER_OWNER && primaryOrgId) {
    const [agents, activeTransactions, totalLeads, pipelineAgg, propertiesListed, pipelineChart] =
      await Promise.all([
        prisma.membership.count({
          where: { organizationId: primaryOrgId, role: MembershipRole.AGENT },
        }),
        prisma.transaction.count({
          where: {
            organizationId: primaryOrgId,
            status: { in: [TransactionStatus.ACTIVA, TransactionStatus.EN_RIESGO, TransactionStatus.PAUSADA] },
          },
        }),
        prisma.lead.count({ where: { organizationId: primaryOrgId } }),
        prisma.transaction.aggregate({
          where: {
            organizationId: primaryOrgId,
            status: { in: [TransactionStatus.ACTIVA, TransactionStatus.EN_RIESGO] },
          },
          _sum: { acceptedPrice: true },
        }),
        prisma.property.count({
          where: {
            organizationId: primaryOrgId,
            status: { notIn: [PropertyStatus.INACTIVA, PropertyStatus.VENDIDA] },
          },
        }),
        pipelineByStage({ organizationId: primaryOrgId }),
      ]);

    return {
      role: "BROKER_OWNER",
      agents,
      activeTransactions,
      totalLeads,
      pipelineValue: money(pipelineAgg._sum.acceptedPrice),
      propertiesListed,
      pipelineByStage: pipelineChart,
    };
  }

  if (role === UserRole.AGENT && primaryOrgId) {
    const orgIn = { in: orgIds };
    const [newLeads, activeTransactions, activeProperties, qualifiedBuyers, pipelineAgg, stalled] =
      await Promise.all([
        prisma.lead.count({
          where: {
            organizationId: orgIn,
            assignedAgentId: userId,
            status: LeadStatus.NUEVO,
          },
        }),
        prisma.transaction.count({
          where: {
            organizationId: orgIn,
            agentId: userId,
            status: { in: [TransactionStatus.ACTIVA, TransactionStatus.EN_RIESGO, TransactionStatus.PAUSADA] },
          },
        }),
        prisma.property.count({
          where: {
            organizationId: orgIn,
            assignedAgentId: userId,
            status: { notIn: [PropertyStatus.INACTIVA, PropertyStatus.VENDIDA] },
          },
        }),
        prisma.buyer.count({
          where: {
            organizationId: orgIn,
            assignedAgentId: userId,
            buyingScore: { gte: 70 },
          },
        }),
        prisma.transaction.aggregate({
          where: {
            organizationId: orgIn,
            agentId: userId,
            status: { in: [TransactionStatus.ACTIVA, TransactionStatus.EN_RIESGO] },
          },
          _sum: { acceptedPrice: true },
        }),
        prisma.transaction.count({
          where: {
            organizationId: orgIn,
            agentId: userId,
            status: TransactionStatus.EN_RIESGO,
          },
        }),
      ]);

    const pipelineChart = await pipelineByStage({
      organizationId: orgIn,
      agentId: userId,
    });

    const alerts: string[] = [];
    if (stalled > 0) {
      alerts.push(`${stalled} operacion(es) en riesgo`);
    }
    if (newLeads > 5) {
      alerts.push("Muchos leads nuevos sin contactar");
    }

    return {
      role: "AGENT",
      newLeads,
      activeTransactions,
      activeProperties,
      qualifiedBuyers,
      pipelineValue: money(pipelineAgg._sum.acceptedPrice),
      alerts,
      pipelineByStage: pipelineChart,
    };
  }

  if (role === UserRole.BUYER) {
    const profile = await prisma.buyer.findFirst({
      where: { userId },
      include: {
        _count: {
          select: { documents: true, transactions: true, simulations: true },
        },
      },
    });
    return {
      role: "BUYER",
      transactions: profile?._count.transactions ?? 0,
      documents: profile?._count.documents ?? 0,
      simulations: profile?._count.simulations ?? 0,
      buyingScore: profile?.buyingScore ?? null,
      maxBudget: profile?.maxBudget != null ? money(profile.maxBudget) : null,
    };
  }

  if (role === UserRole.SELLER) {
    const profile = await prisma.seller.findFirst({
      where: { userId },
      include: {
        properties: { select: { readinessScore: true } },
        _count: { select: { documents: true, transactions: true } },
      },
    });
    const props = profile?.properties ?? [];
    const readinessAvg =
      props.length === 0
        ? 0
        : Math.round(props.reduce((s, p) => s + p.readinessScore, 0) / props.length);

    return {
      role: "SELLER",
      properties: props.length,
      transactions: profile?._count.transactions ?? 0,
      documents: profile?._count.documents ?? 0,
      readinessAvg,
    };
  }

  return {
    role: "AGENT",
    newLeads: 0,
    activeTransactions: 0,
    activeProperties: 0,
    qualifiedBuyers: 0,
    pipelineValue: 0,
    alerts: [],
    pipelineByStage: [],
  };
});
