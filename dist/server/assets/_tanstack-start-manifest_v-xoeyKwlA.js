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
					href: "/assets/index-CxBCTFx2.css",
					type: "text/css"
				}
			}],
			preloads: ["/assets/index-TA4CHtSe.js", "/assets/jsx-dev-runtime-CKlSMCfp.js"]
		},
		"/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/index.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/routes-BgvBbjU3.js"]
		},
		"/app": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app.tsx",
			children: [
				"/app/buyers",
				"/app/leads",
				"/app/sellers",
				"/app/admin",
				"/app/billing",
				"/app/calendar",
				"/app/dashboard",
				"/app/documents",
				"/app/organizations",
				"/app/properties",
				"/app/reports",
				"/app/settings",
				"/app/tasks",
				"/app/transactions"
			],
			assets: [],
			preloads: [
				"/assets/app-DlTMKHk-.js",
				"/assets/auth-client-Ch9hsjtp.js",
				"/assets/useQuery-DAfe4lta.js",
				"/assets/useServerFn-uzk-FpOu.js"
			]
		},
		"/demo": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/demo.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/demo-DSHl2mrn.js"]
		},
		"/login": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/login.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/login-k8Lid17T.js",
				"/assets/auth-client-Ch9hsjtp.js",
				"/assets/zod-orFBT4Ya.js"
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
			preloads: ["/assets/route-DQC2QdZR.js"]
		},
		"/app/leads": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/route.tsx",
			children: [
				"/app/leads/$leadId",
				"/app/leads/new",
				"/app/leads/"
			],
			assets: [],
			preloads: ["/assets/route-BgqL2QBi.js"]
		},
		"/app/sellers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/route.tsx",
			children: [
				"/app/sellers/$sellerId",
				"/app/sellers/new",
				"/app/sellers/"
			],
			assets: [],
			preloads: ["/assets/route-DynAvug1.js"]
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
			preloads: ["/assets/dashboard-D7UAyllB.js", "/assets/PageHeader-Ci4ma83o.js"]
		},
		"/app/documents": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/documents-DOBmIeEY.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/organizations": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/organizations.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/organizations-3wCmvY0p.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/properties-L0Xy1xKy.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/reports": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/reports-CMbPAGQw.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/settings": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/settings.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/settings-BKIgjsFx.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/tasks": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/tasks.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/tasks-jkqnZvaZ.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/transactions": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/transactions-Ch2gDH_5.js", "/assets/CrmPlaceholderPage-CcfTdI2F.js"]
		},
		"/app/buyers/$buyerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_buyerId-DNFNULZB.js",
				"/assets/mutation-error-y5q2XUhC.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/BuyerForm-jZhu37KR.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/buyers-crud-ZXU2e98X.js"
			]
		},
		"/app/buyers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-C0VTrCwm.js",
				"/assets/mutation-error-y5q2XUhC.js",
				"/assets/BuyerForm-jZhu37KR.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/buyers-crud-ZXU2e98X.js"
			]
		},
		"/app/leads/$leadId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_leadId-zSJwIhci.js",
				"/assets/mutation-error-y5q2XUhC.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/LeadForm-DDfqHgfe.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/leads-crud-5zO9hsIL.js"
			]
		},
		"/app/leads/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-DPDTTuiU.js",
				"/assets/mutation-error-y5q2XUhC.js",
				"/assets/LeadForm-DDfqHgfe.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/leads-crud-5zO9hsIL.js"
			]
		},
		"/app/sellers/$sellerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/$sellerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_sellerId-DEEX_T3a.js",
				"/assets/mutation-error-y5q2XUhC.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/SellerForm-Ci3ZYdcN.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/sellers-crud-RHhMTJP3.js"
			]
		},
		"/app/sellers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-CkmhWwSZ.js",
				"/assets/mutation-error-y5q2XUhC.js",
				"/assets/SellerForm-Ci3ZYdcN.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/sellers-crud-RHhMTJP3.js"
			]
		},
		"/app/buyers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buyers-BmB83-p4.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-uXLyHjGu.js",
				"/assets/buyers-crud-ZXU2e98X.js"
			]
		},
		"/app/leads/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/leads-DW3VEP5g.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/crm-labels-uXLyHjGu.js",
				"/assets/leads-crud-5zO9hsIL.js"
			]
		},
		"/app/sellers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/sellers-CPUBOFJC.js",
				"/assets/CrmStates-DR8vwDMO.js",
				"/assets/PageHeader-Ci4ma83o.js",
				"/assets/sellers-crud-RHhMTJP3.js"
			]
		}
	},
	clientEntry: "/assets/index-TA4CHtSe.js"
});
//#endregion
export { tsrStartManifest };
