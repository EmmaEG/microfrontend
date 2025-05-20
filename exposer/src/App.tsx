import { useHistory } from "react-router-dom";
import {
  changeErrorState,
  changeMessageErrorState,
} from "./store/slices/error/ErrorSlice-tofix";
import { useAppDispatch, useAppSelector } from "./store/Store-tofix";

function App() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const errorState = useAppSelector((state) => state.errorState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <h2>Exposer App</h2>
      <div style={{ height: 30 }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {!errorState.error && (
          <>
            <button
              onClick={() => {
                dispatch(changeErrorState(true));
                dispatch(
                  changeMessageErrorState("Se generó un error inserperado")
                );
              }}
            >
              Change Error State
            </button>
            <button
              onClick={() => {
                history.push("/testview");
              }}
              style={{ marginTop: 20 }}
            >
              Navigate
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
