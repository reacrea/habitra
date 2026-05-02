import { useCallback, useMemo, useState } from "react";
//#region src/hooks/use-crm-column-filters.ts
/** Estado genérico para filtros por columna en tablas CRM (valores string; vacío = sin filtro). */
function useCrmColumnFilters() {
	const [filters, setFilters] = useState({});
	return {
		filters,
		setField: useCallback((key, value) => {
			setFilters((prev) => ({
				...prev,
				[key]: value
			}));
		}, []),
		clearAll: useCallback(() => setFilters({}), []),
		hasActive: useMemo(() => Object.values(filters).some((v) => v != null && String(v).trim() !== ""), [filters])
	};
}
//#endregion
//#region src/lib/crm-column-filter-apply.ts
function contains(haystack, q) {
	if (!q.trim()) return true;
	return haystack.toLowerCase().includes(q.trim().toLowerCase());
}
function parseOptNumber(s) {
	if (s === void 0) return void 0;
	const t = s.trim();
	if (!t) return void 0;
	const n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function inRange(value, minStr, maxStr) {
	if (value === null || value === void 0) return !(parseOptNumber(minStr) !== void 0 || parseOptNumber(maxStr) !== void 0);
	const min = parseOptNumber(minStr);
	const max = parseOptNumber(maxStr);
	if (min !== void 0 && value < min) return false;
	if (max !== void 0 && value > max) return false;
	return true;
}
function applyLeadColumnFilters(rows, f) {
	return rows.filter((row) => {
		if (!contains(row.name, f.name ?? "")) return false;
		if (f.type && row.type !== f.type) return false;
		if (f.status && row.status !== f.status) return false;
		if (f.temperature && row.temperature !== f.temperature) return false;
		if (!contains(row.source, f.source ?? "")) return false;
		if (!contains([row.email, row.phone].filter(Boolean).join(" "), f.contact ?? "")) return false;
		return true;
	});
}
function applyBuyerColumnFilters(rows, f) {
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
function applySellerColumnFilters(rows, f) {
	return rows.filter((row) => {
		if (!contains(row.name, f.name ?? "")) return false;
		if (!contains([row.email, row.phone].filter(Boolean).join(" "), f.contact ?? "")) return false;
		if (!inRange(row.expectedPrice, f.priceMin, f.priceMax)) return false;
		if (!inRange(row.urgency, f.urgencyMin, f.urgencyMax)) return false;
		return true;
	});
}
function applyPropertyColumnFilters(rows, f) {
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
function transactionDisplayPrice(tx) {
	return tx.acceptedPrice ?? tx.offeredPrice;
}
function applyTransactionColumnFilters(rows, f) {
	return rows.filter((row) => {
		if (!contains(row.propertyTitle, f.property ?? "")) return false;
		if (!contains(`${row.buyerName} ${row.sellerName}`, f.parties ?? "")) return false;
		if (!contains(row.agentName, f.agent ?? "")) return false;
		if (f.stage && row.currentStage !== f.stage) return false;
		if (f.status && row.status !== f.status) return false;
		if (!inRange(transactionDisplayPrice(row), f.priceMin, f.priceMax)) return false;
		return true;
	});
}
function documentAssocKey(d) {
	if (d.propertyId) return "property";
	if (d.buyerId) return "buyer";
	if (d.sellerId) return "seller";
	if (d.transactionId) return "transaction";
	return "general";
}
function applyDocumentColumnFilters(rows, f) {
	return rows.filter((row) => {
		if (!contains(row.title, f.title ?? "")) return false;
		if (f.type && row.type !== f.type) return false;
		if (f.status && row.status !== f.status) return false;
		if (f.assoc && documentAssocKey(row) !== f.assoc) return false;
		return true;
	});
}
function parseDayStart(iso) {
	if (!iso) return null;
	const t = Date.parse(iso);
	return Number.isFinite(t) ? t : null;
}
function applyTaskColumnFilters(rows, f) {
	return rows.filter((row) => {
		if (!contains(row.title, f.title ?? "")) return false;
		if (!contains(row.description ?? "", f.description ?? "")) return false;
		if (f.status && row.status !== f.status) return false;
		if (!contains(row.propertyTitle ?? "", f.property ?? "")) return false;
		if (!contains(row.leadName ?? "", f.lead ?? "")) return false;
		if (!contains(row.assigneeName ?? "", f.assignee ?? "")) return false;
		const due = parseDayStart(row.dueDate);
		const from = f.dueFrom?.trim() ? Date.parse(f.dueFrom + "T00:00:00.000Z") : void 0;
		const to = f.dueTo?.trim() ? Date.parse(f.dueTo + "T23:59:59.999Z") : void 0;
		if (from !== void 0 && (!Number.isFinite(from) || due !== null && due < from)) return false;
		if (to !== void 0 && (!Number.isFinite(to) || due !== null && due > to)) return false;
		if ((from !== void 0 || to !== void 0) && due === null) return false;
		return true;
	});
}
//#endregion
export { applySellerColumnFilters as a, useCrmColumnFilters as c, applyPropertyColumnFilters as i, applyDocumentColumnFilters as n, applyTaskColumnFilters as o, applyLeadColumnFilters as r, applyTransactionColumnFilters as s, applyBuyerColumnFilters as t };
