import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { t as Route } from "./buy-B2rq99xt.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-Bh_vY4LQ.js";
import { t as PropertySearchBar } from "./PropertySearchBar-DtGKqzjj.js";
import { t as PublicLayout } from "./PublicLayout-Dx6ZGp2F.js";
import { n as getPublicListings } from "./public-b2c-GY4b54Od.js";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/buy.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/buy.tsx?tsr-split=component";
function BuyPage() {
	const search = Route.useSearch();
	const navigate = useNavigate();
	const fetchListings = useServerFn(getPublicListings);
	const query = useQuery({
		queryKey: ["public-buy-listings", search],
		queryFn: () => fetchListings({ data: {
			operationType: "VENTA",
			city: search.city || void 0,
			propertyType: search.type,
			minPrice: search.minPrice ? Number(search.minPrice) : void 0,
			maxPrice: search.maxPrice ? Number(search.maxPrice) : void 0
		} })
	});
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-12 md:px-6",
		children: [
			/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Propiedades en venta"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV(PropertySearchBar, {
				defaultOperation: "buy",
				onSearch: (payload) => {
					navigate({
						to: "/buy",
						search: {
							city: payload.city,
							type: payload.type,
							minPrice: payload.minPrice,
							maxPrice: payload.maxPrice
						}
					});
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 28
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar propiedades en venta." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 26
			}, this) : null,
			query.data && query.data.properties.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
				title: "Sin propiedades disponibles",
				hint: "Ajusta filtros o intenta otra ciudad."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 61
			}, this) : null,
			query.data && query.data.properties.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: query.data.properties.map((p) => /* @__PURE__ */ jsxDEV("article", {
					className: "rounded-2xl border border-slate-200 bg-white p-4",
					children: [
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-xs font-semibold uppercase text-emerald-700",
							children: p.operationType
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("h3", {
							className: "mt-1 text-base font-semibold text-habitra-text",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 text-sm text-slate-600",
							children: [p.city, p.neighborhood ? `, ${p.neighborhood}` : ""]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-2 text-lg font-bold text-slate-900",
							children: [
								"$",
								p.price.toLocaleString("es-MX"),
								" MXN"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 17
						}, this)
					]
				}, p.id, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 45
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 59
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyPage as component };
