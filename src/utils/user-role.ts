import { UserRole } from "@prisma/client";

const allowed = new Set<string>(Object.values(UserRole));

export function parseUserRole(value: string | null | undefined): UserRole {
  if (value && allowed.has(value)) {
    return value as UserRole;
  }
  return UserRole.AGENT;
}
