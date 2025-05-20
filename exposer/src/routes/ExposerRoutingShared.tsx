import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "../hooks/useSyncGlobalRouter";
import StoreProvider from "../store/StoreProvider";

// Vistas
import { TestView } from "../views/TestView";

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
    initialEntries: [location.pathname.replace("/agro-oficial", "") || "/"],
  }
);

// Componente raíz del microfrontend
const ExposerRoutingShared = () => {
  return <RouterProvider router={router} />;
};

export default ExposerRoutingShared;
