import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-C40XB0cl.js";
import { n as sellerIdPayloadSchema, r as sellerUpdateSchema, t as sellerCreateSchema } from "./seller-zONALpge.js";
//#region src/server/sellers-crud.ts
var listSellers = createServerFn({ method: "GET" }).handler(createSsrRpc("3469f877d7055ecf9ceec4282d96a8dde629170127705f44aa63d7030553c650"));
var getSellerById = createServerFn({ method: "POST" }).inputValidator((data) => sellerIdPayloadSchema.parse(data)).handler(createSsrRpc("7c118fa3faa78432195d37ce6bb939d63ae1c840513f9bd3d787b9b7d6cd2229"));
var createSeller = createServerFn({ method: "POST" }).inputValidator((data) => sellerCreateSchema.parse(data)).handler(createSsrRpc("05da3d02fdf6162abc21e4be545554878d63902c3875f38ac6b44c94c114126e"));
var updateSeller = createServerFn({ method: "POST" }).inputValidator((data) => sellerUpdateSchema.parse(data)).handler(createSsrRpc("4c167f198e2fc3d046cce1bb567ef6113e3fec12b8ec414bbe73cdf672b4eb64"));
//#endregion
export { updateSeller as i, getSellerById as n, listSellers as r, createSeller as t };
