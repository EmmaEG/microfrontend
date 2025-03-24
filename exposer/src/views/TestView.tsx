import { useHistory } from "react-router-dom";

export const TestView = () => {
  const history = useHistory();

  return (
    <>
      <h1 style={{ color: "#ffffff" }}>Test View</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Volver
      </button>
    </>
  );
};

export default TestView;
