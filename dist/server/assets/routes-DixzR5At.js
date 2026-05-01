import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-Bh_vY4LQ.js";
import { t as PropertySearchBar } from "./PropertySearchBar-DtGKqzjj.js";
import { t as PublicLayout } from "./PublicLayout-DSEFxC7X.js";
import { t as getPublicHomeData } from "./public-b2c-GY4b54Od.js";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/constants/home-featured-cities.ts
var HOME_FEATURED_CITIES = [
	{
		slug: "guadalajara",
		label: "Guadalajara",
		imageUrl: "https://images.unsplash.com/photo-1599809275677-bbef26eff999?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: ["Guadalajara", "guadalajara"]
	},
	{
		slug: "zapopan",
		label: "Zapopan",
		imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: ["Zapopan", "zapopan"]
	},
	{
		slug: "cdmx",
		label: "CDMX",
		imageUrl: "https://images.unsplash.com/photo-1518105779142-e6cfa90f045e?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: [
			"CDMX",
			"Cdmx",
			"Ciudad de Mexico",
			"Ciudad de México"
		]
	},
	{
		slug: "monterrey",
		label: "Monterrey",
		imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: ["Monterrey", "monterrey"]
	},
	{
		slug: "queretaro",
		label: "Querétaro",
		imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: [
			"Queretaro",
			"Querétaro",
			"queretaro"
		]
	},
	{
		slug: "merida",
		label: "Mérida",
		imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: [
			"Merida",
			"Mérida",
			"merida"
		]
	},
	{
		slug: "puebla",
		label: "Puebla",
		imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=720&q=80",
		dbMatchVariants: ["Puebla", "puebla"]
	}
];
function totalForFeaturedCity(rows, variants) {
	const set = new Set(variants.map((v) => v.trim().toLowerCase()));
	for (const row of rows) if (set.has(row.city.trim().toLowerCase())) return row.total;
}
//#endregion
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
		className: "mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 md:py-12",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "relative overflow-hidden rounded-3xl border border-slate-200/60 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)]",
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
						style: { backgroundImage: "url(/images/hero/hero-banner.svg)" },
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "absolute inset-0 bg-gradient-to-br from-slate-950/82 via-emerald-950/72 to-slate-950/88",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "relative z-10 flex flex-col gap-8 px-5 py-12 sm:px-8 sm:py-14 md:gap-10 md:py-16 lg:py-20",
						children: [/* @__PURE__ */ jsxDEV("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsxDEV("p", {
									className: "text-sm font-semibold uppercase tracking-wide text-emerald-300/95",
									children: "Habitra"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 25,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("h1", {
									className: "max-w-4xl text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl",
									children: "Encuentra una propiedad que si puedes comprar."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 28,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("p", {
									className: "max-w-3xl text-lg leading-relaxed text-slate-100/90 md:text-xl",
									children: "Busca casas y departamentos con informacion clara, costos estimados y un proceso de compra mas seguro."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 13
						}, this), /* @__PURE__ */ jsxDEV(PropertySearchBar, { onSearch: (payload) => {
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
							lineNumber: 37,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this),
			homeQuery.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando home publica..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 32
			}, this) : null,
			homeQuery.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la home publica." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
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
							lineNumber: 58,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV("div", {
							className: "mt-3 space-y-2 text-sm text-slate-700",
							children: homeQuery.data.featuredSale.slice(0, 4).map((p) => /* @__PURE__ */ jsxDEV("p", { children: [
								p.title,
								" - ",
								p.city
							] }, p.id, true, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-5",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "text-sm font-semibold text-habitra-text",
							children: "Propiedades recomendadas en renta"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV("div", {
							className: "mt-3 space-y-2 text-sm text-slate-700",
							children: homeQuery.data.featuredRent.slice(0, 4).map((p) => /* @__PURE__ */ jsxDEV("p", { children: [
								p.title,
								" - ",
								p.city
							] }, p.id, true, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV("section", {
					className: "rounded-2xl border border-slate-200 bg-white p-6",
					children: [
						/* @__PURE__ */ jsxDEV("h2", {
							className: "text-xl font-semibold text-habitra-text",
							children: "Ciudades principales"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 text-sm text-slate-600",
							children: "Explora inventario publicado por ciudad."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
							children: HOME_FEATURED_CITIES.map((entry) => {
								const total = totalForFeaturedCity(homeQuery.data.cities, entry.dbMatchVariants);
								return /* @__PURE__ */ jsxDEV(Link, {
									to: "/zones/$city",
									params: { city: entry.slug },
									className: "group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm ring-1 ring-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600",
									children: [
										/* @__PURE__ */ jsxDEV("img", {
											src: entry.imageUrl,
											alt: "",
											className: "absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105",
											loading: "lazy"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 94,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ jsxDEV("div", {
											className: "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-slate-900/10",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 95,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ jsxDEV("div", {
											className: "absolute inset-x-0 bottom-0 p-3 md:p-4",
											children: [/* @__PURE__ */ jsxDEV("p", {
												className: "text-base font-bold text-white drop-shadow-sm md:text-lg",
												children: entry.label
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 97,
												columnNumber: 25
											}, this), total != null ? /* @__PURE__ */ jsxDEV("p", {
												className: "mt-0.5 text-sm font-medium text-emerald-200/95",
												children: [
													total,
													" ",
													total === 1 ? "propiedad" : "propiedades"
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 98,
												columnNumber: 42
											}, this) : /* @__PURE__ */ jsxDEV("p", {
												className: "mt-0.5 text-sm text-slate-200/90",
												children: "Ver zona"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 100,
												columnNumber: 34
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 96,
											columnNumber: 23
										}, this)
									]
								}, entry.slug, true, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 22
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
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
						lineNumber: 108,
						columnNumber: 157
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 13
				}, this)
			] }, void 0, true) : null
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
export { LandingPage as component };
