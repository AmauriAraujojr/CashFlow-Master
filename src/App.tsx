import { GlobalStyles } from "./styles/globalStyle.tsx";
import { RouterMain } from "./routes/index.tsx";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterMain />
    </>
  );
};

export default App;
