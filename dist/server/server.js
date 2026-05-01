import { i as requestHandler, r as getResponse } from "./assets/server-DcmvO1qi.js";
import "react";
import { RouterProvider } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
import { defineHandlerCallback, renderRouterToStream } from "@tanstack/react-router/ssr/server";
import { AsyncLocalStorage } from "node:async_hooks";
import { createRawStreamRPCPlugin, createSerializationAdapter, defaultSerovalPlugins, executeRewriteInput, isNotFound, isRedirect as isRedirect$1, isResolvedRedirect, makeSerovalPlugin, parseRedirect, resolveManifestAssetLink, rootRouteId } from "@tanstack/router-core";
import { mergeHeaders, mergeHeaders as mergeHeaders$1 } from "@tanstack/router-core/ssr/client";
import { fromJSON, toCrossJSONAsync, toCrossJSONStream } from "seroval";
import { createMemoryHistory } from "@tanstack/history";
import { attachRouterServerSsrUtils, getNormalizedURL, getOrigin } from "@tanstack/router-core/ssr/server";
//#region node_modules/@tanstack/react-start-server/dist/esm/StartServer.js
function StartServer(props) {
	return /* @__PURE__ */ jsx(RouterProvider, { router: props.router });
}
//#endregion
//#region node_modules/@tanstack/react-start-server/dist/esm/defaultStreamHandler.js
var defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
	request,
	router,
	responseHeaders,
	children: /* @__PURE__ */ jsx(StartServer, { router })
}));
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/constants.js
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/router-manifest.js
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* The client entry URL is returned separately so that it can be transformed
* (e.g. for CDN rewriting) before being embedded into the `<script>` tag.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await import("./assets/_tanstack-start-manifest_v-CVUoXbI1.js");
	const startManifest = tsrStartManifest();
	const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
	rootRoute.assets = rootRoute.assets || [];
	let injectedHeadScripts;
	return {
		manifest: {
			inlineCss: startManifest.inlineCss,
			routes: Object.fromEntries(Object.entries(startManifest.routes).flatMap(([k, v]) => {
				const result = {};
				let hasData = false;
				if (v.preloads && v.preloads.length > 0) {
					result["preloads"] = v.preloads;
					hasData = true;
				}
				if (v.assets && v.assets.length > 0) {
					result["assets"] = v.assets;
					hasData = true;
				}
				if (!hasData) return [];
				return [[k, result]];
			}))
		},
		clientEntry: startManifest.clientEntry,
		injectedHeadScripts
	};
}
//#endregion
//#region \0%23tanstack-start-server-fn-resolver
var manifest = {
	"04c954ac70e26098512749007859692d4c6126ea1df03fa6fccc5bfcb98ebb87": {
		functionName: "createTransaction_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"05da3d02fdf6162abc21e4be545554878d63902c3875f38ac6b44c94c114126e": {
		functionName: "createSeller_createServerFn_handler",
		importer: () => import("./assets/sellers-crud-Beo0R9fw.js")
	},
	"1912b17146cd4f5212efe519585dc393fc2c0026800b3004f06c2aa0e9a346df": {
		functionName: "getAppSession_createServerFn_handler",
		importer: () => import("./assets/get-app-session-DtWbNL_P.js")
	},
	"1d1aa721a3c1b87b28e38926402bbc33d68ba4d944d25bafe00a06aa1ee4771d": {
		functionName: "createBuyer_createServerFn_handler",
		importer: () => import("./assets/buyers-crud-DNMFDDUf.js")
	},
	"1d445d521a19844b47b8b37b2ae6f0acdfd470252618a5ce5dcc6c2e5ce81bca": {
		functionName: "getLeadById_createServerFn_handler",
		importer: () => import("./assets/leads-crud-CyZf5FlJ.js")
	},
	"2640ed936ed9cc518857326c3d276a5dac3ed38c95022b41dc874096e82e0f3c": {
		functionName: "createTransactionTask_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"27a2a9ffa198ec7ad0229465102f57ac71d514c43fa8035d5dc9a9a1b3458d77": {
		functionName: "listDocuments_createServerFn_handler",
		importer: () => import("./assets/documents-crud-DMM3LTkY.js")
	},
	"2acbfcf6ed50e4b346efe2e358363f3f171e1ead3b19cdf1169c634927fc1134": {
		functionName: "listBuyers_createServerFn_handler",
		importer: () => import("./assets/buyers-crud-DNMFDDUf.js")
	},
	"31814c29553ea7d6dc04a8c1ce1c9c55746230905759975d5b1bf7f758628bd6": {
		functionName: "updateTransactionStage_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"33c20999285b191f9c2ddeb0b1f432146e64e667080910535e975b9b0eb5cd7d": {
		functionName: "updateProperty_createServerFn_handler",
		importer: () => import("./assets/properties-crud-Dm5sDSUV.js")
	},
	"3469f877d7055ecf9ceec4282d96a8dde629170127705f44aa63d7030553c650": {
		functionName: "listSellers_createServerFn_handler",
		importer: () => import("./assets/sellers-crud-Beo0R9fw.js")
	},
	"34968bd9938c387a89556f7c27666916cb4576e297a36dbd4eb9a9ff63113f15": {
		functionName: "getTransactionCreateOptions_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"389128684818e7c24153551126cc3bfa2c4e82846cecb288ab48f9732647b6e6": {
		functionName: "listTransactions_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"3da34a1b7e81612f50224260633be5ea5241a81a6f880c0b8d0bfe9334191345": {
		functionName: "listProperties_createServerFn_handler",
		importer: () => import("./assets/properties-crud-Dm5sDSUV.js")
	},
	"4c167f198e2fc3d046cce1bb567ef6113e3fec12b8ec414bbe73cdf672b4eb64": {
		functionName: "updateSeller_createServerFn_handler",
		importer: () => import("./assets/sellers-crud-Beo0R9fw.js")
	},
	"58f82a1fdf9017ce837cdb459358b7ba501caa8c1f078ac40ea0c9d33abfb98b": {
		functionName: "getPropertyDetail_createServerFn_handler",
		importer: () => import("./assets/properties-crud-Dm5sDSUV.js")
	},
	"5ba978d6d7dba989da381fc6c7fa8289c58e388ec5bed46bd150c2ac4c962cb9": {
		functionName: "updateLead_createServerFn_handler",
		importer: () => import("./assets/leads-crud-CyZf5FlJ.js")
	},
	"602b14db23b728ffff78855a6f6b774c5dabf80cb08b198d6b7642747afbba79": {
		functionName: "getAppLayoutData_createServerFn_handler",
		importer: () => import("./assets/app-layout-data-BUMYgChF.js")
	},
	"733d61339d01d5150d0dd72aaee28e5ecbe2e0c9c3c1974e8c0d7865daf2609c": {
		functionName: "getDashboardMetrics_createServerFn_handler",
		importer: () => import("./assets/dashboard-metrics-DfaDXqYm.js")
	},
	"7420f414ddedc7db406035537960f7ca3a7aff3e9d83089df1c82ccb6e3a4d0e": {
		functionName: "getDocumentById_createServerFn_handler",
		importer: () => import("./assets/documents-crud-DMM3LTkY.js")
	},
	"7c118fa3faa78432195d37ce6bb939d63ae1c840513f9bd3d787b9b7d6cd2229": {
		functionName: "getSellerById_createServerFn_handler",
		importer: () => import("./assets/sellers-crud-Beo0R9fw.js")
	},
	"8efb5a5898e4ad89f35268efb06b8481255a02ad34c5213af7ef7357f45dd2f1": {
		functionName: "getTransactionDetail_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"9a365336f3c3ddecaa5204f2e837214ac82c78eb61436ae9b420adb6accfd759": {
		functionName: "updateDocument_createServerFn_handler",
		importer: () => import("./assets/documents-crud-DMM3LTkY.js")
	},
	"9ffb2ba70d8dd7be0731527e86d3b6a2f17d8561b2a0e310ca2fc729303d7c58": {
		functionName: "createLead_createServerFn_handler",
		importer: () => import("./assets/leads-crud-CyZf5FlJ.js")
	},
	"b33611eb61d6ab83ace351250bd6ebd372ba59abdeac03e4a161fb4e20e52a58": {
		functionName: "getBuyerById_createServerFn_handler",
		importer: () => import("./assets/buyers-crud-DNMFDDUf.js")
	},
	"c28401fa152769540a66eea75a10c37abad67684736b91ee6e83fa7aabb2a056": {
		functionName: "listLeads_createServerFn_handler",
		importer: () => import("./assets/leads-crud-CyZf5FlJ.js")
	},
	"d3c1c28e6c67c8743f3d3c7be35371e3949f5c0acfd3a915ebac65eec6874ab0": {
		functionName: "addTimelineStep_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"db8b8d17a81e6a91b62ecb5dc1f9478957904daf88c90cf85344bd0406bbdf57": {
		functionName: "getPlatformMessage_createServerFn_handler",
		importer: () => import("./assets/routes-DiupNZ-i.js")
	},
	"e1994d814176091b5f68df7a30da3d67c4aa1f575f8c3db61784d717c1357b43": {
		functionName: "createDocument_createServerFn_handler",
		importer: () => import("./assets/documents-crud-DMM3LTkY.js")
	},
	"f529dfac7ea07eaee4a2b9834bdf1b989722926ca0c945202bb7a7f1a2d4e07d": {
		functionName: "updateBuyer_createServerFn_handler",
		importer: () => import("./assets/buyers-crud-DNMFDDUf.js")
	},
	"f6a5398ba5a5e50cf77a5ff9e0a5aac28c8c508910ce1f263c6106efd8001597": {
		functionName: "createTransactionNote_createServerFn_handler",
		importer: () => import("./assets/transactions-crud-CJ58d7__.js")
	},
	"f6a8e645b5f969cfb5b547ff343e80648cda798b9b379452bc61c9c9b18bafb5": {
		functionName: "updatePropertyChecklist_createServerFn_handler",
		importer: () => import("./assets/properties-crud-Dm5sDSUV.js")
	},
	"f8c4be80127ff912b4879e204b7a4eb143c739058a7bec7d96945b3bcba71352": {
		functionName: "addPropertyImage_createServerFn_handler",
		importer: () => import("./assets/properties-crud-Dm5sDSUV.js")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/constants.js
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
var TSS_SERVER_FUNCTION_FACTORY = Symbol.for("TSS_SERVER_FUNCTION_FACTORY");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
/** Content-Type for multiplexed framed responses (RawStream support) */
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
/**
* Frame types for binary multiplexing protocol.
*/
var FrameType = {
	JSON: 0,
	CHUNK: 1,
	END: 2,
	ERROR: 3
};
/** Full Content-Type header value with version parameter */
var TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/safeObjectMerge.js
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
	}
	if (source && typeof source === "object") {
		for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	if (!source) return Object.create(null);
	const obj = Object.create(null);
	for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
	return obj;
}
//#endregion
//#region node_modules/@tanstack/start-storage-context/dist/esm/async-local-storage.js
var GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
var globalObj = globalThis;
if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
var startStorage = globalObj[GLOBAL_STORAGE_KEY];
async function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getStartOptions.js
var getStartOptions = () => getStartContext().startOptions;
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getStartContextServerOnly.js
var getStartContextServerOnly = getStartContext;
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createServerFn.js
var createServerFn = (options, __opts) => {
	const resolvedOptions = __opts || options || {};
	if (typeof resolvedOptions.method === "undefined") resolvedOptions.method = "GET";
	const res = {
		options: resolvedOptions,
		middleware: (middleware) => {
			const newMiddleware = [...resolvedOptions.middleware || []];
			middleware.map((m) => {
				if (TSS_SERVER_FUNCTION_FACTORY in m) {
					if (m.options.middleware) newMiddleware.push(...m.options.middleware);
				} else newMiddleware.push(m);
			});
			const res = createServerFn(void 0, {
				...resolvedOptions,
				middleware: newMiddleware
			});
			res[TSS_SERVER_FUNCTION_FACTORY] = true;
			return res;
		},
		inputValidator: (inputValidator) => {
			return createServerFn(void 0, {
				...resolvedOptions,
				inputValidator
			});
		},
		handler: (...args) => {
			const [extractedFn, serverFn] = args;
			const newOptions = {
				...resolvedOptions,
				extractedFn,
				serverFn
			};
			const resolvedMiddleware = [...newOptions.middleware || [], serverFnBaseToMiddleware(newOptions)];
			extractedFn.method = resolvedOptions.method;
			return Object.assign(async (opts) => {
				const result = await executeMiddleware$1(resolvedMiddleware, "client", {
					...extractedFn,
					...newOptions,
					data: opts?.data,
					headers: opts?.headers,
					signal: opts?.signal,
					fetch: opts?.fetch,
					context: createNullProtoObject()
				});
				const redirect = parseRedirect(result.error);
				if (redirect) throw redirect;
				if (result.error) throw result.error;
				return result.result;
			}, {
				...extractedFn,
				method: resolvedOptions.method,
				__executeServer: async (opts) => {
					const startContext = getStartContextServerOnly();
					const serverContextAfterGlobalMiddlewares = startContext.contextAfterGlobalMiddlewares;
					return await executeMiddleware$1(resolvedMiddleware, "server", {
						...extractedFn,
						...opts,
						serverFnMeta: extractedFn.serverFnMeta,
						context: safeObjectMerge(opts.context, serverContextAfterGlobalMiddlewares),
						request: startContext.request
					}).then((d) => ({
						result: d.result,
						error: d.error,
						context: d.sendContext
					}));
				}
			});
		}
	};
	const fun = (options) => {
		return createServerFn(void 0, {
			...resolvedOptions,
			...options
		});
	};
	return Object.assign(fun, res);
};
async function executeMiddleware$1(middlewares, env, opts) {
	let flattenedMiddlewares = flattenMiddlewares([...getStartOptions()?.functionMiddleware || [], ...middlewares]);
	if (env === "server") {
		const startContext = getStartContextServerOnly({ throwIfNotFound: false });
		if (startContext?.executedRequestMiddlewares) flattenedMiddlewares = flattenedMiddlewares.filter((m) => !startContext.executedRequestMiddlewares.has(m));
	}
	const callNextMiddleware = async (ctx) => {
		const nextMiddleware = flattenedMiddlewares.shift();
		if (!nextMiddleware) return ctx;
		try {
			if ("inputValidator" in nextMiddleware.options && nextMiddleware.options.inputValidator && env === "server") ctx.data = await execValidator(nextMiddleware.options.inputValidator, ctx.data);
			let middlewareFn = void 0;
			if (env === "client") {
				if ("client" in nextMiddleware.options) middlewareFn = nextMiddleware.options.client;
			} else if ("server" in nextMiddleware.options) middlewareFn = nextMiddleware.options.server;
			if (middlewareFn) {
				const userNext = async (userCtx = {}) => {
					const result = await callNextMiddleware({
						...ctx,
						...userCtx,
						context: safeObjectMerge(ctx.context, userCtx.context),
						sendContext: safeObjectMerge(ctx.sendContext, userCtx.sendContext),
						headers: mergeHeaders(ctx.headers, userCtx.headers),
						_callSiteFetch: ctx._callSiteFetch,
						fetch: ctx._callSiteFetch ?? userCtx.fetch ?? ctx.fetch,
						result: userCtx.result !== void 0 ? userCtx.result : userCtx instanceof Response ? userCtx : ctx.result,
						error: userCtx.error ?? ctx.error
					});
					if (result.error) throw result.error;
					return result;
				};
				const result = await middlewareFn({
					...ctx,
					next: userNext
				});
				if (isRedirect$1(result)) return {
					...ctx,
					error: result
				};
				if (result instanceof Response) return {
					...ctx,
					result
				};
				if (!result) throw new Error("User middleware returned undefined. You must call next() or return a result in your middlewares.");
				return result;
			}
			return callNextMiddleware(ctx);
		} catch (error) {
			return {
				...ctx,
				error
			};
		}
	};
	return callNextMiddleware({
		...opts,
		headers: opts.headers || {},
		sendContext: opts.sendContext || {},
		context: opts.context || createNullProtoObject(),
		_callSiteFetch: opts.fetch
	});
}
function flattenMiddlewares(middlewares, maxDepth = 100) {
	const seen = /* @__PURE__ */ new Set();
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
async function execValidator(validator, input) {
	if (validator == null) return {};
	if ("~standard" in validator) {
		const result = await validator["~standard"].validate(input);
		if (result.issues) throw new Error(JSON.stringify(result.issues, void 0, 2));
		return result.value;
	}
	if ("parse" in validator) return validator.parse(input);
	if (typeof validator === "function") return validator(input);
	throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options) {
	return {
		"~types": void 0,
		options: {
			inputValidator: options.inputValidator,
			client: async ({ next, sendContext, fetch, ...ctx }) => {
				const payload = {
					...ctx,
					context: sendContext,
					fetch
				};
				return next(await options.extractedFn?.(payload));
			},
			server: async ({ next, ...ctx }) => {
				const result = await options.serverFn?.(ctx);
				return next({
					...ctx,
					result
				});
			}
		}
	};
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createMiddleware.js
var createMiddleware = (options, __opts) => {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		inputValidator: (inputValidator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { inputValidator }));
		},
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
};
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createStart.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart = (getOptions) => {
	return {
		getOptions: async () => {
			const options = await getOptions();
			if (options.serializationAdapters) {
				const deduped = /* @__PURE__ */ new Set();
				dedupeSerializationAdapters(deduped, options.serializationAdapters);
				options.serializationAdapters = Array.from(deduped);
			}
			return options;
		},
		createMiddleware
	};
};
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getDefaultSerovalPlugins.js
function getDefaultSerovalPlugins() {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/frame-protocol.js
/**
* Binary frame protocol for multiplexing JSON and raw streams over HTTP.
*
* Frame format: [type:1][streamId:4][length:4][payload:length]
* - type: 1 byte - frame type (JSON, CHUNK, END, ERROR)
* - streamId: 4 bytes big-endian uint32 - stream identifier
* - length: 4 bytes big-endian uint32 - payload length
* - payload: variable length bytes
*/
/** Cached TextEncoder for frame encoding */
var textEncoder = new TextEncoder();
/** Shared empty payload for END frames - avoids allocation per call */
var EMPTY_PAYLOAD = new Uint8Array(0);
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/**
* Encodes a JSON frame (type 0, streamId 0).
*/
function encodeJSONFrame(json) {
	return encodeFrame(FrameType.JSON, 0, textEncoder.encode(json));
}
/**
* Encodes a raw stream chunk frame.
*/
function encodeChunkFrame(streamId, chunk) {
	return encodeFrame(FrameType.CHUNK, streamId, chunk);
}
/**
* Encodes a raw stream end frame.
*/
function encodeEndFrame(streamId) {
	return encodeFrame(FrameType.END, streamId, EMPTY_PAYLOAD);
}
/**
* Encodes a raw stream error frame.
*/
function encodeErrorFrame(streamId, error) {
	const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
	return encodeFrame(FrameType.ERROR, streamId, textEncoder.encode(message));
}
/**
* Creates a multiplexed ReadableStream from JSON stream and raw streams.
*
* The JSON stream emits NDJSON lines (from seroval's toCrossJSONStream).
* Raw streams are pumped concurrently, interleaved with JSON frames.
*
* Supports late stream registration for RawStreams discovered after initial
* serialization (e.g., from resolved Promises).
*
* @param jsonStream Stream of JSON strings (each string is one NDJSON line)
* @param rawStreams Map of stream IDs to raw binary streams (known at start)
* @param lateStreamSource Optional stream of late registrations for streams discovered later
*/
function createMultiplexedStream(jsonStream, rawStreams, lateStreamSource) {
	let controller;
	let cancelled = false;
	const readers = [];
	const enqueue = (frame) => {
		if (cancelled) return false;
		try {
			controller.enqueue(frame);
			return true;
		} catch {
			return false;
		}
	};
	const errorOutput = (error) => {
		if (cancelled) return;
		cancelled = true;
		try {
			controller.error(error);
		} catch {}
		for (const reader of readers) reader.cancel().catch(() => {});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) {
					enqueue(encodeEndFrame(streamId));
					return;
				}
				if (!enqueue(encodeChunkFrame(streamId, value))) return;
			}
		} catch (error) {
			enqueue(encodeErrorFrame(streamId, error));
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpJSON() {
		const reader = jsonStream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) return;
				if (!enqueue(encodeJSONFrame(value))) return;
			}
		} catch (error) {
			errorOutput(error);
			throw error;
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpLateStreams() {
		if (!lateStreamSource) return [];
		const lateStreamPumps = [];
		const reader = lateStreamSource.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) break;
				lateStreamPumps.push(pumpRawStream(value.id, value.stream));
			}
		} finally {
			reader.releaseLock();
		}
		return lateStreamPumps;
	}
	return new ReadableStream({
		async start(ctrl) {
			controller = ctrl;
			const pumps = [pumpJSON()];
			for (const [streamId, stream] of rawStreams) pumps.push(pumpRawStream(streamId, stream));
			if (lateStreamSource) pumps.push(pumpLateStreams());
			try {
				const latePumps = (await Promise.all(pumps)).find(Array.isArray);
				if (latePumps && latePumps.length > 0) await Promise.all(latePumps);
				if (!cancelled) try {
					controller.close();
				} catch {}
			} catch {}
		},
		cancel() {
			cancelled = true;
			for (const reader of readers) reader.cancel().catch(() => {});
			readers.length = 0;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/server-functions-handler.js
var serovalPlugins = void 0;
var FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
var MAX_PAYLOAD_SIZE = 1e6;
var handleServerAction = async ({ request, context, serverFnId }) => {
	const methodUpper = request.method.toUpperCase();
	const url = new URL(request.url);
	const action = await getServerFnById(serverFnId, { origin: "client" });
	if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
		status: 405,
		headers: { Allow: action.method }
	});
	const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
	if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
	const contentType = request.headers.get("Content-Type");
	function parsePayload(payload) {
		return fromJSON(payload, { plugins: serovalPlugins });
	}
	return await (async () => {
		try {
			let res = await (async () => {
				if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
					if (methodUpper === "GET") throw new Error("Invariant failed: GET requests with FormData payloads are not supported");
					const formData = await request.formData();
					const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
					formData.delete(TSS_FORMDATA_CONTEXT);
					const params = {
						context,
						data: formData,
						method: methodUpper
					};
					if (typeof serializedContext === "string") try {
						const deserializedContext = fromJSON(JSON.parse(serializedContext), { plugins: serovalPlugins });
						if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
					} catch (e) {
						console.warn("Failed to parse FormData context:", e);
					}
					return await action(params);
				}
				if (methodUpper === "GET") {
					const payloadParam = url.searchParams.get("payload");
					if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
					const payload = payloadParam ? parsePayload(JSON.parse(payloadParam)) : {};
					payload.context = safeObjectMerge(payload.context, context);
					payload.method = methodUpper;
					return await action(payload);
				}
				let jsonPayload;
				if (contentType?.includes("application/json")) jsonPayload = await request.json();
				const payload = jsonPayload ? parsePayload(jsonPayload) : {};
				payload.context = safeObjectMerge(payload.context, context);
				payload.method = methodUpper;
				return await action(payload);
			})();
			const unwrapped = res.result || res.error;
			if (isNotFound(res)) res = isNotFoundResponse(res);
			if (!isServerFn) return unwrapped;
			if (unwrapped instanceof Response) {
				if (isRedirect$1(unwrapped)) return unwrapped;
				unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
				return unwrapped;
			}
			return serializeResult(res);
			function serializeResult(res) {
				let nonStreamingBody = void 0;
				const alsResponse = getResponse();
				if (res !== void 0) {
					const rawStreams = /* @__PURE__ */ new Map();
					let initialPhase = true;
					let lateStreamWriter;
					let lateStreamReadable = void 0;
					const pendingLateStreams = [];
					const plugins = [createRawStreamRPCPlugin((id, stream) => {
						if (initialPhase) {
							rawStreams.set(id, stream);
							return;
						}
						if (lateStreamWriter) {
							lateStreamWriter.write({
								id,
								stream
							}).catch(() => {});
							return;
						}
						pendingLateStreams.push({
							id,
							stream
						});
					}), ...serovalPlugins || []];
					let done = false;
					const callbacks = {
						onParse: (value) => {
							nonStreamingBody = value;
						},
						onDone: () => {
							done = true;
						},
						onError: (error) => {
							throw error;
						}
					};
					toCrossJSONStream(res, {
						refs: /* @__PURE__ */ new Map(),
						plugins,
						onParse(value) {
							callbacks.onParse(value);
						},
						onDone() {
							callbacks.onDone();
						},
						onError: (error) => {
							callbacks.onError(error);
						}
					});
					initialPhase = false;
					if (done && rawStreams.size === 0) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
						status: alsResponse.status,
						statusText: alsResponse.statusText,
						headers: {
							"Content-Type": "application/json",
							[X_TSS_SERIALIZED]: "true"
						}
					});
					const { readable, writable } = new TransformStream();
					lateStreamReadable = readable;
					lateStreamWriter = writable.getWriter();
					for (const registration of pendingLateStreams) lateStreamWriter.write(registration).catch(() => {});
					pendingLateStreams.length = 0;
					const multiplexedStream = createMultiplexedStream(new ReadableStream({
						start(controller) {
							callbacks.onParse = (value) => {
								controller.enqueue(JSON.stringify(value) + "\n");
							};
							callbacks.onDone = () => {
								try {
									controller.close();
								} catch {}
								lateStreamWriter?.close().catch(() => {}).finally(() => {
									lateStreamWriter = void 0;
								});
							};
							callbacks.onError = (error) => {
								controller.error(error);
								lateStreamWriter?.abort(error).catch(() => {}).finally(() => {
									lateStreamWriter = void 0;
								});
							};
							if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
							if (done) callbacks.onDone();
						},
						cancel() {
							lateStreamWriter?.abort().catch(() => {});
							lateStreamWriter = void 0;
						}
					}), rawStreams, lateStreamReadable);
					return new Response(multiplexedStream, {
						status: alsResponse.status,
						statusText: alsResponse.statusText,
						headers: {
							"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
							[X_TSS_SERIALIZED]: "true"
						}
					});
				}
				return new Response(void 0, {
					status: alsResponse.status,
					statusText: alsResponse.statusText
				});
			}
		} catch (error) {
			if (error instanceof Response) return error;
			if (isNotFound(error)) return isNotFoundResponse(error);
			console.info();
			console.info("Server Fn Error!");
			console.info();
			console.error(error);
			console.info();
			const serializedError = JSON.stringify(await Promise.resolve(toCrossJSONAsync(error, {
				refs: /* @__PURE__ */ new Map(),
				plugins: serovalPlugins
			})));
			const response = getResponse();
			return new Response(serializedError, {
				status: response.status ?? 500,
				statusText: response.statusText,
				headers: {
					"Content-Type": "application/json",
					[X_TSS_SERIALIZED]: "true"
				}
			});
		}
	})();
};
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	return new Response(JSON.stringify(rest), {
		status: 404,
		headers: {
			"Content-Type": "application/json",
			...headers || {}
		}
	});
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/transformAssetUrls.js
var hasWarnedAboutDeprecatedTransformAssetUrls = false;
function warnDeprecatedTransformAssetUrls() {
	if (!hasWarnedAboutDeprecatedTransformAssetUrls) {
		hasWarnedAboutDeprecatedTransformAssetUrls = true;
		console.warn("[TanStack Start] `transformAssetUrls` is deprecated. Use `transformAssets` instead.");
	}
}
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "clientEntry") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function adaptTransformAssetUrlsToTransformAssets(transformFn) {
	return async ({ url, kind }) => ({ href: await transformFn({
		url,
		type: kind
	}) });
}
function adaptTransformAssetUrlsConfigToTransformAssets(transform) {
	warnDeprecatedTransformAssetUrls();
	if (typeof transform === "string") return transform;
	if (typeof transform === "function") return adaptTransformAssetUrlsToTransformAssets(transform);
	if ("createTransform" in transform && transform.createTransform) return {
		createTransform: async (ctx) => adaptTransformAssetUrlsToTransformAssets(await transform.createTransform(ctx)),
		cache: transform.cache,
		warmup: transform.warmup
	};
	return {
		transform: typeof transform.transform === "string" ? transform.transform : adaptTransformAssetUrlsToTransformAssets(transform.transform),
		cache: transform.cache,
		warmup: transform.warmup
	};
}
/**
* Builds the client entry `<script>` tag from a (possibly transformed) client
* entry URL and optional injected head scripts.
*/
function buildClientEntryScriptTag(clientEntry, injectedHeadScripts) {
	let script = `import(${JSON.stringify(clientEntry)})`;
	if (injectedHeadScripts) script = `${injectedHeadScripts};${script}`;
	return {
		tag: "script",
		attrs: {
			type: "module",
			async: true
		},
		children: script
	};
}
function assignManifestAssetLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	return next.crossOrigin ? next : { href: next.href };
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source.manifest);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestAssetLink(link).href,
				kind: "modulepreload"
			}));
			return assignManifestAssetLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.assets && !source.manifest.inlineCss) {
			for (const asset of route.assets) if (asset.tag === "link" && asset.attrs?.href) {
				const rel = asset.attrs.rel;
				if (!(typeof rel === "string" ? rel.split(/\s+/) : []).includes("stylesheet")) continue;
				const result = normalizeTransformAssetResult(await transformFn({
					url: asset.attrs.href,
					kind: "stylesheet"
				}));
				asset.attrs.href = result.href;
				if (result.crossOrigin) asset.attrs.crossOrigin = result.crossOrigin;
				else delete asset.attrs.crossOrigin;
			}
		}
	}
	const transformedClientEntry = normalizeTransformAssetResult(await transformFn({
		url: source.clientEntry,
		kind: "clientEntry"
	}));
	const rootRoute = manifest.routes[rootRouteId] = manifest.routes[rootRouteId] || {};
	rootRoute.assets = rootRoute.assets || [];
	rootRoute.assets.push(buildClientEntryScriptTag(transformedClientEntry.href, source.injectedHeadScripts));
	return manifest;
}
/**
* Builds a final Manifest from a StartManifestWithClientEntry without any
* URL transforms. Used when no transformAssetUrls option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifestWithClientEntry(source) {
	const scriptTag = buildClientEntryScriptTag(source.clientEntry, source.injectedHeadScripts);
	const baseRootRoute = source.manifest.routes[rootRouteId];
	const routes = {
		...source.manifest.routes,
		[rootRouteId]: {
			...baseRootRoute,
			assets: [...baseRootRoute?.assets || [], scriptTag]
		}
	};
	return {
		inlineCss: source.manifest.inlineCss,
		routes
	};
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/serializer/ServerFunctionSerializationAdapter.js
var ServerFunctionSerializationAdapter = createSerializationAdapter({
	key: "$TSS/serverfn",
	test: (v) => {
		if (typeof v !== "function") return false;
		if (!(TSS_SERVER_FUNCTION in v)) return false;
		return !!v[TSS_SERVER_FUNCTION];
	},
	toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
	fromSerializable: ({ functionId }) => {
		const fn = async (opts, signal) => {
			return (await (await getServerFnById(functionId, { origin: "client" }))(opts ?? {}, signal)).result;
		};
		return fn;
	}
});
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createStartHandler.js
function getStartResponseHeaders(opts) {
	return mergeHeaders$1({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.stores.matches.get().map((match) => {
		return match.headers;
	}));
}
var entriesPromise;
var baseManifestPromise;
/**
* Cached final manifest (with client entry script tag). In production,
* this is computed once and reused for every request when caching is enabled.
*/
var cachedFinalManifestPromise;
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		import("./assets/router-DZyFEjMR.js"),
		import("./assets/start-DgEWgqIp.js"),
		import("./assets/__23tanstack-start-plugin-adapters-BWZzj-RW.js")
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
/**
* Returns the raw manifest data (without client entry script tag baked in).
* In dev mode, always returns fresh data. In prod, cached.
*/
function getBaseManifest(matchedRoutes) {
	if (!baseManifestPromise) baseManifestPromise = getStartManifest();
	return baseManifestPromise;
}
/**
* Resolves a final Manifest for a given request.
*
* - No transform: builds client entry script tag and returns (cached in prod).
* - Cached transform: transforms all URLs + builds script tag, caches result.
* - Per-request transform: deep-clones base manifest, transforms per-request.
*/
async function resolveManifest(matchedRoutes, transformFn, cache) {
	const base = await getBaseManifest(matchedRoutes);
	const computeFinalManifest = async () => {
		return transformFn ? await transformManifestAssets(base, transformFn, { clone: !cache }) : buildManifestWithClientEntry(base);
	};
	if (!transformFn || cache) {
		if (!cachedFinalManifestPromise) cachedFinalManifestPromise = computeFinalManifest();
		return cachedFinalManifestPromise;
	}
	return computeFinalManifest();
}
var ROUTER_BASEPATH = "/";
var SERVER_FN_BASE = "/_serverFn/";
var IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
var IS_SHELL_ENV = process.env.TSS_SHELL === "true";
var IS_DEV = true;
var ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
var ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
/**
* Check if a value is a special response (Response or Redirect)
*/
function isSpecialResponse(value) {
	return value instanceof Response || isRedirect$1(value);
}
/**
* Normalize middleware result to context shape
*/
function handleCtxResult(result) {
	if (isSpecialResponse(result)) return { response: result };
	return result;
}
/**
* Execute a middleware chain
*/
function executeMiddleware(middlewares, ctx) {
	let index = -1;
	const next = async (nextCtx) => {
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const middleware = middlewares[index];
		if (!middleware) return ctx;
		let result;
		try {
			result = await middleware({
				...ctx,
				next
			});
		} catch (err) {
			if (isSpecialResponse(err)) {
				ctx.response = err;
				return ctx;
			}
			throw err;
		}
		const normalized = handleCtxResult(result);
		if (normalized) {
			if (normalized.response !== void 0) ctx.response = normalized.response;
			if (normalized.context) ctx.context = safeObjectMerge(ctx.context, normalized.context);
		}
		return ctx;
	};
	return next();
}
/**
* Wrap a route handler as middleware
*/
function handlerToMiddleware(handler, mayDefer = false) {
	if (mayDefer) return handler;
	return async (ctx) => {
		const response = await handler({
			...ctx,
			next: throwIfMayNotDefer
		});
		if (!response) throwRouteHandlerError();
		return response;
	};
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const transformAssetsOption = typeof cbOrOptions === "function" ? void 0 : cbOrOptions.transformAssets;
	const transformAssetUrlsOption = typeof cbOrOptions === "function" ? void 0 : cbOrOptions.transformAssetUrls;
	const transformOption = transformAssetsOption !== void 0 ? resolveTransformAssetsConfig(transformAssetsOption) : transformAssetUrlsOption !== void 0 ? resolveTransformAssetsConfig(adaptTransformAssetUrlsConfigToTransformAssets(transformAssetUrlsOption)) : void 0;
	const warmupTransformManifest = !!transformAssetsOption && typeof transformAssetsOption === "object" && "warmup" in transformAssetsOption && transformAssetsOption.warmup === true || !!transformAssetUrlsOption && typeof transformAssetUrlsOption === "object" && transformAssetUrlsOption.warmup === true;
	const resolvedTransformConfig = transformOption;
	const cache = resolvedTransformConfig ? resolvedTransformConfig.cache : true;
	const shouldCacheCreateTransform = cache && true;
	let cachedCreateTransformPromise;
	const getTransformFn = async (opts) => {
		if (!resolvedTransformConfig) return void 0;
		if (resolvedTransformConfig.type === "createTransform") {
			if (shouldCacheCreateTransform) {
				if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(resolvedTransformConfig.createTransform(opts)).catch((error) => {
					cachedCreateTransformPromise = void 0;
					throw error;
				});
				return cachedCreateTransformPromise;
			}
			return resolvedTransformConfig.createTransform(opts);
		}
		return resolvedTransformConfig.transformFn;
	};
	if (warmupTransformManifest && cache && !cachedFinalManifestPromise) {
		const warmupPromise = (async () => {
			const base = await getBaseManifest(void 0);
			const transformFn = await getTransformFn({ warmup: true });
			return transformFn ? await transformManifestAssets(base, transformFn, { clone: false }) : buildManifestWithClientEntry(base);
		})();
		cachedFinalManifestPromise = warmupPromise;
		warmupPromise.catch(() => {
			if (cachedFinalManifestPromise === warmupPromise) cachedFinalManifestPromise = void 0;
			cachedCreateTransformPromise = void 0;
		});
	}
	const startRequestResolver = async (request, requestOpts) => {
		let router = null;
		let cbWillCleanup = false;
		try {
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = getOrigin(request);
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await getEntries();
			const startOptions = await entries.startEntry.startInstance?.getOptions() || {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				serializationAdapters
			};
			const flattenedRequestMiddlewares = startOptions.requestMiddleware ? flattenMiddlewares(startOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = async () => {
				if (router) return router;
				router = await entries.routerEntry.getRouter();
				let isShell = IS_SHELL_ENV;
				if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
				const history = createMemoryHistory({ initialEntries: [href] });
				router.update({
					history,
					isShell,
					isPrerendering: IS_PRERENDERING,
					origin: router.options.origin ?? origin,
					defaultSsr: requestStartOptions.defaultSsr,
					serializationAdapters: [...requestStartOptions.serializationAdapters, ...router.options.serializationAdapters || []],
					basepath: ROUTER_BASEPATH
				});
				return router;
			};
			if (SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE)) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				const serverFnHandler = async ({ context }) => {
					return runWithStartContext({
						getRouter,
						startOptions: requestStartOptions,
						contextAfterGlobalMiddlewares: context,
						request,
						executedRequestMiddlewares,
						handlerType: "serverFn"
					}, () => handleServerAction({
						request,
						context: requestOpts?.context,
						serverFnId
					}));
				};
				return handleRedirectResponse((await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), serverFnHandler], {
					request,
					pathname: url.pathname,
					context: createNullProtoObject(requestOpts?.context)
				})).response, request, getRouter);
			}
			const executeRouter = async (serverContext, matchedRoutes) => {
				const acceptParts = (request.headers.get("Accept") || "*/*").split(",");
				if (!["*/*", "text/html"].some((mimeType) => acceptParts.some((part) => part.trim().startsWith(mimeType)))) return Response.json({ error: "Only HTML requests are supported here" }, { status: 500 });
				const manifest = await resolveManifest(matchedRoutes, await getTransformFn({
					warmup: false,
					request
				}), cache);
				const routerInstance = await getRouter();
				attachRouterServerSsrUtils({
					router: routerInstance,
					manifest,
					getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets,
					includeUnmatchedRouteAssets: false
				});
				routerInstance.update({ additionalContext: { serverContext } });
				await routerInstance.load();
				if (routerInstance.state.redirect) return routerInstance.state.redirect;
				const ctx = getStartContext({ throwIfNotFound: false });
				await routerInstance.serverSsr.dehydrate({ requestAssets: ctx?.requestAssets });
				const responseHeaders = getStartResponseHeaders({ router: routerInstance });
				cbWillCleanup = true;
				return cb({
					request,
					router: routerInstance,
					responseHeaders
				});
			};
			const requestHandlerMiddleware = async ({ context }) => {
				return runWithStartContext({
					getRouter,
					startOptions: requestStartOptions,
					contextAfterGlobalMiddlewares: context,
					request,
					executedRequestMiddlewares,
					handlerType: "router"
				}, async () => {
					try {
						return await handleServerRoutes({
							getRouter,
							request,
							url,
							executeRouter,
							context,
							executedRequestMiddlewares
						});
					} catch (err) {
						if (err instanceof Response) return err;
						throw err;
					}
				});
			};
			return handleRedirectResponse((await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), requestHandlerMiddleware], {
				request,
				pathname: url.pathname,
				context: createNullProtoObject(requestOpts?.context)
			})).response, request, getRouter);
		} finally {
			if (router && !cbWillCleanup) router.serverSsr?.cleanup();
			router = null;
		}
	};
	return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, request, getRouter) {
	if (!isRedirect$1(response)) return response;
	if (isResolvedRedirect(response)) {
		if (request.headers.get("x-tsr-serverFn") === "true") return Response.json({
			...response.options,
			isSerializedRedirect: true
		}, { headers: response.headers });
		return response;
	}
	const opts = response.options;
	if (opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if ([
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	const redirect = (await getRouter()).resolveRedirect(response);
	if (request.headers.get("x-tsr-serverFn") === "true") return Response.json({
		...response.options,
		isSerializedRedirect: true
	}, { headers: response.headers });
	return redirect;
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const { matchedRoutes, foundRoute, routeParams } = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && routeParams["**"] === void 0;
	const routeMiddlewares = [];
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const handler = handlers[request.method.toUpperCase()] ?? handlers["ANY"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler === "function") routeMiddlewares.push(handlerToMiddleware(handler, mayDefer));
			else {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
				if (handler.handler) routeMiddlewares.push(handlerToMiddleware(handler.handler, mayDefer));
			}
		}
	}
	routeMiddlewares.push((ctx) => executeRouter(ctx.context, matchedRoutes));
	return (await executeMiddleware(routeMiddlewares, {
		request,
		context,
		params: routeParams,
		pathname
	})).response;
}
//#endregion
//#region node_modules/@tanstack/react-start/dist/plugin/default-entry/server.ts
var fetch = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var server_default = createServerEntry({ fetch });
//#endregion
export { getServerFnById as a, createServerEntry, server_default as default, TSS_SERVER_FUNCTION as i, createMiddleware as n, createServerFn as r, createStart as t };
