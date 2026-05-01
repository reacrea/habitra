import { createServerFn } from "@tanstack/react-start";

import { prisma } from "@/lib/db/prisma";
import { financialSimulationSchema } from "@/validations/phase8";

import { requireCrmOrganization } from "./crm-session";

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export const getFinancialSimulationOptions = createServerFn({ method: "GET" }).handler(async () => {
  const ctx = await requireCrmOrganization();
  const [buyers, properties, transactions] = await Promise.all([
    prisma.buyer.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true, name: true, monthlyIncome: true },
      orderBy: { name: "asc" },
    }),
    prisma.property.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true, title: true, price: true },
      orderBy: { createdAt: "desc" },
      take: 200,
    }),
    prisma.transaction.findMany({
      where: { organizationId: ctx.organizationId },
      select: { id: true },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
  ]);

  return {
    buyers: buyers.map((b) => ({
      id: b.id,
      label: b.name,
      monthlyIncome: b.monthlyIncome == null ? null : Number(b.monthlyIncome),
    })),
    properties: properties.map((p) => ({
      id: p.id,
      label: p.title,
      price: Number(p.price),
    })),
    transactions: transactions.map((t) => ({ id: t.id, label: t.id.slice(0, 8) })),
  };
});

export const runFinancialSimulation = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => financialSimulationSchema.parse(data))
  .handler(async ({ data }) => {
    const ctx = await requireCrmOrganization();
    const loanAmount = data.propertyPrice - data.downPayment;
    const monthlyRate = data.annualRate / 100 / 12;
    const months = data.years * 12;
    const estimatedMonthly =
      monthlyRate === 0
        ? loanAmount / months
        : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const estimatedClosingCosts =
      data.propertyPrice * (data.notaryCostPct / 100) + data.appraisalCost + data.otherCosts;
    const initialTotalNeeded = data.downPayment + estimatedClosingCosts;
    const affordabilityRatio = data.monthlyIncome ? estimatedMonthly / data.monthlyIncome : 0;
    const recommendation =
      affordabilityRatio <= 0.3
        ? "Perfil saludable para avanzar."
        : affordabilityRatio <= 0.4
          ? "Viable con seguimiento de riesgo moderado."
          : "Riesgo alto: sugerir ajuste de monto/plazo.";

    const saved = await prisma.financialSimulation.create({
      data: {
        organizationId: ctx.organizationId,
        buyerId: data.buyerId ?? null,
        propertyId: data.propertyId ?? null,
        transactionId: data.transactionId ?? null,
        propertyPrice: data.propertyPrice,
        downPayment: data.downPayment,
        years: data.years,
        annualRate: data.annualRate,
        creditType: data.creditType,
        notaryCostPct: data.notaryCostPct,
        appraisalCost: data.appraisalCost,
        otherCosts: data.otherCosts,
        estimatedMonthly: round2(estimatedMonthly),
        estimatedClosingCosts: round2(estimatedClosingCosts),
        initialTotalNeeded: round2(initialTotalNeeded),
        affordabilityRatio: round2(affordabilityRatio),
        recommendation,
      },
    });

    return {
      id: saved.id,
      estimatedMonthly: Number(saved.estimatedMonthly),
      estimatedClosingCosts: Number(saved.estimatedClosingCosts),
      initialTotalNeeded: Number(saved.initialTotalNeeded),
      affordabilityRatio: Number(saved.affordabilityRatio),
      recommendation: saved.recommendation,
      createdAt: saved.createdAt.toISOString(),
    };
  });
