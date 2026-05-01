import { Link, createFileRoute } from "@tanstack/react-router";

import { CrmEmpty } from "@/components/crm/CrmStates";
import { PublicLayout } from "@/components/public/PublicLayout";
import { usePublicShortlists } from "@/hooks/use-public-shortlists";

export const Route = createFileRoute("/compare")({
  component: ComparePage,
});

function ComparePage() {
  const shortlists = usePublicShortlists();
  const items = shortlists.compare;

  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-habitra-text">Comparador</h1>
            <p className="mt-1 text-sm text-slate-600">
              Compara hasta 4 propiedades en columnas.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/properties" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
              Agregar mas
            </Link>
            {items.length > 0 ? (
              <button
                type="button"
                onClick={() => shortlists.clearCompare()}
                className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Limpiar
              </button>
            ) : null}
          </div>
        </div>

        {items.length === 0 ? (
          <CrmEmpty title="No hay propiedades para comparar" hint="Marca 'Comparar' en el listado o detalle." />
        ) : (
          <div className="overflow-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-[780px] w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-700">Campo</th>
                  {items.map((item) => (
                    <th key={item.id} className="p-3 text-left align-top font-semibold text-habitra-text">
                      <div className="space-y-1">
                        <Link to="/properties/$slug" params={{ slug: item.slug }} className="hover:text-habitra-action">
                          {item.title}
                        </Link>
                        <p className="text-xs font-normal text-slate-500">{item.city}</p>
                        <button
                          type="button"
                          onClick={() => shortlists.toggleCompare(item)}
                          className="text-xs font-semibold text-slate-600 underline"
                        >
                          Quitar
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Precio" values={items.map((x) => `$${x.price.toLocaleString("es-MX")} MXN`)} />
                <CompareRow label="Operacion" values={items.map((x) => x.operationType)} />
                <CompareRow label="Tipo" values={items.map((x) => x.propertyType)} />
                <CompareRow label="Recamaras" values={items.map((x) => String(x.bedrooms ?? "—"))} />
                <CompareRow label="Banos" values={items.map((x) => String(x.bathrooms ?? "—"))} />
                <CompareRow label="Estacionamientos" values={items.map((x) => String(x.parkingSpaces ?? "—"))} />
                <CompareRow label="Readiness" values={items.map((x) => `${x.readinessScore}`)} />
                <CompareRow label="Colonia" values={items.map((x) => x.neighborhood ?? "—")} />
                <CompareRow label="Inmobiliaria" values={items.map((x) => x.organizationName)} />
              </tbody>
            </table>
          </div>
        )}
      </section>
    </PublicLayout>
  );
}

function CompareRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="p-3 font-medium text-slate-700">{label}</td>
      {values.map((value, index) => (
        <td key={`${label}-${index}`} className="p-3 text-slate-700">
          {value}
        </td>
      ))}
    </tr>
  );
}
