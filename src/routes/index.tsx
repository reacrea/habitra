import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
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
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:px-6 md:py-20">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Habitra</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-habitra-text md:text-6xl">
            Encuentra una propiedad que si puedes comprar.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
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

        {homeQuery.isPending ? <CrmLoading label="Cargando home publica..." /> : null}
        {homeQuery.isError ? <CrmInlineError message="No se pudo cargar la home publica." /> : null}

        {homeQuery.data ? (
          <>
            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-habitra-text">Propiedades recomendadas en venta</p>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  {homeQuery.data.featuredSale.slice(0, 4).map((p: { id: string; title: string; city: string }) => (
                    <p key={p.id}>
                      {p.title} - {p.city}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-habitra-text">Propiedades recomendadas en renta</p>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  {homeQuery.data.featuredRent.slice(0, 4).map((p: { id: string; title: string; city: string }) => (
                    <p key={p.id}>
                      {p.title} - {p.city}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-habitra-text">Ciudades principales</h2>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {homeQuery.data.cities.map((city: { city: string; total: number }) => (
                  <div key={city.city} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                    <span className="font-medium">{city.city}</span>
                    <span className="ml-2 text-slate-500">({city.total})</span>
                  </div>
                ))}
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
