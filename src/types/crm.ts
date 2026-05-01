import type {
  CreditType,
  LeadStatus,
  LeadTemperature,
  LeadType,
  PropertyType,
} from "@prisma/client";

/** Lead serializado para la UI (sin Decimal). */
export type LeadRow = {
  id: string;
  organizationId: string;
  name: string;
  email: string | null;
  phone: string | null;
  type: LeadType;
  source: string;
  status: LeadStatus;
  temperature: LeadTemperature;
  notesText: string | null;
  assignedAgentId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type BuyerRow = {
  id: string;
  organizationId: string;
  userId: string | null;
  sourceLeadId: string | null;
  name: string;
  email: string | null;
  phone: string | null;
  maxBudget: number | null;
  downPayment: number | null;
  monthlyIncome: number | null;
  creditType: CreditType;
  desiredZone: string | null;
  desiredPropertyType: PropertyType | null;
  bedrooms: number | null;
  bathrooms: number | null;
  urgency: number | null;
  buyingScore: number | null;
  assignedAgentId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SellerRow = {
  id: string;
  organizationId: string;
  userId: string | null;
  sourceLeadId: string | null;
  name: string;
  email: string | null;
  phone: string | null;
  urgency: number | null;
  expectedPrice: number | null;
  sellingReason: string | null;
  assignedAgentId: string | null;
  createdAt: string;
  updatedAt: string;
};
