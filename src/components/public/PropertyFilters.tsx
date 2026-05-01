type FiltersState = {
  operation: "buy" | "rent";
  city: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  sort: "relevance" | "price_asc" | "price_desc" | "recent" | "readiness_desc";
};

export function PropertyFilters({
  value,
  onChange,
  onApply,
  className,
}: {
  value: FiltersState;
  onChange: (next: FiltersState) => void;
  onApply: () => void;
  className?: string;
}) {
  return (
    <aside className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className ?? ""}`}>
      <h3 className="mb-3 text-sm font-semibold text-habitra-text">Filtros</h3>
      <div className="space-y-3">
        <select className="w-full rounded-xl border px-3 py-2 text-sm" value={value.operation} onChange={(e) => onChange({ ...value, operation: e.target.value as "buy" | "rent" })}>
          <option value="buy">Comprar</option>
          <option value="rent">Rentar</option>
        </select>
        <input className="w-full rounded-xl border px-3 py-2 text-sm" placeholder="Ciudad o colonia" value={value.city} onChange={(e) => onChange({ ...value, city: e.target.value })} />
        <select className="w-full rounded-xl border px-3 py-2 text-sm" value={value.type} onChange={(e) => onChange({ ...value, type: e.target.value })}>
          <option value="">Tipo propiedad</option>
          <option value="CASA">Casa</option>
          <option value="DEPARTAMENTO">Departamento</option>
          <option value="TERRENO">Terreno</option>
          <option value="OFICINA">Oficina</option>
          <option value="LOCAL_COMERCIAL">Local comercial</option>
        </select>
        <div className="grid grid-cols-2 gap-2">
          <input type="number" className="rounded-xl border px-3 py-2 text-sm" placeholder="Min precio" value={value.minPrice} onChange={(e) => onChange({ ...value, minPrice: e.target.value })} />
          <input type="number" className="rounded-xl border px-3 py-2 text-sm" placeholder="Max precio" value={value.maxPrice} onChange={(e) => onChange({ ...value, maxPrice: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input type="number" className="rounded-xl border px-3 py-2 text-sm" placeholder="Recamaras" value={value.bedrooms} onChange={(e) => onChange({ ...value, bedrooms: e.target.value })} />
          <input type="number" className="rounded-xl border px-3 py-2 text-sm" placeholder="Banos" value={value.bathrooms} onChange={(e) => onChange({ ...value, bathrooms: e.target.value })} />
        </div>
        <select className="w-full rounded-xl border px-3 py-2 text-sm" value={value.sort} onChange={(e) => onChange({ ...value, sort: e.target.value as FiltersState["sort"] })}>
          <option value="relevance">Relevancia</option>
          <option value="price_asc">Menor precio</option>
          <option value="price_desc">Mayor precio</option>
          <option value="recent">Mas recientes</option>
          <option value="readiness_desc">Mayor readiness</option>
        </select>
        <button type="button" className="w-full rounded-xl bg-habitra-action px-3 py-2 text-sm font-semibold text-white" onClick={onApply}>
          Aplicar filtros
        </button>
      </div>
    </aside>
  );
}
