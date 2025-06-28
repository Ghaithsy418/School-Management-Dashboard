import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// interface StateTypes {
//   ui: string;
//   className: string;
//   classId: number;
//   studentId: number;
//   teacherId: number;
// }

const initialState = {
  ui: "",
  className: "",
  classId: 0,
  studentId: 0,
  teacherId: 0,
};

const classesUiSlice = createSlice({
  name: "classesUi",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<string>) {
      state.className = action.payload;
    },
    changeClassName(state, action: PayloadAction<string>) {
      state.className = action.payload;
    },
    changeClassId(state, action: PayloadAction<number>) {
      state.classId = action.payload;
    },
    changeStudentId(state, action: PayloadAction<number>) {
      state.studentId = action.payload;
    },
    changeTeacherId(state, action: PayloadAction<number>) {
      state.teacherId = action.payload;
    },
    clearAll(state) {
      state.ui = "";
      state.className = "";
      state.classId = 0;
      state.studentId = 0;
      state.teacherId = 0;
    },
  },
});

export const {
  changeClassId,
  changeClassName,
  changeUi,
  changeStudentId,
  changeTeacherId,
  clearAll,
} = classesUiSlice.actions;

export default classesUiSlice.reducer;

export const useClassesUi = () =>
  useSelector((state: RootState) => state.classesUi);
