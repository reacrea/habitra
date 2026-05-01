import { n as getRequest } from "./server-DcmvO1qi.js";
import { r as createServerFn } from "../server.js";
import { t as auth } from "./better-auth-D17gZsHD.js";
import { t as parseUserRole } from "./user-role-CIXBgHXV.js";
import { t as createServerRpc } from "./createServerRpc-Dl3NlaJG.js";
//#region src/server/get-app-session.ts?tss-serverfn-split
var getAppSession_createServerFn_handler = createServerRpc({
	id: "1912b17146cd4f5212efe519585dc393fc2c0026800b3004f06c2aa0e9a346df",
	name: "getAppSession",
	filename: "src/server/get-app-session.ts"
}, (opts) => getAppSession.__executeServer(opts));
var getAppSession = createServerFn({ method: "GET" }).handler(getAppSession_createServerFn_handler, async () => {
	const request = getRequest();
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session?.user) return null;
	const user = session.user;
	return {
		userId: user.id,
		email: user.email,
		name: user.name,
		role: parseUserRole(user.role)
	};
});
//#endregion
export { getAppSession_createServerFn_handler };
