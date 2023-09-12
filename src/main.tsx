import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CaixaProvider } from "./providers/CaixaContext/index.tsx";
import { DespesasProvider } from "./providers/DespesasContext/index.tsx";
import { ReceitasProvider } from "./providers/ReceitasContext/index.tsx";
import { UserProvider } from "./providers/UserContext/index.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<BrowserRouter>
    <UserProvider>
    <CaixaProvider>
      <DespesasProvider>
        <ReceitasProvider>
          <App />
        </ReceitasProvider>
      </DespesasProvider>
    </CaixaProvider>

    </UserProvider>
</BrowserRouter>
  </React.StrictMode>
);
