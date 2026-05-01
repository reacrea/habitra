import type { PublicPropertyCard } from "@/server/public-b2c";

const FAVORITES_KEY = "habitra:b2c:favorites:v1";
const COMPARE_KEY = "habitra:b2c:compare:v1";
const MAX_COMPARE_ITEMS = 4;
export const SHORTLISTS_EVENT = "habitra-shortlists-changed";

function readList(key: string): PublicPropertyCard[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(key);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed as PublicPropertyCard[];
  } catch {
    return [];
  }
}

function writeList(key: string, value: PublicPropertyCard[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(SHORTLISTS_EVENT));
}

function toggleItem(key: string, property: PublicPropertyCard, maxItems?: number): PublicPropertyCard[] {
  const current = readList(key);
  const exists = current.some((x) => x.id === property.id);
  const next = exists
    ? current.filter((x) => x.id !== property.id)
    : maxItems
      ? [property, ...current].slice(0, maxItems)
      : [property, ...current];
  writeList(key, next);
  return next;
}

export function getFavorites(): PublicPropertyCard[] {
  return readList(FAVORITES_KEY);
}

export function getCompareItems(): PublicPropertyCard[] {
  return readList(COMPARE_KEY);
}

export function toggleFavorite(property: PublicPropertyCard): PublicPropertyCard[] {
  return toggleItem(FAVORITES_KEY, property);
}

export function toggleCompare(property: PublicPropertyCard): PublicPropertyCard[] {
  return toggleItem(COMPARE_KEY, property, MAX_COMPARE_ITEMS);
}

export function isFavorite(propertyId: string): boolean {
  return getFavorites().some((x) => x.id === propertyId);
}

export function isInCompare(propertyId: string): boolean {
  return getCompareItems().some((x) => x.id === propertyId);
}

export function clearFavorites(): void {
  writeList(FAVORITES_KEY, []);
}

export function clearCompare(): void {
  writeList(COMPARE_KEY, []);
}
