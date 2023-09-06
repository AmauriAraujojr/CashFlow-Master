import { useContext } from "react";
import { CaixaContext, ICaixa } from "../../../providers/CaixaContext";

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

  const saldo = caixas.map((caixa) => {
    return Number(caixa.total);
  });

  const saldoTotal = saldo.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  caixa.saldo_anterior=saldoTotal


  return (
    <li>
      <h3>Data: {dataFormatada}</h3>
      <p>Receitas: R$ {receitas}</p>
      <p>Despesas: R$ {despesas}</p>
      <strong>Total: R$ {caixa.total}</strong>
      <h3> Saldo: R${caixa.saldo_anterior}</h3>
    </li>
  );
};
