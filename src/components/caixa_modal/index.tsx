import { useContext, useState } from "react";
import { FormReceitas, IFormReceitasComplete } from "./form_receitas";
import { FormDespesas, IFormDespesasComplete } from "./form_despesas";
import { CaixaContext } from "../../providers/CaixaContext";
import { ReceitasContext } from "../../providers/ReceitasContext";
import { DespesasContext } from "../../providers/DespesasContext";
import { StyledCaixaModal } from "./styled";
import { AiFillCaretUp} from "react-icons/ai";

import { AiFillCaretDown} from "react-icons/ai";
import { toast } from "react-toastify";


export const CaixaModal = () => {
  const { caixas, setModalCaixa, editTotal,caixaAtual,setCaixaAtual} =
    useContext(CaixaContext);
  const { formReceitas, setFormReceitas } = useContext(ReceitasContext);
  const { formDespesas, setFormDespesas } = useContext(DespesasContext);
  

  let atual:any=""
    if(caixaAtual==undefined){
  
      atual= caixas[caixas.length - 1]
    } 
    else{
      atual = caixaAtual
    }


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

  const dataActual = String(new Date());

  let data = new Date(dataActual);
  let dataFormatada =
    data.getDate() + " " + meses[data.getMonth()] + " " + data.getFullYear();

  const renderFormReceitas = () => {
    setFormReceitas(!formReceitas);
  };

  const renderFormDespesas = () => {
    setFormDespesas(!formDespesas);
  };

  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);

  const getFormDataReceitas = (formdata: IFormReceitasComplete) => {
    setReceitas(formdata.valor);
  };

  const getFormDataDespesas = (formdata: IFormDespesasComplete) => {
    setDespesas(Number(formdata.valor));
  };

  const total = Number(receitas) - Number(despesas);

  const closeCaixa = () => {
    

      editTotal(atual.id, total);
    
    setModalCaixa(false);
    toast.success(`Caixa do dia ${dataFormatada} fechado com sucesso !`);

    setCaixaAtual(undefined)
  };

  return (
    <StyledCaixaModal>


      {!formReceitas && !formDespesas ? (
        <div role="dialog" className="modal">
            <h2>Fuxo de Caixa em: {dataFormatada}</h2>


          <div className="options">
            <h3 className="titleOptionsContainer">Cadastre uma opção !</h3>
            <div className="optionsCard">
              <button className="green_button" onClick={() => renderFormReceitas()}><AiFillCaretUp/> Receitas</button>
              <button onClick={() => renderFormDespesas()}>Despesas <AiFillCaretDown/></button>
            </div>

          </div>
          <button className="fechamento" onClick={() => closeCaixa()}>Fechar Caixa</button>

        </div>
      ) : null}

      {formReceitas ? (
        <>
          <FormReceitas
            id={atual.id}
            getFormDataReceitas={getFormDataReceitas}
          />
        </>
      ) : null}

      {formDespesas ? (
        <>
          <FormDespesas
            id={atual.id}
            getFormDataDespesas={getFormDataDespesas}
          />
        </>
      ) : null}
    </StyledCaixaModal>
  );
};
