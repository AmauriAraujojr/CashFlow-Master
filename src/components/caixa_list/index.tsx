import { useContext} from "react";
import { CaixaContext } from "../../providers/CaixaContext";
import { CaixaCard } from "./caixa_card";
import { StyledCaixaList } from "./style";
import { get } from "http";

export const CaixaList = () => {
  const { caixas } = useContext(CaixaContext);
  
  
  let dataActual = new Date();
  
  let dataFormatada = "";
  
  dataActual.getFullYear() + "-" + [dataActual.getMonth() + 1];
  
  if (dataActual.getMonth() + 1 < 10) {
    dataFormatada =
    dataActual.getFullYear() + "-" + "0" + [dataActual.getMonth() + 1];
  } else {
    dataFormatada =
    dataActual.getFullYear() + "-" + [dataActual.getMonth() + 1];
  }
  const dataCaixa = caixas.filter((caixa) => {
    return caixa.data.slice(0, 7) == dataFormatada;
  });
  
 var dataInicial=""
      
  if(caixas.length>0){
        dataInicial = (caixas[0].data.slice(0, 7))
      }
  else{
    dataInicial= dataFormatada
  }
  
  const dateRange=(startDate:any, endDate:any) =>{
    var start      = startDate.split('-');
    var end        = endDate.split('-');
    var startYear  = parseInt(start[0]);
    var endYear    = parseInt(end[0]);
    var dates      = [];
  
    for(var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
      var startMon = i === startYear ? parseInt(start[1])-1 : 0;
      for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        var displayMonth = month < 10 ? '0'+month : month;
        dates.push([i, displayMonth].join('-'));
      }
    }
    return dates;
        }
         
    const dates = dateRange("2023-01", dataFormatada);


      var CD = caixas.filter(x =>{
        return dates.includes(x.data.slice(0, 7))
      } );
      console.log(CD);

      
  

  return (
    <StyledCaixaList>
      <ul>

      {dataCaixa.map((caixa) => {
        return <CaixaCard key={caixa.id} caixa={caixa} />;
      })}
      </ul>
    </StyledCaixaList>
  );
};
