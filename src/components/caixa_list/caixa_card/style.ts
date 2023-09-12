import styled from "styled-components";

export const StyledCaixaCard = styled.li`
    background: var(--color-white);
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 25px 35px;
    display:flex;
    flex-direction:column;
    gap:15px;

        #data{
            align-self: center;
            display:flex;
            gap:5px;
        }
    
        .ul_card{
            display:flex;
            flex-direction: column;
           
        }
         
        .detalhes_dia{
                font-weight:600;
                font-weight: 1rem;

            }
    `