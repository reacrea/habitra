import type { UserRole } from "@prisma/client";

const CRM_ROLES: ReadonlySet<UserRole> = new Set(["ADMIN", "BROKER_OWNER", "AGENT"]);

export function canAccessCrm(role: UserRole): boolean {
  return CRM_ROLES.has(role);
}
