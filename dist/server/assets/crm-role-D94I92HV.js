//#region src/utils/crm-role.ts
var CRM_ROLES = new Set([
	"ADMIN",
	"BROKER_OWNER",
	"AGENT"
]);
function canAccessCrm(role) {
	return CRM_ROLES.has(role);
}
//#endregion
export { canAccessCrm as t };
