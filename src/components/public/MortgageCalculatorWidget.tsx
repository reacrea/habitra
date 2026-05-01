import { useMemo, useState } from "react";

import { simulateMortgage } from "@/services/mortgage";

type Props = {
  defaultPrice?: number;
  title?: string;
  compact?: boolean;
};

export function MortgageCalculatorWidget({
  defaultPrice = 2_500_000,
  title = "Simulador hipotecario",
  compact = false,
}: Props) {
  const [propertyPrice, setPropertyPrice] = useState<number>(defaultPrice);
  const [downPayment, setDownPayment] = useState<number>(Math.round(defaultPrice * 0.2));
  const [years, setYears] = useState<number>(20);
  const [annualRate, setAnnualRate] = useState<number>(10.5);
  const [notaryCostPct, setNotaryCostPct] = useState<number>(6);
  const [appraisalCost, setAppraisalCost] = useState<number>(12000);
  const [otherCosts, setOtherCosts] = useState<number>(8000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);

  const result = useMemo(
    () =>
      simulateMortgage({
        propertyPrice,
        downPayment,
        years,
        annualRate,
        notaryCostPct,
        appraisalCost,
        otherCosts,
        monthlyIncome: monthlyIncome > 0 ? monthlyIncome : null,
      }),
    [annualRate, appraisalCost, downPayment, monthlyIncome, notaryCostPct, otherCosts, propertyPrice, years],
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">Estimacion orientativa basada en parametros editables.</p>
      <div className={`mt-4 grid gap-2 ${compact ? "grid-cols-1" : "md:grid-cols-2"}`}>
        <input
          type="number"
          min={1}
          value={propertyPrice}
          onChange={(e) => setPropertyPrice(Number(e.target.value))}
          className="rounded-xl border px-3 py-2 text-sm"
          placeholder="Precio"
        />
        <input
          type="number"
          min={0}
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="rounded-xl border px-3 py-2 text-sm"
          placeholder="Enganche"
        />
        <input
          type="number"
          min={1}
          max={40}
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="rounded-xl border px-3 py-2 text-sm"
          placeholder="Anos"
        />
        <input
          type="number"
          min={0}
          max={100}
          step="0.1"
          value={annualRate}
          onChange={(e) => setAnnualRate(Number(e.target.value))}
          className="rounded-xl border px-3 py-2 text-sm"
          placeholder="Tasa anual %"
        />
        {!compact ? (
          <>
            <input
              type="number"
              min={0}
              value={notaryCostPct}
              onChange={(e) => setNotaryCostPct(Number(e.target.value))}
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="% notaria"
            />
            <input
              type="number"
              min={0}
              value={appraisalCost}
              onChange={(e) => setAppraisalCost(Number(e.target.value))}
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="Avaluo"
            />
            <input
              type="number"
              min={0}
              value={otherCosts}
              onChange={(e) => setOtherCosts(Number(e.target.value))}
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="Otros costos"
            />
            <input
              type="number"
              min={0}
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="rounded-xl border px-3 py-2 text-sm"
              placeholder="Ingreso mensual (opcional)"
            />
          </>
        ) : null}
      </div>
      <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
        <p><strong>Mensualidad estimada:</strong> ${result.estimatedMonthly.toLocaleString("es-MX")}</p>
        <p><strong>Costos de cierre:</strong> ${result.estimatedClosingCosts.toLocaleString("es-MX")}</p>
        <p><strong>Total inicial:</strong> ${result.initialTotalNeeded.toLocaleString("es-MX")}</p>
        <p><strong>Ratio:</strong> {result.affordabilityRatio.toFixed(2)}</p>
        <p><strong>Recomendacion:</strong> {result.recommendation}</p>
      </div>
    </section>
  );
}
