import { GiFinishLine } from "react-icons/gi";
import { useEndOfYear } from "./useEndOfYear";

function EndOfYear() {
  const { endOfYearMutation, isPending } = useEndOfYear();

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-red-600 shadow-sm">
              <GiFinishLine className="h-7 w-7 text-gray-50" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                End Of Year
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Click the button to finish the year calculations
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => endOfYearMutation()}
              className="w-[12rem] cursor-pointer rounded-md bg-rose-500 px-3 py-2 text-gray-50 transition-colors duration-300 hover:bg-rose-600"
            >
              {isPending ? "Ending..." : "Finally it's done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndOfYear;
