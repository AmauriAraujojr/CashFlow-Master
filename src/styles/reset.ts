import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Roboto", sans-serif;


  }
  
  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }

 
`