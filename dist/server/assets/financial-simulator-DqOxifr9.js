import { r as createServerFn } from "../server.js";
import { t as prisma } from "./prisma-kS4Gs6kM.js";
import { n as financialSimulationSchema } from "./phase8-FZWD988c.js";
import { t as createServerRpc } from "./createServerRpc-CdoWqxdu.js";
import { t as requireCrmOrganization } from "./crm-session-rkUrL6Rc.js";
//#region src/server/financial-simulator.ts?tss-serverfn-split
function round2(n) {
	return Math.round(n * 100) / 100;
}
var getFinancialSimulationOptions_createServerFn_handler = createServerRpc({
	id: "70e854e4f79775e7edc3eed5d0674373d12648d913d003034cc63288978db009",
	name: "getFinancialSimulationOptions",
	filename: "src/server/financial-simulator.ts"
}, (opts) => getFinancialSimulationOptions.__executeServer(opts));
var getFinancialSimulationOptions = createServerFn({ method: "GET" }).handler(getFinancialSimulationOptions_createServerFn_handler, async () => {
	const ctx = await requireCrmOrganization();
	const [buyers, properties, transactions] = await Promise.all([
		prisma.buyer.findMany({
			where: { organizationId: ctx.organizationId },
			select: {
				id: true,
				name: true,
				monthlyIncome: true
			},
			orderBy: { name: "asc" }
		}),
		prisma.property.findMany({
			where: { organizationId: ctx.organizationId },
			select: {
				id: true,
				title: true,
				price: true
			},
			orderBy: { createdAt: "desc" },
			take: 200
		}),
		prisma.transaction.findMany({
			where: { organizationId: ctx.organizationId },
			select: { id: true },
			orderBy: { createdAt: "desc" },
			take: 100
		})
	]);
	return {
		buyers: buyers.map((b) => ({
			id: b.id,
			label: b.name,
			monthlyIncome: b.monthlyIncome == null ? null : Number(b.monthlyIncome)
		})),
		properties: properties.map((p) => ({
			id: p.id,
			label: p.title,
			price: Number(p.price)
		})),
		transactions: transactions.map((t) => ({
			id: t.id,
			label: t.id.slice(0, 8)
		}))
	};
});
var runFinancialSimulation_createServerFn_handler = createServerRpc({
	id: "18d22bfe3612c3f8eeab69f8735b3766b2998b250008ecdf07fe588b4212b0dc",
	name: "runFinancialSimulation",
	filename: "src/server/financial-simulator.ts"
}, (opts) => runFinancialSimulation.__executeServer(opts));
var runFinancialSimulation = createServerFn({ method: "POST" }).inputValidator((data) => financialSimulationSchema.parse(data)).handler(runFinancialSimulation_createServerFn_handler, async ({ data }) => {
	const ctx = await requireCrmOrganization();
	const loanAmount = data.propertyPrice - data.downPayment;
	const monthlyRate = data.annualRate / 100 / 12;
	const months = data.years * 12;
	const estimatedMonthly = monthlyRate === 0 ? loanAmount / months : loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
	const estimatedClosingCosts = data.propertyPrice * (data.notaryCostPct / 100) + data.appraisalCost + data.otherCosts;
	const initialTotalNeeded = data.downPayment + estimatedClosingCosts;
	const affordabilityRatio = data.monthlyIncome ? estimatedMonthly / data.monthlyIncome : 0;
	const recommendation = affordabilityRatio <= .3 ? "Perfil saludable para avanzar." : affordabilityRatio <= .4 ? "Viable con seguimiento de riesgo moderado." : "Riesgo alto: sugerir ajuste de monto/plazo.";
	const saved = await prisma.financialSimulation.create({ data: {
		organizationId: ctx.organizationId,
		buyerId: data.buyerId ?? null,
		propertyId: data.propertyId ?? null,
		transactionId: data.transactionId ?? null,
		propertyPrice: data.propertyPrice,
		downPayment: data.downPayment,
		years: data.years,
		annualRate: data.annualRate,
		creditType: data.creditType,
		notaryCostPct: data.notaryCostPct,
		appraisalCost: data.appraisalCost,
		otherCosts: data.otherCosts,
		estimatedMonthly: round2(estimatedMonthly),
		estimatedClosingCosts: round2(estimatedClosingCosts),
		initialTotalNeeded: round2(initialTotalNeeded),
		affordabilityRatio: round2(affordabilityRatio),
		recommendation
	} });
	return {
		id: saved.id,
		estimatedMonthly: Number(saved.estimatedMonthly),
		estimatedClosingCosts: Number(saved.estimatedClosingCosts),
		initialTotalNeeded: Number(saved.initialTotalNeeded),
		affordabilityRatio: Number(saved.affordabilityRatio),
		recommendation: saved.recommendation,
		createdAt: saved.createdAt.toISOString()
	};
});
//#endregion
export { getFinancialSimulationOptions_createServerFn_handler, runFinancialSimulation_createServerFn_handler };
