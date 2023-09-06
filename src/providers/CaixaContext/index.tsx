import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";
import { IDespesas } from "../DespesasContext";
import { IReceitas } from "../ReceitasContext";

interface ICaixaContext {
  caixas: ICaixa[];
  addNewCaixa: () => Promise<void>;
  deleteCaixa: (id: number) => Promise<void>;
  modalCaixa: boolean;
  setModalCaixa: React.Dispatch<React.SetStateAction<boolean>>;
  setCaixas: React.Dispatch<React.SetStateAction<ICaixa[]>>;
  editTotal: (id: number, valor: number) => Promise<void>;
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
 saldo_anterior:number
}
export const CaixaContext = createContext({} as ICaixaContext);

export const CaixaProvider = ({ children }: ICaixaProvider) => {
  const [caixas, setCaixas] = useState<ICaixa[]>([]);
  const [modalCaixa, setModalCaixa] = useState(false);
  
  useEffect(() => {
    const getAllCaixas = async () => {
      try {
        const response = await Api.get("/caixa/", {});

        setCaixas(response.data);
      } catch (error) {
        console.log("Ops... Algo deu errado, tente novamente!");
      }
    };
    getAllCaixas();
  }, [caixas]);
  
  const addNewCaixa = async () => {
    try {
      const response = await Api.post("/caixa/");

      setCaixas([...caixas, response.data]);
      console.log("Caixa criado com sucesso!");
    } catch (error) {
      console.log("Ops... Algo deu errado, tente novamente!");
    }
  };

  const deleteCaixa = async (id: number) => {
    try {
      await Api.delete(`/caixa/${id}/`);

      const newCaixa = caixas.filter((caixa) => caixa.id !== id);

      console.log("Entrega deletada com sucesso!");
      setCaixas([...newCaixa]);
    } catch (error) {
      alert("Ops... Algo deu errado, tente novamente!");
    }
  };

  const editTotal = async (id: number, total: number) => {
    try {
      const response = await Api.patch(`/caixa/${id}/`, {
        total: total,
      });
      setCaixas(response.data);
      setCaixas([...caixas]);
      console.log("Total atualizado com sucesso!");
    } catch (error) {
      console.log("Ops... Algo deu errado, tente novamente!");
    }
  };

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
      }}
    >
      {children}
    </CaixaContext.Provider>
  );
};
