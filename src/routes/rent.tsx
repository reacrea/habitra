import { createFileRoute, redirect } from "@tanstack/react-router";

import { publicSearchSchema } from "@/validations/public-search";

/** Compatibilidad: redirige a `/properties` con renta (PATCH-4). */
export const Route = createFileRoute("/rent")({
  validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/properties",
      search: {
        ...search,
        operationType: "RENT",
      },
    });
  },
  component: RentLegacyRedirect,
});

function RentLegacyRedirect() {
  return null;
}
