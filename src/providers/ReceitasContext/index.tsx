import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";

interface IReceitasContext {
  receitas: IReceitas[];
  addNewReceitas: (formData: any, caixa_id: number) => Promise<void>;
}
interface IReceitasProvider {
  children: React.ReactNode;
}
export interface IReceitas {
  id: number;
  nome: string;
  valor: number;
}
export const ReceitasContext = createContext({} as IReceitasContext);

export const ReceitasProvider = ({ children }: IReceitasProvider) => {
  const [receitas, setReceitas] = useState<IReceitas[]>([]);

  useEffect(() => {
    const getAllReceitas = async () => {
      try {
        const response = await Api.get("/receitas/");

        setReceitas(response.data);
      } catch (error) {
        console.log("Ops... Algo deu errado, tente novamente!");
      }
    };
    getAllReceitas();
  }, []);

  const addNewReceitas = async (formData: any, caixa_id: number) => {
    try {
      const response = await Api.post(`/caixa/${caixa_id}/receitas/`, {
        nome: formData.nome,
        valor: Number(formData.valor),
      });

      setReceitas([...receitas, response.data]);
      alert("Nova receita cadastrada!");
    } catch (error) {
      alert("Ops... Algo deu errado, tente novamente!");
    }
  };

  return (
    <ReceitasContext.Provider value={{ receitas, addNewReceitas }}>
      {children}
    </ReceitasContext.Provider>
  );
};
