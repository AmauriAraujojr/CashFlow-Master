import styled from "styled-components";
import { AnimationFadeIn2 } from "../../../styles/animation";

export const StyledFormDespesas = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  animation: ${AnimationFadeIn2} 1s ease;
  background: var(--color-white);
  width: 100%;
  max-width: 600px;
  padding: 30px;
  position: relative;

  h3 {
    align-self: center;
    font-size:2rem;

  }
  .closeButton{
            position: absolute;
            top: 20px;
            right: 20px;
            opacity: .5;
            transition: .4s;

                :hover{
                    opacity: 1;
                }
            }

  form {
    width: 100%;
    display: flex;
    align-self: center;
    gap: 20px;
    flex-direction: column;
    
    .input_container{
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            font-family: inherit;
            gap:20px;

            input{
                    border-radius: 0.5rem;
                    height: 100%;
                    width: 100%;
                    font-size: 1rem;
                    padding: 0.9375rem;
                    border: 1px solid var(--color-red1) ;
                    
                        :focus {
                        border: 2px solid var(--color-red2);
                        box-shadow: 0px 2px 2px 2px rgba(255, 208, 41, 0.1);
                        }
            }

            label{
                font-size:.9rem;
                font-weight: 600;
            }
            
        }
        button{
            font-size:.9rem;
            font-weight: 600;
            color:var(--color-red1);
            
        }
}
`;
