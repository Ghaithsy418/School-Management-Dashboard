import {
  addSessionToSchedule,
  removeSessionFromSchedule,
  setCurrentCell,
  useCurrentCell,
} from "@/slices/weeklyScheduleSlice";
import { motion, Variants } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PiNotePencil } from "react-icons/pi";
import { useDispatch } from "react-redux";
import ScheduleClassSubjects from "./ScheduleClassSubjects";

function ScheduleFillCell() {
  const currentCell = useCurrentCell();
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");

  const handleDone = useCallback(
    function handleDone() {
      if (subject !== "" && subject !== "removeSubject")
        dispatch(
          addSessionToSchedule({
            ...currentCell,
            subject: `${subject.slice(0, 1).toLocaleUpperCase()}${subject.slice(1)}`,
          }),
        );
      else
        dispatch(
          removeSessionFromSchedule({
            day: currentCell.day,
            session: currentCell.session,
          }),
        );
      dispatch(setCurrentCell({ day: "", session: 0 }));
    },
    [dispatch, subject, currentCell],
  );

  useEffect(
    function () {
      function handleEnter(e: KeyboardEvent) {
        if (e.key === "Enter" && currentCell.day && currentCell.session)
          handleDone();
        if (e.key === "Escape")
          dispatch(setCurrentCell({ day: "", session: 0 }));
      }

      document.addEventListener("keydown", handleEnter);
      return () => document.removeEventListener("keydown", handleEnter);
    },
    [currentCell, handleDone, dispatch],
  );

  if (!currentCell.day || !currentCell.session) return null;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="sticky -bottom-8 border-t border-gray-100 bg-white"
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
            <PiNotePencil className="h-6 w-6 text-indigo-50" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Edit Class Details
            </h3>
            <p className="text-sm text-gray-600">
              {currentCell.day} at session {currentCell.session}
            </p>
          </div>
        </div>
        <ScheduleClassSubjects setSubject={setSubject} />
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleDone}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/25"
          >
            Done
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const variants: Variants = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default ScheduleFillCell;
