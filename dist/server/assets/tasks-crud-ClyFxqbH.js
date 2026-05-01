import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as updateTaskAssigneeSchema } from "./task-BpPAWsJE.js";
import { t as createServerRpc } from "./createServerRpc-BN2FKJAb.js";
import { t as requireCrmOrganization } from "./crm-session-DCiJQoXV.js";
//#region src/server/tasks-crud.ts?tss-serverfn-split
function canReassignTasks(role) {
	return role === "ADMIN" || role === "BROKER_OWNER";
}
async function listAssignableUsersForOrg(organizationId) {
	const memberships = await prisma.membership.findMany({
		where: {
			organizationId,
			role: { in: [
				"AGENT",
				"MANAGER",
				"OWNER"
			] }
		},
		include: { user: { select: {
			id: true,
			name: true
		} } }
	});
	const byId = /* @__PURE__ */ new Map();
	for (const m of memberships) byId.set(m.user.id, m.user.name);
	return Array.from(byId.entries()).map(([id, name]) => ({
		id,
		name
	})).sort((a, b) => a.name.localeCompare(b.name, "es"));
}
var listTasks_createServerFn_handler = createServerRpc({
	id: "722497102469e27d777122db30f21c008acf368b60c6b9a14befbd4ae3681509",
	name: "listTasks",
	filename: "src/server/tasks-crud.ts"
}, (opts) => listTasks.__executeServer(opts));
var listTasks = createServerFn({ method: "GET" }).handler(listTasks_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const rows = await prisma.task.findMany({
		where: {
			organizationId: ctx.organizationId,
			...ctx.role === "AGENT" ? { assigneeId: ctx.userId } : {}
		},
		include: {
			assignee: { select: { name: true } },
			property: { select: { title: true } },
			lead: { select: { name: true } }
		},
		orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }],
		take: 300
	});
	const canAssign = canReassignTasks(ctx.role);
	const assignableUsers = canAssign ? await listAssignableUsersForOrg(ctx.organizationId) : [];
	return {
		tasks: rows.map((row) => ({
			id: row.id,
			title: row.title,
			description: row.description,
			status: row.status,
			dueDate: row.dueDate?.toISOString() ?? null,
			assigneeId: row.assigneeId,
			assigneeName: row.assignee?.name ?? null,
			propertyTitle: row.property?.title ?? null,
			leadName: row.lead?.name ?? null,
			createdAt: row.createdAt.toISOString()
		})),
		canAssignTasks: canAssign,
		assignableUsers
	};
});
var updateTaskAssignee_createServerFn_handler = createServerRpc({
	id: "804f553de3f5f88ca79e6e5454a7f75a190869e737bbf201f5cd4aa059e51421",
	name: "updateTaskAssignee",
	filename: "src/server/tasks-crud.ts"
}, (opts) => updateTaskAssignee.__executeServer(opts));
var updateTaskAssignee = createServerFn({ method: "POST" }).inputValidator((data) => updateTaskAssigneeSchema.parse(data)).handler(updateTaskAssignee_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	if (!canReassignTasks(ctx.role)) throw new Response("Forbidden", { status: 403 });
	const task = await prisma.task.findFirst({
		where: {
			id: data.taskId,
			organizationId: ctx.organizationId
		},
		select: { id: true }
	});
	if (!task) throw new Response("Tarea no encontrada", { status: 404 });
	if (data.assigneeId === null) {
		await prisma.task.update({
			where: { id: task.id },
			data: { assigneeId: null }
		});
		return { ok: true };
	}
	if (!await prisma.membership.findFirst({ where: {
		organizationId: ctx.organizationId,
		userId: data.assigneeId,
		role: { in: [
			"AGENT",
			"MANAGER",
			"OWNER"
		] }
	} })) throw new Response("El usuario no puede recibir tareas en esta organizacion", { status: 400 });
	await prisma.task.update({
		where: { id: task.id },
		data: { assigneeId: data.assigneeId }
	});
	return { ok: true };
});
//#endregion
export { listTasks_createServerFn_handler, updateTaskAssignee_createServerFn_handler };
