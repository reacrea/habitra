import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-Bh_vY4LQ.js";
import { n as getBuyerMatchesData } from "./buyer-portal-RyOoGFCT.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/buyer/matches.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/buyer/matches.tsx?tsr-split=component";
function BuyerMatchesPage() {
	const fetchFn = useServerFn(getBuyerMatchesData);
	const query = useQuery({
		queryKey: ["buyer-matches"],
		queryFn: () => fetchFn()
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Matches recomendados"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Resultados sugeridos segun tu perfil comprador."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Buscando matches..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar matches." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 24
			}, this) : null,
			query.data && query.data.matches.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
				title: "Sin matches por ahora",
				hint: "Actualiza tu perfil para mejorar recomendaciones."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 56
			}, this) : null,
			query.data && query.data.matches.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: query.data.matches.map((m) => /* @__PURE__ */ jsxDEV("article", {
					className: "overflow-hidden rounded-2xl border border-slate-200 bg-white",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "h-40 bg-slate-100",
						children: m.imageUrl ? /* @__PURE__ */ jsxDEV("img", {
							src: m.imageUrl,
							alt: m.title,
							className: "h-full w-full object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 31
						}, this) : null
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("div", {
						className: "space-y-2 p-4",
						children: [
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-lg font-bold text-slate-900",
								children: [
									"$",
									m.price.toLocaleString("es-MX"),
									" MXN"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "font-semibold text-habitra-text",
								children: m.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-sm text-slate-600",
								children: [m.city, m.neighborhood ? `, ${m.neighborhood}` : ""]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-xs text-slate-500",
								children: [
									m.bedrooms ?? "—",
									" rec · ",
									m.bathrooms ?? "—",
									" banos"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("div", {
								className: "pt-1",
								children: /* @__PURE__ */ jsxDEV(Link, {
									to: "/properties/$slug",
									params: { slug: m.slug },
									className: "text-sm font-semibold text-emerald-700",
									children: "Ver detalle"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 15
					}, this)]
				}, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 40
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 54
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyerMatchesPage as component };
