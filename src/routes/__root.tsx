import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "../styles/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Habitra" },
      {
        name: "description",
        content: "Infraestructura para transacciones inmobiliarias en Mexico.",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-MX">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
