import { useContext, useState } from "react";
import "./App.css";
import { CaixaContext } from "./providers/CaixaContext";
import { CaixaModal } from "./components/caixa_modal";
import { CaixaList } from "./components/caixa_list";

const App=()=> {

  const { addNewCaixa,modalCaixa,setModalCaixa } = useContext(CaixaContext);

  const newCaixa = () => {
    setModalCaixa(!modalCaixa);
    addNewCaixa();
  };

  return (
    <>
      {modalCaixa ? <CaixaModal /> : null}

      <CaixaList/>

      <button onClick={() => newCaixa()}>Novo Caixa</button>
    </>
  );
}

export default App;
