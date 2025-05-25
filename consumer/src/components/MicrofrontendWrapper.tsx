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
    <Suspense fallback={<div>Cargando microfrontend...</div>}>
      {/* Renderiza el microfrontend dinámico */}
      <Element />
    </Suspense>
  );
}

export default MicrofrontendWrapper;
