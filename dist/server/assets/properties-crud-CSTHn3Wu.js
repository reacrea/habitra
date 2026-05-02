import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-GONQNPi6.js";
import { i as propertyUpdateSchema, n as propertyIdPayloadSchema, r as propertyImageCreateSchema, t as propertyChecklistUpdateSchema } from "./property-a_kezauW.js";
//#region src/server/properties-crud.ts
var listProperties = createServerFn({ method: "GET" }).handler(createSsrRpc("3da34a1b7e81612f50224260633be5ea5241a81a6f880c0b8d0bfe9334191345"));
var getPropertyDetail = createServerFn({ method: "POST" }).inputValidator((data) => propertyIdPayloadSchema.parse(data)).handler(createSsrRpc("58f82a1fdf9017ce837cdb459358b7ba501caa8c1f078ac40ea0c9d33abfb98b"));
createServerFn({ method: "POST" }).inputValidator((data) => propertyUpdateSchema.parse(data)).handler(createSsrRpc("33c20999285b191f9c2ddeb0b1f432146e64e667080910535e975b9b0eb5cd7d"));
var updatePropertyChecklist = createServerFn({ method: "POST" }).inputValidator((data) => propertyChecklistUpdateSchema.parse(data)).handler(createSsrRpc("f6a8e645b5f969cfb5b547ff343e80648cda798b9b379452bc61c9c9b18bafb5"));
var addPropertyImage = createServerFn({ method: "POST" }).inputValidator((data) => propertyImageCreateSchema.parse(data)).handler(createSsrRpc("f8c4be80127ff912b4879e204b7a4eb143c739058a7bec7d96945b3bcba71352"));
//#endregion
export { updatePropertyChecklist as i, getPropertyDetail as n, listProperties as r, addPropertyImage as t };
