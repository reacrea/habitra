import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { CrmInlineError } from "@/components/crm/CrmStates";
import { OPERATION_TYPE_LABELS, PROPERTY_STATUS_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
import { updateProperty } from "@/server/properties-crud";
import type { PropertyRow } from "@/types/crm";
import { propertyUpdateSchema } from "@/validations/property";
import { formatMutationError } from "@/utils/mutation-error";

/** Valores de formulario (numeros opcionales como texto para inputs HTML). */
type PropertyEditFormValues = {
  title: string;
  description: string;
  fullDescription: string;
  propertyType: string;
  operationType: string;
  status: string;
  price: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  postalCode: string;
  bedrooms: string;
  bathrooms: string;
  parkingSpaces: string;
  landArea: string;
  constructionArea: string;
  amenityText: string;
};

type PropertyEditModalProps = {
  open: boolean;
  property: PropertyRow;
  onClose: () => void;
  onSaved: () => void;
};

export function PropertyEditModal({ open, property, onClose, onSaved }: PropertyEditModalProps) {
  const queryClient = useQueryClient();
  const saveFn = useServerFn(updateProperty);

  const form = useForm<PropertyEditFormValues>({
    defaultValues: buildDefaults(property),
  });

  useEffect(() => {
    if (open) {
      form.reset(buildDefaults(property));
    }
  }, [open, property, form]);

  const mutation = useMutation({
    mutationFn: (payload: z.infer<typeof propertyUpdateSchema>) => saveFn({ data: payload }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["crm-property-detail", property.id] });
      await queryClient.invalidateQueries({ queryKey: ["crm-properties"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-sellers"] });
      await queryClient.invalidateQueries({ queryKey: ["crm-seller"] });
      onSaved();
      onClose();
    },
  });

  if (!open) return null;

  const inputClass =
    "mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-habitra-text outline-none focus:border-emerald-600";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Cerrar"
        onClick={() => !mutation.isPending && onClose()}
      />
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <h3 className="mb-4 text-lg font-semibold text-habitra-text">Editar propiedad</h3>

        <form
          className="space-y-4"
          onSubmit={form.handleSubmit((values) => {
            const amenityNames = values.amenityText
              .split(/\r?\n/)
              .map((s: string) => s.trim())
              .filter((s: string) => s.length > 0);
            const payload = propertyUpdateSchema.parse({
              id: property.id,
              title: values.title,
              description: values.description,
              fullDescription: values.fullDescription.trim() ? values.fullDescription : undefined,
              propertyType: values.propertyType,
              operationType: values.operationType,
              status: values.status,
              price: optPositiveNumber(values.price),
              address: values.address,
              city: values.city,
              state: values.state,
              neighborhood: values.neighborhood.trim() ? values.neighborhood : undefined,
              postalCode: values.postalCode.trim() ? values.postalCode : undefined,
              bedrooms: optInt(values.bedrooms),
              bathrooms: optInt(values.bathrooms),
              parkingSpaces: optInt(values.parkingSpaces),
              landArea: optArea(values.landArea),
              constructionArea: optArea(values.constructionArea),
              amenityNames,
            });
            mutation.mutate(payload);
          })}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Titulo</label>
              <input className={inputClass} {...form.register("title")} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Descripcion</label>
              <textarea className={`${inputClass} min-h-[80px]`} {...form.register("description")} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Descripcion completa (opcional)</label>
              <textarea className={`${inputClass} min-h-[100px]`} {...form.register("fullDescription")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Tipo</label>
              <select className={inputClass} {...form.register("propertyType")}>
                {Object.entries(PROPERTY_TYPE_LABELS).map(([k, label]) => (
                  <option key={k} value={k}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Operacion</label>
              <select className={inputClass} {...form.register("operationType")}>
                {Object.entries(OPERATION_TYPE_LABELS).map(([k, label]) => (
                  <option key={k} value={k}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Precio (MXN)</label>
              <input type="text" inputMode="decimal" className={inputClass} {...form.register("price")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Estatus</label>
              <select className={inputClass} {...form.register("status")}>
                {Object.entries(PROPERTY_STATUS_LABELS).map(([k, label]) => (
                  <option key={k} value={k}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Direccion</label>
              <input className={inputClass} {...form.register("address")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Ciudad</label>
              <input className={inputClass} {...form.register("city")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Estado</label>
              <input className={inputClass} {...form.register("state")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Colonia</label>
              <input className={inputClass} {...form.register("neighborhood")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Codigo postal</label>
              <input className={inputClass} {...form.register("postalCode")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Recamaras</label>
              <input type="text" inputMode="numeric" className={inputClass} {...form.register("bedrooms")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Banos</label>
              <input type="text" inputMode="numeric" className={inputClass} {...form.register("bathrooms")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Estacionamientos</label>
              <input type="text" inputMode="numeric" className={inputClass} {...form.register("parkingSpaces")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Terreno (m²)</label>
              <input type="text" inputMode="decimal" className={inputClass} {...form.register("landArea")} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Construccion (m²)</label>
              <input type="text" inputMode="decimal" className={inputClass} {...form.register("constructionArea")} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Amenidades (una por linea; reemplaza la lista actual al guardar)
              </label>
              <textarea className={`${inputClass} min-h-[100px] font-mono text-xs`} {...form.register("amenityText")} />
            </div>
          </div>

          {mutation.isError ? (
            <CrmInlineError message={formatMutationError(mutation.error)} />
          ) : null}

          <div className="flex flex-wrap justify-end gap-2 pt-2">
            <button
              type="button"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              disabled={mutation.isPending}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {mutation.isPending ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function optPositiveNumber(raw: string): number | undefined {
  const t = raw.trim();
  if (!t) return undefined;
  const n = Number(t);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  return n;
}

function optInt(raw: string): number | undefined {
  const t = raw.trim();
  if (!t) return undefined;
  const n = Number.parseInt(t, 10);
  return Number.isFinite(n) && n >= 0 ? n : undefined;
}

function optArea(raw: string): number | null | undefined {
  const t = raw.trim();
  if (!t) return undefined;
  const n = Number(t);
  if (!Number.isFinite(n) || n < 0) return undefined;
  return n;
}

function buildDefaults(p: PropertyRow): PropertyEditFormValues {
  return {
    title: p.title,
    description: p.description,
    fullDescription: p.fullDescription ?? "",
    propertyType: p.propertyType,
    operationType: p.operationType,
    status: p.status,
    price: String(p.price),
    address: p.address,
    city: p.city,
    state: p.state,
    neighborhood: p.neighborhood ?? "",
    postalCode: p.postalCode ?? "",
    bedrooms: p.bedrooms != null ? String(p.bedrooms) : "",
    bathrooms: p.bathrooms != null ? String(p.bathrooms) : "",
    parkingSpaces: p.parkingSpaces != null ? String(p.parkingSpaces) : "",
    landArea: p.landArea != null ? String(p.landArea) : "",
    constructionArea: p.constructionArea != null ? String(p.constructionArea) : "",
    amenityText: p.amenities.length > 0 ? p.amenities.join("\n") : "",
  };
}
