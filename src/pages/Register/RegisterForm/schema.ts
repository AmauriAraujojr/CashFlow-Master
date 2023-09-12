import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z.string().nonempty("O username é obrigatório"),

    email: z
      .string()
      .nonempty( "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),

    password: z
      .string()
      .min(8, "A senha precisa de pelo menos 8 caracteres.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*[$*&@#])/, "É necessário pelo menos um caracter especial"),

    confirm: z.string().nonempty( "Confirme sua senha"),

   nome_empresa: z.string().nonempty( "Campo obrigatório"),
    avatar_empresa: z.string().nonempty( "Campo obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });