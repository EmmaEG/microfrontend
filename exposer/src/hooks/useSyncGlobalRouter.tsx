import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
 
export type MicrofrontendConfig = {
    basepath: string;
    name: string;
};
 
export const microfrontends: MicrofrontendConfig[] = [
    {
        basepath: "/agro-oficial",
        name: "AgroOficialMF",
    },
];
 
type RouteEvent = CustomEvent<string>;
 
const useSyncGlobalRouter = () => {
    const location = useLocation();
    const navigate = useNavigate();
 
    React.useEffect(() => {
        const basepath = "/agro-oficial";
 
        // Emitir evento al host
        if (location.pathname.startsWith("/")) {
            const fullPath = `${basepath}${location.pathname}`;
            window.dispatchEvent(new CustomEvent("app", { detail: fullPath }));
        }
 
        // Escuchar evento del host
        const handleShellNavigation = ({ detail }: RouteEvent) => {
            if (detail !== location.pathname) {
                navigate(detail);
            }
        };
 
        window.addEventListener("shell", handleShellNavigation as EventListener);
 
        return () => {
            window.removeEventListener("shell", handleShellNavigation as EventListener);
        };
    }, [location.pathname, navigate]);
};
 
export default useSyncGlobalRouter;