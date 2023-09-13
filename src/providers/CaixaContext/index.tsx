import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";
import { IDespesas } from "../DespesasContext";
import { IReceitas } from "../ReceitasContext";
import { ISelect } from "../../components/headerControls";

interface ICaixaContext {
  caixas: ICaixa[];
  addNewCaixa: () => Promise<void>;
  deleteCaixa: (id: number) => Promise<void>;
  modalCaixa: boolean;
  setModalCaixa: React.Dispatch<React.SetStateAction<boolean>>;
  setCaixas: React.Dispatch<React.SetStateAction<ICaixa[]>>;
  editTotal: (id: number, valor: number) => Promise<void>;
  getAllCaixas: (id: number) => Promise<void>;
  dataFormatada: string;
  dates: string[];
  caixas2: ICaixa[]
  filterCaixas: (formdata: ISelect) => ICaixa[]
}

interface ICaixaProvider {
  children: React.ReactNode;
}
export interface ICaixa {
  id: number;
  data: string;
  despesas: IDespesas[];
  receitas: IReceitas[];
  total: number;
  saldo_anterior: number;
}
export const CaixaContext = createContext({} as ICaixaContext);

export const CaixaProvider = ({ children }: ICaixaProvider) => {
  const [caixas, setCaixas] = useState<ICaixa[]>([]);
  const [caixas2, setCaixas2] = useState<ICaixa[]>([]);

  const [modalCaixa, setModalCaixa] = useState(false);

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

  const getAllCaixas = async (id: number) => {
    try {
      const response = await Api.get(`/caixa/user/${id}/`);

      setCaixas(response.data);

    } catch (error) {
      console.log("Ops... Algo deu errado, tente novamente!");
    }
  };

  

  const addNewCaixa = async () => {
    const id = localStorage.getItem("@USERID");

    try {
      const response = await Api.post(`/caixa/user/${id}/`);
      setCaixas([...caixas, response.data]);
      console.log("Caixa criado com sucesso!");
    } catch (error) {
      console.log("Ops... Algo deu errado, tente novamente!");
    }
  };

  const deleteCaixa = async (id: number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      await Api.delete(`/caixa/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newCaixa = caixas.filter((caixa) => caixa.id !== id);

      console.log("Entrega deletada com sucesso!");
      setCaixas([...newCaixa]);
    } catch (error) {
      alert("Ops... Algo deu errado, tente novamente!");
    }
  };

  const editTotal = async (id: number, total: number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await Api.patch(
        `/caixa/${id}/`,
        {
          total: total,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCaixas(response.data);
      setCaixas([...caixas]);
      console.log("Total atualizado com sucesso!");
    } catch (error) {
      console.log("Ops... Algo deu errado, tente novamente!");
    }
  };

  

  var dataInicial = "";

  if (caixas.length > 0) {
    dataInicial = caixas[0].data.slice(0, 7);
  } else {
    dataInicial = dataFormatada;
  }

  const dateRange = (startDate: any, endDate: any) => {
    var start = startDate.split("-");
    var end = endDate.split("-");
    var startYear = parseInt(start[0]);
    var endYear = parseInt(end[0]);
    var dates = [];

    for (var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
      var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
      for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
        var month = j + 1;
        var displayMonth = month < 10 ? "0" + month : month;
        dates.push([i, displayMonth].join("-"));
      }
    }
    return dates;
  };

  const dates = dateRange(dataInicial, dataFormatada);

  const filterCaixas=(formdata:ISelect)=>{
    const filtro=caixas.filter(caixa=>{
      return caixa.data.slice(0, 7) == formdata.data
    })
    setCaixas2(filtro)

   return filtro

  }

  return (
    <CaixaContext.Provider
      value={{
        caixas,
        addNewCaixa,
        deleteCaixa,
        modalCaixa,
        setModalCaixa,
        setCaixas,
        editTotal,
        getAllCaixas,
        dataFormatada,
        dates,
        caixas2,
        filterCaixas
       
      }}
    >
      {children}
    </CaixaContext.Provider>
  );
};
