import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
import { t as useServerFn } from "./useServerFn-WIBuHzCH.js";
import { n as CrmInlineError, r as CrmLoading, t as CrmEmpty } from "./CrmStates-DNZQWVUU.js";
import { a as CrmFilterText, i as CrmFilterSummary, r as CrmFilterSelect, t as CrmFilterDateRange } from "./CrmTableFilterControls-Du0Fo1d3.js";
import { t as PageHeader } from "./PageHeader-B0E-Rec0.js";
import { u as TASK_STATUS_LABELS } from "./crm-labels-DF9xqjOX.js";
import { c as useCrmColumnFilters, o as applyTaskColumnFilters } from "./crm-column-filter-apply-Xd_LD2y1.js";
import { t as updateTaskAssigneeSchema } from "./task-BYytYB1K.js";
import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/crm/tasks/TasksTable.tsx
var _jsxFileName$1 = "C:/Jcrea/Projects/Habitra/src/components/crm/tasks/TasksTable.tsx";
var taskStatusOptions = Object.entries(TASK_STATUS_LABELS).map(([value, label]) => ({
	value,
	label
}));
function TasksTable({ tasks, filters, onFilterChange, canAssignTasks, assignableUsers, assignPending, onAssignChange }) {
	const f = (key) => filters[key] ?? "";
	return /* @__PURE__ */ jsxDEV("div", {
		className: "overflow-hidden rounded-2xl border border-slate-200 bg-white",
		children: /* @__PURE__ */ jsxDEV("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ jsxDEV("thead", {
				className: "bg-slate-50 text-left text-slate-600",
				children: [/* @__PURE__ */ jsxDEV("tr", { children: [
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 font-semibold",
						children: "Titulo"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 39,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 font-semibold",
						children: "Estado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 40,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 font-semibold",
						children: "Vencimiento"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 41,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "min-w-[12rem] px-4 py-3 font-semibold",
						children: "Asignado"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 42,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 font-semibold",
						children: "Propiedad"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ jsxDEV("th", {
						className: "px-4 py-3 font-semibold",
						children: "Lead"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 38,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("tr", {
					className: "border-t border-slate-200 bg-white normal-case",
					children: [
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: [/* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("title"),
								onChange: (v) => onFilterChange("title", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 48,
								columnNumber: 15
							}, this), /* @__PURE__ */ jsxDEV("div", {
								className: "mt-1",
								children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
									value: f("description"),
									onChange: (v) => onFilterChange("description", v),
									placeholder: "En descripcion…"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 50,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 49,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterSelect, {
								value: f("status"),
								onChange: (v) => onFilterChange("status", v),
								options: taskStatusOptions
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 58,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "min-w-[8rem] px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterDateRange, {
								fromValue: f("dueFrom"),
								toValue: f("dueTo"),
								onFromChange: (v) => onFilterChange("dueFrom", v),
								onToChange: (v) => onFilterChange("dueTo", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 65,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 64,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("assignee"),
								onChange: (v) => onFilterChange("assignee", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 73,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 72,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("property"),
								onChange: (v) => onFilterChange("property", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 76,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 75,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ jsxDEV("th", {
							className: "px-4 py-2 align-top font-normal",
							children: /* @__PURE__ */ jsxDEV(CrmFilterText, {
								value: f("lead"),
								onChange: (v) => onFilterChange("lead", v)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 79,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 78,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 46,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("tbody", { children: tasks.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", {
				colSpan: 6,
				className: "border-t border-slate-100 px-4 py-8 text-center text-sm text-slate-500",
				children: "Ningún resultado con los filtros actuales."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 86,
				columnNumber: 15
			}, this) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 85,
				columnNumber: 13
			}, this) : tasks.map((task) => /* @__PURE__ */ jsxDEV("tr", {
				className: "border-t border-slate-100",
				children: [
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: [/* @__PURE__ */ jsxDEV("p", {
							className: "font-semibold text-habitra-text",
							children: task.title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 94,
							columnNumber: 19
						}, this), task.description ? /* @__PURE__ */ jsxDEV("p", {
							className: "mt-1 whitespace-pre-line text-xs text-slate-500",
							children: task.description
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 96,
							columnNumber: 21
						}, this) : null]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 93,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: TASK_STATUS_LABELS[task.status] ?? task.status
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 99,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: task.dueDate ? new Date(task.dueDate).toLocaleString("es-MX") : "—"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 100,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: canAssignTasks ? /* @__PURE__ */ jsxDEV("select", {
							className: "max-w-[14rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-habitra-text disabled:opacity-50",
							disabled: assignPending,
							value: task.assigneeId ?? "",
							onChange: (e) => {
								const v = e.target.value;
								onAssignChange(task.id, v === "" ? null : v);
							},
							children: [/* @__PURE__ */ jsxDEV("option", {
								value: "",
								children: "Sin asignar"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 114,
								columnNumber: 23
							}, this), assignableUsers.map((u) => /* @__PURE__ */ jsxDEV("option", {
								value: u.id,
								children: u.name
							}, u.id, false, {
								fileName: _jsxFileName$1,
								lineNumber: 116,
								columnNumber: 25
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 105,
							columnNumber: 21
						}, this) : /* @__PURE__ */ jsxDEV("span", { children: task.assigneeName ?? "—" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 122,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 103,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: task.propertyId ? /* @__PURE__ */ jsxDEV(Link, {
							to: "/app/properties/$propertyId",
							params: { propertyId: task.propertyId },
							className: "font-medium text-emerald-700 hover:text-emerald-800 hover:underline",
							children: task.propertyTitle?.trim() ? task.propertyTitle : "Ver propiedad"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 127,
							columnNumber: 21
						}, this) : /* @__PURE__ */ jsxDEV("span", {
							className: "text-slate-500",
							children: "Sin propiedad"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 135,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 125,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ jsxDEV("td", {
						className: "px-4 py-3",
						children: task.leadId ? /* @__PURE__ */ jsxDEV(Link, {
							to: "/app/leads/$leadId",
							params: { leadId: task.leadId },
							className: "font-medium text-emerald-700 hover:text-emerald-800 hover:underline",
							children: task.leadName?.trim() ? task.leadName : "Ver lead"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 140,
							columnNumber: 21
						}, this) : /* @__PURE__ */ jsxDEV("span", {
							className: "text-slate-500",
							children: "Sin lead"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 148,
							columnNumber: 21
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 138,
						columnNumber: 17
					}, this)
				]
			}, task.id, true, {
				fileName: _jsxFileName$1,
				lineNumber: 92,
				columnNumber: 15
			}, this)) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 83,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 36,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
//#endregion
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
	const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
	const tasksRaw = query.data?.tasks ?? [];
	const filteredTasks = useMemo(() => applyTaskColumnFilters(tasksRaw, filters), [tasksRaw, filters]);
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
				lineNumber: 39,
				columnNumber: 7
			}, this),
			query.isPending ? /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando tareas..." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 26
			}, this) : null,
			query.isError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar la lista de tareas." }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 24
			}, this) : null,
			query.data && tasksRaw.length === 0 ? /* @__PURE__ */ jsxDEV(CrmEmpty, {
				title: "Sin tareas",
				hint: "Cuando agendes visitas o crees tareas apareceran aqui."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 46
			}, this) : null,
			query.data && tasksRaw.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [/* @__PURE__ */ jsxDEV(CrmFilterSummary, {
				filteredCount: filteredTasks.length,
				totalCount: tasksRaw.length,
				hasActive,
				onClear: clearAll
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 11
			}, this), /* @__PURE__ */ jsxDEV(TasksTable, {
				tasks: filteredTasks,
				filters,
				onFilterChange: setField,
				canAssignTasks: query.data.canAssignTasks,
				assignableUsers: query.data.assignableUsers,
				assignPending: assignMutation.isPending,
				onAssignChange: (taskId, assigneeId) => assignMutation.mutate({
					taskId,
					assigneeId
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 11
			}, this)] }, void 0, true) : null,
			assignMutation.isError ? /* @__PURE__ */ jsxDEV("p", {
				className: "text-sm text-red-600",
				children: "No se pudo actualizar la asignacion. Intenta de nuevo."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 33
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
//#endregion
export { TasksPage as component };
