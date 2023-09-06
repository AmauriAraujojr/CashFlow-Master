import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReceitasContext } from "../../../providers/ReceitasContext";

interface IFormreceitas {
  id: number;  
  getFormDataReceitas: (formdata: IFormReceitasComplete) => void

}

export interface IFormReceitasComplete {
 nome:string
 valor:number
}

export const FormReceitas = ({ id, getFormDataReceitas }: IFormreceitas) => {

  const { register, handleSubmit } = useForm<IFormReceitasComplete>();
  const { addNewReceitas } = useContext(ReceitasContext);

  const submit:SubmitHandler<IFormReceitasComplete> = (formData) => {
    addNewReceitas(formData, id);
    getFormDataReceitas(formData)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Receitas</h1>
      <div>
        <input type="text" {...register("nome")} />
        <input type="text" {...register("valor")} />
        <button>Adicionar</button>
      </div>
    </form>
  );
};
