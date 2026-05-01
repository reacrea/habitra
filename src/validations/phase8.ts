import { z } from "zod";

export const financialSimulationSchema = z.object({
  buyerId: z.string().min(1).optional(),
  propertyId: z.string().min(1).optional(),
  transactionId: z.string().min(1).optional(),
  propertyPrice: z.number().positive(),
  downPayment: z.number().min(0),
  years: z.number().int().min(1).max(40),
  annualRate: z.number().min(0).max(100),
  creditType: z.enum(["INFONAVIT", "FOVISSSTE", "BANCARIO", "COFINAVIT", "CONTADO", "MIXTO", "OTRO"]),
  notaryCostPct: z.number().min(0).max(30),
  appraisalCost: z.number().min(0),
  otherCosts: z.number().min(0),
  monthlyIncome: z.number().positive().optional(),
});

export const aiDummySchema = z.object({
  prompt: z.string().trim().min(3).max(2000),
  transactionId: z.string().min(1).optional(),
  buyerId: z.string().min(1).optional(),
  propertyId: z.string().min(1).optional(),
});
