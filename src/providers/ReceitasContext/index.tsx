import { createContext, useEffect, useState } from "react";
import { Api } from "../../../services";
import { IFormReceitasComplete } from "../../components/caixa_modal/form_receitas";
import { toast } from "react-toastify";

interface IReceitasContext {
  receitas: IReceitas[];
  addNewReceitas: (
    formData: IFormReceitasComplete,
    caixa_id: number
  ) => Promise<void>;
  formReceitas: boolean;
  setFormReceitas: React.Dispatch<React.SetStateAction<boolean>>;
  setReceitas: React.Dispatch<React.SetStateAction<IReceitas[]>>
}
interface IReceitasProvider {
  children: React.ReactNode;
}
export interface IReceitas {
  id: number;
  nome: string;
  valor: number;
  tipo:string
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
        tipo:formData.tipo
      });

      setReceitas([...receitas, response.data]);
     toast.success("Nova receita cadastrada!");
    } catch (error) {
     toast.error("Ops... Algo deu errado, tente novamente!");
    } finally {
      setFormReceitas(false);
    }
  };

  return (
    <ReceitasContext.Provider
      value={{ receitas, addNewReceitas, formReceitas, setFormReceitas,setReceitas }}
    >
      {children}
    </ReceitasContext.Provider>
  );
};
