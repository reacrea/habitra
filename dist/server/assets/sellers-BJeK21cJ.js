import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-D2sX26EK.js";
import { t as PageHeader } from "./PageHeader-D-w7R0bW.js";
import { r as listSellers } from "./sellers-crud-CAfAMdiP.js";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/sellers/SellersTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/sellers/SellersTable.tsx";
function formatMoney(value) {
	if (value === null || Number.isNaN(value)) return "—";
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN",
		maximumFractionDigits: 0
	}).format(value);
}
function SellersTable({ sellers }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: /* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 24,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Contacto"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Precio esperado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Urgencia"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 27,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Acciones"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 28,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 23,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 22,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: sellers.map((seller) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: seller.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 34,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "max-w-[220px] truncate px-4 py-3 text-slate-600",
							children: [seller.email, seller.phone].filter(Boolean).join(" · ") || "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 35,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: formatMoney(seller.expectedPrice)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 38,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: seller.urgency ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 39,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 text-right",
							children: /* @__PURE__ */ jsxDEV(Link, {
								to: "/app/sellers/$sellerId",
								params: { sellerId: seller.id },
								className: "font-semibold text-emerald-700 hover:text-emerald-800",
								children: "Editar"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 41,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 40,
							columnNumber: 15
						}, this)
					]
				}, seller.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 33,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 31,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 21,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/routes/app/sellers/index.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx?tsr-split=component";
function SellersIndexPage() {
	const fetchSellers = useServerFn(listSellers);
	const query = useQuery({
		queryKey: ["crm-sellers"],
		queryFn: () => fetchSellers()
	});
	return /* @__PURE__ */ jsxDEV("div", { children: [
		/* @__PURE__ */ jsxDEV(PageHeader, {
			title: "Vendedores",
			description: "Propietarios que buscan colocar su inmueble.",
			actions: /* @__PURE__ */ jsxDEV(Link, {
				to: "/app/sellers/new",
				className: "inline-flex rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600",
				children: "Nuevo vendedor"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 106
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los vendedores." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 24
		}, this) : null,
		query.data && query.data.sellers.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin vendedores",
			hint: "Agrega perfiles de venta para enlazar propiedades."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 56
		}, this) : null,
		query.data && query.data.sellers.length > 0 ? /* @__PURE__ */ jsxDEV(SellersTable, { sellers: query.data.sellers }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 54
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { SellersIndexPage as component };
