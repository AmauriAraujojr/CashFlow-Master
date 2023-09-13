import styled from "styled-components";
import { AnimationFadeIn3 } from "../../styles/animation";

export const StyledRegisterPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;


  @media (min-width: 800px){
  grid-template-columns: repeat(2, 1fr);}  


  .coluna_1{
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    .img_container{
        display:flex;
        flex-direction:column;
        gap: 30px;
        text-align:center;
        padding:30px;

        .logotipo{
            color:goldenrod;
            font-weight:900;
            animation: ${AnimationFadeIn3} 1s ease;

        }
        img{
            max-width: 100%;
        }
    }
    
  }

  .coluna_2{

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    gap:20px;

   
    .container_link{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;
    font-size:1.2rem;

    a{
        color:goldenrod;
        text-decoration:none;
        border:solid 1px goldenrod;
        padding:10px;
        border-radius:4px;
        margin-top:10px;
        font-weight: 700;}
        a:hover{
            background-color: goldenrod;
            color:#fff
        }
    }

        
    }
  
  `