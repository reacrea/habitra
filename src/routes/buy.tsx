import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PropertySearchBar } from "@/components/public/PropertySearchBar";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getPublicListings } from "@/server/public-b2c";
import { publicSearchSchema } from "@/validations/public-search";

export const Route = createFileRoute("/buy")({
  validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
  component: BuyPage,
});

function BuyPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const fetchListings = useServerFn(getPublicListings);
  const query = useQuery({
    queryKey: ["public-buy-listings", search],
    queryFn: () =>
      fetchListings({
        data: {
          operationType: "VENTA",
          city: search.city || undefined,
          propertyType: (search.type as
            | "CASA"
            | "DEPARTAMENTO"
            | "TERRENO"
            | "OFICINA"
            | "LOCAL_COMERCIAL"
            | "BODEGA"
            | "PENTHOUSE"
            | "OTRO"
            | undefined),
          minPrice: search.minPrice ? Number(search.minPrice) : undefined,
          maxPrice: search.maxPrice ? Number(search.maxPrice) : undefined,
        },
      }),
  });

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-12 md:px-6">
        <h1 className="text-3xl font-bold text-habitra-text">Propiedades en venta</h1>
        <PropertySearchBar
          defaultOperation="buy"
          onSearch={(payload) => {
            void navigate({
              to: "/buy",
              search: {
                city: payload.city,
                type: payload.type,
                minPrice: payload.minPrice,
                maxPrice: payload.maxPrice,
              },
            });
          }}
        />
        {query.isPending ? <CrmLoading /> : null}
        {query.isError ? <CrmInlineError message="No se pudieron cargar propiedades en venta." /> : null}
        {query.data && query.data.properties.length === 0 ? (
          <CrmEmpty title="Sin propiedades disponibles" hint="Ajusta filtros o intenta otra ciudad." />
        ) : null}
        {query.data && query.data.properties.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {query.data.properties.map((p) => (
              <article key={p.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase text-emerald-700">{p.operationType}</p>
                <h3 className="mt-1 text-base font-semibold text-habitra-text">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {p.city}
                  {p.neighborhood ? `, ${p.neighborhood}` : ""}
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  ${p.price.toLocaleString("es-MX")} MXN
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </PublicLayout>
  );
}
