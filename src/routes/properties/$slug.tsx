import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PropertyAgentContactCard } from "@/components/public/PropertyAgentContactCard";
import { PropertyDocumentClarity } from "@/components/public/PropertyDocumentClarity";
import { PropertyGallery } from "@/components/public/PropertyGallery";
import { PropertyPublicCard } from "@/components/public/PropertyPublicCard";
import { PropertyTimelinePreview } from "@/components/public/PropertyTimelinePreview";
import { PublicLayout } from "@/components/public/PublicLayout";
import { getPublicPropertyBySlug, getPublicSimilarProperties } from "@/server/public-b2c";

export const Route = createFileRoute("/properties/$slug")({
  component: PublicPropertyDetailPage,
});

function PublicPropertyDetailPage() {
  const { slug } = Route.useParams();
  const fetchDetail = useServerFn(getPublicPropertyBySlug);
  const fetchSimilar = useServerFn(getPublicSimilarProperties);

  const detailQuery = useQuery({
    queryKey: ["public-property-detail", slug],
    queryFn: () => fetchDetail({ data: { slug } }),
    enabled: Boolean(slug),
  });

  const similarQuery = useQuery({
    queryKey: ["public-property-similar", slug],
    queryFn: () => fetchSimilar({ data: { slug } }),
    enabled: Boolean(slug),
  });

  if (detailQuery.isPending) {
    return (
      <PublicLayout>
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <CrmLoading label="Cargando detalle de propiedad..." />
        </section>
      </PublicLayout>
    );
  }

  if (detailQuery.isError || !detailQuery.data) {
    return (
      <PublicLayout>
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <CrmInlineError message="No se pudo cargar la propiedad." />
        </section>
      </PublicLayout>
    );
  }

  const { property, estimatedTimeline } = detailQuery.data;

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="space-y-2">
          <Link to="/properties" className="text-sm font-semibold text-emerald-700">
            Volver a propiedades
          </Link>
          <p className="text-xs font-semibold uppercase text-emerald-700">{property.operationType}</p>
          <h1 className="text-3xl font-bold text-habitra-text md:text-4xl">{property.title}</h1>
          <p className="text-sm text-slate-600">
            {property.city}
            {property.neighborhood ? `, ${property.neighborhood}` : ""}
          </p>
          <p className="text-2xl font-bold text-slate-900">
            ${property.price.toLocaleString("es-MX")} MXN
          </p>
        </div>

        <PropertyGallery images={property.images} title={property.title} />

        <div className="grid gap-6 lg:grid-cols-[1fr,320px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-habitra-text">Caracteristicas</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700">
                <p><strong>{property.bedrooms ?? "—"}</strong> recamaras</p>
                <p><strong>{property.bathrooms ?? "—"}</strong> banos</p>
                <p><strong>{property.parkingSpaces ?? "—"}</strong> estacionamientos</p>
                <p><strong>{property.landArea ?? "—"}</strong> m2 terreno</p>
                <p><strong>{property.constructionArea ?? "—"}</strong> m2 construccion</p>
                <p><strong>{property.age ?? "—"}</strong> anos antiguedad</p>
              </div>
              <p className="mt-4 text-sm text-slate-700">{property.fullDescription ?? property.description}</p>
            </section>

            <PropertyDocumentClarity score={property.documentClarityScore} items={property.documentClarity} />
            <PropertyTimelinePreview timeline={estimatedTimeline} />

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-habitra-text">Propiedades similares</h3>
              {similarQuery.isPending ? <p className="mt-3 text-sm text-slate-600">Cargando similares...</p> : null}
              {similarQuery.data && similarQuery.data.similar.length > 0 ? (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {similarQuery.data.similar.map((item) => (
                    <PropertyPublicCard key={item.id} property={item} />
                  ))}
                </div>
              ) : null}
            </section>
          </div>

          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-habitra-text">Acciones</h3>
              <div className="mt-4 grid gap-2">
                <button className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white">
                  Contactar agente
                </button>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                  Agendar visita
                </button>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                  Simular compra
                </button>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                  Iniciar proceso
                </button>
              </div>
            </div>
            <PropertyAgentContactCard agent={property.agent} />
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-2">
          <button className="flex-1 rounded-xl bg-habitra-action px-3 py-2 text-sm font-semibold text-white">
            Contactar
          </button>
          <button className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">
            Visitar
          </button>
          <button className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">
            Simular
          </button>
        </div>
      </div>
    </PublicLayout>
  );
}
