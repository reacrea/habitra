import { t as useServerFn } from "./useServerFn-B54YjcTl.js";
import { t as Route } from "./_transactionId-Bw2drpY4.js";
import { n as CrmInlineError, r as CrmLoading } from "./CrmStates-Bh_vY4LQ.js";
import { t as PageHeader } from "./PageHeader-C8OGwtR3.js";
import { t as formatMutationError } from "./mutation-error-BrwIK5uA.js";
import { d as TIMELINE_STATUS_LABELS, f as TRANSACTION_STAGE_LABELS, p as TRANSACTION_STATUS_LABELS, u as TASK_STATUS_LABELS } from "./crm-labels-DOUweRPD.js";
import { c as updateTransactionStage, i as createTransactionTask, o as getTransactionDetail, r as createTransactionNote, t as addTimelineStep } from "./transactions-crud-Ccr70loY.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/routes/app/transactions/$transactionId.tsx?tsr-split=component
var _jsxFileName = "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/$transactionId.tsx?tsr-split=component";
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
		enabled: Boolean(transactionId)
	});
	const refresh = async () => {
		await queryClient.invalidateQueries({ queryKey: ["crm-transaction-detail", transactionId] });
		await queryClient.invalidateQueries({ queryKey: ["crm-transactions"] });
	};
	const stageMutation = useMutation({
		mutationFn: (payload) => updateStage({ data: {
			transactionId,
			stage: payload.stage,
			status: payload.status
		} }),
		onSuccess: refresh
	});
	const stepMutation = useMutation({
		mutationFn: (payload) => addStep({ data: {
			transactionId,
			name: payload.name,
			responsibleRole: payload.responsibleRole,
			status: payload.status,
			notes: payload.notes
		} }),
		onSuccess: refresh
	});
	const taskMutation = useMutation({
		mutationFn: (payload) => addTask({ data: {
			transactionId,
			title: payload.title,
			status: payload.status,
			dueDate: payload.dueDate ? new Date(payload.dueDate).toISOString() : void 0
		} }),
		onSuccess: refresh
	});
	const noteMutation = useMutation({
		mutationFn: (content) => addNote({ data: {
			transactionId,
			content
		} }),
		onSuccess: refresh
	});
	if (detailQuery.isPending) return /* @__PURE__ */ jsxDEV(CrmLoading, { label: "Cargando operacion..." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 37
	}, this);
	if (detailQuery.isError) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "No se pudo cargar el detalle de la operacion." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 91,
		columnNumber: 35
	}, this);
	if (!detailQuery.data) return /* @__PURE__ */ jsxDEV(CrmInlineError, { message: "Operacion no encontrada." }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 92,
		columnNumber: 33
	}, this);
	const { transaction, timeline, tasks, notes } = detailQuery.data;
	const mutationError = [
		stageMutation,
		stepMutation,
		taskMutation,
		noteMutation
	].find((m) => m.isError)?.error;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxDEV(PageHeader, {
				title: `Operacion: ${transaction.propertyTitle}`,
				description: `${transaction.buyerName} vs ${transaction.sellerName} · ${transaction.agentName}`
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			mutationError ? /* @__PURE__ */ jsxDEV(CrmInlineError, { message: formatMutationError(mutationError) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 24
			}, this) : null,
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [/* @__PURE__ */ jsxDEV("h3", {
					className: "mb-3 text-lg font-semibold text-habitra-text",
					children: "Etapa y estado"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 9
				}, this), /* @__PURE__ */ jsxDEV("form", {
					className: "flex flex-wrap items-end gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						stageMutation.mutate({
							stage: String(fd.get("stage") ?? transaction.currentStage),
							status: String(fd.get("status") ?? transaction.status)
						});
					},
					children: [
						/* @__PURE__ */ jsxDEV("select", {
							name: "stage",
							defaultValue: transaction.currentStage,
							className: "rounded-xl border px-3 py-2 text-sm",
							children: Object.entries(TRANSACTION_STAGE_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
								value,
								children: label
							}, value, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 79
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("select", {
							name: "status",
							defaultValue: transaction.status,
							className: "rounded-xl border px-3 py-2 text-sm",
							children: Object.entries(TRANSACTION_STATUS_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
								value,
								children: label
							}, value, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 80
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ jsxDEV("button", {
							disabled: stageMutation.isPending,
							className: "rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white",
							children: stageMutation.isPending ? "Actualizando..." : "Cambiar etapa"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-3 text-lg font-semibold text-habitra-text",
						children: "Timeline"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2 text-sm",
						children: timeline.map((t) => /* @__PURE__ */ jsxDEV("li", {
							className: "rounded-lg border border-slate-100 px-3 py-2",
							children: [
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-medium",
									children: t.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 15
								}, this),
								" · ",
								TIMELINE_STATUS_LABELS[t.status] ?? t.status
							]
						}, t.id, true, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 30
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("form", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							stepMutation.mutate({
								name: String(fd.get("name") ?? ""),
								responsibleRole: String(fd.get("responsibleRole") ?? "AGENT"),
								status: String(fd.get("status") ?? "PENDIENTE"),
								notes: String(fd.get("notes") ?? "") || void 0
							});
							e.currentTarget.reset();
						},
						children: [
							/* @__PURE__ */ jsxDEV("input", {
								name: "name",
								placeholder: "Nombre del paso",
								required: true,
								className: "rounded-xl border px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("select", {
								name: "responsibleRole",
								className: "rounded-xl border px-3 py-2 text-sm",
								children: [
									/* @__PURE__ */ jsxDEV("option", {
										value: "AGENT",
										children: "Agente"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ jsxDEV("option", {
										value: "BROKER_OWNER",
										children: "Broker"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ jsxDEV("option", {
										value: "ADMIN",
										children: "Admin"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ jsxDEV("option", {
										value: "BUYER",
										children: "Buyer"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ jsxDEV("option", {
										value: "SELLER",
										children: "Seller"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("select", {
								name: "status",
								className: "rounded-xl border px-3 py-2 text-sm",
								children: Object.entries(TIMELINE_STATUS_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
									value,
									children: label
								}, value, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 77
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("input", {
								name: "notes",
								placeholder: "Notas del paso",
								className: "rounded-xl border px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("button", {
								disabled: stepMutation.isPending,
								className: "rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white sm:col-span-2",
								children: stepMutation.isPending ? "Agregando..." : "Agregar paso timeline"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-3 text-lg font-semibold text-habitra-text",
						children: "Tasks"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2 text-sm",
						children: tasks.map((task) => /* @__PURE__ */ jsxDEV("li", {
							className: "rounded-lg border border-slate-100 px-3 py-2",
							children: [
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-medium",
									children: task.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 15
								}, this),
								" · ",
								TASK_STATUS_LABELS[task.status] ?? task.status
							]
						}, task.id, true, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 30
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("form", {
						className: "mt-4 flex flex-wrap gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							taskMutation.mutate({
								title: String(fd.get("title") ?? ""),
								status: String(fd.get("status") ?? "PENDIENTE"),
								dueDate: String(fd.get("dueDate") ?? "") || void 0
							});
							e.currentTarget.reset();
						},
						children: [
							/* @__PURE__ */ jsxDEV("input", {
								name: "title",
								required: true,
								placeholder: "Nueva tarea",
								className: "rounded-xl border px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("select", {
								name: "status",
								className: "rounded-xl border px-3 py-2 text-sm",
								children: Object.entries(TASK_STATUS_LABELS).map(([value, label]) => /* @__PURE__ */ jsxDEV("option", {
									value,
									children: label
								}, value, false, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 73
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("input", {
								name: "dueDate",
								type: "date",
								className: "rounded-xl border px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 183,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ jsxDEV("button", {
								disabled: taskMutation.isPending,
								className: "rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white",
								children: taskMutation.isPending ? "Guardando..." : "Crear task"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 169,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "mb-3 text-lg font-semibold text-habitra-text",
						children: "Notes"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 191,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-2 text-sm",
						children: notes.map((note) => /* @__PURE__ */ jsxDEV("li", {
							className: "rounded-lg border border-slate-100 px-3 py-2",
							children: [
								/* @__PURE__ */ jsxDEV("span", {
									className: "font-medium",
									children: [note.authorName ?? "Sistema", ":"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 194,
									columnNumber: 15
								}, this),
								" ",
								note.content
							]
						}, note.id, true, {
							fileName: _jsxFileName,
							lineNumber: 193,
							columnNumber: 30
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 192,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("form", {
						className: "mt-4 flex gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							noteMutation.mutate(String(fd.get("content") ?? ""));
							e.currentTarget.reset();
						},
						children: [/* @__PURE__ */ jsxDEV("input", {
							name: "content",
							required: true,
							placeholder: "Agregar nota",
							className: "flex-1 rounded-xl border px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 11
						}, this), /* @__PURE__ */ jsxDEV("button", {
							disabled: noteMutation.isPending,
							className: "rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white",
							children: noteMutation.isPending ? "Guardando..." : "Agregar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 190,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 100,
		columnNumber: 10
	}, this);
}
//#endregion
export { TransactionDetailPage as component };
