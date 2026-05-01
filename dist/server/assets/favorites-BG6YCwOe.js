import { t as CrmEmpty } from "./CrmStates-Bh_vY4LQ.js";
import { t as PublicLayout } from "./PublicLayout-CuJgK2JB.js";
import { t as usePublicShortlists } from "./use-public-shortlists-CBF7_adV.js";
import { t as PropertyResultsGrid } from "./PropertyResultsGrid-DwIp2_LK.js";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/favorites.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/favorites.tsx?tsr-split=component";
function FavoritesPage() {
	const shortlists = usePublicShortlists();
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Favoritos"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 13
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Guarda propiedades para revisarlas despues y compartirlas."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsxDEV(Link, {
					to: "/properties",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
					children: "Explorar propiedades"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 13
				}, this), shortlists.favorites.length > 0 ? /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: () => shortlists.clearFavorites(),
					className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
					children: "Limpiar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 48
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 9
		}, this), shortlists.favorites.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "No tienes favoritos",
			hint: "Guarda propiedades desde el listado o detalle."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 46
		}, this) : /* @__PURE__ */ jsxDEV(PropertyResultsGrid, { properties: shortlists.favorites }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 143
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { FavoritesPage as component };
