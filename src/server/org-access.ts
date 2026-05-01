import type { UserRole } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";

export type OrgScope =
  | { kind: "ALL" }
  | { kind: "MEMBERSHIPS"; organizationIds: string[] };

export async function getOrganizationScope(
  userId: string,
  role: UserRole,
): Promise<OrgScope> {
  if (role === "ADMIN") {
    return { kind: "ALL" };
  }

  const memberships = await prisma.membership.findMany({
    where: { userId },
    select: { organizationId: true },
  });

  return {
    kind: "MEMBERSHIPS",
    organizationIds: memberships.map((m) => m.organizationId),
  };
}

export function assertOrganizationAccess(scope: OrgScope, organizationId: string) {
  if (scope.kind === "ALL") {
    return;
  }
  if (!scope.organizationIds.includes(organizationId)) {
    throw new Response("Forbidden", { status: 403 });
  }
}
