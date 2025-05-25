import React, { Suspense } from "react";
import useSyncAppRouter from "../hooks/useSyncAppRouter";

type Props = {
  basepath: string;
  Element: React.LazyExoticComponent<React.ComponentType<any>>;
};

export const MicrofrontendWrapper = ({ Element }: Props) => {
  // Sincroniza el enrutador con el microfrontend específico
  useSyncAppRouter();

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Cargando microfrontend...
        </div>
      }
    >
      {/* Renderiza el microfrontend dinámico */}
      <Element />
    </Suspense>
  );
};

export default MicrofrontendWrapper;
