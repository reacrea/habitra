import { n as createMiddleware, t as createStart } from "../server.js";
//#region src/start.ts
/**
* Better Auth expone multiples subrutas bajo /api/auth/*.
* Un solo archivo de ruta con `$` no cubre todos los segmentos; este middleware delega el arbol completo.
*/
var betterAuthApi = createMiddleware().server(async ({ request, next }) => {
	if (new URL(request.url).pathname.startsWith("/api/auth")) {
		const { auth } = await import("./better-auth-ChMwVNa3.js").then((n) => n.n);
		return auth.handler(request);
	}
	return next();
});
var startInstance = createStart(() => {
	return { requestMiddleware: [betterAuthApi] };
});
//#endregion
export { startInstance };
