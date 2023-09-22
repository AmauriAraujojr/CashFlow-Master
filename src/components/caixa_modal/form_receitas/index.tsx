import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReceitasContext } from "../../../providers/ReceitasContext";
import { StyledForm } from "./styled";

interface IFormreceitas {
  id: number;  

}

export interface IFormReceitasComplete {
 nome:string
 valor:number
 tipo:string
}

export const FormReceitas = ({ id}: IFormreceitas) => {

  const { register, handleSubmit } = useForm<IFormReceitasComplete>();
  const { addNewReceitas,setFormReceitas } = useContext(ReceitasContext);

  const submit:SubmitHandler<IFormReceitasComplete> = (formData) => {
    addNewReceitas(formData, id);
  };

  return (
    <StyledForm>

      <h3>Receitas</h3>
      <button className="closeButton" onClick={()=>setFormReceitas(false)}>Cancelar</button>


    <form onSubmit={handleSubmit(submit)}>
      <div className="input_container">
        <label>Descrição da entrada</label>
        <input type="text" {...register("nome")} />
        <label>Valor R$</label>
        <input type="text" {...register("valor")} />
        <select {...register("tipo")}>
          <option >Escolha um tipo de entrada</option>
          <option value={"dinheiro"}>Dinheiro</option>
          <option value={"cartao"}>Cartão</option>
          <option value={"pix"}>Pix</option>

        </select>
      </div>

        <button>Adicionar</button>
    </form>
    </StyledForm>
  );
};
