import React from "react";
 
export type MicrofrontendConfig = {
    basepath: string;
    name: string;
    path: string;
    element: React.LazyExoticComponent<React.ComponentType<any>>;
};
 
export const Microfrontend: MicrofrontendConfig[] = [
    {
        basepath: "/exposer",
        name: "ExposerApp",
        path: "/exposer/*", 
        element: React.lazy(() => import("exposer_app/ExposerRoutingShared")),
    }
];