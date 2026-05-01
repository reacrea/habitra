import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth/better-auth";
import { prisma } from "@/lib/db/prisma";
import { getOrganizationScope } from "@/server/org-access";
import { parseUserRole } from "@/utils/user-role";

export type AppLayoutData = {
  organizationName: string | null;
  primaryOrganizationId: string | null;
};

export const getAppLayoutData = createServerFn({ method: "GET" }).handler(async (): Promise<AppLayoutData> => {
  const request = getRequest();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const user = session.user as typeof session.user & { id: string; role?: string | null };
  const role = parseUserRole(user.role);
  const scope = await getOrganizationScope(user.id, role);

  if (scope.kind === "ALL") {
    const org = await prisma.organization.findFirst({
      orderBy: { createdAt: "asc" },
    });
    return {
      organizationName: org?.name ?? null,
      primaryOrganizationId: org?.id ?? null,
    };
  }

  const orgs = await prisma.organization.findMany({
    where: { id: { in: scope.organizationIds } },
    orderBy: { name: "asc" },
  });
  const first = orgs[0];
  return {
    organizationName: first?.name ?? null,
    primaryOrganizationId: first?.id ?? null,
  };
});
