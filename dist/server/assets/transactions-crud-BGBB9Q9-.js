import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-C40XB0cl.js";
import { a as transactionIdPayloadSchema, i as createTransactionSchema, n as createNoteSchema, o as updateTransactionStageSchema, r as createTaskSchema, t as addTimelineStepSchema } from "./transaction-BBcXn7sQ.js";
//#region src/server/transactions-crud.ts
var listTransactions = createServerFn({ method: "GET" }).handler(createSsrRpc("389128684818e7c24153551126cc3bfa2c4e82846cecb288ab48f9732647b6e6"));
var getTransactionCreateOptions = createServerFn({ method: "GET" }).handler(createSsrRpc("34968bd9938c387a89556f7c27666916cb4576e297a36dbd4eb9a9ff63113f15"));
var createTransaction = createServerFn({ method: "POST" }).inputValidator((data) => createTransactionSchema.parse(data)).handler(createSsrRpc("04c954ac70e26098512749007859692d4c6126ea1df03fa6fccc5bfcb98ebb87"));
var getTransactionDetail = createServerFn({ method: "POST" }).inputValidator((data) => transactionIdPayloadSchema.parse(data)).handler(createSsrRpc("8efb5a5898e4ad89f35268efb06b8481255a02ad34c5213af7ef7357f45dd2f1"));
var updateTransactionStage = createServerFn({ method: "POST" }).inputValidator((data) => updateTransactionStageSchema.parse(data)).handler(createSsrRpc("31814c29553ea7d6dc04a8c1ce1c9c55746230905759975d5b1bf7f758628bd6"));
var addTimelineStep = createServerFn({ method: "POST" }).inputValidator((data) => addTimelineStepSchema.parse(data)).handler(createSsrRpc("d3c1c28e6c67c8743f3d3c7be35371e3949f5c0acfd3a915ebac65eec6874ab0"));
var createTransactionTask = createServerFn({ method: "POST" }).inputValidator((data) => createTaskSchema.parse(data)).handler(createSsrRpc("2640ed936ed9cc518857326c3d276a5dac3ed38c95022b41dc874096e82e0f3c"));
var createTransactionNote = createServerFn({ method: "POST" }).inputValidator((data) => createNoteSchema.parse(data)).handler(createSsrRpc("f6a5398ba5a5e50cf77a5ff9e0a5aac28c8c508910ce1f263c6106efd8001597"));
//#endregion
export { getTransactionCreateOptions as a, updateTransactionStage as c, createTransactionTask as i, createTransaction as n, getTransactionDetail as o, createTransactionNote as r, listTransactions as s, addTimelineStep as t };
