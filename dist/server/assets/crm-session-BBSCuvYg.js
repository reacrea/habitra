import { n as getRequest } from "./server-DcmvO1qi.js";
import { t as auth } from "./better-auth-BcaB8wX6.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { t as parseUserRole } from "./user-role-CwScBYyP.js";
import { n as getOrganizationScope, t as assertOrganizationAccess } from "./org-access-CNsdBTj-.js";
//#region src/server/crm-session.ts
function assertCanAccessCrm(role) {
	if (!(role === "ADMIN" || role === "BROKER_OWNER" || role === "AGENT")) throw new Response("Forbidden", { status: 403 });
}
/**
* Sesión autenticada + organización principal accesible + permiso CRM (agente/broker/admin).
*/
async function requireCrmOrganization() {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) throw new Response("Unauthorized", { status: 401 });
	const user = session.user;
	const role = parseUserRole(user.role);
	assertCanAccessCrm(role);
	const scope = await getOrganizationScope(user.id, role);
	const organization = scope.kind === "ALL" ? await prisma.organization.findFirst({ orderBy: { createdAt: "asc" } }) : await prisma.organization.findFirst({
		where: { id: { in: scope.organizationIds } },
		orderBy: { createdAt: "asc" }
	});
	if (!organization) throw new Response("Sin organizacion", { status: 404 });
	assertOrganizationAccess(scope, organization.id);
	return {
		userId: user.id,
		role,
		organizationId: organization.id
	};
}
//#endregion
export { requireCrmOrganization as n, assertCanAccessCrm as t };
