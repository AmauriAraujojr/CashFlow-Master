import { useContext } from "react";
import { CaixaContext, ICaixa } from "../../../providers/CaixaContext";

interface ICAixaCard {
  caixa: ICaixa;
}

export const CaixaCard = ({ caixa }: ICAixaCard) => {

const{editTotal}=useContext(CaixaContext)

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
    data.getDate() + " " + meses[data.getMonth()] + " " + data.getFullYear();

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

  const total = receitas - despesas;

  
  return (
    <li>
      <h3>Data: {dataFormatada}</h3>
      <p>Receitas: R$ {receitas}</p>
      <p>Despesas: R$ {despesas}</p>
      <strong>Saldo : R$ {caixa.total}</strong>
    </li>
  );
};
