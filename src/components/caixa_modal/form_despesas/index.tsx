import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DespesasContext } from "../../../providers/DespesasContext";

interface IFormDespesas {
  id: number;
  getFormDataDespesas: (formdata: IFormDespesasComplete) => void
}
export interface IFormDespesasComplete {
  nome:string
  valor:number
  tipo:string
 }

export const FormDespesas = ({ id , getFormDataDespesas}: IFormDespesas) => {

  const { register, handleSubmit } = useForm<IFormDespesasComplete>();
  const { addNewDespesas } = useContext(DespesasContext);

  const submit:SubmitHandler<IFormDespesasComplete> = (formdata) => {
    addNewDespesas(formdata, id);
    getFormDataDespesas(formdata)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Despesas</h1>
      <div>
        <input type="text" {...register("nome")} />
        <input type="text" {...register("valor")} />
        <input type="text" {...register("tipo")} />

        <button>Adicionar</button>
      </div>
    </form>
  );
};
