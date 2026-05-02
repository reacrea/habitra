import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
import { n as buyerPortalTransactionIdSchema, t as buyerPortalProfileUpdateSchema } from "./buyer-portal-Baz5qxv2.js";
//#region src/server/buyer-portal.ts
var getBuyerDashboardData = createServerFn({ method: "GET" }).handler(createSsrRpc("840cf681e4b756a5d8ae058c30b7c9c0e723bc175966a5d0dce7756d98f21212"));
var getBuyerProfileData = createServerFn({ method: "GET" }).handler(createSsrRpc("48bc91ce4129f4530dd32ee4b5509a621c0bcced738e7123f83c6508455b1395"));
var updateBuyerProfileData = createServerFn({ method: "POST" }).inputValidator((data) => buyerPortalProfileUpdateSchema.parse(data)).handler(createSsrRpc("b320476fd190f370cdbcf42337ec86b70254b2d257e89448d343196b34ee5296"));
var getBuyerMatchesData = createServerFn({ method: "GET" }).handler(createSsrRpc("73c8f8bd5186bfb79b629701527c0be60686434cbca82128ed2cc0a233b5763c"));
var getBuyerTransactionsData = createServerFn({ method: "GET" }).handler(createSsrRpc("527c1c84ff012fb7bb15fa0f6a0b3746121d2b16cf070e084b0c8a1203b919d8"));
var getBuyerTransactionDetailData = createServerFn({ method: "POST" }).inputValidator((data) => buyerPortalTransactionIdSchema.parse(data)).handler(createSsrRpc("9d06937a187d39bf9f89971fea9b10a92fa977205b1bea045db58fbc263eeb25"));
//#endregion
export { getBuyerTransactionsData as a, getBuyerTransactionDetailData as i, getBuyerMatchesData as n, updateBuyerProfileData as o, getBuyerProfileData as r, getBuyerDashboardData as t };
