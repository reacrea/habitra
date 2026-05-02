import { useCallback, useEffect, useId, useState } from "react";

export type CrmPickerSearchItem = {
  id: string;
  primary: string;
  secondary: string;
};

type CrmEntitySearchFieldProps = {
  label: string;
  hint?: string;
  selectedId: string;
  selectedPrimary: string;
  selectedSecondary: string;
  onSelect: (item: CrmPickerSearchItem) => void;
  onClear: () => void;
  /** Busqueda en servidor; texto vacio debe devolver lista vacia sin error. */
  loadItems: (query: string) => Promise<CrmPickerSearchItem[]>;
};

const inputClass =
  "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text outline-none focus:border-emerald-600";

export function CrmEntitySearchField({
  label,
  hint,
  selectedId,
  selectedPrimary,
  selectedSecondary,
  onSelect,
  onClear,
  loadItems,
}: CrmEntitySearchFieldProps) {
  const listId = useId();
  const [input, setInput] = useState("");
  const [debounced, setDebounced] = useState("");
  const [items, setItems] = useState<CrmPickerSearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(input), 350);
    return () => clearTimeout(t);
  }, [input]);

  const runSearch = useCallback(async () => {
    const q = debounced.trim();
    if (q.length === 0) {
      setItems([]);
      return;
    }
    setLoading(true);
    try {
      const rows = await loadItems(q);
      setItems(rows);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [debounced, loadItems]);

  useEffect(() => {
    if (selectedId) return;
    void runSearch();
  }, [debounced, runSearch, selectedId]);

  const hasSelection = Boolean(selectedId);

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}

      {hasSelection ? (
        <div className="mt-1 flex items-start justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-habitra-text">{selectedPrimary || selectedId}</p>
            {selectedSecondary ? <p className="truncate text-xs text-slate-500">{selectedSecondary}</p> : null}
          </div>
          <button
            type="button"
            onClick={() => {
              onClear();
              setInput("");
              setItems([]);
              setOpen(false);
            }}
            className="shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            Quitar
          </button>
        </div>
      ) : (
        <div className="relative">
          <input
            type="search"
            autoComplete="off"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            className={inputClass}
            placeholder="Escribe id, nombre o titulo…"
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
          />
          {open && (debounced.trim().length > 0 || loading) ? (
            <ul
              id={listId}
              role="listbox"
              className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
            >
              {loading ? (
                <li className="px-3 py-2 text-sm text-slate-500">Buscando…</li>
              ) : items.length === 0 ? (
                <li className="px-3 py-2 text-sm text-slate-500">
                  {debounced.trim().length === 0 ? "Escribe para buscar." : "Sin resultados."}
                </li>
              ) : (
                items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="option"
                      className="w-full px-3 py-2 text-left hover:bg-slate-50"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        onSelect(item);
                        setInput("");
                        setItems([]);
                        setOpen(false);
                      }}
                    >
                      <span className="block truncate text-sm font-medium text-habitra-text">{item.primary}</span>
                      <span className="block truncate text-xs text-slate-500">{item.secondary}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}
