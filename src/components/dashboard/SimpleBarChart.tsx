import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { StageCount } from "@/server/dashboard-metrics";

type SimpleBarChartProps = {
  title: string;
  data: StageCount[];
  emptyLabel?: string;
};

export function SimpleBarChart({ title, data, emptyLabel = "Sin datos para graficar" }: SimpleBarChartProps) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500 shadow-soft">
        {emptyLabel}
      </div>
    );
  }

  const chartData = data.map((row) => ({
    name: row.stage.replaceAll("_", " "),
    total: row.count,
  }));

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft md:p-6">
      <h3 className="mb-4 text-sm font-semibold text-habitra-text">{title}</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 32 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-25} textAnchor="end" height={60} />
            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                borderColor: "#e5e7eb",
                fontSize: 12,
              }}
            />
            <Bar dataKey="total" fill="#22C55E" radius={[8, 8, 0, 0]} name="Operaciones" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
