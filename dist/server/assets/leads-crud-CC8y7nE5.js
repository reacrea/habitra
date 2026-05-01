import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-B8OM2uQA.js";
import { n as leadIdPayloadSchema, r as leadUpdateSchema, t as leadCreateSchema } from "./lead-C9g4RhDB.js";
//#region src/server/leads-crud.ts
var listLeads = createServerFn({ method: "GET" }).handler(createSsrRpc("c28401fa152769540a66eea75a10c37abad67684736b91ee6e83fa7aabb2a056"));
var getLeadById = createServerFn({ method: "POST" }).inputValidator((data) => leadIdPayloadSchema.parse(data)).handler(createSsrRpc("1d445d521a19844b47b8b37b2ae6f0acdfd470252618a5ce5dcc6c2e5ce81bca"));
var createLead = createServerFn({ method: "POST" }).inputValidator((data) => leadCreateSchema.parse(data)).handler(createSsrRpc("9ffb2ba70d8dd7be0731527e86d3b6a2f17d8561b2a0e310ca2fc729303d7c58"));
var updateLead = createServerFn({ method: "POST" }).inputValidator((data) => leadUpdateSchema.parse(data)).handler(createSsrRpc("5ba978d6d7dba989da381fc6c7fa8289c58e388ec5bed46bd150c2ac4c962cb9"));
//#endregion
export { updateLead as i, getLeadById as n, listLeads as r, createLead as t };
