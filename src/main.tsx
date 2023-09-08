import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CaixaProvider } from "./providers/CaixaContext/index.tsx";
import { DespesasProvider } from "./providers/DespesasContext/index.tsx";
import { ReceitasProvider } from "./providers/ReceitasContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CaixaProvider>
      <DespesasProvider>
        <ReceitasProvider>
          <App />
        </ReceitasProvider>
      </DespesasProvider>
    </CaixaProvider>
  </React.StrictMode>
);
