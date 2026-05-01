import { useMemo, useState } from "react";

export function PropertyGallery({
  images,
  title,
}: {
  images: Array<{ id: string; url: string; alt: string | null }>;
  title: string;
}) {
  const safeImages = useMemo(
    () => (images.length > 0 ? images : [{ id: "fallback", url: "", alt: "Sin imagen" }]),
    [images],
  );
  const [activeId, setActiveId] = useState(safeImages[0].id);
  const active = safeImages.find((img) => img.id === activeId) ?? safeImages[0];

  return (
    <section className="space-y-3">
      <div className="h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-[480px]">
        {active.url ? (
          <img src={active.url} alt={active.alt ?? title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Sin imagen disponible
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
        {safeImages.slice(0, 12).map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActiveId(img.id)}
            className={`overflow-hidden rounded-lg border ${img.id === active.id ? "border-emerald-500" : "border-slate-200"}`}
          >
            {img.url ? (
              <img src={img.url} alt={img.alt ?? title} className="h-16 w-full object-cover" />
            ) : (
              <div className="h-16 bg-slate-100" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
