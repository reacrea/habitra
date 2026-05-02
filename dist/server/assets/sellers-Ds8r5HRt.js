import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, n as CrmFilterNumberRange } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { a as applySellerColumnFilters, c as useCrmColumnFilters } from "./crm-column-filter-apply-Xd_LD2y1.js";
import { r as listSellers } from "./sellers-crud-CiCDb-IT.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
function SellersTable({ sellers, filters, onFilterChange }) {
	const f = (key) => filters[key] ?? "";
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "min-w-full divide-y divide-slate-200 text-left text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
				children: [/* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Nombre"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 29,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Contacto"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Precio esperado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 31,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3",
						children: "Urgencia"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 32,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 text-right",
						children: "Acciones"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 33,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 28,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("tr", {
					className: "border-t border-slate-200 bg-white normal-case",
					children: [
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("name"),
								onChange: (v) => onFilterChange("name", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 37,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 36,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("contact"),
								onChange: (v) => onFilterChange("contact", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 40,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 39,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "min-w-[8rem] px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterNumberRange, {
								minValue: f("priceMin"),
								maxValue: f("priceMax"),
								onMinChange: (v) => onFilterChange("priceMin", v),
								onMaxChange: (v) => onFilterChange("priceMax", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 43,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "min-w-[6rem] px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterNumberRange, {
								minValue: f("urgencyMin"),
								maxValue: f("urgencyMax"),
								onMinChange: (v) => onFilterChange("urgencyMin", v),
								onMaxChange: (v) => onFilterChange("urgencyMax", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 51,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 50,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 58,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 35,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 27,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", {
				className: "divide-y divide-slate-100 text-slate-800",
				children: sellers.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
					colSpan: 5,
					className: "px-4 py-8 text-center text-sm text-slate-500",
					children: "Ningún resultado con los filtros actuales."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 64,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 63,
					columnNumber: 13
				}, this) : sellers.map((seller) => /* @__PURE__ */ jsxDEV("tr", {
					className: "hover:bg-slate-50/80",
					children: [
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 font-medium",
							children: seller.name
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 71,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "max-w-[220px] truncate px-4 py-3 text-slate-600",
							children: [seller.email, seller.phone].filter(Boolean).join(" · ") || "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 72,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: formatMoney(seller.expectedPrice)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 75,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("td", {
							className: "px-4 py-3 tabular-nums",
							children: seller.urgency ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 76,
							columnNumber: 17
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
								lineNumber: 78,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 77,
							columnNumber: 17
						}, this)
					]
				}, seller.id, true, {
					fileName: _jsxFileName$1,
					lineNumber: 70,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 61,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 26,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 25,
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
	const sellers = query.data?.sellers ?? [];
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const filtered = useMemo(() => applySellerColumnFilters(sellers, filters), [sellers, filters]);
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
				lineNumber: 27,
				columnNumber: 106
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this),
		query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 26
		}, this) : null,
		query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar los vendedores." }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 24
		}, this) : null,
		query.data && sellers.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
			title: "Sin vendedores",
			hint: "Agrega perfiles de venta para enlazar propiedades."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 45
		}, this) : null,
		query.data && sellers.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
			filteredCount: filtered.length,
			totalCount: sellers.length,
			hasActive,
			onClear: clearAll
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 11
		}, this), /* @__PURE__ */ jsxDEV(SellersTable, {
			sellers: filtered,
			filters,
			onFilterChange: setField
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 11
		}, this)] }, void 0, true) : null
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { SellersIndexPage as component };
