import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

import { AuthRequiredDialog } from "@/components/public/AuthRequiredDialog";
import { useRequireAuthAction } from "@/hooks/use-require-auth-action";
import { usePublicShortlists } from "@/hooks/use-public-shortlists";
import type { PublicPropertyCard } from "@/server/public-b2c";

function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

export function PropertyPublicCard({ property }: { property: PublicPropertyCard }) {
  const shortlists = usePublicShortlists();
  const authAction = useRequireAuthAction();
  const favorite = shortlists.isFavorite(property.id);
  const inCompare = shortlists.isInCompare(property.id);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44 w-full bg-slate-100">
        {property.imageUrl ? (
          <img src={property.imageUrl} alt={property.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-500">Sin imagen</div>
        )}
        <button
          type="button"
          aria-label={favorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          className={
            favorite
              ? "absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-md ring-1 ring-slate-200/80"
              : "absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 shadow-md backdrop-blur-sm ring-1 ring-white/30"
          }
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            authAction.requireAuth(() => shortlists.toggleFavorite(property));
          }}
        >
          <Heart
            className={`h-[1.125rem] w-[1.125rem] transition-colors ${favorite ? "fill-red-500 text-red-500" : "stroke-[2.25] text-white"}`}
            fill={favorite ? "currentColor" : "transparent"}
          />
        </button>
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
          <Link
            to="/mortgage-calculator"
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"
          >
            Simular compra
          </Link>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => authAction.requireAuth(() => shortlists.toggleCompare(property))}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold ${inCompare ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700"}`}
          >
            {inCompare ? "En comparador" : "Comparar"}
          </button>
        </div>
      </div>
      <AuthRequiredDialog {...authAction.authDialog} />
    </article>
  );
}
