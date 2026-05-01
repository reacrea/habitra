import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldErrors, Resolver, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";

import { CREDIT_TYPE_LABELS, PROPERTY_TYPE_LABELS } from "@/constants/crm-labels";
import type { BuyerRow } from "@/types/crm";
import {
  buyerCreateSchema,
  buyerUpdateSchema,
  type BuyerCreateInput,
  type BuyerUpdateInput,
} from "@/validations/buyer";

import { CrmInlineError } from "../CrmStates";

type SharedProps = {
  register: UseFormRegister<Record<string, unknown>>;
  errors: FieldErrors<Record<string, unknown>>;
};

function BuyerFields({ register, errors }: SharedProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-name">
          Nombre
        </label>
        <input
          id="buyer-name"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("name")}
        />
        {errors.name?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-email">
          Correo
        </label>
        <input
          id="buyer-email"
          type="email"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("email")}
        />
        {errors.email?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-phone">
          Telefono
        </label>
        <input
          id="buyer-phone"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("phone")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-zone">
          Zona deseada
        </label>
        <input
          id="buyer-zone"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("desiredZone")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-ptype">
          Tipo de propiedad
        </label>
        <select
          id="buyer-ptype"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("desiredPropertyType")}
        >
          <option value="">Sin especificar</option>
          {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-credit">
          Tipo de credito
        </label>
        <select
          id="buyer-credit"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("creditType")}
        >
          <option value="">Por defecto (bancario)</option>
          {Object.entries(CREDIT_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-max">
          Presupuesto max.
        </label>
        <input
          id="buyer-max"
          type="number"
          step="0.01"
          min={0}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("maxBudget")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-down">
          Enganche
        </label>
        <input
          id="buyer-down"
          type="number"
          step="0.01"
          min={0}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("downPayment")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-income">
          Ingreso mensual
        </label>
        <input
          id="buyer-income"
          type="number"
          step="0.01"
          min={0}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("monthlyIncome")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-bed">
          Recamaras
        </label>
        <input
          id="buyer-bed"
          type="number"
          min={0}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("bedrooms")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-bath">
          Banos
        </label>
        <input
          id="buyer-bath"
          type="number"
          min={0}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("bathrooms")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-urgency">
          Urgencia (1-5)
        </label>
        <input
          id="buyer-urgency"
          type="number"
          min={1}
          max={5}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("urgency")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="buyer-score">
          Score compra (0-100)
        </label>
        <input
          id="buyer-score"
          type="number"
          min={0}
          max={100}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("buyingScore")}
        />
      </div>
    </div>
  );
}

export function BuyerCreateForm({
  isSubmitting,
  submitError,
  onSubmit,
  onCancel,
}: {
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (values: BuyerCreateInput) => Promise<void>;
  onCancel: () => void;
}) {
  const form = useForm<BuyerCreateInput>({
    resolver: zodResolver(buyerCreateSchema) as Resolver<BuyerCreateInput>,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      maxBudget: undefined,
      downPayment: undefined,
      monthlyIncome: undefined,
      creditType: undefined,
      desiredZone: "",
      desiredPropertyType: undefined,
      bedrooms: undefined,
      bathrooms: undefined,
      urgency: undefined,
      buyingScore: undefined,
    },
  });

  return (
    <form
      className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      {submitError ? <CrmInlineError message={submitError} /> : null}
      <BuyerFields register={form.register as never} errors={form.formState.errors as never} />
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60"
        >
          {isSubmitting ? "Guardando..." : "Crear comprador"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export function BuyerEditForm({
  initial,
  isSubmitting,
  submitError,
  onSubmit,
  onCancel,
}: {
  initial: BuyerRow;
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (values: BuyerUpdateInput) => Promise<void>;
  onCancel: () => void;
}) {
  const form = useForm<BuyerUpdateInput>({
    resolver: zodResolver(buyerUpdateSchema) as Resolver<BuyerUpdateInput>,
    defaultValues: {
      id: initial.id,
      name: initial.name,
      email: initial.email ?? "",
      phone: initial.phone ?? "",
      maxBudget: initial.maxBudget ?? undefined,
      downPayment: initial.downPayment ?? undefined,
      monthlyIncome: initial.monthlyIncome ?? undefined,
      creditType: initial.creditType,
      desiredZone: initial.desiredZone ?? "",
      desiredPropertyType: initial.desiredPropertyType ?? undefined,
      bedrooms: initial.bedrooms ?? undefined,
      bathrooms: initial.bathrooms ?? undefined,
      urgency: initial.urgency ?? undefined,
      buyingScore: initial.buyingScore ?? undefined,
    },
  });

  return (
    <form
      className="mx-auto max-w-3xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <input type="hidden" {...form.register("id")} />
      {submitError ? <CrmInlineError message={submitError} /> : null}
      <BuyerFields register={form.register as never} errors={form.formState.errors as never} />
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60"
        >
          {isSubmitting ? "Guardando..." : "Guardar cambios"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
