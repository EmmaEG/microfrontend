import { useHistory } from "react-router-dom";

export const NotFound = () => {
  const history = useHistory();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Volver
      </button>
    </div>
  );
};

export default NotFound;
