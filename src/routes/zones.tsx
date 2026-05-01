import { Outlet, Link, createFileRoute, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getZonesOverview } from "@/server/zones-b2c";

export const Route = createFileRoute("/zones")({
  component: ZonesPage,
});

function ZonesPage() {
  const location = useLocation();
  const isChildPath = /^\/zones\/.+/.test(location.pathname);
  if (isChildPath) return <Outlet />;

  const fetchFn = useServerFn(getZonesOverview);
  const query = useQuery({
    queryKey: ["zones-overview"],
    queryFn: () => fetchFn(),
  });

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div>
          <h1 className="text-3xl font-bold text-habitra-text">Zonas inmobiliarias</h1>
          <p className="mt-1 text-sm text-slate-600">Explora ciudades con inventario activo y enlaces SEO por zona.</p>
        </div>
        {query.isPending ? <CrmLoading label="Cargando zonas..." /> : null}
        {query.isError ? <CrmInlineError message="No se pudieron cargar las zonas." /> : null}
        {query.data ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {query.data.cities.map((zone) => (
              <article key={zone.city} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-lg font-semibold text-habitra-text">{zone.city}</h2>
                <p className="mt-1 text-sm text-slate-600">{zone.total} propiedades publicadas</p>
                <p className="text-sm text-slate-600">Precio promedio: ${zone.avgPrice.toLocaleString("es-MX")} MXN</p>
                <div className="mt-3 flex gap-3 text-sm">
                  <Link to="/zones/$city" params={{ city: zone.city }} className="font-semibold text-emerald-700">
                    Ver zonas
                  </Link>
                  <Link to="/properties" search={{ city: zone.city }} className="font-semibold text-slate-700">
                    Ver propiedades
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </PublicLayout>
  );
}
