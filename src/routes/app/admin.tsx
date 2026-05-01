import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { CrmInlineError, CrmLoading } from "@/components/crm/CrmStates";
import { PageHeader } from "@/components/layout/PageHeader";
import { getAdminBasicData } from "@/server/pricing-admin";
import { formatMutationError } from "@/utils/mutation-error";

export const Route = createFileRoute("/app/admin")({
  component: AdminPage,
});

function AdminPage() {
  const fetchAdmin = useServerFn(getAdminBasicData);
  const query = useQuery({
    queryKey: ["admin-basic-data"],
    queryFn: () => fetchAdmin(),
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Admin basico" description="Resumen operativo multi-organizacion." />
      {query.isPending ? <CrmLoading /> : null}
      {query.isError ? <CrmInlineError message={formatMutationError(query.error)} /> : null}
      {query.data ? (
        <>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">Orgs: <strong>{query.data.summary.organizations}</strong></div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">Users: <strong>{query.data.summary.users}</strong></div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">Subs activas: <strong>{query.data.summary.activeSubscriptions}</strong></div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">Operaciones activas: <strong>{query.data.summary.activeTransactions}</strong></div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-semibold text-habitra-text">Organizaciones recientes</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {query.data.organizations.map((org) => (
                  <li key={org.id}>
                    <strong>{org.name}</strong> - {org.city}, {org.state}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-semibold text-habitra-text">Usuarios recientes</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {query.data.recentUsers.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> ({user.role}) - {user.isActive ? "Activo" : "Inactivo"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
