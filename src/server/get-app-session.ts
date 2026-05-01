import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth/better-auth";
import { parseUserRole } from "@/utils/user-role";

export type AppSessionUser = {
  userId: string;
  email: string;
  name: string;
  role: string;
};

export const getAppSession = createServerFn({ method: "GET" }).handler(
  async (): Promise<AppSessionUser | null> => {
    const request = getRequest();
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      return null;
    }
    const user = session.user as typeof session.user & {
      role?: string | null;
    };
    return {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: parseUserRole(user.role),
    };
  },
);
