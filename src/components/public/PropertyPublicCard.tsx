import { Link } from "@tanstack/react-router";

import type { PublicPropertyCard } from "@/server/public-b2c";

function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

export function PropertyPublicCard({ property }: { property: PublicPropertyCard }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-44 w-full bg-slate-100">
        {property.imageUrl ? (
          <img src={property.imageUrl} alt={property.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-500">Sin imagen</div>
        )}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-slate-900">{formatPrice(property.price)}</p>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
            Readiness {property.readinessScore}
          </span>
        </div>
        <p className="line-clamp-1 text-base font-semibold text-habitra-text">{property.title}</p>
        <p className="text-sm text-slate-600">
          {property.city}
          {property.neighborhood ? `, ${property.neighborhood}` : ""}
        </p>
        <p className="text-xs text-slate-500">
          {property.bedrooms ?? "—"} rec · {property.bathrooms ?? "—"} banos · {property.parkingSpaces ?? "—"} est.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <Link
            to="/properties/$slug"
            params={{ slug: property.slug }}
            className="rounded-lg bg-habitra-action px-3 py-2 text-xs font-semibold text-white"
          >
            Ver propiedad
          </Link>
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
            Simular compra
          </button>
        </div>
      </div>
    </article>
  );
}
