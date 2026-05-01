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
				"/mortgage-calculator",
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
				"/assets/index-BFjb9OcR.js",
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
				"/assets/routes-fkUKZXzW.js",
				"/assets/useQuery-DAZ0B9F8.js",
				"/assets/useServerFn-Ca5NtbAK.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-B8JvK8-n.js",
				"/assets/public-b2c-QlmOH2KX.js"
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
				"/assets/app-DePIalcV.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/useQuery-DAZ0B9F8.js",
				"/assets/useServerFn-Ca5NtbAK.js"
			]
		},
		"/buy": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/buy.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buy-B4Lqut31.js",
				"/assets/useQuery-DAZ0B9F8.js",
				"/assets/useServerFn-Ca5NtbAK.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-B8JvK8-n.js",
				"/assets/public-b2c-QlmOH2KX.js"
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
				"/assets/login-CVy_TN26.js",
				"/assets/auth-client-Cp1g19c4.js",
				"/assets/zod-SVTp_rAW.js"
			]
		},
		"/mortgage-calculator": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/mortgage-calculator.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/mortgage-calculator-C3HAHieG.js",
				"/assets/MortgageCalculatorWidget-C4TEsmLU.js",
				"/assets/PublicLayout-B8JvK8-n.js"
			]
		},
		"/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/properties.tsx",
			children: ["/properties/$slug"],
			assets: [],
			preloads: [
				"/assets/properties-SiZwkSrm.js",
				"/assets/useQuery-DAZ0B9F8.js",
				"/assets/useServerFn-Ca5NtbAK.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertyPublicCard-CbyXidbH.js",
				"/assets/PublicLayout-B8JvK8-n.js",
				"/assets/public-b2c-QlmOH2KX.js"
			]
		},
		"/rent": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/rent.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/rent-CEJ9Cwpm.js",
				"/assets/useQuery-DAZ0B9F8.js",
				"/assets/useServerFn-Ca5NtbAK.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PropertySearchBar-Dv-PjMye.js",
				"/assets/PublicLayout-B8JvK8-n.js",
				"/assets/public-b2c-QlmOH2KX.js"
			]
		},
		"/sell": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/sell.tsx",
			children: void 0,
			assets: [],
			preloads: ["/assets/sell-VAsXUcl7.js", "/assets/PublicLayout-B8JvK8-n.js"]
		},
		"/app/buyers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/route.tsx",
			children: [
				"/app/buyers/$buyerId",
				"/app/buyers/new",
				"/app/buyers/"
			],
			assets: [],
			preloads: ["/assets/route-CZMCgvwR.js"]
		},
		"/app/documents": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/route.tsx",
			children: [
				"/app/documents/$documentId",
				"/app/documents/new",
				"/app/documents/"
			],
			assets: [],
			preloads: ["/assets/route-Bq-nuvzB.js"]
		},
		"/app/leads": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/route.tsx",
			children: [
				"/app/leads/$leadId",
				"/app/leads/new",
				"/app/leads/"
			],
			assets: [],
			preloads: ["/assets/route-DRREUXcW.js"]
		},
		"/app/properties": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/route.tsx",
			children: ["/app/properties/$propertyId", "/app/properties/"],
			assets: [],
			preloads: ["/assets/route-BUolqbU_.js"]
		},
		"/app/reports": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/route.tsx",
			children: [
				"/app/reports/ai",
				"/app/reports/simulator",
				"/app/reports/"
			],
			assets: [],
			preloads: ["/assets/route-C87OyBgB.js"]
		},
		"/app/sellers": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/route.tsx",
			children: [
				"/app/sellers/$sellerId",
				"/app/sellers/new",
				"/app/sellers/"
			],
			assets: [],
			preloads: ["/assets/route-VtcyHZtW.js"]
		},
		"/app/transactions": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/route.tsx",
			children: [
				"/app/transactions/$transactionId",
				"/app/transactions/new",
				"/app/transactions/"
			],
			assets: [],
			preloads: ["/assets/route-_LVviKtL.js"]
		},
		"/app/admin": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/admin.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/admin-hGFQHKHs.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-BBLFsenF.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/billing": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/billing.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/billing-BV27q5yd.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/pricing-admin-BBLFsenF.js"
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
				"/assets/dashboard-84h3H6MX.js",
				"/assets/BarChart-IDvm2RtU.js",
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
			preloads: ["/assets/_slug-DNlMPINh.js", "/assets/MortgageCalculatorWidget-C4TEsmLU.js"]
		},
		"/app/buyers/$buyerId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/$buyerId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_buyerId-B4nayHci.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-C9BWVE7E.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-XyTI75pQ.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/BuyerForm-31Z77AbN.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/buyers-crud-C9BWVE7E.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/$documentId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/$documentId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_documentId-CpMjPW3r.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-DlKzqClL.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/documents/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-FEOrX15f.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-DlKzqClL.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/$leadId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/$leadId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_leadId-Btv3B6Be.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-CP1fwNgi.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/leads/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-DMRA1m-j.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/LeadForm-BCEKuD9a.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/leads-crud-CP1fwNgi.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/properties/$propertyId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/$propertyId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_propertyId-Bf3a6FxR.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/properties-crud-BixtfEGs.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/reports/ai": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/ai.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/ai-DAFl3aK9.js",
				"/assets/useMutation-BS-Gqd7R.js",
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
				"/assets/simulator-zZVtRRS8.js",
				"/assets/useMutation-BS-Gqd7R.js",
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
				"/assets/_sellerId-B0WohUY6.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-jLE34TPI.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/sellers/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-C6RRCjr_.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/SellerForm-DiEUBLSM.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-jLE34TPI.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/$transactionId": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/$transactionId.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/_transactionId-DSQjp4qu.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-BsJkkJYD.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/transactions/new": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/new.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/new-C_OXgjqS.js",
				"/assets/useMutation-BS-Gqd7R.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-BsJkkJYD.js",
				"/assets/mutation-error-obsJn-PR.js"
			]
		},
		"/app/buyers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/buyers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/buyers-Bug2wKxR.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/buyers-crud-C9BWVE7E.js"
			]
		},
		"/app/documents/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/documents/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/documents-CcK40mau.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/documents-crud-DlKzqClL.js"
			]
		},
		"/app/leads/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/leads/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/leads-C7gSk-GR.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/leads-crud-CP1fwNgi.js"
			]
		},
		"/app/properties/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/properties/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/properties-DWRFNy02.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/properties-crud-BixtfEGs.js"
			]
		},
		"/app/reports/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/reports/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/reports-C4kzRD2J.js",
				"/assets/BarChart-IDvm2RtU.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js"
			]
		},
		"/app/sellers/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/sellers/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/sellers-CKlrIcM7.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/sellers-crud-jLE34TPI.js"
			]
		},
		"/app/transactions/": {
			filePath: "C:/Jcrea/Projects/Habitra/src/routes/app/transactions/index.tsx",
			children: void 0,
			assets: [],
			preloads: [
				"/assets/transactions-BKNaHHUm.js",
				"/assets/CrmStates-DK7zueRo.js",
				"/assets/PageHeader-C5idzFiO.js",
				"/assets/crm-labels--RHG3N-o.js",
				"/assets/transactions-crud-BsJkkJYD.js"
			]
		}
	},
	clientEntry: "/assets/index-BFjb9OcR.js"
});
//#endregion
export { tsrStartManifest };
