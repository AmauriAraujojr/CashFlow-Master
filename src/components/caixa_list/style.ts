import styled from "styled-components";

export const StyledCaixaList = styled.div`
    margin-top: 25px;
    display:flex;

    flex-direction:column;
    gap:20px;

    .totais{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-between;
        gap:10px;
        h2{
            color:goldenrod
        }
        .receita{
            color: var(--color-green1)
        }
        .despesa{
            color: var(--color-red1)
        }

    }
    ul{
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (min-width: 800px){
        .totais{
       
        flex-direction:row

    }
        ul{
            grid-template-columns: repeat(2, 1fr);  
            /* li:first-child{
                grid-area: 1 / 1 / 2 / 3;
            } */
        }
    }

    @media (min-width: 1200px){
        ul{
            grid-template-columns: repeat(3, 1fr);  
        } 
    }
`