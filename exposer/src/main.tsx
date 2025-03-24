import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StoreProvider from "./store/provider.tsx";
import RoutesApp from "../routes/RoutesApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <StrictMode>
      <RoutesApp />
    </StrictMode>
  </StoreProvider>
);
