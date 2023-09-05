import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DespesasContext } from "../../../providers/DespesasContext";

interface IFormDespesas {
  id: number;
}
export interface IFormDespesasComplete {
  nome:string
  valor:number
 }

export const FormDespesas = ({ id }: IFormDespesas) => {

  const { register, handleSubmit } = useForm<IFormDespesasComplete>();
  const { addNewDespesas } = useContext(DespesasContext);

  const submit:SubmitHandler<IFormDespesasComplete> = (formdata) => {
    addNewDespesas(formdata, id);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Despesas</h1>
      <div>
        <input type="text" {...register("nome")} />
        <input type="text" {...register("valor")} />
        <button>Adicionar</button>
      </div>
    </form>
  );
};
