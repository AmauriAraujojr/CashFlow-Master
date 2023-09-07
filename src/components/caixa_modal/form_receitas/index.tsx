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
 tipo:string
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
        <select {...register("tipo")}>
          <option >Escolha um tipo de entrada</option>
          <option value={"dinheiro"}>Dinheiro</option>
          <option value={"cartao"}>Cartão</option>
          <option value={"pix"}>Pix</option>


        </select>
        <button>Adicionar</button>
      </div>
    </form>
  );
};
