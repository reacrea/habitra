//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({
	routes: {
		__root__: {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/__root.tsx",
			children: [
				"/",
				"/app",
				"/buy",
				"/demo",
				"/login",
				"/properties",
				"/rent",
				"/sell"
			],
			assets: [{
				tag: "link",
				attrs: {
					rel: "stylesheet",
					href: "/assets/index-BUuPAoSC.css",
					type: "text/css"
				}
			}],
			preloads: [
				"/assets/index-gGlAZNfZ.js",
				"/assets/jsx-dev-runtime-CKlSMCfp.js",
				"/assets/redirect-aRimoemw.js",
				"/assets/schemas-q2DAZmWi.js"
			]
		},
		"/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/routes-J5Un-Xt4.js",
				"/assets/useQuery-CEEpDyih.js",
				"/assets/useServerFn-xnVEofLc.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-CdsVQ0PC.js",
				"/assets/public-b2c-DFm168Cb.js"
			]
		},
		"/app": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app.tsx",
			children: [
				"/app/buyers",
				"/app/documents",
				"/app/leads",
				"/app/properties",
				"/app/reports",
				"/app/sellers",
				"/app/transactions",
				"/app/admin",
				"/app/billing",
				"/app/calendar",
				"/app/dashboard",
				"/app/organizations",
				"/app/settings",
				"/app/tasks"
			],
			assets: [],
			preloads: [
				"/assets/app-D8xpVh3b.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/useQuery-CEEpDyih.js",
				"/assets/useServerFn-xnVEofLc.js"
			]
		},
		"/buy": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/buy.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buy-Bl8_LMeT.js",
				"/assets/useQuery-CEEpDyih.js",
				"/assets/useServerFn-xnVEofLc.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-CdsVQ0PC.js",
				"/assets/public-b2c-DFm168Cb.js"
			]
		},
		"/demo": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/demo.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/demo-8vTQPg5P.js"]
		},
		"/login": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/login.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/login-HVvN_wjH.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/zod-SVTp_rAW.js"
			]
		},
		"/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/properties.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/properties-LDhEu3LP.js",
				"/assets/useQuery-CEEpDyih.js",
				"/assets/useServerFn-xnVEofLc.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PublicLayout-CdsVQ0PC.js",
				"/assets/public-b2c-DFm168Cb.js"
			]
		},
		"/rent": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/rent.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/rent-Dlt9Egz2.js",
				"/assets/useQuery-CEEpDyih.js",
				"/assets/useServerFn-xnVEofLc.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-CdsVQ0PC.js",
				"/assets/public-b2c-DFm168Cb.js"
			]
		},
		"/sell": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/sell.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/sell-DTFKBnyF.js", "/assets/PublicLayout-CdsVQ0PC.js"]
		},
		"/app/buyers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/route.tsx",
			children: [
				"/app/buyers/$buyerId",
				"/app/buyers/new",
				"/app/buyers/"
			],
			assets: [],
			preloads: ["/assets/route-Z48BT_1r.js"]
		},
		"/app/documents": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/route.tsx",
			children: [
				"/app/documents/$documentId",
				"/app/documents/new",
				"/app/documents/"
			],
			assets: [],
			preloads: ["/assets/route-BStt1LCW.js"]
		},
		"/app/leads": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/route.tsx",
			children: [
				"/app/leads/$leadId",
				"/app/leads/new",
				"/app/leads/"
			],
			assets: [],
			preloads: ["/assets/route-B-wpmGKQ.js"]
		},
		"/app/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/route.tsx",
			children: ["/app/properties/$propertyId", "/app/properties/"],
			assets: [],
			preloads: ["/assets/route-CJnjMeWa.js"]
		},
		"/app/reports": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/route.tsx",
			children: [
				"/app/reports/ai",
				"/app/reports/simulator",
				"/app/reports/"
			],
			assets: [],
			preloads: ["/assets/route-DmzaS853.js"]
		},
		"/app/sellers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/route.tsx",
			children: [
				"/app/sellers/$sellerId",
				"/app/sellers/new",
				"/app/sellers/"
			],
			assets: [],
			preloads: ["/assets/route-uhVYgIoR.js"]
		},
		"/app/transactions": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/route.tsx",
			children: [
				"/app/transactions/$transactionId",
				"/app/transactions/new",
				"/app/transactions/"
			],
			assets: [],
			preloads: ["/assets/route-BmEhEhlQ.js"]
		},
		"/app/admin": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/admin.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/admin-BxvuE0N7.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-CjO50UB-.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/billing": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/billing.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/billing-DjD3taEL.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-CjO50UB-.js"
			]
		},
		"/app/calendar": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/calendar.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/calendar-CtyRpLLS.js", "/assets/CrmPlaceholderPage-B5XE-l3E.js"]
		},
		"/app/dashboard": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/dashboard.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/dashboard-CMp1VNyo.js",
				"/assets/BarChart-Bc1gMOz_.js",
				"/assets/PageHeader-C5idzFiO.js"
			]
		},
		"/app/organizations": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/organizations.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/organizations-Cf_h8nJV.js", "/assets/CrmPlaceholderPage-B5XE-l3E.js"]
		},
		"/app/settings": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/settings.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/settings-wWP38F9s.js", "/assets/CrmPlaceholderPage-B5XE-l3E.js"]
		},
		"/app/tasks": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/tasks.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/tasks-B-0Odift.js", "/assets/CrmPlaceholderPage-B5XE-l3E.js"]
		},
		"/app/buyers/$buyerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_buyerId-BXA9x2fg.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-CRmncC8v.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BUv7Agaq.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-CRmncC8v.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/$documentId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/$documentId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_documentId-Ykpg7yrI.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-sQ6sjdiu.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-DfbcPS_Z.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-sQ6sjdiu.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/$leadId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_leadId-Bd-Vhg0b.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-D7c2bm1p.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BabY7ktQ.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-D7c2bm1p.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/properties/$propertyId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_propertyId-KHIhC32u.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/properties-crud-ieRxdyUH.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/reports/ai": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/ai.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/ai-CZY0Bxdr.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/reports/simulator": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/simulator.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/simulator-CF6Sllh7.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/sellers/$sellerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/$sellerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_sellerId-cit_KBEO.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-QIpmnPUM.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/sellers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-vNXq642r.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-QIpmnPUM.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/$transactionId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/$transactionId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_transactionId-B2fjqoCR.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-aIgRHKrh.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BApboLFM.js",
				"/assets/useMutation-CZz5Cv-G.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-aIgRHKrh.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buyers-CbomiP7Y.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/buyers-crud-CRmncC8v.js"
			]
		},
		"/app/documents/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/documents-BvUL8ub-.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-sQ6sjdiu.js"
			]
		},
		"/app/leads/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/leads-BfGGzPsG.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/leads-crud-D7c2bm1p.js"
			]
		},
		"/app/properties/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/properties-DyLExC1X.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/properties-crud-ieRxdyUH.js"
			]
		},
		"/app/reports/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/reports-C-ai14GP.js",
				"/assets/BarChart-Bc1gMOz_.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js"
			]
		},
		"/app/sellers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/sellers-tMeCR9pz.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-QIpmnPUM.js"
			]
		},
		"/app/transactions/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/transactions-BeOjOWnC.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-aIgRHKrh.js"
			]
		}
	},
	clientEntry: "/assets/index-gGlAZNfZ.js"
});
//#endregion
export { tsrStartManifest };
