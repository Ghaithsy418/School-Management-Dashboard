import {
  addSessionToSchedule,
  removeSessionFromSchedule,
  setCurrentCell,
  useCurrentCell,
} from "@/slices/weeklyScheduleSlice";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ScheduleFillCell() {
  const currentCell = useCurrentCell();
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");

  function handleDone() {
    if (subject !== "")
      dispatch(addSessionToSchedule({ ...currentCell, subject }));
    else
      dispatch(
        removeSessionFromSchedule({
          day: currentCell.day,
          session: currentCell.session,
        }),
      );
    dispatch(setCurrentCell({ day: "", session: 0 }));
  }

  console.log("ggs");

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
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-3 ml-2 block text-sm font-bold text-gray-700">
              Subject
            </label>
            <select
              value={subject ?? currentCell?.subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all duration-200 outline-none hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a subject...</option>
              {SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          {/* <div>
            <label className="mb-3 block text-sm font-bold text-gray-700">
              Instructor
            </label>
            <input
              type="text"
              value={
                schedule[selectedCell.day][selectedCell.session].instructor
              }
              placeholder="e.g., Dr. Smith"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all duration-200 outline-none hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div> */}
        </div>

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

const SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Computer Science",
  "Physical Education",
  "Art",
  "Music",
  "Economics",
  "Psychology",
  "Philosophy",
];

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
