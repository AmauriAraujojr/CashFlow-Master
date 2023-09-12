import { useContext } from "react";
import { CaixaContext } from "../../providers/CaixaContext";
import { CaixaCard } from "./caixa_card";
import { StyledCaixaList } from "./style";

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
