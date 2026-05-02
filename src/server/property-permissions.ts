import type { CrmOrganizationContext } from "./crm-session";

/**
 * PATCH-8: Admin y broker owner editan cualquier propiedad de la org;
 * el agente solo si es el asignado en el anuncio.
 */
export function canEditCrmProperty(
  ctx: CrmOrganizationContext,
  property: { assignedAgentId: string | null },
): boolean {
  if (ctx.role === "ADMIN" || ctx.role === "BROKER_OWNER") return true;
  if (ctx.role === "AGENT") return property.assignedAgentId === ctx.userId;
  return false;
}

export function assertCanEditCrmProperty(
  ctx: CrmOrganizationContext,
  property: { assignedAgentId: string | null },
): void {
  if (!canEditCrmProperty(ctx, property)) {
    throw new Response("No tienes permiso para editar esta propiedad", { status: 403 });
  }
}
