import type {
  BuyerRow,
  DocumentRow,
  LeadRow,
  PropertyRow,
  SellerRow,
  TaskListRow,
  TransactionRow,
} from "@/types/crm";

function contains(haystack: string, q: string): boolean {
  if (!q.trim()) return true;
  return haystack.toLowerCase().includes(q.trim().toLowerCase());
}

function parseOptNumber(s: string | undefined): number | undefined {
  if (s === undefined) return undefined;
  const t = s.trim();
  if (!t) return undefined;
  const n = Number(t);
  return Number.isFinite(n) ? n : undefined;
}

function inRange(
  value: number | null | undefined,
  minStr: string | undefined,
  maxStr: string | undefined,
): boolean {
  if (value === null || value === undefined) {
    const hasBound = (parseOptNumber(minStr) !== undefined || parseOptNumber(maxStr) !== undefined);
    return !hasBound;
  }
  const min = parseOptNumber(minStr);
  const max = parseOptNumber(maxStr);
  if (min !== undefined && value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
}

export function applyLeadColumnFilters(rows: LeadRow[], f: Record<string, string>): LeadRow[] {
  return rows.filter((row) => {
    if (!contains(row.name, f.name ?? "")) return false;
    if (f.type && row.type !== f.type) return false;
    if (f.status && row.status !== f.status) return false;
    if (f.temperature && row.temperature !== f.temperature) return false;
    if (!contains(row.source, f.source ?? "")) return false;
    const contact = [row.email, row.phone].filter(Boolean).join(" ");
    if (!contains(contact, f.contact ?? "")) return false;
    return true;
  });
}

export function applyBuyerColumnFilters(rows: BuyerRow[], f: Record<string, string>): BuyerRow[] {
  return rows.filter((row) => {
    if (!contains(row.name, f.name ?? "")) return false;
    if (!contains(row.desiredZone ?? "", f.zone ?? "")) return false;
    if (f.propertyType && (row.desiredPropertyType ?? "") !== f.propertyType) return false;
    if (f.creditType && row.creditType !== f.creditType) return false;
    if (!inRange(row.maxBudget, f.budgetMin, f.budgetMax)) return false;
    if (!inRange(row.buyingScore, f.scoreMin, f.scoreMax)) return false;
    return true;
  });
}

export function applySellerColumnFilters(rows: SellerRow[], f: Record<string, string>): SellerRow[] {
  return rows.filter((row) => {
    if (!contains(row.name, f.name ?? "")) return false;
    const contact = [row.email, row.phone].filter(Boolean).join(" ");
    if (!contains(contact, f.contact ?? "")) return false;
    if (!inRange(row.expectedPrice, f.priceMin, f.priceMax)) return false;
    if (!inRange(row.urgency, f.urgencyMin, f.urgencyMax)) return false;
    return true;
  });
}

export function applyPropertyColumnFilters(rows: PropertyRow[], f: Record<string, string>): PropertyRow[] {
  return rows.filter((row) => {
    if (!contains(row.title, f.title ?? "")) return false;
    if (f.propertyType && row.propertyType !== f.propertyType) return false;
    if (f.operationType && row.operationType !== f.operationType) return false;
    if (f.status && row.status !== f.status) return false;
    if (!inRange(row.price, f.priceMin, f.priceMax)) return false;
    if (!inRange(row.readinessScore, f.readinessMin, f.readinessMax)) return false;
    return true;
  });
}

function transactionDisplayPrice(tx: TransactionRow): number | null {
  return tx.acceptedPrice ?? tx.offeredPrice;
}

export function applyTransactionColumnFilters(rows: TransactionRow[], f: Record<string, string>): TransactionRow[] {
  return rows.filter((row) => {
    if (!contains(row.propertyTitle, f.property ?? "")) return false;
    const parties = `${row.buyerName} ${row.sellerName}`;
    if (!contains(parties, f.parties ?? "")) return false;
    if (!contains(row.agentName, f.agent ?? "")) return false;
    if (f.stage && row.currentStage !== f.stage) return false;
    if (f.status && row.status !== f.status) return false;
    const price = transactionDisplayPrice(row);
    if (!inRange(price, f.priceMin, f.priceMax)) return false;
    return true;
  });
}

function documentAssocKey(d: DocumentRow): string {
  if (d.propertyId) return "property";
  if (d.buyerId) return "buyer";
  if (d.sellerId) return "seller";
  if (d.transactionId) return "transaction";
  return "general";
}

export function applyDocumentColumnFilters(rows: DocumentRow[], f: Record<string, string>): DocumentRow[] {
  return rows.filter((row) => {
    if (!contains(row.title, f.title ?? "")) return false;
    if (f.type && row.type !== f.type) return false;
    if (f.status && row.status !== f.status) return false;
    if (f.assoc && documentAssocKey(row) !== f.assoc) return false;
    return true;
  });
}

function parseDayStart(iso: string | null): number | null {
  if (!iso) return null;
  const t = Date.parse(iso);
  return Number.isFinite(t) ? t : null;
}

export function applyTaskColumnFilters(rows: TaskListRow[], f: Record<string, string>): TaskListRow[] {
  return rows.filter((row) => {
    if (!contains(row.title, f.title ?? "")) return false;
    if (!contains(row.description ?? "", f.description ?? "")) return false;
    if (f.status && row.status !== f.status) return false;
    if (!contains(row.propertyTitle ?? "", f.property ?? "")) return false;
    if (!contains(row.leadName ?? "", f.lead ?? "")) return false;
    if (!contains(row.assigneeName ?? "", f.assignee ?? "")) return false;

    const due = parseDayStart(row.dueDate);
    const from = f.dueFrom?.trim() ? Date.parse(f.dueFrom + "T00:00:00.000Z") : undefined;
    const to = f.dueTo?.trim() ? Date.parse(f.dueTo + "T23:59:59.999Z") : undefined;
    if (from !== undefined && (!Number.isFinite(from) || (due !== null && due < from))) return false;
    if (to !== undefined && (!Number.isFinite(to) || (due !== null && due > to))) return false;
    if ((from !== undefined || to !== undefined) && due === null) return false;

    return true;
  });
}
