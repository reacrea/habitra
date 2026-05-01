type InlineErrorProps = {
  message: string;
  className?: string;
};

export function CrmLoading({ label = "Cargando..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/80 px-6 py-16 text-sm text-slate-600">
      <span className="animate-pulse">{label}</span>
    </div>
  );
}

export function CrmInlineError({ message, className }: InlineErrorProps) {
  return (
    <div
      role="alert"
      className={`rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 ${className ?? ""}`}
    >
      {message}
    </div>
  );
}

type EmptyProps = {
  title: string;
  hint?: string;
};

export function CrmEmpty({ title, hint }: EmptyProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center">
      <p className="font-medium text-habitra-text">{title}</p>
      {hint ? <p className="mt-2 text-sm text-slate-600">{hint}</p> : null}
    </div>
  );
}
