import { IDespesas } from "../../../../providers/DespesasContext"
import { StyledDespesaCard } from "./style"
import{GiPayMoney}from "react-icons/gi"

interface IDespesaCard{
    despesa:IDespesas
}

export const DespesaCard=({despesa}:IDespesaCard)=>{

    return(
        <StyledDespesaCard>
            <p>{<GiPayMoney/>}</p>
            <p>{despesa.nome}</p>
            <p>R$: { despesa.valor}</p>

        </StyledDespesaCard>        
    )
}