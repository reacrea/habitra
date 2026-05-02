import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { n as documentIdPayloadSchema, r as documentUpdateSchema, t as documentCreateSchema } from "./document-ByUETWWA.js";
import { t as createServerRpc } from "./createServerRpc-BN2FKJAb.js";
import { t as requireCrmOrganization } from "./crm-session-ChoDHV0q.js";
import { DocumentStatus } from "@prisma/client";
//#region src/server/documents-crud.ts?tss-serverfn-split
function mapDocument(row, propertyTitle) {
	return {
		...row,
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString(),
		...propertyTitle !== void 0 ? { propertyTitle } : {}
	};
}
var listDocuments_createServerFn_handler = createServerRpc({
	id: "27a2a9ffa198ec7ad0229465102f57ac71d514c43fa8035d5dc9a9a1b3458d77",
	name: "listDocuments",
	filename: "src/server/documents-crud.ts"
}, (opts) => listDocuments.__executeServer(opts));
var listDocuments = createServerFn({ method: "GET" }).handler(listDocuments_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	return { documents: (await prisma.document.findMany({
		where: { organizationId: ctx.organizationId },
		orderBy: { createdAt: "desc" },
		take: 200,
		include: { property: { select: { title: true } } }
	})).map((r) => {
		const { property, ...rest } = r;
		return mapDocument(rest, property?.title ?? null);
	}) };
});
var getDocumentById_createServerFn_handler = createServerRpc({
	id: "7420f414ddedc7db406035537960f7ca3a7aff3e9d83089df1c82ccb6e3a4d0e",
	name: "getDocumentById",
	filename: "src/server/documents-crud.ts"
}, (opts) => getDocumentById.__executeServer(opts));
var getDocumentById = createServerFn({ method: "POST" }).inputValidator((data) => documentIdPayloadSchema.parse(data)).handler(getDocumentById_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const row = await prisma.document.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} });
	return row ? mapDocument(row) : null;
});
var createDocument_createServerFn_handler = createServerRpc({
	id: "e1994d814176091b5f68df7a30da3d67c4aa1f575f8c3db61784d717c1357b43",
	name: "createDocument",
	filename: "src/server/documents-crud.ts"
}, (opts) => createDocument.__executeServer(opts));
var createDocument = createServerFn({ method: "POST" }).inputValidator((data) => documentCreateSchema.parse(data)).handler(createDocument_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	let propertyId = data.propertyId ?? null;
	const transactionId = data.transactionId ?? null;
	if (!propertyId && transactionId) {
		const trx = await prisma.transaction.findFirst({
			where: {
				id: transactionId,
				organizationId: ctx.organizationId
			},
			select: { propertyId: true }
		});
		if (trx) propertyId = trx.propertyId;
	}
	return mapDocument(await prisma.document.create({ data: {
		organizationId: ctx.organizationId,
		type: data.type,
		status: data.status ?? DocumentStatus.PENDIENTE,
		title: data.title,
		description: data.description ?? null,
		fileName: data.fileName ?? null,
		fileUrl: data.fileUrl,
		buyerId: data.buyerId ?? null,
		sellerId: data.sellerId ?? null,
		propertyId,
		transactionId,
		uploadedByUserId: ctx.userId
	} }));
});
var updateDocument_createServerFn_handler = createServerRpc({
	id: "9a365336f3c3ddecaa5204f2e837214ac82c78eb61436ae9b420adb6accfd759",
	name: "updateDocument",
	filename: "src/server/documents-crud.ts"
}, (opts) => updateDocument.__executeServer(opts));
var updateDocument = createServerFn({ method: "POST" }).inputValidator((data) => documentUpdateSchema.parse(data)).handler(updateDocument_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const found = await prisma.document.findFirst({ where: {
		id: data.id,
		organizationId: ctx.organizationId
	} });
	if (!found) throw new Response("Documento no encontrado", { status: 404 });
	let resolvedPropertyId = data.propertyId !== void 0 ? data.propertyId : found.propertyId;
	const nextTransactionId = data.transactionId !== void 0 ? data.transactionId : found.transactionId;
	if (nextTransactionId) {
		const trx = await prisma.transaction.findFirst({
			where: {
				id: nextTransactionId,
				organizationId: ctx.organizationId
			},
			select: { propertyId: true }
		});
		if (trx?.propertyId) {
			if (!resolvedPropertyId) resolvedPropertyId = trx.propertyId;
			else if (data.transactionId !== void 0 && data.propertyId === void 0) resolvedPropertyId = trx.propertyId;
		}
	}
	return mapDocument(await prisma.document.update({
		where: { id: data.id },
		data: {
			...data.title !== void 0 ? { title: data.title } : {},
			...data.type !== void 0 ? { type: data.type } : {},
			...data.status !== void 0 ? { status: data.status } : {},
			...data.description !== void 0 ? { description: data.description } : {},
			...data.fileName !== void 0 ? { fileName: data.fileName } : {},
			...data.fileUrl !== void 0 ? { fileUrl: data.fileUrl } : {},
			...data.buyerId !== void 0 ? { buyerId: data.buyerId } : {},
			...data.sellerId !== void 0 ? { sellerId: data.sellerId } : {},
			...data.transactionId !== void 0 ? { transactionId: data.transactionId } : {},
			...data.propertyId !== void 0 || resolvedPropertyId !== found.propertyId ? { propertyId: resolvedPropertyId } : {}
		}
	}));
});
//#endregion
export { createDocument_createServerFn_handler, getDocumentById_createServerFn_handler, listDocuments_createServerFn_handler, updateDocument_createServerFn_handler };
