import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/darkModeContext.tsx";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </DarkModeProvider>
  </StrictMode>
);
