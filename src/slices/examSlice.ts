import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  getExamSchedule: {
    semester: "",
    grade: 0,
    type: "",
  },
  uploadExamSchedule: {
    semester: "",
    grade: 0,
    type: "",
  },
};

const examSlice = createSlice({
  initialState,
  name: "exam",
  reducers: {
    setSemesterUploadExam(state, action: PayloadAction<string>) {
      state.uploadExamSchedule.semester = action.payload;
    },
    setSemesterGetExam(state, action: PayloadAction<string>) {
      state.getExamSchedule.semester = action.payload;
    },
    setTypeUploadExam(state, action: PayloadAction<string>) {
      state.uploadExamSchedule.type = action.payload;
    },
    setTypeGetExam(state, action: PayloadAction<string>) {
      state.getExamSchedule.type = action.payload;
    },
    setGradeUploadExam(state, action: PayloadAction<number>) {
      state.uploadExamSchedule.grade = action.payload;
    },
    setGradeGetExam(state, action: PayloadAction<number>) {
      state.getExamSchedule.grade = action.payload;
    },
  },
  selectors: {
    selectUploadExam: (state) => state.uploadExamSchedule,
    selectGetExam: (state) => state.getExamSchedule,
  },
});

export default examSlice.reducer;

export const {
  setSemesterUploadExam,
  setGradeGetExam,
  setGradeUploadExam,
  setSemesterGetExam,
  setTypeGetExam,
  setTypeUploadExam,
} = examSlice.actions;

export const { selectGetExam, selectUploadExam } = examSlice.selectors;

export const useUploadExam = () => useSelector(selectUploadExam);
export const useGetExam = () => useSelector(selectGetExam);
