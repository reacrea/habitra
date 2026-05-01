import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as Route } from "./_city-DFioQQ7e.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-B4LS3d6E.js";
import { t as PublicLayout } from "./PublicLayout-CbH59SYD.js";
import { t as getZoneCityData } from "./zones-b2c-C7ASytH3.js";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/zones/$city.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/zones/$city.tsx?tsr-split=component";
function ZoneCityPage() {
	const location = useLocation();
	if (/^\/zones\/[^/]+\/[^/]+$/.test(location.pathname)) return /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 27
	}, this);
	const { city } = Route.useParams();
	const fetchFn = useServerFn(getZoneCityData);
	const query = useQuery({
		queryKey: ["zones-city", city],
		queryFn: () => fetchFn({ data: { city } }),
		enabled: Boolean(city)
	});
	const cityData = query.data;
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/zones",
						className: "text-sm font-semibold text-emerald-700",
						children: "Volver a zonas"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "text-3xl font-bold text-habitra-text",
						children: ["Propiedades en ", decodeURIComponent(city)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: "Landing SEO por ciudad con enlaces a colonias."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando zona..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 28
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la ciudad." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 26
			}, this) : null,
			cityData === null && query.isFetched ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No hay inventario publicado en esta ciudad." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 49
			}, this) : null,
			cityData ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Colonias destacadas"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3",
					children: cityData.neighborhoods.map((n) => /* @__PURE__ */ jsxDEV("article", {
						className: "rounded-xl border border-slate-100 p-4",
						children: [
							/* @__PURE__ */ jsxDEV("p", {
								className: "font-semibold text-habitra-text",
								children: n.neighborhood
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-sm text-slate-600",
								children: [n.total, " propiedades"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ jsxDEV(Link, {
								to: "/zones/$city/$neighborhood",
								params: {
									city: cityData.city,
									neighborhood: n.neighborhood
								},
								className: "mt-2 inline-block text-sm font-semibold text-emerald-700",
								children: "Ver colonia"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 21
							}, this)
						]
					}, n.neighborhood, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 50
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 13
			}, this), /* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h2", {
					className: "text-lg font-semibold text-habitra-text",
					children: "Enlaces SEO"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/buy",
							search: { city: cityData.city },
							className: "rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700",
							children: ["Comprar en ", cityData.city]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/rent",
							search: { city: cityData.city },
							className: "rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700",
							children: ["Rentar en ", cityData.city]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV(Link, {
							to: "/properties",
							search: { city: cityData.city },
							className: "rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700",
							children: "Todas las propiedades"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
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
export { ZoneCityPage as component };
