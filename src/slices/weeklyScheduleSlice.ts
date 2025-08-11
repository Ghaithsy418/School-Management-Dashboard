import { ScheduleTypes } from "@/utils/types";
import {
  createSelector,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface StateTypes {
  classId: number;
  className: string;
  grade: number;
  schedule: ScheduleTypes[];
  currentCell: { day: string; session: number; subject?: string };
}

const initialState: StateTypes = {
  classId: 0,
  className: "",
  grade: 0,
  schedule: [],
  currentCell: { day: "", session: 0 },
};

const weeklyScheduleSlice = createSlice({
  name: "weeklySchedule",
  initialState,
  reducers: {
    setGrade(state, action: PayloadAction<number>) {
      state.grade = action.payload;
    },
    setClass(
      state,
      action: PayloadAction<{ className: string; classId: number }>,
    ) {
      state.classId = action.payload.classId;
      state.className = action.payload.className;
    },
    setCurrentCell(
      state,
      action: PayloadAction<{ day: string; session: number }>,
    ) {
      state.currentCell.day = action.payload.day;
      state.currentCell.session = action.payload.session;
    },
    addSessionToSchedule(state, action: PayloadAction<ScheduleTypes>) {
      const currentSchedule = current(state.schedule);
      const { day, session, subject } = action.payload;

      const scheduleItemIndex = currentSchedule.findIndex(
        (item) => item.day === day && item.session === session,
      );
      if (scheduleItemIndex !== -1) {
        state.schedule[scheduleItemIndex].subject = subject;
      } else {
        state.schedule.push(action.payload);
      }
    },
    removeSessionFromSchedule(
      state,
      action: PayloadAction<{ day: string; session: number }>,
    ) {
      const { day, session } = action.payload;
      state.schedule = state.schedule.filter(
        (item) => item.day !== day || item.session !== session,
      );
    },
    clearScheduleCompletely(state) {
      state.schedule = [];
    },
  },
  selectors: {
    selectClassId: (state) => state.classId,
    selectClassName: (state) => state.className,
    selectGrade: (state) => state.grade,
    selectSchedule: (state) => state.schedule,
    selectCurrentCell: (state) => state.currentCell,
  },
});

export const {
  setClass,
  setGrade,
  setCurrentCell,
  addSessionToSchedule,
  removeSessionFromSchedule,
  clearScheduleCompletely,
} = weeklyScheduleSlice.actions;

export const {
  selectClassId,
  selectClassName,
  selectGrade,
  selectSchedule,
  selectCurrentCell,
} = weeklyScheduleSlice.selectors;

export const selectClassInfo = createSelector(
  [selectClassId, selectClassName, selectGrade],
  (classId, className, grade) => ({
    classId,
    className,
    grade,
  }),
);

export const useClassInfo = () => useSelector(selectClassInfo);
export const useSchedule = () => useSelector(selectSchedule);
export const useCurrentCell = () => useSelector(selectCurrentCell);

export default weeklyScheduleSlice.reducer;
