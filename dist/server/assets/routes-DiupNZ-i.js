import { r as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-Dl3NlaJG.js";
//#region src/routes/index.tsx?tss-serverfn-split
var getPlatformMessage_createServerFn_handler = createServerRpc({
	id: "db8b8d17a81e6a91b62ecb5dc1f9478957904daf88c90cf85344bd0406bbdf57",
	name: "getPlatformMessage",
	filename: "src/routes/index.tsx"
}, (opts) => getPlatformMessage.__executeServer(opts));
var getPlatformMessage = createServerFn({ method: "GET" }).handler(getPlatformMessage_createServerFn_handler, async () => {
	return "Donde las operaciones inmobiliarias si cierran";
});
//#endregion
export { getPlatformMessage_createServerFn_handler };
