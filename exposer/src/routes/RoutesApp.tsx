import * as React from "react";
import { useAppDispatch, useAppSelector } from "../store/Store-tofix";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { clearErrorState } from "../store/slices/error/ErrorSlice-tofix";
import App from "../../src/App";
import TestView from "../../src/views/TestView";
import NotFound from "../../src/views/NotFound";
import StoreProvider from "../store/StoreProvider";

// Exportamos los hooks
export { useAppDispatch, useAppSelector } from "../store/Store-tofix";

interface IErrorWrapper {
  children: React.ReactNode;
}

const ErrorWrapper: React.FC<IErrorWrapper> = (props) => {
  const dispatch = useAppDispatch();
  const errorsState = useAppSelector((state) => state.errorState);

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
      {props.children}
      {errorsState.error && (
        <>
          <h3>{errorsState.message}</h3>
          <button
            onClick={() => {
              dispatch(clearErrorState());
            }}
          >
            Clear Error State
          </button>
        </>
      )}
    </div>
  );
};

export const RoutesApp: React.FC = () => {
  return (
    <StoreProvider>
      <ErrorWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/testview" component={TestView} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ErrorWrapper>
    </StoreProvider>
  );
};

export default RoutesApp;
