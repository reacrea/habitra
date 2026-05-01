import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { HomeFeaturedPropertyGrid } from "@/components/public/HomeFeaturedPropertyGrid";
import { HOME_FEATURED_CITIES, totalForFeaturedCity } from "@/constants/home-featured-cities";
import { PropertySearchBar } from "@/components/public/PropertySearchBar";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getPublicHomeData } from "@/server/public-b2c";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  const fetchHome = useServerFn(getPublicHomeData);
  const homeQuery = useQuery({
    queryKey: ["public-home-data"],
    queryFn: () => fetchHome(),
  });

  return (
    <PublicLayout>
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 md:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18)]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/images/hero/hero-banner.svg)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-950/82 via-emerald-950/72 to-slate-950/88"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col gap-8 px-5 py-12 sm:px-8 sm:py-14 md:gap-10 md:py-16 lg:py-20">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300/95">
                Habitra
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
                Encuentra una propiedad que si puedes comprar.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-100/90 md:text-xl">
                Busca casas y departamentos con informacion clara, costos estimados y un proceso de
                compra mas seguro.
              </p>
            </div>

            <PropertySearchBar
              onSearch={(payload) => {
                const to = payload.operation === "buy" ? "/buy" : "/rent";
                void navigate({
                  to,
                  search: {
                    city: payload.city,
                    type: payload.type,
                    minPrice: payload.minPrice,
                    maxPrice: payload.maxPrice,
                  },
                });
              }}
            />
          </div>
        </div>

        {homeQuery.isPending ? <CrmLoading label="Cargando home publica..." /> : null}
        {homeQuery.isError ? <CrmInlineError message="No se pudo cargar la home publica." /> : null}

        {homeQuery.data ? (
          <>
            <HomeFeaturedPropertyGrid
              title="Propiedades en venta"
              description="Listings publicados con mayor readiness: casas, departamentos y mas."
              properties={homeQuery.data.featuredSale}
              emptyTitle="Aun no hay propiedades en venta publicadas"
              emptyHint="Cuando la inmobiliaria publique anuncios de venta, apareceran aqui."
            />
            <HomeFeaturedPropertyGrid
              title="Propiedades en renta"
              description="Renta con la misma claridad: precio, zona y detalle al hacer clic."
              properties={homeQuery.data.featuredRent}
              emptyTitle="Aun no hay propiedades en renta publicadas"
              emptyHint="Cuando haya anuncios de renta, los mostraremos en esta seccion."
            />

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-habitra-text">Ciudades principales</h2>
              <p className="mt-1 text-sm text-slate-600">
                Explora inventario publicado por ciudad.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {HOME_FEATURED_CITIES.map((entry) => {
                  const total = totalForFeaturedCity(homeQuery.data.cities, entry.dbMatchVariants);
                  return (
                    <Link
                      key={entry.slug}
                      to="/zones/$city"
                      params={{ city: entry.slug }}
                      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm ring-1 ring-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      <img
                        src={entry.imageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-slate-900/10"
                        aria-hidden
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                        <p className="text-base font-bold text-white drop-shadow-sm md:text-lg">{entry.label}</p>
                        {total != null ? (
                          <p className="mt-0.5 text-sm font-medium text-emerald-200/95">
                            {total} {total === 1 ? "propiedad" : "propiedades"}
                          </p>
                        ) : (
                          <p className="mt-0.5 text-sm text-slate-200/90">Ver zona</p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {[
                "Busca propiedades",
                "Simula tu compra",
                "Compara y decide",
                "Contacta agentes",
                "Cierra con claridad",
                "Monitorea tu proceso",
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                  {step}
                </div>
              ))}
            </section>
          </>
        ) : null}
      </section>
    </PublicLayout>
  );
}
