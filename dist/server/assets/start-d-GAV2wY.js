import { t as createStart } from "../server.js";
//#region src/start.ts
var startInstance = createStart(() => {
	return { requestMiddleware: [] };
});
//#endregion
export { startInstance };
