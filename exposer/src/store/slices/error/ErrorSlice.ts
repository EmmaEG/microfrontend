import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IErrorState {
  error: boolean;
  message: string;
}

const initialState: IErrorState = {
  error: false,
  message: "",
};

export const ErrorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    changeErrorState: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    changeMessageErrorState: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearErrorState: () => {
      return initialState;
    },
  },
});

export const { changeErrorState, changeMessageErrorState, clearErrorState } =
  ErrorSlice.actions;
export default ErrorSlice.reducer;
