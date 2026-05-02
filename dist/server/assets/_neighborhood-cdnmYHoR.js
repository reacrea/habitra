import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { t as Route } from "./_neighborhood-DAMy1eXR.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PublicLayout } from "./PublicLayout-BB43cQdr.js";
import { n as getZoneNeighborhoodData } from "./zones-b2c-B0Ml6zXq.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/zones/$city/$neighborhood.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/zones/$city/$neighborhood.tsx?tsr-split=component";
function ZoneNeighborhoodPage() {
	const { city, neighborhood } = Route.useParams();
	const fetchFn = useServerFn(getZoneNeighborhoodData);
	const query = useQuery({
		queryKey: [
			"zones-neighborhood",
			city,
			neighborhood
		],
		queryFn: () => fetchFn({ data: {
			city,
			neighborhood
		} }),
		enabled: Boolean(city && neighborhood)
	});
	const cityLabel = decodeURIComponent(city);
	const neighborhoodLabel = decodeURIComponent(neighborhood);
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/zones/$city",
						params: { city },
						className: "text-sm font-semibold text-emerald-700",
						children: ["Volver a ", cityLabel]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "text-3xl font-bold text-habitra-text",
						children: [
							"Propiedades en ",
							neighborhoodLabel,
							", ",
							cityLabel
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: "Página SEO por colonia con inventario y enlaces internos."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando colonia..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 28
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la colonia." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 26
			}, this) : null,
			query.data === null && query.isFetched ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No hay inventario publicado en esta colonia." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 51
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h2", {
						className: "text-lg font-semibold text-habitra-text",
						children: "Resumen de mercado"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-2 text-sm text-slate-600",
						children: [query.data.total, " propiedades publicadas"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: [
							"Precio promedio: $",
							query.data.avgPrice.toLocaleString("es-MX"),
							" MXN"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ jsxDEV(Link, {
							to: "/properties",
							search: { city: `${cityLabel} ${neighborhoodLabel}` },
							className: "rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700",
							children: "Ver en listado general"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV(Link, {
							to: "/properties",
							search: {
								operationType: "SALE",
								city: cityLabel
							},
							className: "rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700",
							children: ["Comprar en ", cityLabel]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 13
			}, this), /* @__PURE__ */ jsxDEV("section", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: query.data.properties.map((p) => /* @__PURE__ */ jsxDEV("article", {
					className: "overflow-hidden rounded-2xl border border-slate-200 bg-white",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "h-40 bg-slate-100",
						children: p.imageUrl ? /* @__PURE__ */ jsxDEV("img", {
							src: p.imageUrl,
							alt: p.title,
							className: "h-full w-full object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 35
						}, this) : null
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 19
					}, this), /* @__PURE__ */ jsxDEV("div", {
						className: "space-y-2 p-4",
						children: [
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-lg font-bold text-slate-900",
								children: [
									"$",
									p.price.toLocaleString("es-MX"),
									" MXN"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "line-clamp-1 font-semibold text-habitra-text",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-xs text-slate-500",
								children: [
									p.operationType,
									" · ",
									p.propertyType
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ jsxDEV(Link, {
								to: "/properties/$slug",
								params: { slug: p.slug },
								className: "text-sm font-semibold text-emerald-700",
								children: "Ver propiedad"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 21
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 19
					}, this)]
				}, p.id, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 47
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 13
			}, this)] }, void 0, true) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { ZoneNeighborhoodPage as component };
