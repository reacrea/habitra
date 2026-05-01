import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { CREDIT_TYPE_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
import type { BuyerPortalProfileDto } from "@/server/buyer-portal";
import { getBuyerProfileData, updateBuyerProfileData } from "@/server/buyer-portal";
import { formatMutationError } from "@/utils/mutation-error";

function formatMoney(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return "—";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

type Draft = {
  name: string;
  email: string;
  phone: string;
  city: string;
  interestZones: string;
  maxBudget: string;
  downPayment: string;
  monthlyIncome: string;
  creditType: string;
  desiredPropertyType: string;
  bedrooms: string;
  bathrooms: string;
  urgency: string;
};

function toDraft(d: BuyerPortalProfileDto): Draft {
  return {
    name: d.name ?? "",
    email: d.email ?? "",
    phone: d.phone ?? "",
    city: d.city ?? "",
    interestZones: d.interestZones ?? "",
    maxBudget: d.maxBudget != null ? String(d.maxBudget) : "",
    downPayment: d.downPayment != null ? String(d.downPayment) : "",
    monthlyIncome: d.monthlyIncome != null ? String(d.monthlyIncome) : "",
    creditType: d.creditType ?? "BANCARIO",
    desiredPropertyType: d.desiredPropertyType ?? "",
    bedrooms: d.bedrooms != null ? String(d.bedrooms) : "",
    bathrooms: d.bathrooms != null ? String(d.bathrooms) : "",
    urgency: String(d.urgency ?? 3),
  };
}

type Props = {
  title: string;
  description: string;
};

export function BuyerProfileSection({ title, description }: Props) {
  const queryClient = useQueryClient();
  const fetchFn = useServerFn(getBuyerProfileData);
  const updateFn = useServerFn(updateBuyerProfileData);
  const query = useQuery({
    queryKey: ["buyer-profile"],
    queryFn: () => fetchFn(),
  });

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [savedBanner, setSavedBanner] = useState(false);

  const mutation = useMutation({
    mutationFn: (payload: Record<string, unknown>) => updateFn({ data: payload }),
    onSuccess: async () => {
      setEditing(false);
      setSavedBanner(true);
      await queryClient.invalidateQueries({ queryKey: ["buyer-profile"] });
      await queryClient.invalidateQueries({ queryKey: ["buyer-dashboard"] });
      window.setTimeout(() => setSavedBanner(false), 4000);
    },
  });

  const startEdit = () => {
    if (query.data) {
      setDraft(toDraft(query.data));
      setEditing(true);
    }
  };

  const cancelEdit = () => {
    setEditing(false);
    setDraft(null);
    void queryClient.invalidateQueries({ queryKey: ["buyer-profile"] });
  };

  const save = () => {
    if (!draft) return;
    mutation.mutate({
      name: draft.name.trim(),
      email: draft.email.trim(),
      phone: draft.phone.trim() || undefined,
      city: draft.city.trim() || undefined,
      interestZones: draft.interestZones.trim() || undefined,
      maxBudget: draft.maxBudget ? Number(draft.maxBudget) : undefined,
      downPayment: draft.downPayment ? Number(draft.downPayment) : undefined,
      monthlyIncome: draft.monthlyIncome ? Number(draft.monthlyIncome) : undefined,
      creditType: draft.creditType,
      desiredPropertyType: draft.desiredPropertyType === "" ? null : draft.desiredPropertyType,
      bedrooms: draft.bedrooms ? Number(draft.bedrooms) : undefined,
      bathrooms: draft.bathrooms ? Number(draft.bathrooms) : undefined,
      urgency: Number(draft.urgency),
    });
  };

  if (query.isPending) return <CrmLoading label="Cargando perfil..." />;
  if (query.isError || !query.data) return <CrmInlineError message="No se pudo cargar el perfil." />;

  const d = query.data;
  const creditLabel = CREDIT_TYPE_LABELS[d.creditType] ?? d.creditType;
  const typeLabel = d.desiredPropertyType ? PROPERTY_TYPE_LABELS[d.desiredPropertyType] ?? d.desiredPropertyType : "—";

  const readRows: { label: string; value: string }[] = [
    { label: "Nombre", value: d.name || "—" },
    { label: "Email", value: d.email || "—" },
    { label: "Telefono", value: d.phone || "—" },
    { label: "Ciudad de interes", value: d.city?.trim() ? d.city : "—" },
    { label: "Zonas de interes", value: d.interestZones?.trim() ? d.interestZones : "—" },
    { label: "Presupuesto maximo", value: formatMoney(d.maxBudget) },
    { label: "Enganche", value: formatMoney(d.downPayment) },
    { label: "Ingreso mensual", value: formatMoney(d.monthlyIncome) },
    { label: "Tipo de credito", value: creditLabel },
    { label: "Tipo de propiedad deseada", value: typeLabel },
    { label: "Recamaras", value: d.bedrooms != null ? String(d.bedrooms) : "—" },
    { label: "Banos", value: d.bathrooms != null ? String(d.bathrooms) : "—" },
    { label: "Urgencia (1-5)", value: String(d.urgency ?? 3) },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-habitra-text">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        {!editing ? (
          <button
            type="button"
            onClick={startEdit}
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Editar
          </button>
        ) : (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={mutation.isPending}
              onClick={save}
              className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {mutation.isPending ? "Guardando..." : "Guardar cambios"}
            </button>
            <button
              type="button"
              disabled={mutation.isPending}
              onClick={cancelEdit}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      {savedBanner ? (
        <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900" role="status">
          Cambios guardados correctamente.
        </p>
      ) : null}
      {mutation.isError ? (
        <p className="mt-4 text-sm text-red-600">{formatMutationError(mutation.error)}</p>
      ) : null}

      {!editing ? (
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {readRows.map((row) => (
            <div key={row.label} className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
              <dt className="text-xs font-semibold uppercase text-slate-500">{row.label}</dt>
              <dd className="mt-1 text-sm text-habitra-text">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : draft ? (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <label className="text-xs font-semibold text-slate-600">
            Nombre
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Email
            <input
              type="email"
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Telefono
            <input
              value={draft.phone}
              onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Ciudad de interes
            <input
              value={draft.city}
              onChange={(e) => setDraft({ ...draft, city: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600 md:col-span-2">
            Zonas de interes
            <textarea
              value={draft.interestZones}
              onChange={(e) => setDraft({ ...draft, interestZones: e.target.value })}
              className="mt-1 min-h-20 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Presupuesto maximo (MXN)
            <input
              type="number"
              min={0}
              value={draft.maxBudget}
              onChange={(e) => setDraft({ ...draft, maxBudget: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Enganche (MXN)
            <input
              type="number"
              min={0}
              value={draft.downPayment}
              onChange={(e) => setDraft({ ...draft, downPayment: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Ingreso mensual (MXN)
            <input
              type="number"
              min={0}
              value={draft.monthlyIncome}
              onChange={(e) => setDraft({ ...draft, monthlyIncome: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Tipo de credito
            <select
              value={draft.creditType}
              onChange={(e) => setDraft({ ...draft, creditType: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            >
              {Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Tipo de propiedad deseada
            <select
              value={draft.desiredPropertyType}
              onChange={(e) => setDraft({ ...draft, desiredPropertyType: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            >
              <option value="">Sin definir</option>
              {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Recamaras
            <input
              type="number"
              min={0}
              value={draft.bedrooms}
              onChange={(e) => setDraft({ ...draft, bedrooms: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Banos
            <input
              type="number"
              min={0}
              value={draft.bathrooms}
              onChange={(e) => setDraft({ ...draft, bathrooms: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs font-semibold text-slate-600">
            Urgencia (1 = baja, 5 = alta)
            <select
              value={draft.urgency}
              onChange={(e) => setDraft({ ...draft, urgency: e.target.value })}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}
    </section>
  );
}
