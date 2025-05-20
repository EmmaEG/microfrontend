import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Volver
      </button>
    </div>
  );
};

export default NotFound;
