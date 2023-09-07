import { useContext } from "react";
import { CaixaContext } from "../../providers/CaixaContext";
import { CaixaCard } from "./caixa_card";

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
    data.getDate() +
    
    " - " +
    meses[data.getMonth()] +
    " - " +
    data.getFullYear() + 
    "  | "+ 
    data.getHours()+
    " : "+
    data.getMinutes()+
    " : "+
    data.getSeconds()

  return (
    <section>
        <h1>{dataForm}</h1>
      {dataCaixa.map((caixa) => {
        return <CaixaCard key={caixa.id} caixa={caixa} />;
      })}
    </section>
  );
};
