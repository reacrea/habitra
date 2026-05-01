import { PrismaClient } from "@prisma/client";
//#region src/lib/db/prisma.ts
var globalForPrisma = globalThis;
var prisma = globalForPrisma.prisma ?? new PrismaClient({ log: [
	"query",
	"warn",
	"error"
] });
globalForPrisma.prisma = prisma;
//#endregion
export { prisma as t };
