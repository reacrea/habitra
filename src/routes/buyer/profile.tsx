import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { getBuyerProfileData, updateBuyerProfileData } from "@/server/buyer-portal";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/buyer/profile")({
  component: BuyerProfilePage,
});

function BuyerProfilePage() {
  const fetchFn = useServerFn(getBuyerProfileData);
  const updateFn = useServerFn(updateBuyerProfileData);
  const query = useQuery({
    queryKey: ["buyer-profile"],
    queryFn: () => fetchFn(),
  });
  const mutation = useMutation({
    mutationFn: (payload: Record<string, unknown>) => updateFn({ data: payload }),
  });

  if (query.isPending) return <CrmLoading label="Cargando perfil buyer..." />;
  if (query.isError || !query.data) return <CrmInlineError message="No se pudo cargar el perfil." />;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-habitra-text">Mi perfil comprador</h1>
        <p className="mt-1 text-sm text-slate-600">Actualiza presupuesto y preferencias para mejorar tus matches.</p>
      </div>
      {mutation.isError ? <CrmInlineError message={formatMutationError(mutation.error)} /> : null}
      {mutation.isSuccess ? <p className="text-sm text-emerald-700">Perfil actualizado.</p> : null}
      <form
        className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          mutation.mutate({
            phone: String(fd.get("phone") ?? "") || undefined,
            maxBudget: fd.get("maxBudget") ? Number(fd.get("maxBudget")) : undefined,
            downPayment: fd.get("downPayment") ? Number(fd.get("downPayment")) : undefined,
            monthlyIncome: fd.get("monthlyIncome") ? Number(fd.get("monthlyIncome")) : undefined,
            creditType: String(fd.get("creditType") ?? "") || undefined,
            desiredZone: String(fd.get("desiredZone") ?? "") || undefined,
            desiredPropertyType: String(fd.get("desiredPropertyType") ?? "") || undefined,
            bedrooms: fd.get("bedrooms") ? Number(fd.get("bedrooms")) : undefined,
            bathrooms: fd.get("bathrooms") ? Number(fd.get("bathrooms")) : undefined,
          });
        }}
      >
        <input defaultValue={query.data.phone ?? ""} name="phone" placeholder="Telefono" className="rounded-xl border px-3 py-2 text-sm" />
        <input defaultValue={query.data.maxBudget ?? ""} name="maxBudget" type="number" placeholder="Presupuesto maximo" className="rounded-xl border px-3 py-2 text-sm" />
        <input defaultValue={query.data.downPayment ?? ""} name="downPayment" type="number" placeholder="Enganche" className="rounded-xl border px-3 py-2 text-sm" />
        <input defaultValue={query.data.monthlyIncome ?? ""} name="monthlyIncome" type="number" placeholder="Ingreso mensual" className="rounded-xl border px-3 py-2 text-sm" />
        <select defaultValue={query.data.creditType ?? "BANCARIO"} name="creditType" className="rounded-xl border px-3 py-2 text-sm">
          <option value="BANCARIO">Bancario</option>
          <option value="INFONAVIT">Infonavit</option>
          <option value="FOVISSSTE">Fovissste</option>
          <option value="COFINAVIT">Cofinavit</option>
          <option value="CONTADO">Contado</option>
          <option value="MIXTO">Mixto</option>
          <option value="OTRO">Otro</option>
        </select>
        <input defaultValue={query.data.desiredZone ?? ""} name="desiredZone" placeholder="Zona deseada" className="rounded-xl border px-3 py-2 text-sm" />
        <select defaultValue={query.data.desiredPropertyType ?? ""} name="desiredPropertyType" className="rounded-xl border px-3 py-2 text-sm">
          <option value="">Tipo de propiedad</option>
          <option value="CASA">Casa</option>
          <option value="DEPARTAMENTO">Departamento</option>
          <option value="TERRENO">Terreno</option>
          <option value="OFICINA">Oficina</option>
          <option value="LOCAL_COMERCIAL">Local comercial</option>
          <option value="BODEGA">Bodega</option>
          <option value="PENTHOUSE">Penthouse</option>
          <option value="OTRO">Otro</option>
        </select>
        <input defaultValue={query.data.bedrooms ?? ""} name="bedrooms" type="number" placeholder="Recamaras" className="rounded-xl border px-3 py-2 text-sm" />
        <input defaultValue={query.data.bathrooms ?? ""} name="bathrooms" type="number" placeholder="Banos" className="rounded-xl border px-3 py-2 text-sm" />
        <button disabled={mutation.isPending} className="rounded-xl bg-habitra-action px-4 py-2 text-sm font-semibold text-white md:col-span-2">
          {mutation.isPending ? "Guardando..." : "Guardar perfil"}
        </button>
      </form>
    </div>
  );
}
