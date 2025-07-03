import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// interface SubjectsUiTypes {
//   ui: string;
// }

const initialState = {
  ui: "create",
};

const subjectUiSlice = createSlice({
  name: "subjectsUi",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<string>) {
      state.ui = action.payload;
    },
  },
});

export default subjectUiSlice.reducer;

export const { changeUi } = subjectUiSlice.actions;

export const useSubjectsUi = () =>
  useSelector((state: RootState) => state.subjectsUi);
