type MetricCardProps = {
  title: string;
  value: string | number;
  hint?: string;
  trend?: "up" | "down" | "neutral";
};

export function MetricCard({ title, value, hint, trend = "neutral" }: MetricCardProps) {
  const trendColor =
    trend === "up" ? "text-emerald-600" : trend === "down" ? "text-amber-600" : "text-slate-500";

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-habitra-text">{value}</p>
      {hint ? <p className={`mt-1 text-xs ${trendColor}`}>{hint}</p> : null}
    </div>
  );
}
