import { createFileRoute } from "@tanstack/react-router";

import { CrmPlaceholderPage } from "@/components/layout/CrmPlaceholderPage";

export const Route = createFileRoute("/app/tasks")({
  component: () => <CrmPlaceholderPage title="Tareas" />,
});
