import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { t as getAdminBasicData } from "./pricing-admin-C5ZBoVXg.js";
import { t as formatMutationError } from "./mutation-error-Cg0jpp9u.js";
import { useMemo, useState } from "react";
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
	const [orgSearch, setOrgSearch] = useState("");
	const [userSearch, setUserSearch] = useState("");
	const filteredOrganizations = useMemo(() => {
		if (!query.data) return [];
		const q = orgSearch.trim().toLowerCase();
		if (!q) return query.data.organizations;
		return query.data.organizations.filter((org) => [
			org.name,
			org.city,
			org.state
		].some((x) => String(x ?? "").toLowerCase().includes(q)));
	}, [query.data, orgSearch]);
	const filteredRecentUsers = useMemo(() => {
		if (!query.data) return [];
		const q = userSearch.trim().toLowerCase();
		if (!q) return query.data.recentUsers;
		return query.data.recentUsers.filter((u) => [
			u.name,
			u.email,
			u.role
		].some((x) => String(x ?? "").toLowerCase().includes(q)));
	}, [query.data, userSearch]);
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Admin basico",
				description: "Resumen operativo multi-organizacion."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(query.error) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 24
			}, this) : null,
			query.data ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-3 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Orgs: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.organizations }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Users: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.users }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 22
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Subs activas: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.activeSubscriptions }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 29
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm",
						children: ["Operaciones activas: ", /* @__PURE__ */ jsxDEV("strong", { children: query.data.summary.activeTransactions }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 36
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-slate-200 bg-white p-4",
					children: [
						/* @__PURE__ */ jsxDEV("h3", {
							className: "mb-2 text-sm font-semibold text-habitra-text",
							children: "Organizaciones recientes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: orgSearch,
								onChange: setOrgSearch,
								placeholder: "Filtrar por nombre, ciudad o estado…"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 17
							}, this), orgSearch.trim() ? /* @__PURE__ */ jsxDEV("p", {
								className: "mt-1 text-xs text-slate-500",
								children: [
									filteredOrganizations.length,
									" de ",
									query.data.organizations.length,
									" mostradas"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 37
							}, this) : null]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("ul", {
							className: "space-y-2 text-sm text-slate-700",
							children: filteredOrganizations.length === 0 ? /* @__PURE__ */ jsxDEV("li", {
								className: "text-slate-500",
								children: "Ninguna coincidencia con el filtro."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 55
							}, this) : filteredOrganizations.map((org) => /* @__PURE__ */ jsxDEV("li", { children: [
								/* @__PURE__ */ jsxDEV("strong", { children: org.name }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 23
								}, this),
								" - ",
								org.city,
								", ",
								org.state
							] }, org.id, true, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 162
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 13
				}, this), /* @__PURE__ */ jsxDEV("div", {
					className: "rounded-2xl border border-slate-200 bg-white p-4",
					children: [
						/* @__PURE__ */ jsxDEV("h3", {
							className: "mb-2 text-sm font-semibold text-habitra-text",
							children: "Usuarios recientes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: userSearch,
								onChange: setUserSearch,
								placeholder: "Filtrar por nombre, email o rol…"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 17
							}, this), userSearch.trim() ? /* @__PURE__ */ jsxDEV("p", {
								className: "mt-1 text-xs text-slate-500",
								children: [
									filteredRecentUsers.length,
									" de ",
									query.data.recentUsers.length,
									" mostrados"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 38
							}, this) : null]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("ul", {
							className: "space-y-2 text-sm text-slate-700",
							children: filteredRecentUsers.length === 0 ? /* @__PURE__ */ jsxDEV("li", {
								className: "text-slate-500",
								children: "Ninguna coincidencia con el filtro."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 53
							}, this) : filteredRecentUsers.map((user) => /* @__PURE__ */ jsxDEV("li", { children: [
								/* @__PURE__ */ jsxDEV("strong", { children: user.name }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 23
								}, this),
								" (",
								user.role,
								") - ",
								user.isActive ? "Activo" : "Inactivo"
							] }, user.id, true, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 159
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 11
			}, this)] }, void 0, true) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminPage as component };
