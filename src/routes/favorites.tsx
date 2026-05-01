import { Link, createFileRoute } from "@tanstack/react-router";

import { CrmEmpty } from "@/components/crm/CrmStates";
import { PropertyResultsGrid } from "@/components/public/PropertyResultsGrid";
import { PublicLayout } from "@/components/public/PublicLayout";
import { usePublicShortlists } from "@/hooks/use-public-shortlists";

export const Route = createFileRoute("/favorites")({
  component: FavoritesPage,
});

function FavoritesPage() {
  const shortlists = usePublicShortlists();

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-habitra-text">Favoritos</h1>
            <p className="mt-1 text-sm text-slate-600">
              Guarda propiedades para revisarlas despues y compartirlas.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/properties" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
              Explorar propiedades
            </Link>
            {shortlists.favorites.length > 0 ? (
              <button
                type="button"
                onClick={() => shortlists.clearFavorites()}
                className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Limpiar
              </button>
            ) : null}
          </div>
        </div>

        {shortlists.favorites.length === 0 ? (
          <CrmEmpty title="No tienes favoritos" hint="Guarda propiedades desde el listado o detalle." />
        ) : (
          <PropertyResultsGrid properties={shortlists.favorites} />
        )}
      </section>
    </PublicLayout>
  );
}
