import { Outlet, createFileRoute } from "@tanstack/react-router";

import { requireCrmRouteSession } from "@/lib/routing/crm-before-load";

export const Route = createFileRoute("/app/buyers")({
  beforeLoad: async ({ location }) => {
    await requireCrmRouteSession(location.href);
  },
  component: () => <Outlet />,
});
