import styled from "styled-components";
import { AnimationFadeIn3 } from "../../styles/animation";

export const StyledCaixaModal = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: center;

        .modal{
            position: relative;
            width: 100%;
            max-width: 600px;
            background: var(--color-white);
            padding: 30px;
            overflow: auto;
            max-height: 70vh;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:50px;
            
          
            .options{
            display:flex;
            flex-direction: column;
            align-items:center;
            gap:30px;

                .optionsCard{
                    display:flex;
                    gap:30px;
                    align-items:center;
                    button{
                        color:var(--color-red2);
                        display:flex;
                        flex-direction:row;
                        align-items:center;
                        gap:5px;
                        font-size: 1rem;
                        font-weight: 600;
                        transition: .4s;

                            :hover{
                                opacity: 1;
                            }
                    }
                    .green_button{
                        color:var(--color-green1);

                    }
                }
            }
            .fechamento{
                border: 1px solid;
                opacity: .5;
                font-size: .8rem;
                font-weight: 400;

                transition: .4s;
                padding:5px 10px;
                border-radius:5px;

                :hover{
                    opacity: 1;
                }

            }
            animation: ${AnimationFadeIn3} 1s ease;

        }
    @media (min-width: 800px){
        .modal{
            padding: 50px;
    }}  
    `