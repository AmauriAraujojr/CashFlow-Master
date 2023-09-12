import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./schema";


interface IF{
    username:string
    password:string
}

export const LoginF=()=>{
    const { userLogin } = useContext(UserContext);
    const [loading, setLoading] = useState(false);




    const{register, handleSubmit,formState:{errors}}=useForm<IF>({resolver:zodResolver(LoginSchema)})

    const submit:SubmitHandler<IF>=(formdata)=>{
        userLogin(formdata, setLoading)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="username">Username</label>
            <input placeholder="Insira seu username" type="text"{...register("username")}/>
            {errors.username ? <p>{errors.username.message}</p> : null}


            <label htmlFor="password">Password</label>
            <input placeholder="Insira sua senha" type="password" {...register("password")}/>
            {errors.password ? <p>{errors.password.message}</p> : null}


            <button >{loading ? "Entrando..." : "Entrar"}</button>
        </form>
    )
}