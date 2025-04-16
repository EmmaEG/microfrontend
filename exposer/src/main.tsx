import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesApp from "./routes/RoutesApp.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RoutesApp />
    </StrictMode>
);
