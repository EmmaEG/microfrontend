import { createBrowserRouter } from "react-router-dom";
import { Microfrontend } from "../Microfrontend";
import { MicrofrontendWrapper } from "../components/MicrofrontendWrapper";
import { Layout } from "../Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
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
