import { createFileRoute } from "@tanstack/react-router";

import { CrmPlaceholderPage } from "@/components/layout/CrmPlaceholderPage";

export const Route = createFileRoute("/app/organizations")({
  component: () => <CrmPlaceholderPage title="Organizaciones" />,
});
