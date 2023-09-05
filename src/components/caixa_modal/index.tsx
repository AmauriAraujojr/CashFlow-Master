import { useContext } from "react";
import { FormReceitas } from "./form_receitas";
import { FormDespesas } from "./from_despesas";
import { CaixaContext } from "../../providers/CaixaContext";
import { ReceitasContext } from "../../providers/ReceitasContext";
import { DespesasContext } from "../../providers/DespesasContext";

export const CaixaModal = () => {
  const { caixas, setModalCaixa, editTotal} = useContext(CaixaContext);
  const { formReceitas, setFormReceitas } = useContext(ReceitasContext);
  const { formDespesas, setFormDespesas } = useContext(DespesasContext);

  const atual_caixa = caixas[caixas.length - 1];

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
  
  const dataActual = String(new Date())

    let data = new Date(dataActual);
    let dataFormatada =
      data.getDate() + " " + meses[data.getMonth()] + " " + data.getFullYear();
  
    
  

    const renderFormReceitas = () => {
      setFormReceitas(!formReceitas);
    };

  const renderFormDespesas = () => {
    setFormDespesas(!formDespesas);
  };


  const filterReceitas = atual_caixa.receitas.map((valor: any) => {
    return Number(valor.valor);
  });

  const receitas = filterReceitas.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  const filterDespesas = atual_caixa.despesas.map((valor: any) => {
    return Number(valor.valor);
  });

  const despesas = filterDespesas.reduce((anterior, proximo) => {
    return anterior + proximo;
  }, 0);

  const total = receitas - despesas;

  

  console.log(atual_caixa.receitas)

  const closeCaixa = () => {
    editTotal(atual_caixa.id, total)
    setModalCaixa(false);
    alert(`Caixa do dia ${dataFormatada} fechado com sucesso !`);
  };

  return (
    <div role="dialog">
      {!formReceitas && !formDespesas ? (
        <div className="optionsContainer">
          <h1>{dataFormatada}</h1>
          <button onClick={() => closeCaixa()}>Fechar Caixa</button>
          <p className="titleOptionsContainer">Qual opção ?</p>
          <div className="optionsCard__container">
            <button onClick={() => renderFormReceitas()}>Receitas</button>
            <button onClick={() => renderFormDespesas()}>Despesas</button>
          </div>
        </div>
      ) : null}

      {formReceitas ? (
        <>
          <FormReceitas id={atual_caixa.id} />
        </>
      ) : null}

      {formDespesas ? (
        <>
          <FormDespesas id={atual_caixa.id} />
        </>
      ) : null}
    </div>
  );
};
