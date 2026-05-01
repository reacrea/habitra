import { z } from "zod";

export const loginSearchSchema = z.object({
  redirect: z.string().optional(),
});

export const loginFormSchema = z.object({
  email: z.string().email("Correo invalido"),
  password: z.string().min(1, "Contrasena requerida"),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
