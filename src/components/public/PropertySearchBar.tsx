import { useState } from "react";

type SearchPayload = {
  operation: "buy" | "rent";
  city?: string;
  type?: string;
  minPrice?: string;
  maxPrice?: string;
};

export function PropertySearchBar({
  onSearch,
  defaultOperation = "buy",
}: {
  onSearch: (payload: SearchPayload) => void;
  defaultOperation?: "buy" | "rent";
}) {
  const [operation, setOperation] = useState<"buy" | "rent">(defaultOperation);
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:p-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch({
          operation,
          city: city || undefined,
          type: type || undefined,
          minPrice: minPrice || undefined,
          maxPrice: maxPrice || undefined,
        });
      }}
    >
      <div className="grid gap-3 md:grid-cols-5">
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value as "buy" | "rent")}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="buy">Comprar</option>
          <option value="rent">Rentar</option>
        </select>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ciudad o zona"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="">Tipo propiedad</option>
          <option value="CASA">Casa</option>
          <option value="DEPARTAMENTO">Departamento</option>
          <option value="TERRENO">Terreno</option>
          <option value="OFICINA">Oficina</option>
        </select>
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Precio minimo"
          type="number"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Precio maximo"
          type="number"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>
      <div className="mt-3 flex justify-end">
        <button className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white">
          Buscar
        </button>
      </div>
    </form>
  );
}
