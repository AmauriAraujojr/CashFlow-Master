import { IReceitas } from "../../../../providers/ReceitasContext"
import { StyledReceitaCard } from "./style"
import{FaSackDollar}from"react-icons/fa6"
import{BsCreditCard2BackFill}from"react-icons/bs"
import{MdPix}from"react-icons/md"

interface IReceitaCard{
    receita:IReceitas
}

export const ReceitaCard=({receita}:IReceitaCard)=>{

    return(
        <StyledReceitaCard>
          

            {receita.tipo == "dinheiro"? <p><FaSackDollar/></p>:null}
            {receita.tipo == "cartao"?<p><BsCreditCard2BackFill/></p>:null}
            {receita.tipo == "pix"? <p><MdPix/></p>:null}

            <p>{receita.nome}</p>
            <p>R$: {receita.valor}</p>

        </StyledReceitaCard>        
    )
}