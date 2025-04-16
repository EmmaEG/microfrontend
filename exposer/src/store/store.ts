import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { ErrorSlice } from "./slices/error/ErrorSlice";

export const Store = configureStore({
  reducer: {
    errorState: ErrorSlice.reducer,
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

// Hooks personalizados para Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
