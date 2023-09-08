import { StyledHeaderControls } from "./style";

export const HeaderControls = () => {
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
   
  
  return (
    <StyledHeaderControls>
        <h2>Fluxo de caixa em <span>{dataForm}</span></h2>

      <div className="select_container" >
        <h3>Escolha um data</h3>
        <select>
          <option></option>
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
    </StyledHeaderControls>
  );
};
