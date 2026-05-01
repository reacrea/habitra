import { r as prisma } from "./better-auth-D17gZsHD.js";
//#region src/server/org-access.ts
async function getOrganizationScope(userId, role) {
	if (role === "ADMIN") return { kind: "ALL" };
	return {
		kind: "MEMBERSHIPS",
		organizationIds: (await prisma.membership.findMany({
			where: { userId },
			select: { organizationId: true }
		})).map((m) => m.organizationId)
	};
}
function assertOrganizationAccess(scope, organizationId) {
	if (scope.kind === "ALL") return;
	if (!scope.organizationIds.includes(organizationId)) throw new Response("Forbidden", { status: 403 });
}
//#endregion
export { getOrganizationScope as n, assertOrganizationAccess as t };
