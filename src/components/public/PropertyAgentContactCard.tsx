export function PropertyAgentContactCard({
  agent,
}: {
  agent: {
    name: string;
    email: string | null;
    phone: string | null;
    image: string | null;
    organizationName: string;
  };
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">Agente</h3>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-100">
          {agent.image ? (
            <img src={agent.image} alt={agent.name} className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div>
          <p className="font-semibold text-habitra-text">{agent.name}</p>
          <p className="text-xs text-slate-500">{agent.organizationName}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-slate-700">
        {agent.phone ? <p>Tel: {agent.phone}</p> : null}
        {agent.email ? <p>Email: {agent.email}</p> : null}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white">
          Contactar
        </button>
        <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
          Agendar visita
        </button>
      </div>
    </section>
  );
}
