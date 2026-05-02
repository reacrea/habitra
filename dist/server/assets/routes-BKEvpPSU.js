import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { l as PROPERTY_TYPE_LABELS, s as OPERATION_TYPE_LABELS } from "./crm-labels-DF9xqjOX.js";
import { t as PublicLayout } from "./PublicLayout-CmtcZYaA.js";
import { t as getPublicHomeData } from "./public-b2c-C_62EE97.js";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/HomeFeaturedPropertyGrid.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/public/HomeFeaturedPropertyGrid.tsx";
function formatPrice(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function HomeFeaturedPropertyGrid({ title, description, properties, emptyTitle, emptyHint }) {
	if (properties.length === 0) return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-6",
		children: [
			/* @__PURE__ */ jsxDEV("h2", {
				className: "text-xl font-semibold text-habitra-text",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 26,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-14 text-center",
				children: [/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm font-semibold text-slate-700",
					children: emptyTitle
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 29,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 max-w-sm text-sm text-slate-500",
					children: emptyHint
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 30,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 28,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 25,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-6",
		children: [
			/* @__PURE__ */ jsxDEV("h2", {
				className: "text-xl font-semibold text-habitra-text",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: properties.map((p) => {
					const typeLabel = PROPERTY_TYPE_LABELS[p.propertyType] ?? p.propertyType;
					const opLabel = OPERATION_TYPE_LABELS[p.operationType] ?? p.operationType;
					return /* @__PURE__ */ jsxDEV(Link, {
						to: "/properties/$slug",
						params: { slug: p.slug },
						className: "group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm ring-1 ring-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600",
						children: [
							p.imageUrl ? /* @__PURE__ */ jsxDEV("img", {
								src: p.imageUrl,
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105",
								loading: "lazy"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 52,
								columnNumber: 17
							}, this) : /* @__PURE__ */ jsxDEV("div", {
								className: "absolute inset-0 bg-gradient-to-br from-slate-200 via-emerald-100/80 to-slate-300",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 59,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-900/50 to-slate-900/15",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 64,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "absolute right-2 top-2 rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm",
								children: opLabel
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 68,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "absolute inset-x-0 bottom-0 p-3 md:p-4",
								children: [
									/* @__PURE__ */ jsxDEV("p", {
										className: "text-lg font-bold text-white drop-shadow-sm md:text-xl",
										children: formatPrice(p.price)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 72,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("p", {
										className: "mt-1 line-clamp-2 text-sm font-semibold leading-snug text-white/95",
										children: p.title
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 73,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("p", {
										className: "mt-0.5 line-clamp-1 text-xs text-slate-200/95",
										children: [p.city, p.neighborhood ? ` · ${p.neighborhood}` : ""]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 74,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("p", {
										className: "mt-1.5 text-xs font-medium text-emerald-200/95",
										children: typeLabel
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 78,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ jsxDEV("p", {
										className: "mt-2 text-xs font-semibold text-white/90 underline decoration-white/40 underline-offset-2",
										children: "Ver detalle"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 79,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 71,
								columnNumber: 15
							}, this)
						]
					}, p.id, true, {
						fileName: _jsxFileName$2,
						lineNumber: 45,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 40,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 37,
		columnNumber: 5
	}, this);
}
//#endregion
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
//#region src/components/public/PropertySearchBar.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertySearchBar.tsx";
function PropertySearchBar({ onSearch, defaultOperation = "buy" }) {
	const [operation, setOperation] = useState(defaultOperation);
	const [city, setCity] = useState("");
	const [type, setType] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	return /* @__PURE__ */ jsxDEV("form", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:p-5",
		onSubmit: (e) => {
			e.preventDefault();
			onSearch({
				operation,
				city: city || void 0,
				type: type || void 0,
				minPrice: minPrice || void 0,
				maxPrice: maxPrice || void 0
			});
		},
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "grid gap-3 md:grid-cols-5",
			children: [
				/* @__PURE__ */ jsxDEV("select", {
					value: operation,
					onChange: (e) => setOperation(e.target.value),
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm",
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "buy",
						children: "Comprar"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("option", {
						value: "rent",
						children: "Rentar"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					value: city,
					onChange: (e) => setCity(e.target.value),
					placeholder: "Ciudad o zona",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					value: type,
					onChange: (e) => setType(e.target.value),
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm",
					children: [
						/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Tipo propiedad"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 58,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "CASA",
							children: "Casa"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 59,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "DEPARTAMENTO",
							children: "Departamento"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 60,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "TERRENO",
							children: "Terreno"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 61,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "OFICINA",
							children: "Oficina"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 62,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					value: minPrice,
					onChange: (e) => setMinPrice(e.target.value),
					placeholder: "Precio minimo",
					type: "number",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					value: maxPrice,
					onChange: (e) => setMaxPrice(e.target.value),
					placeholder: "Precio maximo",
					type: "number",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-sm"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 71,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 38,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "mt-3 flex justify-end",
			children: /* @__PURE__ */ jsxDEV("button", {
				className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
				children: "Buscar"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 80,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 79,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 25,
		columnNumber: 5
	}, this);
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
						lineNumber: 20,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "absolute inset-0 bg-gradient-to-br from-slate-950/82 via-emerald-950/72 to-slate-950/88",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
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
									lineNumber: 26,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("h1", {
									className: "max-w-4xl text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl",
									children: "Encuentra una propiedad que si puedes comprar."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 29,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("p", {
									className: "max-w-3xl text-lg leading-relaxed text-slate-100/90 md:text-xl",
									children: "Busca casas y departamentos con informacion clara, costos estimados y un proceso de compra mas seguro."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 13
						}, this), /* @__PURE__ */ jsxDEV(PropertySearchBar, { onSearch: (payload) => {
							navigate({
								to: "/properties",
								search: {
									operationType: payload.operation === "buy" ? "SALE" : "RENT",
									operation: payload.operation,
									city: payload.city,
									type: payload.type ?? "",
									minPrice: payload.minPrice,
									maxPrice: payload.maxPrice
								}
							});
						} }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this),
			homeQuery.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando home publica..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 32
			}, this) : null,
			homeQuery.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la home publica." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 30
			}, this) : null,
			homeQuery.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
				/* @__PURE__ */ jsxDEV(HomeFeaturedPropertyGrid, {
					title: "Propiedades en venta",
					description: "Listings publicados con mayor readiness: casas, departamentos y mas.",
					properties: homeQuery.data.featuredSale,
					emptyTitle: "Aun no hay propiedades en venta publicadas",
					emptyHint: "Cuando la inmobiliaria publique anuncios de venta, apareceran aqui."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ jsxDEV(HomeFeaturedPropertyGrid, {
					title: "Propiedades en renta",
					description: "Renta con la misma claridad: precio, zona y detalle al hacer clic.",
					properties: homeQuery.data.featuredRent,
					emptyTitle: "Aun no hay propiedades en renta publicadas",
					emptyHint: "Cuando haya anuncios de renta, los mostraremos en esta seccion."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
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
							lineNumber: 62,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 text-sm text-slate-600",
							children: "Explora inventario publicado por ciudad."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
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
											lineNumber: 72,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ jsxDEV("div", {
											className: "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-slate-900/10",
											"aria-hidden": true
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 73,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ jsxDEV("div", {
											className: "absolute inset-x-0 bottom-0 p-3 md:p-4",
											children: [/* @__PURE__ */ jsxDEV("p", {
												className: "text-base font-bold text-white drop-shadow-sm md:text-lg",
												children: entry.label
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 75,
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
												lineNumber: 76,
												columnNumber: 42
											}, this) : /* @__PURE__ */ jsxDEV("p", {
												className: "mt-0.5 text-sm text-slate-200/90",
												children: "Ver zona"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 78,
												columnNumber: 34
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 74,
											columnNumber: 23
										}, this)
									]
								}, entry.slug, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 22
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 61,
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
		lineNumber: 18,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 10
	}, this);
}
//#endregion
export { LandingPage as component };
