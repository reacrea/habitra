import { X } from "lucide-react";
import { useEffect } from "react";

import type { NavGroup } from "@/types/nav";

import { Sidebar } from "./Sidebar";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groups: NavGroup[];
  organizationLabel?: string | null;
};

export function MobileNav({ open, onOpenChange, groups, organizationLabel }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        aria-label="Cerrar menu"
        onClick={() => onOpenChange(false)}
      />
      <div className="absolute left-0 top-0 flex h-full w-[min(100%,20rem)] flex-col shadow-xl">
        <div className="flex items-center justify-end border-b border-white/10 bg-habitra-deep px-2 py-2">
          <button
            type="button"
            className="rounded-xl p-2 text-white hover:bg-white/10"
            onClick={() => onOpenChange(false)}
            aria-label="Cerrar navegacion"
          >
            <X className="size-5" />
          </button>
        </div>
        <Sidebar
          groups={groups}
          organizationLabel={organizationLabel}
          onNavigate={() => onOpenChange(false)}
          className="w-full border-0"
        />
      </div>
    </div>
  );
}
