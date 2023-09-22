import { useContext } from "react";
import { CaixaContext } from "../../providers/CaixaContext";
import { CaixaCard } from "./caixa_card";
import { StyledCaixaList } from "./style";

export const CaixaList = () => {
  const { caixas, dataFormatada, caixas2 } = useContext(CaixaContext);

  const dataCaixa = caixas.filter((caixa) => {
    return caixa.data.slice(0, 7) == dataFormatada;
  });

  const totalCaixa = dataCaixa.map((caixa) => {
    return Number(caixa.total);
  });
  const totalCaixas = totalCaixa.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  var totalCaixas2 = 0;
  var receitasTotal2 = 0;
  var despesasTotal2 = 0;

  if (caixas2.length > 0) {
    const totalCaixa2 = caixas2.map((caixa) => {
      return Number(caixa.total);
    });

    totalCaixas2 = totalCaixa2.reduce((anterior, proximo) => {
      return anterior + proximo;
    }, 0);

    const receitasData2 = caixas2.map((caixa) => {
      return caixa.receitas;
    });

    const receitas2 = [];
    for (let i = 0; i < receitasData2.length; i++) {
      for (let j = 0; j < receitasData2[i].length; j++) {
        receitas2.push(Number(receitasData2[i][j].valor));
      }
    }

    receitasTotal2 = receitas2.reduce((anterior, proximo) => {
      return anterior + proximo;
    }, 0);

    const despesasData2 = caixas2.map((caixa) => {
      return caixa.despesas;
    });

    const despesas2 = [];
    for (let i = 0; i < despesasData2.length; i++) {
      for (let j = 0; j < despesasData2[i].length; j++) {
        despesas2.push(Number(despesasData2[i][j].valor));
      }
    }

    despesasTotal2 = despesas2.reduce((anterior, proximo) => {
      return anterior + proximo;
    }, 0);
  }

  const receitasData = dataCaixa.map((caixa) => {
    return caixa.receitas;
  });

  const receitas = [];
  for (let i = 0; i < receitasData.length; i++) {
    for (let j = 0; j < receitasData[i].length; j++) {
      receitas.push(Number(receitasData[i][j].valor));
    }
  }

  const receitasTotal = receitas.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  const despesasData = dataCaixa.map((caixa) => {
    return caixa.despesas;
  });

  const despesas = [];
  for (let i = 0; i < despesasData.length; i++) {
    for (let j = 0; j < despesasData[i].length; j++) {
      despesas.push(Number(despesasData[i][j].valor));
    }
  }

  const despesasTotal = despesas.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);


  return (
    <StyledCaixaList>
      {caixas2.length > 0 ? (
        <div className="totais">
          <h2>Saldo Total: R$ {totalCaixas2.toFixed(2)}</h2>
          <h3 className="receita">Total de Receitas: R$: {receitasTotal2.toFixed(2)}</h3>
          <h3 className="despesa">Total de Despesas: R$: {despesasTotal2.toFixed(2)}</h3>
        </div>
      ) : (
        <div className="totais">
          <h2>Saldo Total: R$ {totalCaixas.toFixed(2)}</h2>
          <h3 className="receita">Total de Receitas: R$: {receitasTotal.toFixed(2)}</h3>
          <h3 className="despesa">Total de Despesas: R$: {despesasTotal.toFixed(2)}</h3>
        </div>
      )}

      <ul>
        {caixas2.length > 0
          ? caixas2.map((caixa) => {
              return <CaixaCard key={caixa.id} caixa={caixa} />;
            })
          : dataCaixa.map((caixa) => {
              return <CaixaCard key={caixa.id} caixa={caixa} />;
            })}
      </ul>
    </StyledCaixaList>
  );
};
