import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(2, "Nombre requerido"),
    email: z.string().email("Correo invalido"),
    password: z.string().min(8, "Minimo 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirma tu contrasena"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Las contrasenas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
