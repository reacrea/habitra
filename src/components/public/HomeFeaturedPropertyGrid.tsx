import { Link } from "@tanstack/react-router";

import { OPERATION_TYPE_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
import type { PublicPropertyCard } from "@/server/public-b2c";

function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

type Props = {
  title: string;
  description: string;
  properties: PublicPropertyCard[];
  emptyTitle: string;
  emptyHint: string;
};

export function HomeFeaturedPropertyGrid({ title, description, properties, emptyTitle, emptyHint }: Props) {
  if (properties.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-habitra-text">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-14 text-center">
          <p className="text-sm font-semibold text-slate-700">{emptyTitle}</p>
          <p className="mt-2 max-w-sm text-sm text-slate-500">{emptyHint}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-habitra-text">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((p) => {
          const typeLabel = PROPERTY_TYPE_LABELS[p.propertyType] ?? p.propertyType;
          const opLabel = OPERATION_TYPE_LABELS[p.operationType] ?? p.operationType;
          return (
            <Link
              key={p.id}
              to="/properties/$slug"
              params={{ slug: p.slug }}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm ring-1 ring-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-200 via-emerald-100/80 to-slate-300"
                  aria-hidden
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-900/50 to-slate-900/15"
                aria-hidden
              />
              <div className="absolute right-2 top-2 rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                {opLabel}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <p className="text-lg font-bold text-white drop-shadow-sm md:text-xl">{formatPrice(p.price)}</p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-white/95">{p.title}</p>
                <p className="mt-0.5 line-clamp-1 text-xs text-slate-200/95">
                  {p.city}
                  {p.neighborhood ? ` · ${p.neighborhood}` : ""}
                </p>
                <p className="mt-1.5 text-xs font-medium text-emerald-200/95">{typeLabel}</p>
                <p className="mt-2 text-xs font-semibold text-white/90 underline decoration-white/40 underline-offset-2">
                  Ver detalle
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
