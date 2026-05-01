//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({
	routes: {
		__root__: {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/__root.tsx",
			children: [
				"/",
				"/app",
				"/demo",
				"/login"
			],
			assets: [{
				tag: "link",
				attrs: {
					rel: "stylesheet",
					href: "/assets/index-Dw1AWroN.css",
					type: "text/css"
				}
			}],
			preloads: ["/assets/index-BVLLSF8I.js", "/assets/jsx-dev-runtime-CKlSMCfp.js"]
		},
		"/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/index.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/routes-DKXcdEY2.js"]
		},
		"/app": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app.tsx",
			children: [
				"/app/buyers",
				"/app/documents",
				"/app/leads",
				"/app/properties",
				"/app/sellers",
				"/app/transactions",
				"/app/admin",
				"/app/billing",
				"/app/calendar",
				"/app/dashboard",
				"/app/organizations",
				"/app/reports",
				"/app/settings",
				"/app/tasks"
			],
			assets: [],
			preloads: [
				"/assets/app-DeOQghlh.js",
				"/assets/auth-client-Ch9hsjtp.js",
				"/assets/useQuery-qiwA_tFY.js",
				"/assets/useServerFn-CA7kTB72.js"
			]
		},
		"/demo": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/demo.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/demo-Cg9EZuLG.js"]
		},
		"/login": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/login.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/login-Cp0oAdBb.js",
				"/assets/auth-client-Ch9hsjtp.js",
				"/assets/zod-CLrM97u9.js"
			]
		},
		"/app/buyers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/route.tsx",
			children: [
				"/app/buyers/$buyerId",
				"/app/buyers/new",
				"/app/buyers/"
			],
			assets: [],
			preloads: ["/assets/route-DfMveAl7.js"]
		},
		"/app/documents": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/route.tsx",
			children: [
				"/app/documents/$documentId",
				"/app/documents/new",
				"/app/documents/"
			],
			assets: [],
			preloads: ["/assets/route-BkX3iMkW.js"]
		},
		"/app/leads": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/route.tsx",
			children: [
				"/app/leads/$leadId",
				"/app/leads/new",
				"/app/leads/"
			],
			assets: [],
			preloads: ["/assets/route-tXIr-gXf.js"]
		},
		"/app/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/route.tsx",
			children: ["/app/properties/$propertyId", "/app/properties/"],
			assets: [],
			preloads: ["/assets/route-D76eMo4l.js"]
		},
		"/app/sellers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/route.tsx",
			children: [
				"/app/sellers/$sellerId",
				"/app/sellers/new",
				"/app/sellers/"
			],
			assets: [],
			preloads: ["/assets/route-DmNg0XIX.js"]
		},
		"/app/transactions": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/route.tsx",
			children: [
				"/app/transactions/$transactionId",
				"/app/transactions/new",
				"/app/transactions/"
			],
			assets: [],
			preloads: ["/assets/route-WhDNDIKq.js"]
		},
		"/app/admin": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/admin.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/admin-DX4kcHbT.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/billing": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/billing.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/billing-Dc1cFJJy.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/calendar": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/calendar.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/calendar-DRG39Yap.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/dashboard": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/dashboard.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/dashboard-CYFLJ5FX.js", "/assets/PageHeader-Ci4ma83o.js"]
		},
		"/app/organizations": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/organizations.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/organizations-CHATF3Qk.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/reports": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/reports-DNv43Dzt.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/settings": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/settings.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/settings-Cfr55tB5.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/tasks": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/tasks.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/tasks-sb5h1-2e.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/buyers/$buyerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_buyerId-CWlIIZmq.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/BuyerForm-DJIMzLCN.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/buyers-crud-DNuH66TR.js"
			]
		},
		"/app/buyers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-DKm_fJNn.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/BuyerForm-DJIMzLCN.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/buyers-crud-DNuH66TR.js"
			]
		},
		"/app/documents/$documentId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/$documentId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_documentId-BmMVvCJ8.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/documents-crud-v34hJzC6.js"
			]
		},
		"/app/documents/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-DIGYa9pA.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/documents-crud-v34hJzC6.js"
			]
		},
		"/app/leads/$leadId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_leadId-BKZ0r2OC.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/LeadForm-BJQXourI.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/leads-crud-JIrnq90v.js"
			]
		},
		"/app/leads/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-iq-RYySa.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/LeadForm-BJQXourI.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/leads-crud-JIrnq90v.js"
			]
		},
		"/app/properties/$propertyId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_propertyId-CbNBsHQs.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/properties-crud-0dzm4lyj.js"
			]
		},
		"/app/sellers/$sellerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/$sellerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_sellerId-BT4qDcJN.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/SellerForm-BjCvb_07.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/sellers-crud-_5LSZPvX.js"
			]
		},
		"/app/sellers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BJJUKzP4.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/SellerForm-BjCvb_07.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/sellers-crud-_5LSZPvX.js"
			]
		},
		"/app/transactions/$transactionId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/$transactionId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_transactionId-DzkiNUYw.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/transactions-crud-CpR6_7Z8.js"
			]
		},
		"/app/transactions/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-TZtn1uFc.js",
				"/assets/mutation-error-BtkSzjr1.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/transactions-crud-CpR6_7Z8.js"
			]
		},
		"/app/buyers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buyers-JXUTR1Ve.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/buyers-crud-DNuH66TR.js"
			]
		},
		"/app/documents/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/documents-DN-gTPR4.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/documents-crud-v34hJzC6.js"
			]
		},
		"/app/leads/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/leads-uam_poaf.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/leads-crud-JIrnq90v.js"
			]
		},
		"/app/properties/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/properties-CGrOy2bF.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/properties-crud-0dzm4lyj.js"
			]
		},
		"/app/sellers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/sellers-Y1R-MAkV.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/sellers-crud-_5LSZPvX.js"
			]
		},
		"/app/transactions/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/transactions-OAoFCCB2.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-KhcqJNaJ.js",
				"/assets/transactions-crud-CpR6_7Z8.js"
			]
		}
	},
	clientEntry: "/assets/index-BVLLSF8I.js"
});
//#endregion
export { tsrStartManifest };
