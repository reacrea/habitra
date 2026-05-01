import { t as Route } from "./properties-DwadpL1R.js";
import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-D2sX26EK.js";
import { t as PublicLayout } from "./PublicLayout-7btj6VFv.js";
import { n as getPublicListings } from "./public-b2c-C0DGLeCh.js";
import { t as PropertyPublicCard } from "./PropertyPublicCard-DHkAMi54.js";
import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/PropertyFilters.tsx
var _jsxFileName$3 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyFilters.tsx";
function PropertyFilters({ value, onChange, onApply, className }) {
	return /* @__PURE__ */ jsxDEV("aside", {
		className: `rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className ?? ""}`,
		children: [/* @__PURE__ */ jsxDEV("h3", {
			className: "mb-3 text-sm font-semibold text-habitra-text",
			children: "Filtros"
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 25,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ jsxDEV("select", {
					className: "w-full rounded-xl border px-3 py-2 text-sm",
					value: value.operation,
					onChange: (e) => onChange({
						...value,
						operation: e.target.value
					}),
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "buy",
						children: "Comprar"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 28,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("option", {
						value: "rent",
						children: "Rentar"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 29,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("input", {
					className: "w-full rounded-xl border px-3 py-2 text-sm",
					placeholder: "Ciudad o colonia",
					value: value.city,
					onChange: (e) => onChange({
						...value,
						city: e.target.value
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					className: "w-full rounded-xl border px-3 py-2 text-sm",
					value: value.type,
					onChange: (e) => onChange({
						...value,
						type: e.target.value
					}),
					children: [
						/* @__PURE__ */ jsxDEV("option", {
							value: "",
							children: "Tipo propiedad"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 33,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "CASA",
							children: "Casa"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 34,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "DEPARTAMENTO",
							children: "Departamento"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 35,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "TERRENO",
							children: "Terreno"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 36,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "OFICINA",
							children: "Oficina"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 37,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "LOCAL_COMERCIAL",
							children: "Local comercial"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 38,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 32,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ jsxDEV("input", {
						type: "number",
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Min precio",
						value: value.minPrice,
						onChange: (e) => onChange({
							...value,
							minPrice: e.target.value
						})
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 41,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("input", {
						type: "number",
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Max precio",
						value: value.maxPrice,
						onChange: (e) => onChange({
							...value,
							maxPrice: e.target.value
						})
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ jsxDEV("input", {
						type: "number",
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Recamaras",
						value: value.bedrooms,
						onChange: (e) => onChange({
							...value,
							bedrooms: e.target.value
						})
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 45,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("input", {
						type: "number",
						className: "rounded-xl border px-3 py-2 text-sm",
						placeholder: "Banos",
						value: value.bathrooms,
						onChange: (e) => onChange({
							...value,
							bathrooms: e.target.value
						})
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 46,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("select", {
					className: "w-full rounded-xl border px-3 py-2 text-sm",
					value: value.sort,
					onChange: (e) => onChange({
						...value,
						sort: e.target.value
					}),
					children: [
						/* @__PURE__ */ jsxDEV("option", {
							value: "relevance",
							children: "Relevancia"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 49,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "price_asc",
							children: "Menor precio"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 50,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "price_desc",
							children: "Mayor precio"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "recent",
							children: "Mas recientes"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 52,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("option", {
							value: "readiness_desc",
							children: "Mayor readiness"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 53,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 48,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					type: "button",
					className: "w-full rounded-xl bg-habitra-action px-3 py-2 text-sm font-semibold text-white",
					onClick: onApply,
					children: "Aplicar filtros"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 26,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyMapView.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyMapView.tsx";
function PropertyMapView({ properties }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "text-sm font-semibold text-habitra-text",
					children: "Mapa (mock)"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 7,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("span", {
					className: "text-xs text-slate-500",
					children: [properties.length, " pines simulados"]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 8,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "relative h-[480px] overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-slate-100",
				children: [/* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_#d1fae5_1px,_transparent_1px)] [background-size:22px_22px] opacity-40" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 11,
					columnNumber: 9
				}, this), properties.slice(0, 18).map((property, index) => /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					className: "absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-habitra-action px-2 py-1 text-[10px] font-semibold text-white shadow",
					style: {
						left: `${8 + index * 13 % 84}%`,
						top: `${12 + index * 19 % 76}%`
					},
					title: `${property.title} - ${property.city}`,
					children: [
						"$",
						Math.round(property.price / 1e3),
						"k"
					]
				}, property.id, true, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-3 text-xs text-slate-500",
				children: "Vista de mapa mock para validar UX; pines y geolocalizacion real se integra en siguiente iteracion."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyResultsGrid.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyResultsGrid.tsx";
function PropertyResultsGrid({ properties }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		children: properties.map((property) => /* @__PURE__ */ jsxDEV(PropertyPublicCard, { property }, property.id, false, {
			fileName: _jsxFileName$1,
			lineNumber: 9,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/properties.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/properties.tsx?tsr-split=component";
function PublicPropertiesPage() {
	const search = Route.useSearch();
	const navigate = useNavigate();
	const fetchListings = useServerFn(getPublicListings);
	const [filters, setFilters] = useState({
		operation: search.operation ?? "buy",
		city: search.city ?? "",
		type: search.type ?? "",
		minPrice: search.minPrice ?? "",
		maxPrice: search.maxPrice ?? "",
		bedrooms: search.bedrooms ?? "",
		bathrooms: search.bathrooms ?? "",
		sort: search.sort ?? "relevance"
	});
	const view = search.view ?? "list";
	const parsedFilters = useMemo(() => ({
		operationType: filters.operation === "rent" ? "RENTA" : "VENTA",
		city: filters.city || void 0,
		propertyType: filters.type,
		minPrice: filters.minPrice ? Number(filters.minPrice) : void 0,
		maxPrice: filters.maxPrice ? Number(filters.maxPrice) : void 0,
		bedrooms: filters.bedrooms ? Number(filters.bedrooms) : void 0,
		bathrooms: filters.bathrooms ? Number(filters.bathrooms) : void 0,
		sort: filters.sort,
		limit: 30
	}), [filters]);
	const query = useQuery({
		queryKey: ["public-properties", parsedFilters],
		queryFn: () => fetchListings({ data: parsedFilters })
	});
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Propiedades"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 13
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Explora propiedades con filtros, ordenamiento y vista lista/mapa."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "inline-flex rounded-xl border border-slate-200 bg-white p-1",
				children: [/* @__PURE__ */ jsxDEV("button", {
					type: "button",
					className: `rounded-lg px-3 py-2 text-xs font-semibold ${view === "list" ? "bg-habitra-action text-white" : "text-slate-700"}`,
					onClick: () => void navigate({
						to: "/properties",
						search: {
							...search,
							view: "list"
						}
					}),
					children: "Lista"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					className: `rounded-lg px-3 py-2 text-xs font-semibold ${view === "map" ? "bg-habitra-action text-white" : "text-slate-700"}`,
					onClick: () => void navigate({
						to: "/properties",
						search: {
							...search,
							view: "map"
						}
					}),
					children: "Mapa"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 9
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "grid gap-6 lg:grid-cols-[280px,1fr]",
			children: [/* @__PURE__ */ jsxDEV(PropertyFilters, {
				value: filters,
				onChange: setFilters,
				onApply: () => void navigate({
					to: "/properties",
					search: {
						operation: filters.operation,
						city: filters.city || void 0,
						type: filters.type || void 0,
						minPrice: filters.minPrice || void 0,
						maxPrice: filters.maxPrice || void 0,
						bedrooms: filters.bedrooms || void 0,
						bathrooms: filters.bathrooms || void 0,
						sort: filters.sort,
						view
					}
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "space-y-4",
				children: [
					query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando propiedades..." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 32
					}, this) : null,
					query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar resultados." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 30
					}, this) : null,
					query.data && query.data.properties.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
						title: "Sin coincidencias",
						hint: "Prueba con un rango de precio o ciudad diferente."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 65
					}, this) : null,
					query.data && query.data.properties.length > 0 ? view === "map" ? /* @__PURE__ */ jsxDEV(PropertyMapView, { properties: query.data.properties }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 80
					}, this) : /* @__PURE__ */ jsxDEV(PropertyResultsGrid, { properties: query.data.properties }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 137
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 75,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 10
	}, this);
}
//#endregion
export { PublicPropertiesPage as component };
