import type {
  CreditType,
  DocumentStatus,
  DocumentType,
  LeadStatus,
  LeadTemperature,
  LeadType,
  OperationType,
  PropertyStatus,
  PropertyType,
  TaskStatus,
  TimelineStepStatus,
  TransactionStage,
  TransactionStatus,
  UserRole,
} from "@prisma/client";

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
  /** Solo en listados CRM (`listSellers`). */
  propertyCount?: number;
  createdAt: string;
  updatedAt: string;
};

/** Propiedad ligada a un vendedor (resumen para CRM). */
export type SellerPropertySummary = {
  id: string;
  title: string;
  city: string;
  status: PropertyStatus;
  operationType: OperationType;
  price: number;
};

export type PropertyImageRow = {
  id: string;
  propertyId: string;
  url: string;
  alt: string | null;
  isPrimary: boolean;
  order: number;
};

export type PropertyChecklistItem = {
  id: string;
  label: string;
  checked: boolean;
};

export type PropertyRow = {
  id: string;
  organizationId: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string | null;
  propertyType: PropertyType;
  operationType: OperationType;
  price: number;
  currency: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string | null;
  postalCode: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parkingSpaces: number | null;
  landArea: number | null;
  constructionArea: number | null;
  /** Nombres de amenidades (`PropertyAmenity`), orden no garantizado en listados. */
  amenities: string[];
  status: PropertyStatus;
  sellerId: string | null;
  assignedAgentId: string | null;
  readinessScore: number;
  risks: string[];
  images: PropertyImageRow[];
  createdAt: string;
  updatedAt: string;
};

export type DocumentRow = {
  id: string;
  organizationId: string;
  type: DocumentType;
  status: DocumentStatus;
  title: string;
  description: string | null;
  fileName: string | null;
  fileUrl: string;
  buyerId: string | null;
  sellerId: string | null;
  propertyId: string | null;
  transactionId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TransactionRow = {
  id: string;
  organizationId: string;
  propertyId: string;
  buyerId: string;
  sellerId: string;
  agentId: string;
  offeredPrice: number | null;
  acceptedPrice: number | null;
  status: TransactionStatus;
  currentStage: TransactionStage;
  estimatedClosingDate: string | null;
  paymentType: string;
  creditType: CreditType | null;
  probabilityToClose: number;
  notesText: string | null;
  createdAt: string;
  updatedAt: string;
  propertyTitle: string;
  buyerName: string;
  sellerName: string;
  agentName: string;
};

export type TransactionTimelineRow = {
  id: string;
  transactionId: string;
  name: string;
  description: string | null;
  responsibleRole: UserRole;
  estimatedDate: string | null;
  completedDate: string | null;
  status: TimelineStepStatus;
  notes: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type TransactionTaskRow = {
  id: string;
  transactionId: string | null;
  title: string;
  description: string | null;
  status: TaskStatus;
  dueDate: string | null;
  assigneeId: string | null;
  assigneeName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TransactionNoteRow = {
  id: string;
  transactionId: string | null;
  content: string;
  authorId: string | null;
  authorName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TransactionOption = {
  id: string;
  label: string;
};

export type TaskAssignableUser = { id: string; name: string };

/** Fila de listado de tareas CRM (`/app/tasks`), alineada con `listTasks`. */
export type TaskListRow = {
  id: string;
  title: string;
  description: string | null;
  status: string;
  dueDate: string | null;
  assigneeId: string | null;
  assigneeName: string | null;
  propertyId: string | null;
  propertyTitle: string | null;
  leadId: string | null;
  leadName: string | null;
  createdAt: string;
};
