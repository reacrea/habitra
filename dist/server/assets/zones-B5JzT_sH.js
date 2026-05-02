import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PublicLayout } from "./PublicLayout-CmtcZYaA.js";
import { r as getZonesOverview } from "./zones-b2c-kYJhE_CH.js";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/zones.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/zones.tsx?tsr-split=component";
function ZonesPage() {
	const location = useLocation();
	if (/^\/zones\/.+/.test(location.pathname)) return /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 27
	}, this);
	const fetchFn = useServerFn(getZonesOverview);
	const query = useQuery({
		queryKey: ["zones-overview"],
		queryFn: () => fetchFn()
	});
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Zonas inmobiliarias"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Explora ciudades con inventario activo y enlaces SEO por zona."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando zonas..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 28
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar las zonas." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 26
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: query.data.cities.map((zone) => /* @__PURE__ */ jsxDEV("article", {
					className: "rounded-2xl border border-slate-200 bg-white p-5",
					children: [
						/* @__PURE__ */ jsxDEV("h2", {
							className: "text-lg font-semibold text-habitra-text",
							children: zone.city
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 text-sm text-slate-600",
							children: [zone.total, " propiedades publicadas"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-sm text-slate-600",
							children: [
								"Precio promedio: $",
								zone.avgPrice.toLocaleString("es-MX"),
								" MXN"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mt-3 flex gap-3 text-sm",
							children: [/* @__PURE__ */ jsxDEV(Link, {
								to: "/zones/$city",
								params: { city: zone.city },
								className: "font-semibold text-emerald-700",
								children: "Ver zonas"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 19
							}, this), /* @__PURE__ */ jsxDEV(Link, {
								to: "/properties",
								search: { city: zone.city },
								className: "font-semibold text-slate-700",
								children: "Ver propiedades"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 17
						}, this)
					]
				}, zone.city, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 44
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 23
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { ZonesPage as component };
