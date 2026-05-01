import { createFileRoute } from "@tanstack/react-router";

import { CrmPlaceholderPage } from "@/components/layout/CrmPlaceholderPage";

export const Route = createFileRoute("/app/calendar")({
  component: () => <CrmPlaceholderPage title="Calendario" />,
});
