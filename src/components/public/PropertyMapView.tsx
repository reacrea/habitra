import type { PublicPropertyCard } from "@/server/public-b2c";

export function PropertyMapView({ properties }: { properties: PublicPropertyCard[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-habitra-text">Mapa (mock)</h3>
        <span className="text-xs text-slate-500">{properties.length} pines simulados</span>
      </div>
      <div className="relative h-[480px] overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#d1fae5_1px,_transparent_1px)] [background-size:22px_22px] opacity-40" />
        {properties.slice(0, 18).map((property, index) => (
          <button
            key={property.id}
            type="button"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-habitra-action px-2 py-1 text-[10px] font-semibold text-white shadow"
            style={{
              left: `${8 + ((index * 13) % 84)}%`,
              top: `${12 + ((index * 19) % 76)}%`,
            }}
            title={`${property.title} - ${property.city}`}
          >
            ${Math.round(property.price / 1000)}k
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Vista de mapa mock para validar UX; pines y geolocalizacion real se integra en siguiente iteracion.
      </p>
    </div>
  );
}
