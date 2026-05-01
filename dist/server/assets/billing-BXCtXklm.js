import { t as useServerFn } from "./useServerFn-3OwPxRgI.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { t as PageHeader } from "./PageHeader-DgTnD89b.js";
import { n as getPricingData } from "./pricing-admin--_4snAj5.js";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/billing.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/billing.tsx?tsr-split=component";
function BillingPage() {
	const fetchPricing = useServerFn(getPricingData);
	const query = useQuery({
		queryKey: ["pricing-data"],
		queryFn: () => fetchPricing()
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Pricing y Billing",
				description: "Planes, suscripcion actual y estimacion mensual."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar pricing." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 24
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
				children: query.data.plans.map((plan) => /* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-slate-200 bg-white p-4",
					children: [
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-sm font-semibold text-habitra-text",
							children: plan.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 text-xl font-bold text-slate-900",
							children: [
								"$",
								plan.priceMxn.toLocaleString("es-MX"),
								" MXN"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "text-xs text-slate-500",
							children: plan.billingCadence
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", {
							className: "mt-2 text-xs text-slate-600",
							children: plan.description ?? "Sin descripcion"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 17
						}, this)
					]
				}, plan.id, true, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 43
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "text-sm font-semibold text-habitra-text",
					children: "Suscripcion actual"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 13
				}, this), query.data.currentSubscription ? /* @__PURE__ */ jsxDEV("div", {
					className: "mt-2 text-sm text-slate-700",
					children: [
						/* @__PURE__ */ jsxDEV("p", { children: ["Plan: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.currentSubscription.planName }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 26
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", { children: ["Seats: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.currentSubscription.seats }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 27
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", { children: ["Status: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.currentSubscription.status }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 28
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ jsxDEV("p", { children: ["Estimado mensual: ", /* @__PURE__ */ jsxDEV("strong", { children: [
							"$",
							query.data.currentSubscription.estimatedMonthly.toLocaleString("es-MX"),
							" MXN"
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 38
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 47
				}, this) : /* @__PURE__ */ jsxDEV("p", {
					className: "mt-2 text-sm text-slate-600",
					children: "Sin suscripcion registrada."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 24
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 11
			}, this)] }, void 0, true) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { BillingPage as component };
