import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BfYjltVw.js";
import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-Bh_vY4LQ.js";
import { t as PageHeader } from "./PageHeader-C8OGwtR3.js";
import { t as updateTaskAssigneeSchema } from "./task-BpPAWsJE.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/server/tasks-crud.ts
var listTasks = createServerFn({ method: "GET" }).handler(createSsrRpc("722497102469e27d777122db30f21c008acf368b60c6b9a14befbd4ae3681509"));
var updateTaskAssignee = createServerFn({ method: "POST" }).inputValidator((data) => updateTaskAssigneeSchema.parse(data)).handler(createSsrRpc("804f553de3f5f88ca79e6e5454a7f75a190869e737bbf201f5cd4aa059e51421"));
//#endregion
//#region src/routes/app/tasks.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/tasks.tsx?tsr-split=component";
function TasksPage() {
	const queryClient = useQueryClient();
	const listFn = useServerFn(listTasks);
	const assignFn = useServerFn(updateTaskAssignee);
	const query = useQuery({
		queryKey: ["crm-tasks"],
		queryFn: () => listFn()
	});
	const assignMutation = useMutation({
		mutationFn: (payload) => assignFn({ data: payload }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["crm-tasks"] })
	});
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: "Tareas",
				description: "Las visitas desde el portal sin agente en el anuncio quedan sin asignar; el broker o administrador puede enrutarlas aqui."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando tareas..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la lista de tareas." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 24
			}, this) : null,
			query.data && query.data.tasks.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
				title: "Sin tareas",
				hint: "Cuando agendes visitas o crees tareas apareceran aqui."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
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
								lineNumber: 34,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Estado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Vencimiento"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "min-w-[12rem] px-4 py-3 font-semibold",
								children: "Asignado"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Propiedad"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ jsxDEV("th", {
								className: "px-4 py-3 font-semibold",
								children: "Lead"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
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
									lineNumber: 45,
									columnNumber: 21
								}, this), task.description ? /* @__PURE__ */ jsxDEV("p", {
									className: "mt-1 text-xs text-slate-500 whitespace-pre-line",
									children: task.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 41
								}, this) : null]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.dueDate ? new Date(task.dueDate).toLocaleString("es-MX") : "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: query.data.canAssignTasks ? /* @__PURE__ */ jsxDEV("select", {
									className: "max-w-[14rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-habitra-text disabled:opacity-50",
									disabled: assignMutation.isPending,
									value: task.assigneeId ?? "",
									onChange: (e) => {
										const v = e.target.value;
										assignMutation.mutate({
											taskId: task.id,
											assigneeId: v === "" ? null : v
										});
									},
									children: [/* @__PURE__ */ jsxDEV("option", {
										value: "",
										children: "Sin asignar"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 58,
										columnNumber: 25
									}, this), query.data.assignableUsers.map((u) => /* @__PURE__ */ jsxDEV("option", {
										value: u.id,
										children: u.name
									}, u.id, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 62
									}, this))]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 50
								}, this) : /* @__PURE__ */ jsxDEV("span", { children: task.assigneeName ?? "—" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 35
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.propertyTitle ?? "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ jsxDEV("td", {
								className: "px-4 py-3",
								children: task.leadName ?? "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 19
							}, this)
						]
					}, task.id, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 45
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 52
			}, this) : null,
			assignMutation.isError ? /* @__PURE__ */ jsxDEV("p", {
				className: "text-sm text-red-600",
				children: "No se pudo actualizar la asignacion. Intenta de nuevo."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 33
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
//#endregion
export { TasksPage as component };
