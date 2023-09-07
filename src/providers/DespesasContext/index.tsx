import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";
import { IFormDespesasComplete } from "../../components/caixa_modal/form_despesas";

interface IDespesasContext {
  despesas: IDespesas[];
  addNewDespesas: (formData:IFormDespesasComplete, caixa_id: number) => Promise<void>;
  formDespesas: boolean;
  setFormDespesas: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IDespesasProvider {
  children: React.ReactNode;
}
export interface IDespesas {
  id: number;
  nome: string;
  valor: number;
}
export const DespesasContext = createContext({} as IDespesasContext);

export const DespesasProvider = ({ children }: IDespesasProvider) => {
  const [despesas, setDespesas] = useState<IDespesas[]>([]);
  const [formDespesas, setFormDespesas] = useState(false);

  useEffect(() => {
    const getAllDespesas = async () => {
      try {
        const response = await Api.get("/despesas/");

        setDespesas(response.data);
      } catch (error) {
        console.log("Ops... Algo deu errado, tente novamente!");
      }
    };
    getAllDespesas();
  }, []);

  const addNewDespesas = async (formData:IFormDespesasComplete, caixa_id: number) => {
    try {
      const response = await Api.post(`/caixa/${caixa_id}/despesas/`, {
        nome: formData.nome,
        valor: Number(formData.valor),
        tipo:formData.tipo
      });

      setDespesas([...despesas, response.data]);
      alert("Nova despesa cadastrada!");
    } catch (error) {
      alert("Ops... Algo deu errado, tente novamente!");
    } finally {
      setFormDespesas(false);
    }
  };

  return (
    <DespesasContext.Provider
      value={{ despesas, addNewDespesas, formDespesas, setFormDespesas }}
    >
      {children}
    </DespesasContext.Provider>
  );
};
