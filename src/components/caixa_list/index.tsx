import { useContext } from "react"
import { CaixaContext } from "../../providers/CaixaContext"
import { CaixaCard } from "./caixa_card"

export const CaixaList=()=>{

    const{caixas}=useContext(CaixaContext)
    
       return(

        <section>
            {caixas.map(caixa=>{
                return <CaixaCard key={caixa.id} caixa={caixa}/>
            })}

        </section>
    )
}