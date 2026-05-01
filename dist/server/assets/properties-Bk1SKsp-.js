import { t as useServerFn } from "./useServerFn-DUucHiwW.js";
import { t as PageHeader } from "./PageHeader-fKJQFkAH.js";
import { c as PROPERTY_STATUS_LABELS, l as PROPERTY_TYPE_LABELS, s as OPERATION_TYPE_LABELS } from "./crm-labels-D8Q8XEcK.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { r as listProperties } from "./properties-crud-Dvvajmy-.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/properties/PropertiesTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/properties/PropertiesTable.tsx";
function formatMoney(value) {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function PropertiesTable({ properties }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Titulo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 16,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Tipo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Operacion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 18,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Precio"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 19,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 20,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Readiness"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Accion"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 15,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: properties.map((p) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: p.title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 28,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: PROPERTY_TYPE_LABELS[p.propertyType] ?? p.propertyType
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 29,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: OPERATION_TYPE_LABELS[p.operationType] ?? p.operationType
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 30,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: formatMoney(p.price)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 31,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: PROPERTY_STATUS_LABELS[p.status] ?? p.status
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 32,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3",
							children: [p.readinessScore, "%"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 33,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/app/properties/$propertyId",
								params: { propertyId: p.id },
								className: "font-semibold text-emerald-700",
								children: "Ver detalle"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 35,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 34,
							columnNumber: 15
						}, this)
					]
				}, p.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 27,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/properties/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx?tsr-split=component";
function PropertiesPage() {
	const fetchProperties = useServerFn(listProperties);
	const query = useQuery({
		queryKey: ["crm-properties"],
		queryFn: () => fetchProperties()
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Propiedades",
			description: "Inventario con readiness operativo."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar las propiedades." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 24
		}, this) : null,
		query.data && query.data.properties.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin propiedades",
			hint: "Corre el seed o vincula propiedades nuevas."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 59
		}, this) : null,
		query.data && query.data.properties.length > 0 ? /* @__PURE__ */ jsxDEV(PropertiesTable, { properties: query.data.properties }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 57
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
//#endregion
export { PropertiesPage as component };
