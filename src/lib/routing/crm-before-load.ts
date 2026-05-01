import { redirect } from "@tanstack/react-router";

import { getAppSession } from "@/server/get-app-session";
import { canAccessCrm } from "@/utils/crm-role";
import { parseUserRole } from "@/utils/user-role";

export async function requireCrmRouteSession(locationHref: string) {
  const session = await getAppSession();
  if (!session) {
    throw redirect({
      to: "/login",
      search: { redirect: locationHref },
    });
  }
  const role = parseUserRole(session.role);
  if (!canAccessCrm(role)) {
    throw redirect({ to: "/app/dashboard" });
  }
}
