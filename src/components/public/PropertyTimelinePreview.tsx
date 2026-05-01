export function PropertyTimelinePreview({
  timeline,
}: {
  timeline: Array<{ id: string; title: string; description: string }>;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-habitra-text">Timeline estimado</h3>
      <ol className="mt-4 space-y-3">
        {timeline.map((step, index) => (
          <li key={step.id} className="flex gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
              {index + 1}
            </div>
            <div>
              <p className="text-sm font-semibold text-habitra-text">{step.title}</p>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
