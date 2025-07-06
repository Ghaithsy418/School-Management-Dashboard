import { RootState } from "@/store";
import { SubjectTypes } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// interface SubjectsUiTypes {
//   ui: string;
// }

const initialState = {
  ui: "create",
  subject: {
    id: 0,
    maxMark: 0,
    minMark: 0,
    subjectName: "",
  },
};

const subjectUiSlice = createSlice({
  name: "subjectsUi",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<string>) {
      state.ui = action.payload;
    },
    setSubject(state, action: PayloadAction<SubjectTypes>) {
      state.subject = action.payload;
    },
  },
});

export default subjectUiSlice.reducer;

export const { changeUi, setSubject } = subjectUiSlice.actions;

export const useSubjectsUi = () =>
  useSelector((state: RootState) => state.subjectsUi);
