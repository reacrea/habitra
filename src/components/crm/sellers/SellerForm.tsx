import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldErrors, Resolver, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { SellerRow } from "@/types/crm";
import {
  sellerCreateSchema,
  sellerUpdateSchema,
  type SellerCreateInput,
  type SellerUpdateInput,
} from "@/validations/seller";

import { CrmInlineError } from "../CrmStates";

type SharedProps = {
  register: UseFormRegister<Record<string, unknown>>;
  errors: FieldErrors<Record<string, unknown>>;
};

function SellerFields({ register, errors }: SharedProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="seller-name">
          Nombre
        </label>
        <input
          id="seller-name"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("name")}
        />
        {errors.name?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="seller-email">
          Correo
        </label>
        <input
          id="seller-email"
          type="email"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("email")}
        />
        {errors.email?.message ? (
          <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="seller-phone">
          Telefono
        </label>
        <input
          id="seller-phone"
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("phone")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="seller-price">
          Precio esperado
        </label>
        <input
          id="seller-price"
          type="number"
          step="0.01"
          min={0}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("expectedPrice")}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="seller-urgency">
          Urgencia (1-5)
        </label>
        <input
          id="seller-urgency"
          type="number"
          min={1}
          max={5}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("urgency")}
        />
      </div>

      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-slate-700" htmlFor="seller-reason">
          Motivo de venta
        </label>
        <textarea
          id="seller-reason"
          rows={3}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600"
          {...register("sellingReason")}
        />
      </div>
    </div>
  );
}

export function SellerCreateForm({
  isSubmitting,
  submitError,
  onSubmit,
  onCancel,
}: {
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (values: SellerCreateInput) => Promise<void>;
  onCancel: () => void;
}) {
  const form = useForm<SellerCreateInput>({
    resolver: zodResolver(sellerCreateSchema) as unknown as Resolver<SellerCreateInput>,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      urgency: undefined,
      expectedPrice: undefined,
      sellingReason: "",
    },
  });

  return (
    <form
      className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      {submitError ? <CrmInlineError message={submitError} /> : null}
      <SellerFields register={form.register as never} errors={form.formState.errors as never} />
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60"
        >
          {isSubmitting ? "Guardando..." : "Crear vendedor"}
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

export function SellerEditForm({
  initial,
  isSubmitting,
  submitError,
  onSubmit,
  onCancel,
}: {
  initial: SellerRow;
  isSubmitting: boolean;
  submitError: string | null;
  onSubmit: (values: SellerUpdateInput) => Promise<void>;
  onCancel: () => void;
}) {
  const form = useForm<SellerUpdateInput>({
    resolver: zodResolver(sellerUpdateSchema) as unknown as Resolver<SellerUpdateInput>,
    defaultValues: {
      id: initial.id,
      name: initial.name,
      email: initial.email ?? "",
      phone: initial.phone ?? "",
      urgency: initial.urgency ?? undefined,
      expectedPrice: initial.expectedPrice ?? undefined,
      sellingReason: initial.sellingReason ?? "",
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
      <SellerFields register={form.register as never} errors={form.formState.errors as never} />
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
