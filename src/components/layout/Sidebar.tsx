import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

import type { NavGroup } from "@/types/nav";

type SidebarProps = {
  groups: NavGroup[];
  organizationLabel?: string | null;
  onNavigate?: () => void;
  className?: string;
};

function NavLink({
  to,
  label,
  icon: Icon,
  onNavigate,
}: {
  to: string;
  label: string;
  icon: LucideIcon;
  onNavigate?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to || (to !== "/app/dashboard" && pathname.startsWith(`${to}/`));

  return (
    <Link
      to={to}
      onClick={() => onNavigate?.()}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-emerald-500/15 text-emerald-100"
          : "text-emerald-50/85 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon className="size-4 shrink-0 opacity-90" aria-hidden />
      {label}
    </Link>
  );
}

export function Sidebar({ groups, organizationLabel, onNavigate, className = "" }: SidebarProps) {
  return (
    <aside
      className={`flex w-64 shrink-0 flex-col border-r border-emerald-900/40 bg-habitra-deep ${className}`}
    >
      <div className="border-b border-white/10 px-5 py-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200/80">Habitra</p>
        <p className="mt-1 text-lg font-semibold text-white">Operaciones</p>
        {organizationLabel ? (
          <p className="mt-2 truncate text-xs text-emerald-100/70" title={organizationLabel}>
            {organizationLabel}
          </p>
        ) : null}
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-200/60">
              {group.label}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
