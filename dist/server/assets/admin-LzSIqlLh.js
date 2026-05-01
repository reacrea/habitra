import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DncpktRG.js";
import { t as PageHeader } from "./PageHeader-DBE4_4cE.js";
import { t as getAdminBasicData } from "./pricing-admin-B3WO7iEX.js";
import { t as formatMutationError } from "./mutation-error-65ZstK7v.js";
import { useQuery } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/admin.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/admin.tsx?tsr-split=component";
function AdminPage() {
	const fetchAdmin = useServerFn(getAdminBasicData);
	const query = useQuery({
		queryKey: ["admin-basic-data"],
		queryFn: () => fetchAdmin()
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Admin basico",
				description: "Resumen operativo multi-organizacion."
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
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(query.error) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 24
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-3 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Orgs: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.organizations }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 92
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Users: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.users }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 93
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Subs activas: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.activeSubscriptions }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 100
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Operaciones activas: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.activeTransactions }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 107
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-slate-200 bg-white p-4",
					children: [/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-habitra-text",
						children: "Organizaciones recientes"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2 text-sm text-slate-700",
						children: query.data.organizations.map((org) => /* @__PURE__ */ jsxDEV("li", { children: [
							/* @__PURE__ */ jsxDEV("strong", { children: org.name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 21
							}, this),
							" - ",
							org.city,
							", ",
							org.state
						] }, org.id, true, {
							fileName: _jsxFileName,
							lineNumber: 29,
							columnNumber: 54
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-slate-200 bg-white p-4",
					children: [/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-2 text-sm font-semibold text-habitra-text",
						children: "Usuarios recientes"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 15
					}, this), /* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2 text-sm text-slate-700",
						children: query.data.recentUsers.map((user) => /* @__PURE__ */ jsxDEV("li", { children: [
							/* @__PURE__ */ jsxDEV("strong", { children: user.name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 21
							}, this),
							" (",
							user.role,
							") - ",
							user.isActive ? "Activo" : "Inactivo"
						] }, user.id, true, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 53
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 11
			}, this)] }, void 0, true) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminPage as component };
