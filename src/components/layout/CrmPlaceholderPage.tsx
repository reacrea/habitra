import { PageHeader } from "./PageHeader";

type CrmPlaceholderPageProps = {
  title: string;
};

export function CrmPlaceholderPage({ title }: CrmPlaceholderPageProps) {
  return (
    <>
      <PageHeader
        title={title}
        description="Este modulo se conectara a datos y formularios en fases siguientes. La navegacion lateral ya esta disponible."
      />
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white/80 p-10 text-center text-sm text-slate-500 shadow-soft">
        Area interna de Habitra. Usa el menu para volver al dashboard.
      </div>
    </>
  );
}
