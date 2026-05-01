import { n as getRequest } from "./server-DcmvO1qi.js";
import { r as createServerFn } from "../server.js";
import { r as prisma, t as auth } from "./better-auth-D17gZsHD.js";
import { t as parseUserRole } from "./user-role-CIXBgHXV.js";
import { t as createServerRpc } from "./createServerRpc-Dl3NlaJG.js";
import { n as getOrganizationScope } from "./org-access-uYF7-pEB.js";
//#region src/server/app-layout-data.ts?tss-serverfn-split
var getAppLayoutData_createServerFn_handler = createServerRpc({
	id: "602b14db23b728ffff78855a6f6b774c5dabf80cb08b198d6b7642747afbba79",
	name: "getAppLayoutData",
	filename: "src/server/app-layout-data.ts"
}, (opts) => getAppLayoutData.__executeServer(opts));
var getAppLayoutData = createServerFn({ method: "GET" }).handler(getAppLayoutData_createServerFn_handler, async () => {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) throw new Response("Unauthorized", { status: 401 });
	const user = session.user;
	const role = parseUserRole(user.role);
	const scope = await getOrganizationScope(user.id, role);
	if (scope.kind === "ALL") {
		const org = await prisma.organization.findFirst({ orderBy: { createdAt: "asc" } });
		return {
			organizationName: org?.name ?? null,
			primaryOrganizationId: org?.id ?? null
		};
	}
	const first = (await prisma.organization.findMany({
		where: { id: { in: scope.organizationIds } },
		orderBy: { name: "asc" }
	}))[0];
	return {
		organizationName: first?.name ?? null,
		primaryOrganizationId: first?.id ?? null
	};
});
//#endregion
export { getAppLayoutData_createServerFn_handler };
