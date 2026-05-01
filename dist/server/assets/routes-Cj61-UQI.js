import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-BFusiMHe.js";
import { t as PropertySearchBar } from "./PropertySearchBar-C0zcQjGI.js";
import { t as PublicLayout } from "./PublicLayout-D8ypDehu.js";
import { t as getPublicHomeData } from "./public-b2c-DzpOebdU.js";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/index.tsx?tsr-split=component";
function LandingPage() {
	const navigate = useNavigate();
	const fetchHome = useServerFn(getPublicHomeData);
	const homeQuery = useQuery({
		queryKey: ["public-home-data"],
		queryFn: () => fetchHome()
	});
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:px-6 md:py-20",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm font-semibold uppercase tracking-wide text-emerald-700",
						children: "Habitra"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "max-w-4xl text-4xl font-bold leading-tight text-habitra-text md:text-6xl",
						children: "Encuentra una propiedad que si puedes comprar."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "max-w-3xl text-lg text-slate-600",
						children: "Busca casas y departamentos con informacion clara, costos estimados y un proceso de compra mas seguro."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV(PropertySearchBar, { onSearch: (payload) => {
				navigate({
					to: payload.operation === "buy" ? "/buy" : "/rent",
					search: {
						city: payload.city,
						type: payload.type,
						minPrice: payload.minPrice,
						maxPrice: payload.maxPrice
					}
				});
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this),
			homeQuery.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando home publica..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 32
			}, this) : null,
			homeQuery.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la home publica." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 30
			}, this) : null,
			homeQuery.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
				/* @__PURE__ */ jsxDEV("section", {
					className: "grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-5",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "text-sm font-semibold text-habitra-text",
							children: "Propiedades recomendadas en venta"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV("div", {
							className: "mt-3 space-y-2 text-sm text-slate-700",
							children: homeQuery.data.featuredSale.slice(0, 4).map((p) => /* @__PURE__ */ jsxDEV("p", { children: [
								p.title,
								" - ",
								p.city
							] }, p.id, true, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-5",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "text-sm font-semibold text-habitra-text",
							children: "Propiedades recomendadas en renta"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV("div", {
							className: "mt-3 space-y-2 text-sm text-slate-700",
							children: homeQuery.data.featuredRent.slice(0, 4).map((p) => /* @__PURE__ */ jsxDEV("p", { children: [
								p.title,
								" - ",
								p.city
							] }, p.id, true, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV("section", {
					className: "rounded-2xl border border-slate-200 bg-white p-6",
					children: [/* @__PURE__ */ jsxDEV("h2", {
						className: "text-xl font-semibold text-habitra-text",
						children: "Ciudades principales"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("div", {
						className: "mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
						children: homeQuery.data.cities.map((city) => /* @__PURE__ */ jsxDEV("div", {
							className: "rounded-xl border border-slate-200 px-3 py-2 text-sm",
							children: [/* @__PURE__ */ jsxDEV("span", {
								className: "font-medium",
								children: city.city
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 21
							}, this), /* @__PURE__ */ jsxDEV("span", {
								className: "ml-2 text-slate-500",
								children: [
									"(",
									city.total,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 21
							}, this)]
						}, city.city, true, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 19
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV("section", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						"Busca propiedades",
						"Simula tu compra",
						"Compara y decide",
						"Contacta agentes",
						"Cierra con claridad",
						"Monitorea tu proceso"
					].map((step) => /* @__PURE__ */ jsxDEV("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700",
						children: step
					}, step, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 157
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 13
				}, this)
			] }, void 0, true) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { LandingPage as component };
