import { getRequest } from "@tanstack/react-start/server";

import type { UserRole } from "@prisma/client";

import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { parseUserRole } from "@/utils/user-role";

import { assertOrganizationAccess, getOrganizationScope } from "./org-access";

export function assertCanAccessCrm(role: UserRole): void {
  const ok =
    role === "ADMIN" || role === "BROKER_OWNER" || role === "AGENT";
  if (!ok) {
    throw new Response("Forbidden", { status: 403 });
  }
}

export type CrmOrganizationContext = {
  userId: string;
  role: UserRole;
  organizationId: string;
};

/**
 * Sesión autenticada + organización principal accesible + permiso CRM (agente/broker/admin).
 */
export async function requireCrmOrganization(): Promise<CrmOrganizationContext> {
  const request = getRequest();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const user = session.user as typeof session.user & {
    id: string;
    role?: string | null;
  };
  const role = parseUserRole(user.role);
  assertCanAccessCrm(role);

  const scope = await getOrganizationScope(user.id, role);
  const organization =
    scope.kind === "ALL"
      ? await prisma.organization.findFirst({ orderBy: { createdAt: "asc" } })
      : await prisma.organization.findFirst({
          where: { id: { in: scope.organizationIds } },
          orderBy: { createdAt: "asc" },
        });

  if (!organization) {
    throw new Response("Sin organizacion", { status: 404 });
  }

  assertOrganizationAccess(scope, organization.id);

  return {
    userId: user.id,
    role,
    organizationId: organization.id,
  };
}
