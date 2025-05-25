import { createMemoryRouter, Outlet, RouterProvider } from "react-router-dom";
import useSyncGlobalRouter from "../hooks/useSyncGlobalRouter";
import StoreProvider from "../store/StoreProvider";

// Vistas
import { TestView } from "../views/TestView";
import { clearErrorState } from "../store/slices/error/ErrorSlice";
import { useAppDispatch, useAppSelector } from "../store/Store";
import App from "../App";

interface IErrorWrapper {
  children: React.ReactNode;
}

const ErrorWrapper: React.FC<IErrorWrapper> = (props) => {
  const dispatch = useAppDispatch();
  const errorsState = useAppSelector((state) => state.errorState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      {props.children}
      {errorsState.error && (
        <>
          <h3>{errorsState.message}</h3>
          <button
            onClick={() => {
              dispatch(clearErrorState());
            }}
          >
            Clear Error State
          </button>
        </>
      )}
    </div>
  );
};

// Página inicial de AgroOficial (puede agregarse contenido si es necesario)
const ConsumerHome = () => {
  return <App />;
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
          path: "/testview",
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
      <ErrorWrapper>
        <RouterProvider router={router} />
      </ErrorWrapper>
    </StoreProvider>
  );
};

export default ExposerRoutingShared;
