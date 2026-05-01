//#region src/services/mortgage.ts
function round2(n) {
	return Math.round(n * 100) / 100;
}
function simulateMortgage(input) {
	const loanAmount = input.propertyPrice - input.downPayment;
	const monthlyRate = input.annualRate / 100 / 12;
	const months = input.years * 12;
	const estimatedMonthly = monthlyRate === 0 ? loanAmount / months : loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
	const estimatedClosingCosts = input.propertyPrice * (input.notaryCostPct / 100) + input.appraisalCost + input.otherCosts;
	const initialTotalNeeded = input.downPayment + estimatedClosingCosts;
	const affordabilityRatio = input.monthlyIncome ? estimatedMonthly / input.monthlyIncome : 0;
	const recommendation = affordabilityRatio <= .3 ? "Perfil saludable para avanzar." : affordabilityRatio <= .4 ? "Viable con seguimiento de riesgo moderado." : "Riesgo alto: sugerir ajuste de monto/plazo.";
	return {
		estimatedMonthly: round2(estimatedMonthly),
		estimatedClosingCosts: round2(estimatedClosingCosts),
		initialTotalNeeded: round2(initialTotalNeeded),
		affordabilityRatio: round2(affordabilityRatio),
		recommendation
	};
}
//#endregion
export { simulateMortgage as t };
