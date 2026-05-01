import { Outlet, Link, createFileRoute, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getZoneCityData } from "@/server/zones-b2c";

export const Route = createFileRoute("/zones/$city")({
  component: ZoneCityPage,
});

function ZoneCityPage() {
  const location = useLocation();
  const isChildPath = /^\/zones\/[^/]+\/[^/]+$/.test(location.pathname);
  if (isChildPath) return <Outlet />;

  const { city } = Route.useParams();
  const fetchFn = useServerFn(getZoneCityData);
  const query = useQuery({
    queryKey: ["zones-city", city],
    queryFn: () => fetchFn({ data: { city } }),
    enabled: Boolean(city),
  });
  const cityData = query.data;

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="space-y-2">
          <Link to="/zones" className="text-sm font-semibold text-emerald-700">Volver a zonas</Link>
          <h1 className="text-3xl font-bold text-habitra-text">Propiedades en {decodeURIComponent(city)}</h1>
          <p className="text-sm text-slate-600">Landing SEO por ciudad con enlaces a colonias.</p>
        </div>
        {query.isPending ? <CrmLoading label="Cargando zona..." /> : null}
        {query.isError ? <CrmInlineError message="No se pudo cargar la ciudad." /> : null}
        {cityData === null && query.isFetched ? <CrmInlineError message="No hay inventario publicado en esta ciudad." /> : null}
        {cityData ? (
          <>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-habitra-text">Colonias destacadas</h2>
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {cityData.neighborhoods.map((n) => (
                  <article key={n.neighborhood} className="rounded-xl border border-slate-100 p-4">
                    <p className="font-semibold text-habitra-text">{n.neighborhood}</p>
                    <p className="text-sm text-slate-600">{n.total} propiedades</p>
                    <Link
                      to="/zones/$city/$neighborhood"
                      params={{ city: cityData.city, neighborhood: n.neighborhood }}
                      className="mt-2 inline-block text-sm font-semibold text-emerald-700"
                    >
                      Ver colonia
                    </Link>
                  </article>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-habitra-text">Enlaces SEO</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link to="/buy" search={{ city: cityData.city }} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  Comprar en {cityData.city}
                </Link>
                <Link to="/rent" search={{ city: cityData.city }} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  Rentar en {cityData.city}
                </Link>
                <Link to="/properties" search={{ city: cityData.city }} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                  Todas las propiedades
                </Link>
              </div>
            </section>
          </>
        ) : null}
      </section>
    </PublicLayout>
  );
}
