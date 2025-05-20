import { useNavigate } from "react-router-dom";

export const TestView = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "#ffffff" }}>Test View</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Volver
      </button>
    </>
  );
};

export default TestView;
