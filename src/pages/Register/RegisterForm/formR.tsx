import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "./schema";

export interface IR {
  username: string;
  password: string;
  email: string;
  nome_empresa: string;
  avatar_empresa: string;
  confirm: string;
}

export const RegisterF = () => {
  const {addNewUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IR>({ resolver: zodResolver(RegisterFormSchema) });

  const submit: SubmitHandler<IR> = (formdata) => {
    addNewUser(formdata,setLoading)  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="username">Username</label>
      <input
        placeholder="Insira seu username"
        type="text"
        {...register("username")}
      />
      {errors.username ? <p>{errors.username.message}</p> : null}

      <label htmlFor="password">Password</label>
      <input
        placeholder="Insira sua senha"
        type="password"
        {...register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}

      <label htmlFor="confirm">Confirm Password</label>
      <input
        placeholder="Confirme sua senha"
        type="password"
        {...register("confirm")}
      />
      {errors.confirm ? <p>{errors.confirm.message}</p> : null}

      <label htmlFor="email">Email</label>
      <input
        placeholder="Insira seu email"
        type="email"
        {...register("email")}
      />
      {errors.email ? <p>{errors.email.message}</p> : null}

      <label htmlFor="nome_empresa">Nome da empresa</label>
      <input
        placeholder="Insira o nome da sua empresa"
        type="text"
        {...register("nome_empresa")}
      />
      {errors.nome_empresa ? <p>{errors.nome_empresa.message}</p> : null}

      <label htmlFor="avatar_empresa">URL do Logo da empresa</label>
      <input
        placeholder="Ex: https://kenzieimg.com"
        type="text"
        {...register("avatar_empresa")}
      />
      {errors.avatar_empresa ? <p>{errors.avatar_empresa.message}</p> : null}

      <button>{loading ? "Cadastrando..." : "Cadastrar"}</button>
    </form>
  );
};
