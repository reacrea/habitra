import { Outlet, createFileRoute } from "@tanstack/react-router";

import { requireCrmRouteSession } from "@/lib/routing/crm-before-load";

export const Route = createFileRoute("/app/sellers")({
  beforeLoad: async ({ location }) => {
    await requireCrmRouteSession(location.href);
  },
  component: () => <Outlet />,
});
