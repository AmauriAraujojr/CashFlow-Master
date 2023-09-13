import { GlobalStyles } from "./styles/globalStyle.tsx";
import { RouterMain } from "./routes/index.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
      <RouterMain />
    </>
  );
};

export default App;
