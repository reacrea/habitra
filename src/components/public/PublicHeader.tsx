import { UserRole } from "@prisma/client";
import { Link } from "@tanstack/react-router";
import { authClient } from "@/lib/auth/auth-client";
import { canAccessCrm } from "@/utils/crm-role";
import { parseUserRole } from "@/utils/user-role";

type SessionUser = {
  name?: string | null;
  role?: string | null;
};

/** Avatar: CRM al dashboard interno; comprador al portal buyer; otros (p. ej. seller B2C) al inicio. */
function getAvatarDestination(role: string | null): string {
  if (!role) return "/buyer/dashboard";
  const r = parseUserRole(role);
  if (canAccessCrm(r)) return "/app/dashboard";
  if (r === UserRole.BUYER) return "/buyer/dashboard";
  return "/";
}

function getUserInitial(name: string | null | undefined): string {
  const raw = name?.trim();
  if (!raw) return "U";
  return raw.charAt(0).toUpperCase();
}

export function PublicHeader() {
  const { data: session } = authClient.useSession();
  const user = session?.user as SessionUser | undefined;
  const isAuthenticated = Boolean(user);
  const userRole = user?.role ?? null;
  const showCrm = userRole ? canAccessCrm(parseUserRole(userRole)) : false;
  const profileRoute = getAvatarDestination(userRole);

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
          {!isAuthenticated ? (
            <>
              <a
                href="/register"
                className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Registrarse
              </a>
              <Link to="/login" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700">
                Iniciar sesion
              </Link>
            </>
          ) : (
            <>
              {showCrm ? (
                <Link to="/app/dashboard" className="rounded-xl bg-habitra-action px-3 py-2 text-xs font-semibold text-white">
                  CRM
                </Link>
              ) : null}
              <Link
                to={profileRoute}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs font-bold text-slate-700"
                aria-label="Ir a mi perfil"
              >
                {getUserInitial(user?.name)}
              </Link>
              <button
                type="button"
                onClick={() => {
                  void authClient.signOut().then(() => {
                    window.location.assign("/login");
                  });
                }}
                className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Cerrar sesion
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
