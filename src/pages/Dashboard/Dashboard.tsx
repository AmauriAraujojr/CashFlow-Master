import { useContext, useEffect, useState } from "react";
import { CaixaList } from "../../components/caixa_list";
import { Header } from "../../components/header";
import { StyledContainer } from "../../styles/grid";
import { CaixaContext } from "../../providers/CaixaContext";
import { CaixaModal } from "../../components/caixa_modal";
import { UserContext } from "../../providers/UserContext";
import { HeaderControls } from "../../components/headerControls";

export const Dashboard = () => {
  const {  modalCaixa, caixas, getAllCaixas} = useContext(CaixaContext);
  const [defaultDiv, setDefaultDiv]= useState(false)

 
    
  useEffect(() => {
    const id = localStorage.getItem("@USERID");
    getAllCaixas(Number(id));
  }, [caixas]);
  

  return (
    <>

    {defaultDiv?  <div className="default_logout"></div>:null}
   
      <Header setDefaultDiv={setDefaultDiv} defaultDiv={defaultDiv}/>
      <HeaderControls/>

      <StyledContainer>
        <CaixaList />
      </StyledContainer>

      {modalCaixa ? <CaixaModal /> : null}
    </>
  );
};
