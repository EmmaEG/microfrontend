import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        height: 45,
        backgroundColor: "#0060bf",
        width: "100vw",
        position: "fixed",
        top: 0,
        padding: 15,
        display: "flex",
        alignItems: "center",
      }}
    >
      Consumer App
    </div>
    <App />
  </StrictMode>
);
