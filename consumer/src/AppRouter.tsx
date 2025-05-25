import { createBrowserRouter, Outlet } from "react-router-dom";
import { Microfrontend } from "./Microfrontend";
import { MicrofrontendWrapper } from "./components/MicrofrontendWrapper";
import { AppBar } from "./AppBar";

const routes = [
  {
    path: "/",
    element: (
      <>
        <AppBar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <></> },
      // Mapear cada microfrontend a una ruta
      ...Microfrontend.map(({ path, basepath, element }) => ({
        path, // Usa el path que se definió en microfrontends
        element: <MicrofrontendWrapper basepath={basepath} Element={element} />,
      })),
    ],
  },
];

const AppRouter = createBrowserRouter(routes);

export default AppRouter;
