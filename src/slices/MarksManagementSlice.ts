import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  classId: 0,
  className: "",
  semester: "",
  type: "",
};

const marksSlice = createSlice({
  name: "marks",
  initialState,
  reducers: {
    setClassId(state, action: PayloadAction<number>) {
      state.classId = action.payload;
    },
    setClassName(state, action: PayloadAction<string>) {
      state.className = action.payload;
    },
    setSemester(state, action: PayloadAction<string>) {
      state.semester = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
  },
});

export default marksSlice.reducer;

export const { setClassId, setSemester, setType, setClassName } =
  marksSlice.actions;

export const useMarks = () => useSelector((state: RootState) => state.marks);
