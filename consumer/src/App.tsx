import React from "react";

// const ButtonEx = React.lazy(() => import("exposer_app/ButtonEx"));
const RoutesApp = React.lazy(() => import("exposer_app/RoutesApp"));

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Cargando...</div>}>
        <RoutesApp />
      </React.Suspense>
    </>
  );
}

export default App;
