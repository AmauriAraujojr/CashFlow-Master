import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().nonempty("O username é obrigatório"),

  password: z.string().nonempty("A Senha é obrigatória"),
});