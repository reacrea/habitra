import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-B8OM2uQA.js";
import { n as documentIdPayloadSchema, r as documentUpdateSchema, t as documentCreateSchema } from "./document-D5l-WGsD.js";
//#region src/server/documents-crud.ts
var listDocuments = createServerFn({ method: "GET" }).handler(createSsrRpc("27a2a9ffa198ec7ad0229465102f57ac71d514c43fa8035d5dc9a9a1b3458d77"));
var getDocumentById = createServerFn({ method: "POST" }).inputValidator((data) => documentIdPayloadSchema.parse(data)).handler(createSsrRpc("7420f414ddedc7db406035537960f7ca3a7aff3e9d83089df1c82ccb6e3a4d0e"));
var createDocument = createServerFn({ method: "POST" }).inputValidator((data) => documentCreateSchema.parse(data)).handler(createSsrRpc("e1994d814176091b5f68df7a30da3d67c4aa1f575f8c3db61784d717c1357b43"));
var updateDocument = createServerFn({ method: "POST" }).inputValidator((data) => documentUpdateSchema.parse(data)).handler(createSsrRpc("9a365336f3c3ddecaa5204f2e837214ac82c78eb61436ae9b420adb6accfd759"));
//#endregion
export { updateDocument as i, getDocumentById as n, listDocuments as r, createDocument as t };
