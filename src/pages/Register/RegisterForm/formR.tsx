import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { UserContext } from "../../../providers/UserContext";



interface IR{
    username:string
    password:string
    email:string
    nome_empresa:string
    avatar_empresa:string
}

export const RegisterF=()=>{
    const { userLogin } = useContext(UserContext);
    const [loading, setLoading] = useState(false);




    const{register, handleSubmit,formState:{errors}}=useForm<IR>({})

    const submit:SubmitHandler<IR>=(formdata)=>{
console.log(formdata)    }

    return(
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="username">Username</label>
            <input placeholder="Insira seu username" type="text"{...register("username")}/>
            {/* {errors.username ? <p>{errors.username.message}</p> : null} */}


            <label htmlFor="password">Password</label>
            <input placeholder="Insira sua senha" type="password" {...register("password")}/>
            {/* {errors.password ? <p>{errors.password.message}</p> : null} */}

            <label htmlFor="email">Email</label>
            <input placeholder="Insira seu email" type="email"{...register("email")}/>

            <label htmlFor="nome_empresa">Nome da empresa</label>
            <input placeholder="Insira o nome da sua empresa" type="text"{...register("nome_empresa")}/>

            <label htmlFor="avatar_empresa">URL do Logo da empresa (opicional)</label>
            <input placeholder="Ex: https://kenzieimg.com" type="text"{...register("avatar_empresa")}/>


            <button >{loading ? "Entrando..." : "Entrar"}</button>
        </form>
    )
}