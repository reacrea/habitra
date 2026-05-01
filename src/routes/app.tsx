import { createFileRoute, redirect } from "@tanstack/react-router";

import { AppShellLayout } from "@/components/layout/AppShell";
import { getAppSession } from "@/server/get-app-session";

export const Route = createFileRoute("/app")({
  beforeLoad: async ({ location }) => {
    const session = await getAppSession();
    if (!session) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
    const path = location.pathname;
    if (path === "/app" || path === "/app/") {
      throw redirect({ to: "/app/dashboard" });
    }
  },
  component: AppShell,
});

function AppShell() {
  return <AppShellLayout />;
}
