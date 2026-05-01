import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BfYjltVw.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { z } from "zod";
//#region src/server/get-app-session.ts
var getAppSession = createServerFn({ method: "GET" }).handler(createSsrRpc("1912b17146cd4f5212efe519585dc393fc2c0026800b3004f06c2aa0e9a346df"));
//#endregion
//#region src/validations/auth-login.ts
var loginSearchSchema = z.object({ redirect: z.string().optional() });
var loginFormSchema = z.object({
	email: z.string().email("Correo invalido"),
	password: z.string().min(1, "Contrasena requerida")
});
//#endregion
//#region src/routes/login.tsx
var $$splitComponentImporter = () => import("./login-DwZ3Q3_T.js");
var Route = createFileRoute("/login")({
	validateSearch: (search) => loginSearchSchema.parse(search ?? {}),
	beforeLoad: async () => {
		if (await getAppSession()) throw redirect({ to: "/app/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { loginFormSchema as n, getAppSession as r, Route as t };
