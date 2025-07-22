import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  ui: "",
  day: "",
  className: "",
};

const supervisorAttendanceSlice = createSlice({
  name: "supervisorAttendance",
  initialState,
  reducers: {
    changeUi(state, action: PayloadAction<string>) {
      state.ui = action.payload;
    },
    setDay(state, action: PayloadAction<string>) {
      state.day = action.payload;
    },
    setClassName(state, action: PayloadAction<string>) {
      state.className = action.payload;
    },
    clearAll(state) {
      state.className = "";
      state.day = "";
      state.ui = "";
    },
  },
});

export default supervisorAttendanceSlice.reducer;

export const { changeUi, setDay, setClassName, clearAll } =
  supervisorAttendanceSlice.actions;

export const useSupervisorAttendance = () =>
  useSelector((state: RootState) => state.supervisorAttendace);
