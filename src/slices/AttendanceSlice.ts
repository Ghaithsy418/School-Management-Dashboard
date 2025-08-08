import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

type studentType = {
  studentId: number;
};

const initialState = {
  students: [],
  session: 0,
  className: "",
  selectAll: false,
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    pushStudent(state, action: PayloadAction<studentType>) {
      (state.students as studentType[]).push(action.payload);
    },
    removeStudent(state, action: PayloadAction<number>) {
      state.students = state.students.filter(
        (student: { studentId: number }) =>
          student.studentId !== action.payload,
      );
    },
    removeAllStudents(state) {
      state.students = [];
    },
    setSession(state, action: PayloadAction<number>) {
      state.session = action.payload;
    },
    setClassName(state, action: PayloadAction<string>) {
      state.className = action.payload;
    },
    changeSelectAll(state) {
      state.selectAll = !state.selectAll;
    },
    clearAll(state) {
      state.className = initialState.className;
      state.selectAll = initialState.selectAll;
      state.session = initialState.session;
      state.students = initialState.students;
    },
  },
});

export default attendanceSlice.reducer;

export const {
  setClassName,
  setSession,
  pushStudent,
  removeStudent,
  removeAllStudents,
  changeSelectAll,
  clearAll,
} = attendanceSlice.actions;

export const useAttendance = () =>
  useSelector((state: RootState) => state.attendance);
