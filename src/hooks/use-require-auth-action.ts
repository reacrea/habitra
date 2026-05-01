import { useCallback, useState } from "react";

import { authClient } from "@/lib/auth/auth-client";

type AuthAction = () => unknown;

export function useRequireAuthAction(defaultMessage?: string) {
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(
    defaultMessage ?? "Para continuar, inicia sesion o crea una cuenta.",
  );

  const requireAuth = useCallback(
    (action: AuthAction, customMessage?: string) => {
      if (session?.user) {
        void action();
        return true;
      }
      setMessage(customMessage ?? defaultMessage ?? "Para continuar, inicia sesion o crea una cuenta.");
      setOpen(true);
      return false;
    },
    [defaultMessage, session?.user],
  );

  return {
    isAuthenticated: Boolean(session?.user),
    requireAuth,
    authDialog: {
      open,
      onOpenChange: setOpen,
      message,
    },
  };
}
