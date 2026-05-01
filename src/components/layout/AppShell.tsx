import { Outlet, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { filterNavForRole } from "@/constants/app-nav";
import { authClient } from "@/lib/auth/auth-client";
import { getAppLayoutData } from "@/server/app-layout-data";
import { parseUserRole } from "@/utils/user-role";

import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

/** Evita `typeof session.user` cuando `session` puede ser null (TS18047). */
type SessionUserWithRole = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};

function titleFromPath(pathname: string): string {
  if (pathname.startsWith("/app/dashboard")) {
    return "Dashboard";
  }
  const segment = pathname.replace("/app/", "").split("/")[0];
  if (!segment) {
    return "Habitra";
  }
  return segment.charAt(0).toUpperCase() + segment.slice(1).replaceAll("-", " ");
}

export function AppShellLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { data: session, isPending: sessionPending } = authClient.useSession();

  const fetchLayout = useServerFn(getAppLayoutData);
  const layoutQuery = useQuery({
    queryKey: ["app-layout-data"],
    queryFn: () => fetchLayout(),
    enabled: !sessionPending && Boolean(session?.user),
  });

  const role = useMemo(() => {
    const u = session?.user as SessionUserWithRole | undefined;
    return parseUserRole(u?.role);
  }, [session?.user]);

  const navGroups = useMemo(() => filterNavForRole(role), [role]);

  const user = session?.user as SessionUserWithRole | undefined;
  const displayName = user?.name ?? "Usuario";
  const displayEmail = user?.email ?? "";

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-stone-50 to-habitra-beige/40">
      <Sidebar
        groups={navGroups}
        organizationLabel={layoutQuery.data?.organizationName}
        className="hidden md:flex"
      />
      <MobileNav
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        groups={navGroups}
        organizationLabel={layoutQuery.data?.organizationName}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          title={titleFromPath(pathname)}
          userName={displayName}
          userEmail={displayEmail}
          onMenuClick={() => setMobileOpen(true)}
          onSignOut={() => {
            void authClient.signOut().then(() => {
              window.location.assign("/login");
            });
          }}
        />
        <main className="flex-1 px-4 py-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
