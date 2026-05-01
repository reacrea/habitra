import { r as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BfYjltVw.js";
import { z } from "zod";
//#region src/server/zones-b2c.ts
var cityInputSchema = z.object({ city: z.string().trim().min(1) });
var neighborhoodInputSchema = z.object({
	city: z.string().trim().min(1),
	neighborhood: z.string().trim().min(1)
});
var getZonesOverview = createServerFn({ method: "GET" }).handler(createSsrRpc("b313bc1c1d966933b74cc775a1e60a18d6f93ae5cd83dbd71629db37d4cfd476"));
var getZoneCityData = createServerFn({ method: "POST" }).inputValidator((data) => cityInputSchema.parse(data)).handler(createSsrRpc("87544689e896b3d6ad1d6e1fa7cc76930b30c99f74d30f270d5c67455d480fe4"));
var getZoneNeighborhoodData = createServerFn({ method: "POST" }).inputValidator((data) => neighborhoodInputSchema.parse(data)).handler(createSsrRpc("f5e7820b2bd82098250be79117a53688851ecd38196268c5fd3673e230ab368e"));
//#endregion
export { getZoneNeighborhoodData as n, getZonesOverview as r, getZoneCityData as t };
