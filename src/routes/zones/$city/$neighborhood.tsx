import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getZoneNeighborhoodData } from "@/server/zones-b2c";

export const Route = createFileRoute("/zones/$city/$neighborhood")({
  component: ZoneNeighborhoodPage,
});

function ZoneNeighborhoodPage() {
  const { city, neighborhood } = Route.useParams();
  const fetchFn = useServerFn(getZoneNeighborhoodData);
  const query = useQuery({
    queryKey: ["zones-neighborhood", city, neighborhood],
    queryFn: () => fetchFn({ data: { city, neighborhood } }),
    enabled: Boolean(city && neighborhood),
  });

  const cityLabel = decodeURIComponent(city);
  const neighborhoodLabel = decodeURIComponent(neighborhood);

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="space-y-2">
          <Link to="/zones/$city" params={{ city }} className="text-sm font-semibold text-emerald-700">
            Volver a {cityLabel}
          </Link>
          <h1 className="text-3xl font-bold text-habitra-text">
            Propiedades en {neighborhoodLabel}, {cityLabel}
          </h1>
          <p className="text-sm text-slate-600">Página SEO por colonia con inventario y enlaces internos.</p>
        </div>
        {query.isPending ? <CrmLoading label="Cargando colonia..." /> : null}
        {query.isError ? <CrmInlineError message="No se pudo cargar la colonia." /> : null}
        {query.data === null && query.isFetched ? <CrmInlineError message="No hay inventario publicado en esta colonia." /> : null}
        {query.data ? (
          <>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-habitra-text">Resumen de mercado</h2>
              <p className="mt-2 text-sm text-slate-600">{query.data.total} propiedades publicadas</p>
              <p className="text-sm text-slate-600">Precio promedio: ${query.data.avgPrice.toLocaleString("es-MX")} MXN</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link to="/properties" search={{ city: `${cityLabel} ${neighborhoodLabel}` }} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  Ver en listado general
                </Link>
                <Link
                  to="/properties"
                  search={{ operationType: "SALE", city: cityLabel }}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
                >
                  Comprar en {cityLabel}
                </Link>
              </div>
            </section>
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {query.data.properties.map((p) => (
                <article key={p.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="h-40 bg-slate-100">
                    {p.imageUrl ? <img src={p.imageUrl} alt={p.title} className="h-full w-full object-cover" /> : null}
                  </div>
                  <div className="space-y-2 p-4">
                    <p className="text-lg font-bold text-slate-900">${p.price.toLocaleString("es-MX")} MXN</p>
                    <p className="line-clamp-1 font-semibold text-habitra-text">{p.title}</p>
                    <p className="text-xs text-slate-500">{p.operationType} · {p.propertyType}</p>
                    <Link to="/properties/$slug" params={{ slug: p.slug }} className="text-sm font-semibold text-emerald-700">
                      Ver propiedad
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          </>
        ) : null}
      </section>
    </PublicLayout>
  );
}
