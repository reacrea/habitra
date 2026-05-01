import { Link, createFileRoute } from "@tanstack/react-router";

import { MortgageCalculatorWidget } from "@/components/public/MortgageCalculatorWidget";
import { PublicLayout } from "@/components/public/PublicLayout";

export const Route = createFileRoute("/mortgage-calculator")({
  component: MortgageCalculatorPage,
});

function MortgageCalculatorPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-6">
        <div className="space-y-2">
          <Link to="/properties" className="text-sm font-semibold text-emerald-700">
            Ver propiedades
          </Link>
          <h1 className="text-3xl font-bold text-habitra-text md:text-4xl">Calculadora hipotecaria</h1>
          <p className="text-sm text-slate-600">
            Simula mensualidad, costos iniciales y viabilidad antes de agendar una visita.
          </p>
        </div>
        <MortgageCalculatorWidget />
      </section>
    </PublicLayout>
  );
}
