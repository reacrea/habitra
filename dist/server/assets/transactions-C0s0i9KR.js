import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-B4LS3d6E.js";
import { a as getBuyerTransactionsData } from "./buyer-portal-DmP1pC4T.js";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/buyer/transactions.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/buyer/transactions.tsx?tsr-split=component";
function BuyerTransactionsPage() {
	const location = useLocation();
	if (/^\/buyer\/transactions\/[^/]+$/.test(location.pathname)) return /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 28
	}, this);
	const fetchFn = useServerFn(getBuyerTransactionsData);
	const query = useQuery({
		queryKey: ["buyer-transactions"],
		queryFn: () => fetchFn()
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("h1", {
				className: "text-3xl font-bold text-habitra-text",
				children: "Mis transacciones"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Seguimiento de estatus, etapas y pendientes."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando transacciones..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudieron cargar transacciones." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 24
			}, this) : null,
			query.data && query.data.transactions.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
				title: "Sin transacciones",
				hint: "Cuando inicies proceso de compra, apareceran aqui."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 61
			}, this) : null,
			query.data && query.data.transactions.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
				className: "overflow-hidden rounded-2xl border border-slate-200 bg-white",
				children: /* @__PURE__ */ jsxDEV("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ jsxDEV("thead", {
						className: "bg-slate-50 text-left text-slate-600",
						children: /* @__PURE__ */ jsxDEV("tr", { children: [
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Propiedad"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Estado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Etapa"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Agente"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Docs"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", { className: "px-4 py-3 font-semibold" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV("tbody", { children: query.data.transactions.map((row) => /* @__PURE__ */ jsxDEV("tr", {
						className: "border-t border-slate-100",
						children: [
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: row.propertyTitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: row.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: row.currentStage
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: row.agentName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: row.documentsCount
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxDEV(Link, {
									to: "/buyer/transactions/$transactionId",
									params: { transactionId: row.id },
									className: "font-semibold text-emerald-700",
									children: "Ver"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 19
							}, this)
						]
					}, row.id, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 51
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 59
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { BuyerTransactionsPage as component };
