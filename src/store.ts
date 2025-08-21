import attendanceReducer from "@/slices/AttendanceSlice";
import classesUiReducer from "@/slices/classesUiSlice";
import commentsReducer from "@/slices/commentsSlice";
import complaintsReducer from "@/slices/complaintsSlice";
import examReducer from "@/slices/examSlice";
import loginUiReducer from "@/slices/loginUiSlice";
import marksReducer from "@/slices/MarksManagementSlice";
import rootReducer from "@/slices/rootReducer";
import subjectsUiReducer from "@/slices/SubjectUiSlice";
import supervisorAttendanceReducer from "@/slices/supervisorAttendanceSlice";
import userReducer from "@/slices/userSlice";
import weeklyScheduleReducer from "@/slices/weeklyScheduleSlice";
import { configureStore } from "@reduxjs/toolkit";

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
    exam: examReducer,
    root: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
