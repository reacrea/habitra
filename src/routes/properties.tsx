import { Outlet, createFileRoute, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmEmpty, CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PropertyFilters } from "@/components/public/PropertyFilters";
import { PropertyMapView } from "@/components/public/PropertyMapView";
import { PropertyResultsGrid } from "@/components/public/PropertyResultsGrid";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getPublicListings } from "@/server/public-b2c";
import { mergePublicSearchDefaults, publicSearchSchema } from "@/validations/public-search";

export const Route = createFileRoute("/properties")({
  validateSearch: (search) => publicSearchSchema.parse(search ?? {}),
  component: PublicPropertiesPage,
});

function PublicPropertiesPage() {
  const location = useLocation();
  const search = Route.useSearch();
  const navigate = useNavigate();
  const fetchListings = useServerFn(getPublicListings);

  const isDetailPath = /^\/properties\/[^/]+$/.test(location.pathname);
  if (isDetailPath) {
    return <Outlet />;
  }

  const [filters, setFilters] = useState(() => {
    const e = mergePublicSearchDefaults(search);
    return {
      operation: e.operation,
      city: e.city ?? "",
      type: e.type,
      minPrice: e.minPrice ?? "",
      maxPrice: e.maxPrice ?? "",
      bedrooms: e.bedrooms ?? "",
      bathrooms: e.bathrooms ?? "",
      sort: (e.sort ?? "relevance") as "relevance" | "price_asc" | "price_desc" | "recent" | "readiness_desc",
    };
  });

  useEffect(() => {
    const e = mergePublicSearchDefaults(search);
    setFilters({
      operation: e.operation,
      city: e.city ?? "",
      type: e.type,
      minPrice: e.minPrice ?? "",
      maxPrice: e.maxPrice ?? "",
      bedrooms: e.bedrooms ?? "",
      bathrooms: e.bathrooms ?? "",
      sort: (e.sort ?? "relevance") as "relevance" | "price_asc" | "price_desc" | "recent" | "readiness_desc",
    });
  }, [
    search.operation,
    search.operationType,
    search.city,
    search.type,
    search.propertyType,
    search.minPrice,
    search.maxPrice,
    search.bedrooms,
    search.bathrooms,
    search.sort,
  ]);

  const view = (search.view ?? "list") as "list" | "map";

  const listingSearch = useMemo(
    () => ({
      operationType: filters.operation === "buy" ? ("SALE" as const) : ("RENT" as const),
      operation: filters.operation,
      city: filters.city || undefined,
      type: filters.type || undefined,
      minPrice: filters.minPrice || undefined,
      maxPrice: filters.maxPrice || undefined,
      bedrooms: filters.bedrooms || undefined,
      bathrooms: filters.bathrooms || undefined,
      sort: filters.sort,
      view,
    }),
    [filters, view],
  );

  const parsedFilters = useMemo(
    () => ({
      operationType: filters.operation === "rent" ? "RENTA" : "VENTA",
      city: filters.city || undefined,
      propertyType: (filters.type as
        | "CASA"
        | "DEPARTAMENTO"
        | "TERRENO"
        | "OFICINA"
        | "LOCAL_COMERCIAL"
        | "BODEGA"
        | "PENTHOUSE"
        | "OTRO"
        | undefined),
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      bedrooms: filters.bedrooms ? Number(filters.bedrooms) : undefined,
      bathrooms: filters.bathrooms ? Number(filters.bathrooms) : undefined,
      sort: filters.sort,
      limit: 30,
    }),
    [filters],
  );

  const query = useQuery({
    queryKey: ["public-properties", parsedFilters],
    queryFn: () => fetchListings({ data: parsedFilters }),
  });

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-habitra-text">Propiedades</h1>
            <p className="mt-1 text-sm text-slate-600">
              Explora propiedades con filtros, ordenamiento y vista lista/mapa.
            </p>
          </div>
          <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
            <button
              type="button"
              className={`rounded-lg px-3 py-2 text-xs font-semibold ${view === "list" ? "bg-habitra-action text-white" : "text-slate-700"}`}
              onClick={() =>
                void navigate({
                  to: "/properties",
                  search: { ...listingSearch, view: "list" },
                })
              }
            >
              Lista
            </button>
            <button
              type="button"
              className={`rounded-lg px-3 py-2 text-xs font-semibold ${view === "map" ? "bg-habitra-action text-white" : "text-slate-700"}`}
              onClick={() =>
                void navigate({
                  to: "/properties",
                  search: { ...listingSearch, view: "map" },
                })
              }
            >
              Mapa
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
          <PropertyFilters
            value={filters}
            onChange={setFilters}
            onApply={() =>
              void navigate({
                to: "/properties",
                search: { ...listingSearch },
              })
            }
          />

          <div className="space-y-4">
            {query.isPending ? <CrmLoading label="Cargando propiedades..." /> : null}
            {query.isError ? <CrmInlineError message="No se pudieron cargar resultados." /> : null}
            {query.data && query.data.properties.length === 0 ? (
              <CrmEmpty title="Sin coincidencias" hint="Prueba con un rango de precio o ciudad diferente." />
            ) : null}
            {query.data && query.data.properties.length > 0
              ? view === "map"
                ? <PropertyMapView properties={query.data.properties} />
                : <PropertyResultsGrid properties={query.data.properties} />
              : null}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
