import { useContext, useEffect} from "react";
import { CaixaContext } from "../../providers/CaixaContext";
import { CaixaCard } from "./caixa_card";
import { StyledCaixaList } from "./style";

export const CaixaList = () => {
  const { caixas,dataFormatada, caixas2} = useContext(CaixaContext);
  

 
 

    const dataCaixa = caixas.filter((caixa) => {
      return caixa.data.slice(0, 7) == dataFormatada;
      });
          

  return (
    <StyledCaixaList>
      <ul>

      {caixas2.length >0 ? caixas2.map(caixa=>{return<CaixaCard key={caixa.id} caixa={caixa} /> }) : dataCaixa.map((caixa) => {
        return <CaixaCard key={caixa.id} caixa={caixa} />;
      })}
      </ul>
    </StyledCaixaList>
  );
};
