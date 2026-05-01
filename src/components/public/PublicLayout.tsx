import type { ReactNode } from "react";

import { PublicFooter } from "./PublicFooter";
import { PublicHeader } from "./PublicHeader";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-habitra-beige/40 text-slate-800">
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </div>
  );
}
