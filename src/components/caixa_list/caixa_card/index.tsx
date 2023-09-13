import { useContext } from "react";
import { CaixaContext, ICaixa } from "../../../providers/CaixaContext";
import { StyledCaixaCard } from "./style";
import { ReceitaCard } from "./receita_card";
import { DespesaCard } from "./despesa_card";
import{FcCalendar} from"react-icons/fc"

interface ICAixaCard {
  caixa: ICaixa;
}

export const CaixaCard = ({ caixa }: ICAixaCard) => {
  const { caixas } = useContext(CaixaContext);

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

  let data = new Date(caixa.data);
  let dataFormatada =
    data.getDate() +
    1 +
    " " +
    meses[data.getMonth()] +
    " " +
    data.getFullYear();

 

  const filterReceitas = caixa.receitas.map((valor: any) => {
    return Number(valor.valor);
  });

  const receitas = filterReceitas.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  const filterDespesas = caixa.despesas.map((valor: any) => {
    return Number(valor.valor);
  });

  const despesas = filterDespesas.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  const caixa_anterior = caixas.find((el) => {
    return el.id == caixa.id - 1;
  });

  if (caixa_anterior) {
    caixa.saldo_anterior =
      Number(caixa_anterior.total) + Number(caixa_anterior.saldo_anterior);
  } else {
    caixa.saldo_anterior = 0;
  }

  return (
    <StyledCaixaCard>
      <h3 id="data"><FcCalendar/> {dataFormatada}</h3>
      <h3> Saldo Anterior : R$ {caixa.saldo_anterior.toFixed(2)}</h3>

      <div className={"ul_card"}>

      {caixa.receitas.map((receita: any) => {
      return  <ReceitaCard key={receita.id} receita={receita}/>
      
      })}

      </div>
      <p className="detalhes_dia">Receitas do dia: R$ {receitas.toFixed(2)}</p>


      <div className="ul_card">
      {caixa.despesas.map((despesa: any) => {
      return  <DespesaCard key={despesa.id} despesa={despesa}/>
      
      })}

      

      </div>
      <p className="detalhes_dia" >Despesas do dia: R$ {despesas.toFixed(2)}</p>

        
      
        
   

    </StyledCaixaCard>
  );
};
