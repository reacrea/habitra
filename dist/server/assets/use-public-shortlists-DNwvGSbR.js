import { useEffect, useState } from "react";
//#region src/services/public-shortlists.ts
var FAVORITES_KEY = "habitra:b2c:favorites:v1";
var COMPARE_KEY = "habitra:b2c:compare:v1";
var MAX_COMPARE_ITEMS = 4;
var SHORTLISTS_EVENT = "habitra-shortlists-changed";
function readList(key) {
	if (typeof window === "undefined") return [];
	const raw = window.localStorage.getItem(key);
	if (!raw) return [];
	try {
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed;
	} catch {
		return [];
	}
}
function writeList(key, value) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(key, JSON.stringify(value));
	window.dispatchEvent(new Event(SHORTLISTS_EVENT));
}
function toggleItem(key, property, maxItems) {
	const current = readList(key);
	const next = current.some((x) => x.id === property.id) ? current.filter((x) => x.id !== property.id) : maxItems ? [property, ...current].slice(0, maxItems) : [property, ...current];
	writeList(key, next);
	return next;
}
function getFavorites() {
	return readList(FAVORITES_KEY);
}
function getCompareItems() {
	return readList(COMPARE_KEY);
}
function toggleFavorite(property) {
	return toggleItem(FAVORITES_KEY, property);
}
function toggleCompare(property) {
	return toggleItem(COMPARE_KEY, property, MAX_COMPARE_ITEMS);
}
function isFavorite(propertyId) {
	return getFavorites().some((x) => x.id === propertyId);
}
function isInCompare(propertyId) {
	return getCompareItems().some((x) => x.id === propertyId);
}
function clearFavorites() {
	writeList(FAVORITES_KEY, []);
}
function clearCompare() {
	writeList(COMPARE_KEY, []);
}
//#endregion
//#region src/hooks/use-public-shortlists.ts
function usePublicShortlists() {
	const [state, setState] = useState({
		favorites: [],
		compare: []
	});
	useEffect(() => {
		const refresh = () => {
			setState({
				favorites: getFavorites(),
				compare: getCompareItems()
			});
		};
		refresh();
		window.addEventListener("storage", refresh);
		window.addEventListener(SHORTLISTS_EVENT, refresh);
		return () => {
			window.removeEventListener("storage", refresh);
			window.removeEventListener(SHORTLISTS_EVENT, refresh);
		};
	}, []);
	return {
		favorites: state.favorites,
		compare: state.compare,
		favoritesCount: state.favorites.length,
		compareCount: state.compare.length,
		isFavorite,
		isInCompare,
		toggleFavorite,
		toggleCompare,
		clearFavorites,
		clearCompare
	};
}
//#endregion
export { usePublicShortlists as t };
