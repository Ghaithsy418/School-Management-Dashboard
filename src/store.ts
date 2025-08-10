import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/slices/userSlice";
import classesUiReducer from "@/slices/classesUiSlice";
import loginUiReducer from "@/slices/loginUiSlice";
import subjectsUiReducer from "@/slices/SubjectUiSlice";
import attendanceReducer from "@/slices/AttendanceSlice";
import supervisorAttendanceReducer from "@/slices/supervisorAttendanceSlice";
import marksReducer from "@/slices/MarksManagementSlice";
import commentsReducer from "@/slices/commentsSlice";
import complaintsReducer from "@/slices/complaintsSlice";
import weeklyScheduleReducer from "@/slices/weeklyScheduleSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    classesUi: classesUiReducer,
    loginUi: loginUiReducer,
    subjectsUi: subjectsUiReducer,
    attendance: attendanceReducer,
    supervisorAttendace: supervisorAttendanceReducer,
    marks: marksReducer,
    comments: commentsReducer,
    complaints: complaintsReducer,
    weeklySchedule: weeklyScheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
