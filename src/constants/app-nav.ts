import type { UserRole } from "@prisma/client";
import {
  BarChart3,
  Building2,
  Calendar,
  ClipboardList,
  CreditCard,
  FileText,
  Handshake,
  Home,
  LayoutDashboard,
  ListTodo,
  Settings,
  Shield,
  UserRound,
  Users,
} from "lucide-react";

import type { NavGroup } from "@/types/nav";

const agentBrokerRoles: readonly UserRole[] = ["AGENT", "BROKER_OWNER", "ADMIN"];

export const mainNavGroups: NavGroup[] = [
  {
    label: "Principal",
    items: [
      { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
      {
        to: "/app/transactions",
        label: "Mis operaciones",
        icon: ClipboardList,
        roles: ["BUYER", "SELLER"],
      },
      { to: "/app/leads", label: "Leads", icon: Handshake, roles: agentBrokerRoles },
      { to: "/app/buyers", label: "Compradores", icon: Users, roles: agentBrokerRoles },
      { to: "/app/sellers", label: "Vendedores", icon: UserRound, roles: agentBrokerRoles },
      { to: "/app/properties", label: "Propiedades", icon: Home, roles: agentBrokerRoles },
      { to: "/app/transactions", label: "Operaciones", icon: ClipboardList, roles: agentBrokerRoles },
      { to: "/app/documents", label: "Documentos", icon: FileText, roles: agentBrokerRoles },
      { to: "/app/calendar", label: "Calendario", icon: Calendar, roles: agentBrokerRoles },
      { to: "/app/tasks", label: "Tareas", icon: ListTodo, roles: agentBrokerRoles },
      { to: "/app/reports", label: "Reportes", icon: BarChart3, roles: agentBrokerRoles },
      { to: "/app/settings", label: "Configuracion", icon: Settings },
    ],
  },
  {
    label: "Admin",
    items: [
      { to: "/app/admin", label: "Panel admin", icon: Shield, roles: ["ADMIN"] },
      { to: "/app/billing", label: "Billing", icon: CreditCard, roles: ["ADMIN", "BROKER_OWNER"] },
      { to: "/app/organizations", label: "Organizaciones", icon: Building2, roles: ["ADMIN"] },
    ],
  },
];

export function filterNavForRole(role: UserRole): NavGroup[] {
  return mainNavGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (!item.roles) {
          return true;
        }
        return item.roles.includes(role);
      }),
    }))
    .filter((group) => group.items.length > 0);
}
