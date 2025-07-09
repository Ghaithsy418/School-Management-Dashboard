import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/slices/userSlice";
import classesUiReducer from "@/slices/classesUiSlice";
import loginUiReducer from "@/slices/loginUiSlice";
import subjectsUiReducer from "@/slices/SubjectUiSlice";
import attendanceReducer from "@/slices/AttendanceSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    classesUi: classesUiReducer,
    loginUi: loginUiReducer,
    subjectsUi: subjectsUiReducer,
    attendance: attendanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
