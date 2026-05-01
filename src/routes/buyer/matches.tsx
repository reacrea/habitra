import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { getBuyerMatchesData } from "@/server/buyer-portal";

export const Route = createFileRoute("/buyer/matches")({
  component: BuyerMatchesPage,
});

function BuyerMatchesPage() {
  const fetchFn = useServerFn(getBuyerMatchesData);
  const query = useQuery({
    queryKey: ["buyer-matches"],
    queryFn: () => fetchFn(),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-habitra-text">Matches recomendados</h1>
        <p className="mt-1 text-sm text-slate-600">Resultados sugeridos segun tu perfil comprador.</p>
      </div>
      {query.isPending ? <CrmLoading label="Buscando matches..." /> : null}
      {query.isError ? <CrmInlineError message="No se pudieron cargar matches." /> : null}
      {query.data && query.data.matches.length === 0 ? (
        <CrmEmpty title="Sin matches por ahora" hint="Actualiza tu perfil para mejorar recomendaciones." />
      ) : null}
      {query.data && query.data.matches.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {query.data.matches.map((m) => (
            <article key={m.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="h-40 bg-slate-100">
                {m.imageUrl ? <img src={m.imageUrl} alt={m.title} className="h-full w-full object-cover" /> : null}
              </div>
              <div className="space-y-2 p-4">
                <p className="text-lg font-bold text-slate-900">${m.price.toLocaleString("es-MX")} MXN</p>
                <p className="font-semibold text-habitra-text">{m.title}</p>
                <p className="text-sm text-slate-600">{m.city}{m.neighborhood ? `, ${m.neighborhood}` : ""}</p>
                <p className="text-xs text-slate-500">{m.bedrooms ?? "—"} rec · {m.bathrooms ?? "—"} banos</p>
                <div className="pt-1">
                  <Link to="/properties/$slug" params={{ slug: m.slug }} className="text-sm font-semibold text-emerald-700">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
