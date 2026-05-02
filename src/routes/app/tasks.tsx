import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { CrmFilterSummary } from "@/components/crm/CrmTableFilterControls";
import { TasksTable } from "@/components/crm/tasks/TasksTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { useCrmColumnFilters } from "@/hooks/use-crm-column-filters";
import { applyTaskColumnFilters } from "@/lib/crm-column-filter-apply";
import { requireCrmRouteSession } from "@/lib/routing/crm-before-load";
import { listTasks, updateTaskAssignee } from "@/server/tasks-crud";

export const Route = createFileRoute("/app/tasks")({
  beforeLoad: async ({ location }) => {
    await requireCrmRouteSession(location.href);
  },
  component: TasksPage,
});

function TasksPage() {
  const queryClient = useQueryClient();
  const listFn = useServerFn(listTasks);
  const assignFn = useServerFn(updateTaskAssignee);
  const query = useQuery({
    queryKey: ["crm-tasks"],
    queryFn: () => listFn(),
  });

  const { filters, setField, clearAll, hasActive } = useCrmColumnFilters();
  const tasksRaw = query.data?.tasks ?? [];
  const filteredTasks = useMemo(() => applyTaskColumnFilters(tasksRaw, filters), [tasksRaw, filters]);

  const assignMutation = useMutation({
    mutationFn: (payload: { taskId: string; assigneeId: string | null }) =>
      assignFn({ data: payload }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["crm-tasks"] }),
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tareas"
        description="Las visitas desde el portal sin agente en el anuncio quedan sin asignar; el broker o administrador puede enrutarlas aqui."
      />
      {query.isPending ? <CrmLoading label="Cargando tareas..." /> : null}
      {query.isError ? <CrmInlineError message="No se pudo cargar la lista de tareas." /> : null}
      {query.data && tasksRaw.length === 0 ? (
        <CrmEmpty title="Sin tareas" hint="Cuando agendes visitas o crees tareas apareceran aqui." />
      ) : null}
      {query.data && tasksRaw.length > 0 ? (
        <>
          <CrmFilterSummary
            filteredCount={filteredTasks.length}
            totalCount={tasksRaw.length}
            hasActive={hasActive}
            onClear={clearAll}
          />
          <TasksTable
            tasks={filteredTasks}
            filters={filters}
            onFilterChange={setField}
            canAssignTasks={query.data.canAssignTasks}
            assignableUsers={query.data.assignableUsers}
            assignPending={assignMutation.isPending}
            onAssignChange={(taskId, assigneeId) => assignMutation.mutate({ taskId, assigneeId })}
          />
        </>
      ) : null}
      {assignMutation.isError ? (
        <p className="text-sm text-red-600">No se pudo actualizar la asignacion. Intenta de nuevo.</p>
      ) : null}
    </div>
  );
}
