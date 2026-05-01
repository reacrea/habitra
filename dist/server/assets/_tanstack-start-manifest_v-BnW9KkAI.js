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
					href: "/assets/index-EKHGXIuh.css",
					type: "text/css"
				}
			}],
			preloads: [
				"/assets/index-DMlNAkqO.js",
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
				"/assets/routes-CzJ8S6xJ.js",
				"/assets/useQuery-BDbrhtJV.js",
				"/assets/useServerFn-D6O1u_kC.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-Btb5SOYO.js",
				"/assets/public-b2c-B10XJNQy.js"
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
				"/assets/app-BpxioWzT.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/useQuery-BDbrhtJV.js",
				"/assets/useServerFn-D6O1u_kC.js"
			]
		},
		"/buy": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/buy.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buy-BOBnAsAf.js",
				"/assets/useQuery-BDbrhtJV.js",
				"/assets/useServerFn-D6O1u_kC.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-Btb5SOYO.js",
				"/assets/public-b2c-B10XJNQy.js"
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
				"/assets/login-DbkO9w62.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/zod-SVTp_rAW.js"
			]
		},
		"/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/properties.tsx",
			children: ["/properties/$slug"],
			assets: [],
			preloads: [
				"/assets/properties-C6cIg65h.js",
				"/assets/useQuery-BDbrhtJV.js",
				"/assets/useServerFn-D6O1u_kC.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertyPublicCard-CYeF6bdj.js",
				"/assets/PublicLayout-Btb5SOYO.js",
				"/assets/public-b2c-B10XJNQy.js"
			]
		},
		"/rent": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/rent.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/rent-Cd5iAOPZ.js",
				"/assets/useQuery-BDbrhtJV.js",
				"/assets/useServerFn-D6O1u_kC.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-Btb5SOYO.js",
				"/assets/public-b2c-B10XJNQy.js"
			]
		},
		"/sell": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/sell.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/sell-Dk6tUVEu.js", "/assets/PublicLayout-Btb5SOYO.js"]
		},
		"/app/buyers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/route.tsx",
			children: [
				"/app/buyers/$buyerId",
				"/app/buyers/new",
				"/app/buyers/"
			],
			assets: [],
			preloads: ["/assets/route-DmPR_Q_I.js"]
		},
		"/app/documents": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/route.tsx",
			children: [
				"/app/documents/$documentId",
				"/app/documents/new",
				"/app/documents/"
			],
			assets: [],
			preloads: ["/assets/route-D3zyK0p3.js"]
		},
		"/app/leads": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/route.tsx",
			children: [
				"/app/leads/$leadId",
				"/app/leads/new",
				"/app/leads/"
			],
			assets: [],
			preloads: ["/assets/route-cxQmFPjh.js"]
		},
		"/app/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/route.tsx",
			children: ["/app/properties/$propertyId", "/app/properties/"],
			assets: [],
			preloads: ["/assets/route-DEoS0AHD.js"]
		},
		"/app/reports": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/route.tsx",
			children: [
				"/app/reports/ai",
				"/app/reports/simulator",
				"/app/reports/"
			],
			assets: [],
			preloads: ["/assets/route-BJbuTT3a.js"]
		},
		"/app/sellers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/route.tsx",
			children: [
				"/app/sellers/$sellerId",
				"/app/sellers/new",
				"/app/sellers/"
			],
			assets: [],
			preloads: ["/assets/route-cHrRRRBx.js"]
		},
		"/app/transactions": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/route.tsx",
			children: [
				"/app/transactions/$transactionId",
				"/app/transactions/new",
				"/app/transactions/"
			],
			assets: [],
			preloads: ["/assets/route-Dx3VwU7m.js"]
		},
		"/app/admin": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/admin.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/admin-BQiaBF9y.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-hRCs6uyG.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/billing": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/billing.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/billing-rh5ld4yo.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-hRCs6uyG.js"
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
				"/assets/dashboard-CjuZ-JPW.js",
				"/assets/BarChart-gB2cfmaP.js",
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
			preloads: ["/assets/_slug-5M1pa197.js"]
		},
		"/app/buyers/$buyerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_buyerId-Bdmk38Cp.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-I6ujyGBs.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-DWv8ERhd.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-I6ujyGBs.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/$documentId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/$documentId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_documentId-DvLOq9I5.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-F0rBOo0w.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-NmEidCbI.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-F0rBOo0w.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/$leadId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_leadId-CGBExwcK.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-E9xT13Q_.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BMnbH3id.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-E9xT13Q_.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/properties/$propertyId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_propertyId-DJDgRMl6.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/properties-crud-B_mZMBOa.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/reports/ai": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/ai.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/ai-DIgiYs-N.js",
				"/assets/useMutation-CNAAJDHS.js",
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
				"/assets/simulator-D1ibkUZP.js",
				"/assets/useMutation-CNAAJDHS.js",
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
				"/assets/_sellerId-BVBc6K4b.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-Duz2SR0Z.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/sellers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-D06-NwnC.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-Duz2SR0Z.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/$transactionId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/$transactionId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_transactionId-Ce-eOVwb.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-Bs4K7BcB.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-BI4TFwV3.js",
				"/assets/useMutation-CNAAJDHS.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-Bs4K7BcB.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buyers-DvCxJo_A.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/buyers-crud-I6ujyGBs.js"
			]
		},
		"/app/documents/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/documents-B_lZCT50.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-F0rBOo0w.js"
			]
		},
		"/app/leads/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/leads-D4QeQaGu.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/leads-crud-E9xT13Q_.js"
			]
		},
		"/app/properties/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/properties-UobPYRQJ.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/properties-crud-B_mZMBOa.js"
			]
		},
		"/app/reports/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/reports-Ct7bRuTg.js",
				"/assets/BarChart-gB2cfmaP.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js"
			]
		},
		"/app/sellers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/sellers-B5U7g7fh.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-Duz2SR0Z.js"
			]
		},
		"/app/transactions/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/transactions-XZx4j5bC.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-Bs4K7BcB.js"
			]
		}
	},
	clientEntry: "/assets/index-DMlNAkqO.js"
});
//#endregion
export { tsrStartManifest };
