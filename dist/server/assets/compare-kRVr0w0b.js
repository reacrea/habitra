import { t as CrmEmpty } from "./CrmStates-Bh_vY4LQ.js";
import { t as PublicLayout } from "./PublicLayout-DSEFxC7X.js";
import { t as usePublicShortlists } from "./use-public-shortlists-CM3HiKnS.js";
import { Link } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/compare.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/compare.tsx?tsr-split=component";
function ComparePage() {
	const shortlists = usePublicShortlists();
	const items = shortlists.compare;
	return /* @__PURE__ */ jsxDEV(PublicLayout, { children: /* @__PURE__ */ jsxDEV("section", {
		className: "mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Comparador"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 13
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Compara hasta 4 propiedades en columnas."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsxDEV(Link, {
					to: "/properties",
					className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
					children: "Agregar mas"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 13
				}, this), items.length > 0 ? /* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: () => shortlists.clearCompare(),
					className: "rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700",
					children: "Limpiar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 33
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 9
		}, this), items.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "No hay propiedades para comparar",
			hint: "Marca 'Comparar' en el listado o detalle."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 31
		}, this) : /* @__PURE__ */ jsxDEV("div", {
			className: "overflow-auto rounded-2xl border border-slate-200 bg-white",
			children: /* @__PURE__ */ jsxDEV("table", {
				className: "min-w-[780px] w-full text-sm",
				children: [/* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", {
					className: "border-b bg-slate-50",
					children: [/* @__PURE__ */ jsxDEV("th", {
						className: "p-3 text-left font-semibold text-slate-700",
						children: "Campo"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 19
					}, this), items.map((item) => /* @__PURE__ */ jsxDEV("th", {
						className: "p-3 text-left align-top font-semibold text-habitra-text",
						children: /* @__PURE__ */ jsxDEV("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ jsxDEV(Link, {
									to: "/properties/$slug",
									params: { slug: item.slug },
									className: "hover:text-habitra-action",
									children: item.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ jsxDEV("p", {
									className: "text-xs font-normal text-slate-500",
									children: item.city
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ jsxDEV("button", {
									type: "button",
									onClick: () => shortlists.toggleCompare(item),
									className: "text-xs font-semibold text-slate-600 underline",
									children: "Quitar"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 25
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 23
						}, this)
					}, item.id, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 38
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 17
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 15
				}, this), /* @__PURE__ */ jsxDEV("tbody", { children: [
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Precio",
						values: items.map((x) => `$${x.price.toLocaleString("es-MX")} MXN`)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Operacion",
						values: items.map((x) => x.operationType)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Tipo",
						values: items.map((x) => x.propertyType)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Recamaras",
						values: items.map((x) => String(x.bedrooms ?? "—"))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Banos",
						values: items.map((x) => String(x.bathrooms ?? "—"))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Estacionamientos",
						values: items.map((x) => String(x.parkingSpaces ?? "—"))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Readiness",
						values: items.map((x) => `${x.readinessScore}`)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Colonia",
						values: items.map((x) => x.neighborhood ?? "—")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV(CompareRow, {
						label: "Inmobiliaria",
						values: items.map((x) => x.organizationName)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 17
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 15
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 136
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
function CompareRow({ label, values }) {
	return /* @__PURE__ */ jsxDEV("tr", {
		className: "border-b last:border-b-0",
		children: [/* @__PURE__ */ jsxDEV("td", {
			className: "p-3 font-medium text-slate-700",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 7
		}, this), values.map((value, index) => /* @__PURE__ */ jsxDEV("td", {
			className: "p-3 text-slate-700",
			children: value
		}, `${label}-${index}`, false, {
			fileName: _jsxFileName,
			lineNumber: 72,
			columnNumber: 37
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 70,
		columnNumber: 10
	}, this);
}
//#endregion
export { ComparePage as component };
