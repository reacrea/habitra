import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/buyer/transactions/$transactionId.tsx
var $$splitComponentImporter = () => import("./_transactionId-CSAvoRec.js");
var Route = createFileRoute("/buyer/transactions/$transactionId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
export { Route as t };
