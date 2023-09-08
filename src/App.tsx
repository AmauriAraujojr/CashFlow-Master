import { useContext} from "react";
import { CaixaContext } from "./providers/CaixaContext";
import { CaixaModal } from "./components/caixa_modal";
import { CaixaList } from "./components/caixa_list";
import { Header } from "./components/header";
import { GlobalStyles} from "./styles/globalStyle.tsx"
import { StyledContainer } from "./styles/grid.ts";

const App=()=> {

  const { addNewCaixa,modalCaixa,setModalCaixa } = useContext(CaixaContext);

  const newCaixa = () => {
    setModalCaixa(!modalCaixa);
    addNewCaixa();
  };

  return (
    <>
<GlobalStyles/>

      <Header/>

<StyledContainer>
  
      <CaixaList/>
</StyledContainer>

{modalCaixa ? <CaixaModal /> : null}
      <button onClick={() => newCaixa()}>Novo Caixa</button>
    </>
  );
}

export default App;
