import type { PublicDocumentClarityItem } from "@/server/public-b2c";

const LABELS: Record<PublicDocumentClarityItem["type"], string> = {
  ESCRITURA: "Escritura",
  PREDIAL: "Predial",
  AGUA: "Agua",
  LIBERTAD_GRAVAMEN: "Libertad de gravamen",
};

export function PropertyDocumentClarity({
  score,
  items,
}: {
  score: number;
  items: PublicDocumentClarityItem[];
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">Claridad documental</h3>
      <p className="mt-1 text-sm text-slate-600">Resumen publico sin exponer archivos privados.</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-2 w-full rounded-full bg-slate-100">
          <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${score}%` }} />
        </div>
        <span className="text-sm font-semibold text-habitra-text">{score}%</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.type} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2">
            <span>{LABELS[item.type]}</span>
            <span className={`text-xs font-semibold ${item.available ? "text-emerald-700" : "text-slate-500"}`}>
              {item.available ? "Disponible" : "Pendiente"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
