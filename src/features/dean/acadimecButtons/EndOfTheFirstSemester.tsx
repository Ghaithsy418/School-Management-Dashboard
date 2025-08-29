import { GoTrophy } from "react-icons/go";
import { useEndOfFirstSemester } from "./useEndOfFirstSemester";

function EndOfTheFirstSemester() {
  const { endOfFirstSemesterMutation, isPending } = useEndOfFirstSemester();

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 shadow-sm">
              <GoTrophy className="h-7 w-7 text-gray-50" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                End Of First Semester
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Click the button to calculate all first semester stuff
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => endOfFirstSemesterMutation()}
              className="w-[12rem] cursor-pointer rounded-md bg-amber-500 px-3 py-2 text-gray-50 transition-colors duration-300 hover:bg-amber-600"
            >
              {isPending ? "Ending..." : "Click to end it"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndOfTheFirstSemester;
