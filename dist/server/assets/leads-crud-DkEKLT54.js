import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { n as leadIdPayloadSchema, r as leadUpdateSchema, t as leadCreateSchema } from "./lead-B7y6t_9W.js";
import { t as createServerRpc } from "./createServerRpc-Cr4-9oPI.js";
import { t as requireCrmOrganization } from "./crm-session-DGiyKi_N.js";
import { LeadStatus, LeadTemperature } from "@prisma/client";
//#region src/server/leads-crud.ts?tss-serverfn-split
function toLeadRow(row) {
	return {
		...row,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
var listLeads_createServerFn_handler = createServerRpc({
	id: "c28401fa152769540a66eea75a10c37abad67684736b91ee6e83fa7aabb2a056",
	name: "listLeads",
	filename: "src/server/leads-crud.ts"
}, (opts) => listLeads.__executeServer(opts));
var listLeads = createServerFn({ method: "GET" }).handler(listLeads_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const rows = await prisma.lead.findMany({
		where: { organizationId: ctx.organizationId },
		orderBy: { createdAt: "desc" },
		take: 200
	});
	return {
		organizationId: ctx.organizationId,
		leads: rows.map(toLeadRow)
	};
});
var getLeadById_createServerFn_handler = createServerRpc({
	id: "1d445d521a19844b47b8b37b2ae6f0acdfd470252618a5ce5dcc6c2e5ce81bca",
	name: "getLeadById",
	filename: "src/server/leads-crud.ts"
}, (opts) => getLeadById.__executeServer(opts));
var getLeadById = createServerFn({ method: "POST" }).inputValidator((data) => leadIdPayloadSchema.parse(data)).handler(getLeadById_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.lead.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} });
	return row ? toLeadRow(row) : null;
});
var createLead_createServerFn_handler = createServerRpc({
	id: "9ffb2ba70d8dd7be0731527e86d3b6a2f17d8561b2a0e310ca2fc729303d7c58",
	name: "createLead",
	filename: "src/server/leads-crud.ts"
}, (opts) => createLead.__executeServer(opts));
var createLead = createServerFn({ method: "POST" }).inputValidator((data) => leadCreateSchema.parse(data)).handler(createLead_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const assignedAgentId = ctx.role === "AGENT" ? ctx.userId : null;
	return toLeadRow(await prisma.lead.create({ data: {
		organizationId: ctx.organizationId,
		name: data.name,
		email: data.email ?? null,
		phone: data.phone ?? null,
		type: data.type,
		source: data.source,
		status: data.status ?? LeadStatus.NUEVO,
		temperature: data.temperature ?? LeadTemperature.TIBIO,
		notesText: data.notesText ?? null,
		assignedAgentId
	} }));
});
var updateLead_createServerFn_handler = createServerRpc({
	id: "5ba978d6d7dba989da381fc6c7fa8289c58e388ec5bed46bd150c2ac4c962cb9",
	name: "updateLead",
	filename: "src/server/leads-crud.ts"
}, (opts) => updateLead.__executeServer(opts));
var updateLead = createServerFn({ method: "POST" }).inputValidator((data) => leadUpdateSchema.parse(data)).handler(updateLead_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	if (!await prisma.lead.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} })) throw new Response("Lead no encontrado", { status: 404 });
	const { id, name, email, phone, type, source, status, temperature, notesText } = data;
	return toLeadRow(await prisma.lead.update({
		where: { id },
		data: {
			...name !== void 0 ? { name } : {},
			...email !== void 0 ? { email } : {},
			...phone !== void 0 ? { phone } : {},
			...type !== void 0 ? { type } : {},
			...source !== void 0 ? { source } : {},
			...status !== void 0 ? { status } : {},
			...temperature !== void 0 ? { temperature } : {},
			...notesText !== void 0 ? { notesText } : {}
		}
	}));
});
//#endregion
export { createLead_createServerFn_handler, getLeadById_createServerFn_handler, listLeads_createServerFn_handler, updateLead_createServerFn_handler };
