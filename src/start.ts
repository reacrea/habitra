import { createMiddleware, createStart } from "@tanstack/react-start";

/**
 * Better Auth expone multiples subrutas bajo /api/auth/*.
 * Un solo archivo de ruta con `$` no cubre todos los segmentos; este middleware delega el arbol completo.
 */
const betterAuthApi = createMiddleware().server(async ({ request, next }) => {
  const pathname = new URL(request.url).pathname;
  if (pathname.startsWith("/api/auth")) {
    const { auth } = await import("./lib/auth/better-auth");
    return auth.handler(request);
  }
  return next();
});

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [betterAuthApi],
  };
});
