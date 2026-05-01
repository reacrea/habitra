import { UserRole } from "@prisma/client";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { PublicLayout } from "@/components/public/PublicLayout";
import { getAppSession } from "@/server/get-app-session";
import { canAccessCrm } from "@/utils/crm-role";
import { parseUserRole } from "@/utils/user-role";

export const Route = createFileRoute("/buyer")({
  beforeLoad: async ({ location }) => {
    const session = await getAppSession();
    if (!session) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
    const role = parseUserRole(session.role);
    if (canAccessCrm(role)) {
      throw redirect({ to: "/app/dashboard" });
    }
    if (role !== UserRole.BUYER) {
      throw redirect({ to: "/" });
    }
    if (location.pathname === "/buyer" || location.pathname === "/buyer/") {
      throw redirect({ to: "/buyer/dashboard" });
    }
  },
  component: BuyerLayout,
});

function BuyerLayout() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <Outlet />
      </section>
    </PublicLayout>
  );
}
