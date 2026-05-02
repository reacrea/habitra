import { Link } from "@tanstack/react-router";

import {
  CrmFilterDateRange,
  CrmFilterSelect,
  CrmFilterText,
} from "@/components/crm/CrmTableFilterControls";
import { TASK_STATUS_LABELS } from "@/constants/crm-labels";
import type { TaskAssignableUser, TaskListRow } from "@/types/crm";

const taskStatusOptions = Object.entries(TASK_STATUS_LABELS).map(([value, label]) => ({ value, label }));

type TasksTableProps = {
  tasks: TaskListRow[];
  filters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
  canAssignTasks: boolean;
  assignableUsers: TaskAssignableUser[];
  assignPending: boolean;
  onAssignChange: (taskId: string, assigneeId: string | null) => void;
};

export function TasksTable({
  tasks,
  filters,
  onFilterChange,
  canAssignTasks,
  assignableUsers,
  assignPending,
  onAssignChange,
}: TasksTableProps) {
  const f = (key: string) => filters[key] ?? "";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-slate-600">
          <tr>
            <th className="px-4 py-3 font-semibold">Titulo</th>
            <th className="px-4 py-3 font-semibold">Estado</th>
            <th className="px-4 py-3 font-semibold">Vencimiento</th>
            <th className="min-w-[12rem] px-4 py-3 font-semibold">Asignado</th>
            <th className="px-4 py-3 font-semibold">Propiedad</th>
            <th className="px-4 py-3 font-semibold">Lead</th>
          </tr>
          <tr className="border-t border-slate-200 bg-white normal-case">
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("title")} onChange={(v) => onFilterChange("title", v)} />
              <div className="mt-1">
                <CrmFilterText
                  value={f("description")}
                  onChange={(v) => onFilterChange("description", v)}
                  placeholder="En descripcion…"
                />
              </div>
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterSelect
                value={f("status")}
                onChange={(v) => onFilterChange("status", v)}
                options={taskStatusOptions}
              />
            </th>
            <th className="min-w-[8rem] px-4 py-2 align-top font-normal">
              <CrmFilterDateRange
                fromValue={f("dueFrom")}
                toValue={f("dueTo")}
                onFromChange={(v) => onFilterChange("dueFrom", v)}
                onToChange={(v) => onFilterChange("dueTo", v)}
              />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("assignee")} onChange={(v) => onFilterChange("assignee", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("property")} onChange={(v) => onFilterChange("property", v)} />
            </th>
            <th className="px-4 py-2 align-top font-normal">
              <CrmFilterText value={f("lead")} onChange={(v) => onFilterChange("lead", v)} />
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={6} className="border-t border-slate-100 px-4 py-8 text-center text-sm text-slate-500">
                Ningún resultado con los filtros actuales.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <p className="font-semibold text-habitra-text">{task.title}</p>
                  {task.description ? (
                    <p className="mt-1 whitespace-pre-line text-xs text-slate-500">{task.description}</p>
                  ) : null}
                </td>
                <td className="px-4 py-3">{TASK_STATUS_LABELS[task.status] ?? task.status}</td>
                <td className="px-4 py-3">
                  {task.dueDate ? new Date(task.dueDate).toLocaleString("es-MX") : "—"}
                </td>
                <td className="px-4 py-3">
                  {canAssignTasks ? (
                    <select
                      className="max-w-[14rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-habitra-text disabled:opacity-50"
                      disabled={assignPending}
                      value={task.assigneeId ?? ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        onAssignChange(task.id, v === "" ? null : v);
                      }}
                    >
                      <option value="">Sin asignar</option>
                      {assignableUsers.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span>{task.assigneeName ?? "—"}</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {task.propertyId ? (
                    <Link
                      to="/app/properties/$propertyId"
                      params={{ propertyId: task.propertyId }}
                      className="font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
                    >
                      {task.propertyTitle?.trim() ? task.propertyTitle : "Ver propiedad"}
                    </Link>
                  ) : (
                    <span className="text-slate-500">Sin propiedad</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {task.leadId ? (
                    <Link
                      to="/app/leads/$leadId"
                      params={{ leadId: task.leadId }}
                      className="font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
                    >
                      {task.leadName?.trim() ? task.leadName : "Ver lead"}
                    </Link>
                  ) : (
                    <span className="text-slate-500">Sin lead</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
