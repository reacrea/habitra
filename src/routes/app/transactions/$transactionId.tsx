import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import {
  TASK_STATUS_LABELS,
  TIMELINE_STATUS_LABELS,
  TRANSACTION_STAGE_LABELS,
  TRANSACTION_STATUS_LABELS,
} from "@/constants/crm-labels";
import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  addTimelineStep,
  createTransactionNote,
  createTransactionTask,
  getTransactionDetail,
  updateTransactionStage,
} from "@/server/transactions-crud";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/transactions/$transactionId")({
  component: TransactionDetailPage,
});

function TransactionDetailPage() {
  const { transactionId } = Route.useParams();
  const queryClient = useQueryClient();
  const fetchDetail = useServerFn(getTransactionDetail);
  const updateStage = useServerFn(updateTransactionStage);
  const addStep = useServerFn(addTimelineStep);
  const addTask = useServerFn(createTransactionTask);
  const addNote = useServerFn(createTransactionNote);

  const detailQuery = useQuery({
    queryKey: ["crm-transaction-detail", transactionId],
    queryFn: () => fetchDetail({ data: { id: transactionId } }),
    enabled: Boolean(transactionId),
  });

  const refresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ["crm-transaction-detail", transactionId] });
    await queryClient.invalidateQueries({ queryKey: ["crm-transactions"] });
  };

  const stageMutation = useMutation({
    mutationFn: (payload: { stage: string; status?: string }) =>
      updateStage({
        data: {
          transactionId,
          stage: payload.stage as never,
          status: payload.status as never,
        },
      }),
    onSuccess: refresh,
  });

  const stepMutation = useMutation({
    mutationFn: (payload: { name: string; responsibleRole: string; status: string; notes?: string }) =>
      addStep({
        data: {
          transactionId,
          name: payload.name,
          responsibleRole: payload.responsibleRole as never,
          status: payload.status as never,
          notes: payload.notes,
        },
      }),
    onSuccess: refresh,
  });

  const taskMutation = useMutation({
    mutationFn: (payload: { title: string; status: string; dueDate?: string }) =>
      addTask({
        data: {
          transactionId,
          title: payload.title,
          status: payload.status as never,
          dueDate: payload.dueDate ? new Date(payload.dueDate).toISOString() : undefined,
        },
      }),
    onSuccess: refresh,
  });

  const noteMutation = useMutation({
    mutationFn: (content: string) =>
      addNote({
        data: {
          transactionId,
          content,
        },
      }),
    onSuccess: refresh,
  });

  if (detailQuery.isPending) return <CrmLoading label="Cargando operacion..." />;
  if (detailQuery.isError) return <CrmInlineError message="No se pudo cargar el detalle de la operacion." />;
  if (!detailQuery.data) return <CrmInlineError message="Operacion no encontrada." />;

  const { transaction, timeline, tasks, notes } = detailQuery.data;
  const mutationError = [stageMutation, stepMutation, taskMutation, noteMutation]
    .find((m) => m.isError)?.error;

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Operacion: ${transaction.propertyTitle}`}
        description={`${transaction.buyerName} vs ${transaction.sellerName} · ${transaction.agentName}`}
      />
      {mutationError ? <CrmInlineError message={formatMutationError(mutationError)} /> : null}

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Etapa y estado</h3>
        <form
          className="flex flex-wrap items-end gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            stageMutation.mutate({
              stage: String(fd.get("stage") ?? transaction.currentStage),
              status: String(fd.get("status") ?? transaction.status),
            });
          }}
        >
          <select name="stage" defaultValue={transaction.currentStage} className="rounded-xl border px-3 py-2 text-sm">
            {Object.entries(TRANSACTION_STAGE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <select name="status" defaultValue={transaction.status} className="rounded-xl border px-3 py-2 text-sm">
            {Object.entries(TRANSACTION_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <button disabled={stageMutation.isPending} className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white">
            {stageMutation.isPending ? "Actualizando..." : "Cambiar etapa"}
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Timeline</h3>
        <ul className="space-y-2 text-sm">
          {timeline.map((t) => (
            <li key={t.id} className="rounded-lg border border-slate-100 px-3 py-2">
              <span className="font-medium">{t.name}</span> · {TIMELINE_STATUS_LABELS[t.status] ?? t.status}
            </li>
          ))}
        </ul>
        <form
          className="mt-4 grid gap-3 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            stepMutation.mutate({
              name: String(fd.get("name") ?? ""),
              responsibleRole: String(fd.get("responsibleRole") ?? "AGENT"),
              status: String(fd.get("status") ?? "PENDIENTE"),
              notes: String(fd.get("notes") ?? "") || undefined,
            });
            e.currentTarget.reset();
          }}
        >
          <input name="name" placeholder="Nombre del paso" required className="rounded-xl border px-3 py-2 text-sm" />
          <select name="responsibleRole" className="rounded-xl border px-3 py-2 text-sm">
            <option value="AGENT">Agente</option>
            <option value="BROKER_OWNER">Broker</option>
            <option value="ADMIN">Admin</option>
            <option value="BUYER">Buyer</option>
            <option value="SELLER">Seller</option>
          </select>
          <select name="status" className="rounded-xl border px-3 py-2 text-sm">
            {Object.entries(TIMELINE_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <input name="notes" placeholder="Notas del paso" className="rounded-xl border px-3 py-2 text-sm" />
          <button disabled={stepMutation.isPending} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white sm:col-span-2">
            {stepMutation.isPending ? "Agregando..." : "Agregar paso timeline"}
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Tasks</h3>
        <ul className="space-y-2 text-sm">
          {tasks.map((task) => (
            <li key={task.id} className="rounded-lg border border-slate-100 px-3 py-2">
              <span className="font-medium">{task.title}</span> · {TASK_STATUS_LABELS[task.status] ?? task.status}
            </li>
          ))}
        </ul>
        <form
          className="mt-4 flex flex-wrap gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            taskMutation.mutate({
              title: String(fd.get("title") ?? ""),
              status: String(fd.get("status") ?? "PENDIENTE"),
              dueDate: String(fd.get("dueDate") ?? "") || undefined,
            });
            e.currentTarget.reset();
          }}
        >
          <input name="title" required placeholder="Nueva tarea" className="rounded-xl border px-3 py-2 text-sm" />
          <select name="status" className="rounded-xl border px-3 py-2 text-sm">
            {Object.entries(TASK_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <input name="dueDate" type="date" className="rounded-xl border px-3 py-2 text-sm" />
          <button disabled={taskMutation.isPending} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            {taskMutation.isPending ? "Guardando..." : "Crear task"}
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-lg font-semibold text-habitra-text">Notes</h3>
        <ul className="space-y-2 text-sm">
          {notes.map((note) => (
            <li key={note.id} className="rounded-lg border border-slate-100 px-3 py-2">
              <span className="font-medium">{note.authorName ?? "Sistema"}:</span> {note.content}
            </li>
          ))}
        </ul>
        <form
          className="mt-4 flex gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            noteMutation.mutate(String(fd.get("content") ?? ""));
            e.currentTarget.reset();
          }}
        >
          <input name="content" required placeholder="Agregar nota" className="flex-1 rounded-xl border px-3 py-2 text-sm" />
          <button disabled={noteMutation.isPending} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            {noteMutation.isPending ? "Guardando..." : "Agregar"}
          </button>
        </form>
      </section>
    </div>
  );
}
