import { useContext } from "react";
import { StyledHeaderControls } from "./style";
import { CaixaContext } from "../../providers/CaixaContext";
import { StyledContainer } from "../../styles/grid";

export const HeaderControls = () => {

  const{ setModalCaixa, addNewCaixa, modalCaixa}=useContext(CaixaContext)
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  let data = new Date();
  let dataForm =
    meses[data.getMonth()] +
    " - " +
    data.getFullYear() 


    const newCaixa = () => {
      setModalCaixa(!modalCaixa);
      addNewCaixa();
    };
   
  
  return (
    <StyledHeaderControls>
      <StyledContainer>
       <div className="flexBox">

      <div className="add_caixa">

        <button onClick={() => newCaixa()}>Novo Caixa</button>
        <h2>Fluxo de caixa em <span>{dataForm}</span></h2>

      </div>


      <div className="select_container" >
        <h3>Escolha um data</h3>
        <select>
          <option>Mês atual</option>
          <option>Janeiro</option>
          <option>Fevereiro</option>
          <option>Março</option>
          <option>Abril</option>
          <option>Maio</option>
          <option>Junho</option>
          <option>Julho</option>
          <option>Agosto</option>
          <option>Setembro</option>
          <option>Outubro</option>
          <option>Novembro</option>
          <option>Desembro</option>
        </select>
      </div>

       </div>

      </StyledContainer>
    </StyledHeaderControls>
  );
};
