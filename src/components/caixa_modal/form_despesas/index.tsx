import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DespesasContext } from "../../../providers/DespesasContext";
import { StyledFormDespesas } from "./styled";

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
  const { addNewDespesas,setFormDespesas } = useContext(DespesasContext);

  const submit:SubmitHandler<IFormDespesasComplete> = (formdata) => {
    addNewDespesas(formdata, id);
    getFormDataDespesas(formdata)
  };

  return (
    <StyledFormDespesas>

      <h3>Despesas</h3>
      <button className="closeButton" onClick={()=>setFormDespesas(false)}>Cancelar</button>

    <form onSubmit={handleSubmit(submit)}>
      <div className=" input_container">
        <label>Descrição da despesa</label>
        <input type="text" {...register("nome")} />
        <label>Valor R$</label>
        <input type="text" {...register("valor")} />
        <label>Tipo de despesa</label>
        <input type="text" {...register("tipo")} />

        <button>Adicionar</button>
      </div>
    </form>

    </StyledFormDespesas>
  );
};
