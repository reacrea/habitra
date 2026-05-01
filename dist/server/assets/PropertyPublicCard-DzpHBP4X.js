import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/public/PropertyPublicCard.tsx
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/components/public/PropertyPublicCard.tsx";
function formatPrice(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function PropertyPublicCard({ property }) {
	return /* @__PURE__ */ jsxDEV("article", {
		className: "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "h-44 w-full bg-slate-100",
			children: property.imageUrl ? /* @__PURE__ */ jsxDEV("img", {
				src: property.imageUrl,
				alt: property.title,
				className: "h-full w-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 11
			}, this) : /* @__PURE__ */ jsxDEV("div", {
				className: "flex h-full items-center justify-center text-xs text-slate-500",
				children: "Sin imagen"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "space-y-2 p-4",
			children: [
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsxDEV("p", {
						className: "text-lg font-bold text-slate-900",
						children: formatPrice(property.price)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("span", {
						className: "rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700",
						children: ["Readiness ", property.readinessScore]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "line-clamp-1 text-base font-semibold text-habitra-text",
					children: property.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-sm text-slate-600",
					children: [property.city, property.neighborhood ? `, ${property.neighborhood}` : ""]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-xs text-slate-500",
					children: [
						property.bedrooms ?? "—",
						" rec · ",
						property.bathrooms ?? "—",
						" banos · ",
						property.parkingSpaces ?? "—",
						" est."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "flex items-center gap-2 pt-1",
					children: [/* @__PURE__ */ jsxDEV(Link, {
						to: "/properties/$slug",
						params: { slug: property.slug },
						className: "rounded-lg bg-habitra-action px-3 py-2 text-xs font-semibold text-white",
						children: "Ver propiedad"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this), /* @__PURE__ */ jsxDEV("button", {
						className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
						children: "Simular compra"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
//#endregion
export { PropertyPublicCard as t };
