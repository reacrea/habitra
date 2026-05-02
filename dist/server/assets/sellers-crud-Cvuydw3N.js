import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
import { n as sellerIdPayloadSchema, r as sellerUpdateSchema, t as sellerCreateSchema } from "./seller-CVuRm5nz.js";
//#region src/server/sellers-crud.ts
var listSellers = createServerFn({ method: "GET" }).handler(createSsrRpc("3469f877d7055ecf9ceec4282d96a8dde629170127705f44aa63d7030553c650"));
/** Opciones compactas para selects (p. ej. vendedor en ficha de propiedad). */
var listSellerOptions = createServerFn({ method: "GET" }).handler(createSsrRpc("80a1ec452b6c6a7a8eeea7d440eea3a30b9c34cb168affb1c85d2d109758cda8"));
var getSellerWithProperties = createServerFn({ method: "POST" }).inputValidator((data) => sellerIdPayloadSchema.parse(data)).handler(createSsrRpc("4881e3cebbd1025bc60ce390e259601e664590dda62c225df40507b50b1dcb2c"));
var createSeller = createServerFn({ method: "POST" }).inputValidator((data) => sellerCreateSchema.parse(data)).handler(createSsrRpc("05da3d02fdf6162abc21e4be545554878d63902c3875f38ac6b44c94c114126e"));
var updateSeller = createServerFn({ method: "POST" }).inputValidator((data) => sellerUpdateSchema.parse(data)).handler(createSsrRpc("4c167f198e2fc3d046cce1bb567ef6113e3fec12b8ec414bbe73cdf672b4eb64"));
//#endregion
export { updateSeller as a, listSellers as i, getSellerWithProperties as n, listSellerOptions as r, createSeller as t };
