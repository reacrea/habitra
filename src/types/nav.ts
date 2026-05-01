import type { UserRole } from "@prisma/client";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  /** Si no se define, visible para todos los roles listados en el grupo */
  roles?: readonly UserRole[];
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};
