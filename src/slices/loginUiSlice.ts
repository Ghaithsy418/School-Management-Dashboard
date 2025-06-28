// interface StateTypes {
//   ui: number;
//   email: string;
// }

import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { ui: 1, email: "" };

const loginUiSlice = createSlice({
  name: "loginUi",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<number>) {
      state.ui = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const { changeUi, changeEmail } = loginUiSlice.actions;

export default loginUiSlice.reducer;

export const useLoginUi = () =>
  useSelector((state: RootState) => state.loginUi);
