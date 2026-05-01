import { Link } from "@tanstack/react-router";
import { LogOut, Menu } from "lucide-react";

type TopbarProps = {
  title: string;
  userName: string;
  userEmail: string;
  onMenuClick?: () => void;
  onSignOut: () => void;
};

export function Topbar({ title, userName, userEmail, onMenuClick, onSignOut }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 md:hidden"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          <Menu className="size-5" />
        </button>
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-habitra-text md:text-lg">{title}</h2>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="truncate text-sm font-medium text-habitra-text">{userName}</p>
          <p className="truncate text-xs text-slate-500">{userEmail}</p>
        </div>
        <Link
          to="/"
          className="hidden rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 sm:inline-flex"
        >
          Sitio publico
        </Link>
        <button
          type="button"
          onClick={onSignOut}
          className="inline-flex items-center gap-2 rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600"
        >
          <LogOut className="size-4" />
          <span className="hidden sm:inline">Salir</span>
        </button>
      </div>
    </header>
  );
}
