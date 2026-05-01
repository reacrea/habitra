import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { t as Route } from "./_slug-DcoK-8Nv.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-D2sX26EK.js";
import { t as PublicLayout } from "./PublicLayout-Cr82Utv3.js";
import { i as getPublicSimilarProperties, r as getPublicPropertyBySlug } from "./public-b2c-C0DGLeCh.js";
import { t as usePublicShortlists } from "./use-public-shortlists-DNwvGSbR.js";
import { t as PropertyPublicCard } from "./PropertyPublicCard-CTTr-GSw.js";
import { t as MortgageCalculatorWidget } from "./MortgageCalculatorWidget-htsZLB7-.js";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/PropertyAgentContactCard.tsx
var _jsxFileName$4 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyAgentContactCard.tsx";
function PropertyAgentContactCard({ agent }) {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Agente"
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 flex items-center gap-3",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "h-12 w-12 overflow-hidden rounded-full bg-slate-100",
					children: agent.image ? /* @__PURE__ */ jsxDEV("img", {
						src: agent.image,
						alt: agent.name,
						className: "h-full w-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 18,
						columnNumber: 13
					}, this) : null
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 16,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "font-semibold text-habitra-text",
					children: agent.name
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 22,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "text-xs text-slate-500",
					children: agent.organizationName
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 23,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 21,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 space-y-2 text-sm text-slate-700",
				children: [agent.phone ? /* @__PURE__ */ jsxDEV("p", { children: ["Tel: ", agent.phone] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 27,
					columnNumber: 24
				}, this) : null, agent.email ? /* @__PURE__ */ jsxDEV("p", { children: ["Email: ", agent.email] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 28,
					columnNumber: 24
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ jsxDEV("button", {
					className: "rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white",
					children: "Contactar"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 31,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("button", {
					className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
					children: "Agendar visita"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 34,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 30,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyDocumentClarity.tsx
var _jsxFileName$3 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyDocumentClarity.tsx";
var LABELS = {
	ESCRITURA: "Escritura",
	PREDIAL: "Predial",
	AGUA: "Agua",
	LIBERTAD_GRAVAMEN: "Libertad de gravamen"
};
function PropertyDocumentClarity({ score, items }) {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [
			/* @__PURE__ */ jsxDEV("h3", {
				className: "text-lg font-semibold text-habitra-text",
				children: "Claridad documental"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Resumen publico sin exponer archivos privados."
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-3 flex items-center gap-3",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "h-2 w-full rounded-full bg-slate-100",
					children: /* @__PURE__ */ jsxDEV("div", {
						className: "h-2 rounded-full bg-emerald-500",
						style: { width: `${score}%` }
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 23,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 22,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("span", {
					className: "text-sm font-semibold text-habitra-text",
					children: [score, "%"]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 25,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("ul", {
				className: "mt-4 space-y-2 text-sm",
				children: items.map((item) => /* @__PURE__ */ jsxDEV("li", {
					className: "flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2",
					children: [/* @__PURE__ */ jsxDEV("span", { children: LABELS[item.type] }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 30,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV("span", {
						className: `text-xs font-semibold ${item.available ? "text-emerald-700" : "text-slate-500"}`,
						children: item.available ? "Disponible" : "Pendiente"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 31,
						columnNumber: 13
					}, this)]
				}, item.type, true, {
					fileName: _jsxFileName$3,
					lineNumber: 29,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 27,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyGallery.tsx
var _jsxFileName$2 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyGallery.tsx";
function PropertyGallery({ images, title }) {
	const safeImages = useMemo(() => images.length > 0 ? images : [{
		id: "fallback",
		url: "",
		alt: "Sin imagen"
	}], [images]);
	const [activeId, setActiveId] = useState(safeImages[0].id);
	const active = safeImages.find((img) => img.id === activeId) ?? safeImages[0];
	return /* @__PURE__ */ jsxDEV("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-[480px]",
			children: active.url ? /* @__PURE__ */ jsxDEV("img", {
				src: active.url,
				alt: active.alt ?? title,
				className: "h-full w-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 21,
				columnNumber: 11
			}, this) : /* @__PURE__ */ jsxDEV("div", {
				className: "flex h-full items-center justify-center text-sm text-slate-500",
				children: "Sin imagen disponible"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 23,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 19,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "grid grid-cols-4 gap-2 md:grid-cols-6",
			children: safeImages.slice(0, 12).map((img) => /* @__PURE__ */ jsxDEV("button", {
				type: "button",
				onClick: () => setActiveId(img.id),
				className: `overflow-hidden rounded-lg border ${img.id === active.id ? "border-emerald-500" : "border-slate-200"}`,
				children: img.url ? /* @__PURE__ */ jsxDEV("img", {
					src: img.url,
					alt: img.alt ?? title,
					className: "h-16 w-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 37,
					columnNumber: 15
				}, this) : /* @__PURE__ */ jsxDEV("div", { className: "h-16 bg-slate-100" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 39,
					columnNumber: 15
				}, this)
			}, img.id, false, {
				fileName: _jsxFileName$2,
				lineNumber: 30,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 28,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/components/public/PropertyTimelinePreview.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyTimelinePreview.tsx";
function PropertyTimelinePreview({ timeline }) {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "rounded-2xl border border-slate-200 bg-white p-5",
		children: [/* @__PURE__ */ jsxDEV("h3", {
			className: "text-lg font-semibold text-habitra-text",
			children: "Timeline estimado"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 8,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("ol", {
			className: "mt-4 space-y-3",
			children: timeline.map((step, index) => /* @__PURE__ */ jsxDEV("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white",
					children: index + 1
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 12,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm font-semibold text-habitra-text",
					children: step.title
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 16,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-slate-600",
					children: step.description
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 15,
					columnNumber: 13
				}, this)]
			}, step.id, true, {
				fileName: _jsxFileName$1,
				lineNumber: 11,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 9,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/properties/$slug.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/properties/$slug.tsx?tsr-split=component";
function PublicPropertyDetailPage() {
	const { slug } = Route.useParams();
	const fetchDetail = useServerFn(getPublicPropertyBySlug);
	const fetchSimilar = useServerFn(getPublicSimilarProperties);
	const shortlists = usePublicShortlists();
	const detailQuery = useQuery({
		queryKey: ["public-property-detail", slug],
		queryFn: () => fetchDetail({ data: { slug } }),
		enabled: Boolean(slug)
	});
	const similarQuery = useQuery({
		queryKey: ["public-property-similar", slug],
		queryFn: () => fetchSimilar({ data: { slug } }),
		enabled: Boolean(slug)
	});
	if (detailQuery.isPending) return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl px-4 py-10 md:px-6",
		children: /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando detalle de propiedad..." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 12
	}, this);
	if (detailQuery.isError || !detailQuery.data) return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl px-4 py-10 md:px-6",
		children: /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la propiedad." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 12
	}, this);
	const { property, estimatedTimeline } = detailQuery.data;
	const cardProperty = {
		id: property.id,
		slug: property.slug,
		title: property.title,
		operationType: property.operationType,
		propertyType: property.propertyType,
		price: property.price,
		city: property.city,
		neighborhood: property.neighborhood,
		bedrooms: property.bedrooms,
		bathrooms: property.bathrooms,
		parkingSpaces: property.parkingSpaces,
		readinessScore: property.readinessScore,
		imageUrl: property.imageUrl,
		organizationName: property.organizationName
	};
	const favorite = shortlists.isFavorite(property.id);
	const inCompare = shortlists.isInCompare(property.id);
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: [/* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsxDEV(Link, {
						to: "/properties",
						className: "text-sm font-semibold text-emerald-700",
						children: "Volver a propiedades"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-xs font-semibold uppercase text-emerald-700",
						children: property.operationType
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("h1", {
						className: "text-3xl font-bold text-habitra-text md:text-4xl",
						children: property.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-sm text-slate-600",
						children: [property.city, property.neighborhood ? `, ${property.neighborhood}` : ""]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "text-2xl font-bold text-slate-900",
						children: [
							"$",
							property.price.toLocaleString("es-MX"),
							" MXN"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV(PropertyGallery, {
				images: property.images,
				title: property.title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-6 lg:grid-cols-[1fr,320px]",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsxDEV("section", {
							className: "rounded-2xl border border-slate-200 bg-white p-5",
							children: [
								/* @__PURE__ */ jsxDEV("h3", {
									className: "text-lg font-semibold text-habitra-text",
									children: "Caracteristicas"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700",
									children: [
										/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.bedrooms ?? "—" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 20
										}, this), " recamaras"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.bathrooms ?? "—" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 101,
											columnNumber: 20
										}, this), " banos"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 101,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.parkingSpaces ?? "—" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 102,
											columnNumber: 20
										}, this), " estacionamientos"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 102,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.landArea ?? "—" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 103,
											columnNumber: 20
										}, this), " m2 terreno"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 103,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.constructionArea ?? "—" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 104,
											columnNumber: 20
										}, this), " m2 construccion"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 104,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ jsxDEV("p", { children: [/* @__PURE__ */ jsxDEV("strong", { children: property.age ?? "—" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 105,
											columnNumber: 20
										}, this), " anos antiguedad"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 105,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("p", {
									className: "mt-4 text-sm text-slate-700",
									children: property.fullDescription ?? property.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(PropertyDocumentClarity, {
							score: property.documentClarityScore,
							items: property.documentClarity
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(PropertyTimelinePreview, { timeline: estimatedTimeline }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV(MortgageCalculatorWidget, {
							compact: true,
							defaultPrice: property.price,
							title: "Simulador rapido para esta propiedad"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("section", {
							className: "rounded-2xl border border-slate-200 bg-white p-5",
							children: [
								/* @__PURE__ */ jsxDEV("h3", {
									className: "text-lg font-semibold text-habitra-text",
									children: "Propiedades similares"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 15
								}, this),
								similarQuery.isPending ? /* @__PURE__ */ jsxDEV("p", {
									className: "mt-3 text-sm text-slate-600",
									children: "Cargando similares..."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 41
								}, this) : null,
								similarQuery.data && similarQuery.data.similar.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
									className: "mt-4 grid gap-4 md:grid-cols-2",
									children: similarQuery.data.similar.map((item) => /* @__PURE__ */ jsxDEV(PropertyPublicCard, { property: item }, item.id, false, {
										fileName: _jsxFileName,
										lineNumber: 118,
										columnNumber: 58
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 76
								}, this) : null
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "space-y-4 lg:sticky lg:top-24 lg:self-start",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-5",
						children: [/* @__PURE__ */ jsxDEV("h3", {
							className: "text-lg font-semibold text-habitra-text",
							children: "Acciones"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("div", {
							className: "mt-4 grid gap-2",
							children: [
								/* @__PURE__ */ jsxDEV("button", {
									className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
									children: "Contactar agente"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ jsxDEV("button", {
									className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
									children: "Agendar visita"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ jsxDEV(Link, {
									to: "/mortgage-calculator",
									className: "rounded-xl border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700",
									children: "Simular compra"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ jsxDEV("button", {
									className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700",
									children: "Iniciar proceso"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ jsxDEV("button", {
									type: "button",
									onClick: () => shortlists.toggleFavorite(cardProperty),
									className: `rounded-xl border px-4 py-2 text-sm font-semibold ${favorite ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-700"}`,
									children: favorite ? "En favoritos" : "Guardar favorito"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ jsxDEV("button", {
									type: "button",
									onClick: () => shortlists.toggleCompare(cardProperty),
									className: `rounded-xl border px-4 py-2 text-sm font-semibold ${inCompare ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700"}`,
									children: inCompare ? "En comparador" : "Agregar a comparar"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV(PropertyAgentContactCard, { agent: property.agent }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 7
	}, this), /* @__PURE__ */ jsxDEV("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] lg:hidden",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto flex max-w-7xl gap-2",
			children: [
				/* @__PURE__ */ jsxDEV("button", {
					className: "flex-1 rounded-xl bg-habitra-action px-3 py-2 text-sm font-semibold text-white",
					children: "Contactar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					className: "flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700",
					children: "Visitar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV(Link, {
					to: "/mortgage-calculator",
					className: "flex-1 rounded-xl border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700",
					children: "Simular"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 152,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 10
	}, this);
}
//#endregion
export { PublicPropertyDetailPage as component };
