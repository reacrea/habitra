import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as createServerRpc } from "./createServerRpc-jLJt_Uw-.js";
import { n as requireCrmOrganization } from "./crm-session-JzGHRauc.js";
//#region src/server/tasks-crud.ts?tss-serverfn-split
var listTasks_createServerFn_handler = createServerRpc({
	id: "722497102469e27d777122db30f21c008acf368b60c6b9a14befbd4ae3681509",
	name: "listTasks",
	filename: "src/server/tasks-crud.ts"
}, (opts) => listTasks.__executeServer(opts));
var listTasks = createServerFn({ method: "GET" }).handler(listTasks_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	return { tasks: (await prisma.task.findMany({
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
	})).map((row) => ({
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
	})) };
});
//#endregion
export { listTasks_createServerFn_handler };
