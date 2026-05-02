type SummaryProps = {
  filteredCount: number;
  totalCount: number;
  hasActive: boolean;
  onClear: () => void;
};

/** Barra sobre la tabla cuando hay filtros activos: conteo y limpiar. */
export function CrmFilterSummary({ filteredCount, totalCount, hasActive, onClear }: SummaryProps) {
  if (!hasActive) return null;
  return (
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
      <span>
        Mostrando <strong>{filteredCount}</strong> de <strong>{totalCount}</strong> registros
      </span>
      <button
        type="button"
        onClick={onClear}
        className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
      >
        Limpiar filtros
      </button>
    </div>
  );
}

type TextProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function CrmFilterText({ value, onChange, placeholder }: TextProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder ?? "Filtrar…"}
      className="w-full min-w-[4rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-normal normal-case tracking-normal text-habitra-text placeholder:text-slate-400"
    />
  );
}

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export function CrmFilterSelect({ value, onChange, options, placeholder = "Todos" }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full min-w-[5rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-normal normal-case tracking-normal text-habitra-text"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

type NumberPairProps = {
  minValue: string;
  maxValue: string;
  onMinChange: (v: string) => void;
  onMaxChange: (v: string) => void;
  minPlaceholder?: string;
  maxPlaceholder?: string;
};

/** Dos campos numéricos compactos (min / max) en una celda. */
export function CrmFilterNumberRange({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minPlaceholder = "Min",
  maxPlaceholder = "Max",
}: NumberPairProps) {
  return (
    <div className="flex min-w-[6rem] flex-col gap-1 sm:flex-row sm:items-center">
      <input
        type="text"
        inputMode="decimal"
        value={minValue}
        onChange={(e) => onMinChange(e.target.value)}
        placeholder={minPlaceholder}
        className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-normal normal-case tracking-normal text-habitra-text placeholder:text-slate-400"
      />
      <input
        type="text"
        inputMode="decimal"
        value={maxValue}
        onChange={(e) => onMaxChange(e.target.value)}
        placeholder={maxPlaceholder}
        className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-normal normal-case tracking-normal text-habitra-text placeholder:text-slate-400"
      />
    </div>
  );
}

type DatePairProps = {
  fromValue: string;
  toValue: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
};

export function CrmFilterDateRange({ fromValue, toValue, onFromChange, onToChange }: DatePairProps) {
  return (
    <div className="flex min-w-[7rem] flex-col gap-1">
      <input
        type="date"
        value={fromValue}
        onChange={(e) => onFromChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-1 py-1 text-[11px] font-normal normal-case tracking-normal text-habitra-text"
      />
      <input
        type="date"
        value={toValue}
        onChange={(e) => onToChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-1 py-1 text-[11px] font-normal normal-case tracking-normal text-habitra-text"
      />
    </div>
  );
}
