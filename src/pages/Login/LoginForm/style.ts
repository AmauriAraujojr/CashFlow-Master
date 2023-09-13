import styled from "styled-components";
import { AnimationFadeIn2 } from "../../../styles/animation";

export const StyledFormLogin = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  animation: ${AnimationFadeIn2} 1s ease;
  width: 100%;
  max-width: 600px;
  padding: 30px;

  h3 {
    align-self: center;
    font-size: 2rem;
  }

  form {
    width: 100%;
    display: flex;
    align-self: center;
    gap: 20px;
    flex-direction: column;
  }
  .input_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: inherit;
    gap: 20px;

    input {
      border-radius: 0.5rem;
      height: 100%;
      width: 100%;
      font-size: 1rem;
      padding: 0.9375rem;
      border: 1px solid goldenrod;

      
    }
    input:focus {
        border: 2px solid var(--color-red2);
        box-shadow: 0px 2px 2px 2px rgba(255, 208, 41, 0.1);
      }

    label {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  button {
    font-size: 1rem;
    font-weight: 900;
    color: goldenrod;
  }
`;
