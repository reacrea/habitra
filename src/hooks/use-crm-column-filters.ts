import { useCallback, useMemo, useState } from "react";

/** Estado genérico para filtros por columna en tablas CRM (valores string; vacío = sin filtro). */
export function useCrmColumnFilters() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const setField = useCallback((key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const clearAll = useCallback(() => setFilters({}), []);

  const hasActive = useMemo(
    () => Object.values(filters).some((v) => v != null && String(v).trim() !== ""),
    [filters],
  );

  return { filters, setField, clearAll, hasActive };
}
