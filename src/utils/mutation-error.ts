/** Mensaje legible para errores de server functions / fetch. */
export function formatMutationError(error: unknown): string {
  if (error instanceof Response) {
    if (error.status === 401) return "Sesion expirada o no autorizada";
    if (error.status === 403) return "No tienes permiso para esta accion";
    if (error.status === 404) return "No encontrado";
    return `Error del servidor (${error.status})`;
  }
  if (error instanceof Error) {
    return error.message || "Error inesperado";
  }
  if (typeof error === "object" && error !== null && "message" in error) {
    const m = (error as { message?: unknown }).message;
    if (typeof m === "string" && m.length > 0) return m;
  }
  return "No se pudo completar la operacion";
}
