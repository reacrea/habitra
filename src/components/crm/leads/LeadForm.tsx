import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldErrors, Resolver, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";

import {
  LEAD_STATUS_LABELS,
  LEAD_TEMPERATURE_LABELS,
  LEAD_TYPE_LABELS,
} from "@/constants/crm-labels";
import type { LeadRow } from "@/types/crm";
import {
  leadCreateSchema,
  leadUpdateSchema,
  type LeadCreateInput,
  type LeadUpdateInput,
} from "@/validations/lead";

import { CrmInlineError } from "../CrmStates";

type SharedFieldsProps = {
  register: UseFormRegister<Record<string, unknown>>;
  errors: FieldErrors<Record<string, unknown>>;
};

function LeadFields({ register, errors }: SharedFieldsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-name">
          Nombre
        </label>
        <input
          id="lead-name"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("name")}
        />
        {errors.name?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-email">
          Correo
        </label>
        <input
          id="lead-email"
          type="email"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("email")}
        />
        {errors.email?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-phone">
          Telefono
        </label>
        <input
          id="lead-phone"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("phone")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-type">
          Tipo
        </label>
        <select
          id="lead-type"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("type")}
        >
          {Object.entries(LEAD_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-source">
          Origen
        </label>
        <input
          id="lead-source"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("source")}
        />
        {errors.source?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.source.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-status">
          Estado
        </label>
        <select
          id="lead-status"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("status")}
        >
          {Object.entries(LEAD_STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-temp">
          Temperatura
        </label>
        <select
          id="lead-temp"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("temperature")}
        >
          {Object.entries(LEAD_TEMPERATURE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="lead-notes">
          Notas
        </label>
        <textarea
          id="lead-notes"
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("notesText")}
        />
      </div>
    </div>
  );
}

type LeadCreateFormProps = {
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (values: LeadCreateInput) => Promise<void>;
  onCancel: () => void;
};

export function LeadCreateForm({
  isSubmitting,
  submitError,
  onSubmit,
  onCancel,
}: LeadCreateFormProps) {
  const form = useForm<LeadCreateInput>({
    resolver: zodResolver(leadCreateSchema) as Resolver<LeadCreateInput>,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "COMPRADOR",
      source: "",
      status: "NUEVO",
      temperature: "TIBIO",
      notesText: "",
    },
  });

  return (
    <form
      className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      {submitError ? <CrmInlineError message={submitError} /> : null}
      <LeadFields register={form.register as never} errors={form.formState.errors as never} />
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60"
        >
          {isSubmitting ? "Guardando..." : "Crear lead"}
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

type LeadEditFormProps = {
  initial: LeadRow;
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (values: LeadUpdateInput) => Promise<void>;
  onCancel: () => void;
};

export function LeadEditForm({
  initial,
  isSubmitting,
  submitError,
  onSubmit,
  onCancel,
}: LeadEditFormProps) {
  const form = useForm<LeadUpdateInput>({
    resolver: zodResolver(leadUpdateSchema) as Resolver<LeadUpdateInput>,
    defaultValues: {
      id: initial.id,
      name: initial.name,
      email: initial.email ?? "",
      phone: initial.phone ?? "",
      type: initial.type,
      source: initial.source,
      status: initial.status,
      temperature: initial.temperature,
      notesText: initial.notesText ?? "",
    },
  });

  return (
    <form
      className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <input type="hidden" {...form.register("id")} />
      {submitError ? <CrmInlineError message={submitError} /> : null}
      <LeadFields register={form.register as never} errors={form.formState.errors as never} />
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
