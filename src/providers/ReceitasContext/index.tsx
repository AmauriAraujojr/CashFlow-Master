import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";
import { IFormReceitasComplete } from "../../components/caixa_modal/form_receitas";

interface IReceitasContext {
  receitas: IReceitas[];
  addNewReceitas: (
    formData: IFormReceitasComplete,
    caixa_id: number
  ) => Promise<void>;
  formReceitas: boolean;
  setFormReceitas: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [formReceitas, setFormReceitas] = useState(false);

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

  const addNewReceitas = async (
    formData: IFormReceitasComplete,
    caixa_id: number
  ) => {
    try {
      const response = await Api.post(`/caixa/${caixa_id}/receitas/`, {
        nome: formData.nome,
        valor: Number(formData.valor),
      });

      setReceitas([...receitas, response.data]);
      alert("Nova receita cadastrada!");
    } catch (error) {
      alert("Ops... Algo deu errado, tente novamente!");
    } finally {
      setFormReceitas(false);
    }
  };

  return (
    <ReceitasContext.Provider
      value={{ receitas, addNewReceitas, formReceitas, setFormReceitas }}
    >
      {children}
    </ReceitasContext.Provider>
  );
};
