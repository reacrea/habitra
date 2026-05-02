import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
//#region src/server/pricing-admin.ts
var getPricingData = createServerFn({ method: "GET" }).handler(createSsrRpc("dbc2cebfbb4f3fe7517aa7b4de6f4f86895d94c002ed0d5310819f1d1893b647"));
var getAdminBasicData = createServerFn({ method: "GET" }).handler(createSsrRpc("937855f22eef26eea84f74041b99c050c11c6267f2cf1eb19361ba17d075cefc"));
//#endregion
export { getPricingData as n, getAdminBasicData as t };
