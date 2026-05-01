import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-B8OM2uQA.js";
import { n as buyerIdPayloadSchema, r as buyerUpdateSchema, t as buyerCreateSchema } from "./buyer-Z16TEfyy.js";
//#region src/server/buyers-crud.ts
var listBuyers = createServerFn({ method: "GET" }).handler(createSsrRpc("2acbfcf6ed50e4b346efe2e358363f3f171e1ead3b19cdf1169c634927fc1134"));
var getBuyerById = createServerFn({ method: "POST" }).inputValidator((data) => buyerIdPayloadSchema.parse(data)).handler(createSsrRpc("b33611eb61d6ab83ace351250bd6ebd372ba59abdeac03e4a161fb4e20e52a58"));
var createBuyer = createServerFn({ method: "POST" }).inputValidator((data) => buyerCreateSchema.parse(data)).handler(createSsrRpc("1d1aa721a3c1b87b28e38926402bbc33d68ba4d944d25bafe00a06aa1ee4771d"));
var updateBuyer = createServerFn({ method: "POST" }).inputValidator((data) => buyerUpdateSchema.parse(data)).handler(createSsrRpc("f529dfac7ea07eaee4a2b9834bdf1b989722926ca0c945202bb7a7f1a2d4e07d"));
//#endregion
export { updateBuyer as i, getBuyerById as n, listBuyers as r, createBuyer as t };
