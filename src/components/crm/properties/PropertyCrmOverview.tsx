import {
  OPERATION_TYPE_LABELS,
  PROPERTY_STATUS_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/constants/crm-labels";
import type { PropertyRow } from "@/types/crm";

function formatMoney(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatArea(value: number | null): string {
  if (value === null || Number.isNaN(value)) return "—";
  return `${new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 }).format(value)} m²`;
}

type PropertyCrmOverviewProps = {
  property: PropertyRow;
  assignedAgentName: string | null;
  sellerName: string | null;
  canEdit: boolean;
  onEditClick: () => void;
};

export function PropertyCrmOverview({
  property,
  assignedAgentName,
  sellerName,
  canEdit,
  onEditClick,
}: PropertyCrmOverviewProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Titulo", value: property.title },
    { label: "Descripcion corta", value: property.description },
    {
      label: "Descripcion extendida",
      value: property.fullDescription?.trim() ? property.fullDescription : "—",
    },
    { label: "Tipo", value: PROPERTY_TYPE_LABELS[property.propertyType] ?? property.propertyType },
    {
      label: "Operacion",
      value: OPERATION_TYPE_LABELS[property.operationType] ?? property.operationType,
    },
    { label: "Precio", value: formatMoney(property.price) },
    { label: "Ciudad", value: property.city },
    { label: "Estado", value: property.state },
    { label: "Colonia", value: property.neighborhood ?? "—" },
    { label: "Direccion", value: property.address },
    { label: "CP", value: property.postalCode ?? "—" },
    { label: "Recamaras", value: property.bedrooms != null ? String(property.bedrooms) : "—" },
    { label: "Banos", value: property.bathrooms != null ? String(property.bathrooms) : "—" },
    {
      label: "Estacionamientos",
      value: property.parkingSpaces != null ? String(property.parkingSpaces) : "—",
    },
    { label: "Terreno", value: formatArea(property.landArea) },
    { label: "Construccion", value: formatArea(property.constructionArea) },
    {
      label: "Amenidades",
      value: property.amenities.length > 0 ? property.amenities.join(", ") : "—",
    },
    {
      label: "Estatus",
      value: PROPERTY_STATUS_LABELS[property.status] ?? property.status,
    },
    { label: "Readiness", value: `${property.readinessScore}%` },
    {
      label: "Agente asignado",
      value: assignedAgentName ?? (property.assignedAgentId ? "—" : "Sin agente"),
    },
    {
      label: "Vendedor",
      value: sellerName ?? (property.sellerId ? "—" : "Sin vendedor"),
    },
    { label: "Slug publico", value: property.slug },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-habitra-text">Ficha de propiedad</h3>
        {canEdit ? (
          <button
            type="button"
            onClick={onEditClick}
            className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            Editar propiedad
          </button>
        ) : (
          <p className="text-xs text-slate-500">Solo lectura en esta ficha.</p>
        )}
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="border-b border-slate-100 pb-2 sm:border-0 sm:pb-0">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{r.label}</dt>
            <dd className="mt-0.5 text-sm text-habitra-text whitespace-pre-wrap">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
