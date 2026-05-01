import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BfYjltVw.js";
import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-Bh_vY4LQ.js";
import { t as PageHeader } from "./PageHeader-C8OGwtR3.js";
import { useQuery } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/server/tasks-crud.ts
var listTasks = createServerFn({ method: "GET" }).handler(createSsrRpc("722497102469e27d777122db30f21c008acf368b60c6b9a14befbd4ae3681509"));
//#endregion
//#region src/routes/app/tasks.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/tasks.tsx?tsr-split=component";
function TasksPage() {
	const listFn = useServerFn(listTasks);
	const query = useQuery({
		queryKey: ["crm-tasks"],
		queryFn: () => listFn()
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Tareas",
				description: "Listado de tareas del CRM por organizacion y asignacion."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando tareas..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la lista de tareas." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 24
			}, this) : null,
			query.data && query.data.tasks.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
				title: "Sin tareas",
				hint: "Cuando agendes visitas o crees tareas apareceran aqui."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 54
			}, this) : null,
			query.data && query.data.tasks.length > 0 ? /* @__PURE__ */ jsxDEV("div", {
				className: "overflow-hidden rounded-2xl border border-slate-200 bg-white",
				children: /* @__PURE__ */ jsxDEV("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ jsxDEV("thead", {
						className: "bg-slate-50 text-left text-slate-600",
						children: /* @__PURE__ */ jsxDEV("tr", { children: [
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Titulo"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Estado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Vencimiento"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Asignado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Propiedad"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Lead"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 13
					}, this), /* @__PURE__ */ jsxDEV("tbody", { children: query.data.tasks.map((task) => /* @__PURE__ */ jsxDEV("tr", {
						className: "border-t border-slate-100",
						children: [
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ jsxDEV("p", {
									className: "font-semibold text-habitra-text",
									children: task.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 21
								}, this), task.description ? /* @__PURE__ */ jsxDEV("p", {
									className: "mt-1 text-xs text-slate-500 whitespace-pre-line",
									children: task.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 33,
									columnNumber: 41
								}, this) : null]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.dueDate ? new Date(task.dueDate).toLocaleString("es-MX") : "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.assigneeName ?? "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.propertyTitle ?? "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.leadName ?? "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 19
							}, this)
						]
					}, task.id, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 45
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 52
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { TasksPage as component };
