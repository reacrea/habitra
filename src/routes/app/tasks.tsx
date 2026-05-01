import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { requireCrmRouteSession } from "@/lib/routing/crm-before-load";
import { listTasks } from "@/server/tasks-crud";

export const Route = createFileRoute("/app/tasks")({
  beforeLoad: async ({ location }) => {
    await requireCrmRouteSession(location.href);
  },
  component: TasksPage,
});

function TasksPage() {
  const listFn = useServerFn(listTasks);
  const query = useQuery({
    queryKey: ["crm-tasks"],
    queryFn: () => listFn(),
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Tareas" description="Listado de tareas del CRM por organizacion y asignacion." />
      {query.isPending ? <CrmLoading label="Cargando tareas..." /> : null}
      {query.isError ? <CrmInlineError message="No se pudo cargar la lista de tareas." /> : null}
      {query.data && query.data.tasks.length === 0 ? (
        <CrmEmpty title="Sin tareas" hint="Cuando agendes visitas o crees tareas apareceran aqui." />
      ) : null}
      {query.data && query.data.tasks.length > 0 ? (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Titulo</th>
                <th className="px-4 py-3 font-semibold">Estado</th>
                <th className="px-4 py-3 font-semibold">Vencimiento</th>
                <th className="px-4 py-3 font-semibold">Asignado</th>
                <th className="px-4 py-3 font-semibold">Propiedad</th>
                <th className="px-4 py-3 font-semibold">Lead</th>
              </tr>
            </thead>
            <tbody>
              {query.data.tasks.map((task) => (
                <tr key={task.id} className="border-t border-slate-100">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-habitra-text">{task.title}</p>
                    {task.description ? <p className="mt-1 text-xs text-slate-500 whitespace-pre-line">{task.description}</p> : null}
                  </td>
                  <td className="px-4 py-3">{task.status}</td>
                  <td className="px-4 py-3">{task.dueDate ? new Date(task.dueDate).toLocaleString("es-MX") : "—"}</td>
                  <td className="px-4 py-3">{task.assigneeName ?? "—"}</td>
                  <td className="px-4 py-3">{task.propertyTitle ?? "—"}</td>
                  <td className="px-4 py-3">{task.leadName ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
