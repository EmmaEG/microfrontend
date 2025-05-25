import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Microfrontend } from "../Microfrontend";

 
type RouteEvent = CustomEvent<string>;
 
const useSyncAppRouter = () => {
    const location = useLocation();
    const navigate = useNavigate();
 
    React.useEffect(() => {
        // Escuchar eventos del micro para navegar en el host
        const handleAppNavigation = ({ detail }: RouteEvent) => {
            const matchedMicro = Microfrontend.find(mf => detail.startsWith(mf.basepath));
            if (matchedMicro && detail !== location.pathname) {
                navigate(detail);
            }
        };
 
        window.addEventListener("app", handleAppNavigation as EventListener);
 
        return () => {
            window.removeEventListener("app", handleAppNavigation as EventListener);
        };
    }, [location.pathname, navigate]);
 
    React.useEffect(() => {
        // Emite eventos "shell" al microfrontend correspondiente
        Microfrontend.forEach(mf => {
            if (location.pathname.startsWith(mf.basepath)) {
                const relativePath = location.pathname.replace(mf.basepath, "");
                window.dispatchEvent(new CustomEvent("shell", { detail: relativePath }));
            }
        });
    }, [location.pathname]);
};
 
export default useSyncAppRouter;