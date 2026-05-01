//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({
	routes: {
		__root__: {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/__root.tsx",
			children: [
				"/",
				"/app",
				"/buy",
				"/compare",
				"/demo",
				"/favorites",
				"/login",
				"/mortgage-calculator",
				"/properties",
				"/rent",
				"/sell"
			],
			assets: [{
				tag: "link",
				attrs: {
					rel: "stylesheet",
					href: "/assets/index-C4jf2zFu.css",
					type: "text/css"
				}
			}],
			preloads: [
				"/assets/index-Cj1V5pzm.js",
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
				"/assets/routes-L5ZGksue.js",
				"/assets/useQuery-BDQeUfoQ.js",
				"/assets/useServerFn-C0pLr47e.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-Bfv2e7H_.js",
				"/assets/public-b2c-C0Ynminp.js"
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
				"/assets/app-D0fVSHlv.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/useQuery-BDQeUfoQ.js",
				"/assets/useServerFn-C0pLr47e.js"
			]
		},
		"/buy": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/buy.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buy-D-kPlNDb.js",
				"/assets/useQuery-BDQeUfoQ.js",
				"/assets/useServerFn-C0pLr47e.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-Bfv2e7H_.js",
				"/assets/public-b2c-C0Ynminp.js"
			]
		},
		"/compare": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/compare.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/compare-ClajnfmM.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PublicLayout-Bfv2e7H_.js",
				"/assets/use-public-shortlists-CKgD7i5L.js"
			]
		},
		"/demo": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/demo.tsx",
			children: void 0,
			assets: void 0,
			preloads: ["/assets/demo-D8mDN2Yg.js"]
		},
		"/favorites": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/favorites.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/favorites-DsLNJJXO.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertyResultsGrid-hee7voqG.js",
				"/assets/PublicLayout-Bfv2e7H_.js",
				"/assets/use-public-shortlists-CKgD7i5L.js"
			]
		},
		"/login": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/login.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/login-TZVaEAxt.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/zod-SVTp_rAW.js"
			]
		},
		"/mortgage-calculator": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/mortgage-calculator.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/mortgage-calculator-DNrTbZXy.js",
				"/assets/MortgageCalculatorWidget-FpTC68R2.js",
				"/assets/PublicLayout-Bfv2e7H_.js"
			]
		},
		"/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/properties.tsx",
			children: ["/properties/$slug"],
			assets: [],
			preloads: [
				"/assets/properties-CS2CmN4s.js",
				"/assets/useQuery-BDQeUfoQ.js",
				"/assets/useServerFn-C0pLr47e.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertyResultsGrid-hee7voqG.js",
				"/assets/PublicLayout-Bfv2e7H_.js",
				"/assets/public-b2c-C0Ynminp.js"
			]
		},
		"/rent": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/rent.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/rent-CxhesWtl.js",
				"/assets/useQuery-BDQeUfoQ.js",
				"/assets/useServerFn-C0pLr47e.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-Bfv2e7H_.js",
				"/assets/public-b2c-C0Ynminp.js"
			]
		},
		"/sell": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/sell.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/sell-CEryrszJ.js", "/assets/PublicLayout-Bfv2e7H_.js"]
		},
		"/app/buyers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/route.tsx",
			children: [
				"/app/buyers/$buyerId",
				"/app/buyers/new",
				"/app/buyers/"
			],
			assets: [],
			preloads: ["/assets/route-CD9BvHFU.js"]
		},
		"/app/documents": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/route.tsx",
			children: [
				"/app/documents/$documentId",
				"/app/documents/new",
				"/app/documents/"
			],
			assets: [],
			preloads: ["/assets/route-DowhbCNK.js"]
		},
		"/app/leads": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/route.tsx",
			children: [
				"/app/leads/$leadId",
				"/app/leads/new",
				"/app/leads/"
			],
			assets: [],
			preloads: ["/assets/route-BqEjuoWD.js"]
		},
		"/app/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/route.tsx",
			children: ["/app/properties/$propertyId", "/app/properties/"],
			assets: [],
			preloads: ["/assets/route-yfg9mIhb.js"]
		},
		"/app/reports": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/route.tsx",
			children: [
				"/app/reports/ai",
				"/app/reports/simulator",
				"/app/reports/"
			],
			assets: [],
			preloads: ["/assets/route-D8OkNq8Q.js"]
		},
		"/app/sellers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/route.tsx",
			children: [
				"/app/sellers/$sellerId",
				"/app/sellers/new",
				"/app/sellers/"
			],
			assets: [],
			preloads: ["/assets/route-DREmZYBr.js"]
		},
		"/app/transactions": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/route.tsx",
			children: [
				"/app/transactions/$transactionId",
				"/app/transactions/new",
				"/app/transactions/"
			],
			assets: [],
			preloads: ["/assets/route-uzFG2A2z.js"]
		},
		"/app/admin": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/admin.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/admin-7Xq1vJ4p.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-DkFJtPWe.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/billing": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/billing.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/billing-Dq0Jo4w4.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-DkFJtPWe.js"
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
				"/assets/dashboard-JFQ54kzw.js",
				"/assets/BarChart-BC3_CKhX.js",
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
		"/properties/$slug": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/properties/$slug.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_slug-BvzS4bLf.js",
				"/assets/MortgageCalculatorWidget-FpTC68R2.js",
				"/assets/PropertyPublicCard-C4k72WqN.js",
				"/assets/use-public-shortlists-CKgD7i5L.js"
			]
		},
		"/app/buyers/$buyerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_buyerId-CYYzWQn9.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-CfOZCfRa.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BsPIihOi.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-CfOZCfRa.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/$documentId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/$documentId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_documentId-cgzQ931Z.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-BcKXnX1o.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-B8DKAx3U.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-BcKXnX1o.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/$leadId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_leadId-C4klZ6bT.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-BWZ_pz_J.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-Ur9o98Vv.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-BWZ_pz_J.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/properties/$propertyId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_propertyId-BXt_Z_c0.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/properties-crud-tvUKrh5e.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/reports/ai": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/ai.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/ai-Bu13IFw9.js",
				"/assets/useMutation-DUaCagzv.js",
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
				"/assets/simulator-2jkv-MbI.js",
				"/assets/useMutation-DUaCagzv.js",
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
				"/assets/_sellerId-DWa2DaFN.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-BL5rREcK.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/sellers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-P6h-MfYw.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-BL5rREcK.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/$transactionId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/$transactionId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_transactionId-BQKOwgZ-.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-BqhBcek6.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BEKc8DWJ.js",
				"/assets/useMutation-DUaCagzv.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-BqhBcek6.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buyers-B65MHlHK.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/buyers-crud-CfOZCfRa.js"
			]
		},
		"/app/documents/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/documents-IrqaXPve.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-BcKXnX1o.js"
			]
		},
		"/app/leads/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/leads-CNffwaAg.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/leads-crud-BWZ_pz_J.js"
			]
		},
		"/app/properties/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/properties-Cj_DkigT.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/properties-crud-tvUKrh5e.js"
			]
		},
		"/app/reports/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/reports-CJf0Qman.js",
				"/assets/BarChart-BC3_CKhX.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js"
			]
		},
		"/app/sellers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/sellers-cay0zeH6.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-BL5rREcK.js"
			]
		},
		"/app/transactions/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/transactions-DiTj1iRp.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-BqhBcek6.js"
			]
		}
	},
	clientEntry: "/assets/index-Cj1V5pzm.js"
});
//#endregion
export { tsrStartManifest };
