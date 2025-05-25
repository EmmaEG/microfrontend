import { useNavigate } from "react-router-dom";

export const AppBar = () => {

    const navigate = useNavigate();

    return (
    <div
      style={{
        height: 45,
        backgroundColor: "#0060bf",
        width: "100vw",
        position: "fixed",
        top: 0,
        padding: 15,
        display: "flex",
        alignItems: "center",
      }}
    >
      Consumer App
      <div style={{ flex: 1 }} />
      <button style={{ marginRight: 100 }} onClick={()=>navigate('exposer/exposer-test-view')}>
        Navigate To TestView
      </button>
    </div>
  );
};
