import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";
import { IDespesas } from "../DespesasContext";

interface ICaixaContext {
  caixas: ICaixa[];
  addNewCaixa: () => Promise<void>;
  deleteCaixa: (id: number) => Promise<void>;
}
interface ICaixaProvider {
  children: React.ReactNode;
}
export interface ICaixa {
  id: number;
  data: string;
  despesas: IDespesas[];
  receitas: [];
}
export const CaixaContext = createContext({} as ICaixaContext);

export const CaixaProvider = ({ children }: ICaixaProvider) => {
  const [caixas, setCaixas] = useState<ICaixa[]>([]);

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
  }, []);

  const addNewCaixa = async () => {
    try {
      const response = await Api.post("/caixa/");

      setCaixas([...caixas, response.data]);
      alert("Caixa criado com sucesso!");
    } catch (error) {
      console.log("Ops... Algo deu errado, tente novamente!");
    }
  };

  const deleteCaixa = async (id: number) => {
    try {
      await Api.delete(`/caixa/${id}/`, {});

      const newCaixa = caixas.filter((caixa) => caixa.id !== id);

      alert("Entrega deletada com sucesso!");
      setCaixas([...newCaixa]);
    } catch (error) {
      alert("Ops... Algo deu errado, tente novamente!");
    }
  };

  return (
    <CaixaContext.Provider value={{ caixas, addNewCaixa, deleteCaixa }}>
      {children}
    </CaixaContext.Provider>
  );
};
