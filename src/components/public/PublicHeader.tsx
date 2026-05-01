import { Link } from "@tanstack/react-router";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-lg font-bold text-habitra-text">
          Habitra
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link to="/buy" className="hover:text-habitra-action">
            Comprar
          </Link>
          <Link to="/rent" className="hover:text-habitra-action">
            Rentar
          </Link>
          <Link to="/sell" className="hover:text-habitra-action">
            Vender
          </Link>
          <Link to="/mortgage-calculator" className="hover:text-habitra-action">
            Calculadora
          </Link>
          <Link to="/favorites" className="hover:text-habitra-action">
            Favoritos
          </Link>
          <Link to="/compare" className="hover:text-habitra-action">
            Comparar
          </Link>
          <Link to="/buyer/dashboard" className="hover:text-habitra-action">
            Mi compra
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
            Iniciar sesion
          </Link>
          <Link to="/app/dashboard" className="rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white">
            CRM
          </Link>
        </div>
      </div>
    </header>
  );
}
