import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "../hooks/useSyncGlobalRouter";
import StoreProvider from "../store/StoreProvider";

// Vistas
import { TestView } from "../views/TestView";
import App from "../App";

// Página inicial de AgroOficial (puede agregarse contenido si es necesario)
const ConsumerHome = () => {
  return <></>;
};

// Wrapper para sincronizar el router con el entorno global
const RouterHandler = () => {
  useSyncGlobalRouter();
  return <Outlet />;
};

// Configuración del router
const router = createMemoryRouter(
  [
    {
      path: "/",
      element: <RouterHandler />,
      children: [
        {
          index: true,
          element: <ConsumerHome />,
        },
        {
          path: "exposer-main-view",
          element: (
            <StoreProvider>
              <App />
            </StoreProvider>
          ),
        },
        {
          path: "exposer-test-view",
          element: (
            <StoreProvider>
              <TestView />
            </StoreProvider>
          ),
        },
      ],
    },
  ],
  {
    initialEntries: [location.pathname.replace("/exposer", "") || "/"],
  }
);

// Componente raíz del microfrontend
const ExposerRoutingShared = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

export default ExposerRoutingShared;
