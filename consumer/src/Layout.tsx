import { Outlet, useLocation } from "react-router-dom";
import { AppBar } from "./AppBar";

export const Layout = () => {
  const location = useLocation();
  const showTitle = location.pathname === "/";

  return (
    <>
      <AppBar />
      {showTitle && (
        <div
          style={{
            display: "flex",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Consumer App</h1>
        </div>
      )}
      <Outlet />
    </>
  );
};
