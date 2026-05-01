import { UserRole } from "@prisma/client";
//#region src/utils/user-role.ts
var allowed = new Set(Object.values(UserRole));
function parseUserRole(value) {
	if (value && allowed.has(value)) return value;
	return UserRole.AGENT;
}
//#endregion
export { parseUserRole as t };
