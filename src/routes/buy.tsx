import { createFileRoute, redirect } from "@tanstack/react-router";

import { publicSearchSchema } from "@/validations/public-search";

/** Compatibilidad: redirige a `/properties` con venta (PATCH-4). */
export const Route = createFileRoute("/buy")({
  validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/properties",
      search: {
        ...search,
        operationType: "SALE",
      },
    });
  },
  component: BuyLegacyRedirect,
});

function BuyLegacyRedirect() {
  return null;
}
