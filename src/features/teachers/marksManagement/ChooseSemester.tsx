import { setSemester, useMarks } from "@/slices/MarksSlice";
import { useDispatch } from "react-redux";

function ChooseSemester() {
  const { semester } = useMarks();
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-between gap-6">
      <h4 className="text-sm font-semibold text-gray-800">Semester:</h4>
      <div className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => dispatch(setSemester("First"))}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
            semester === "First"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          First
        </button>
        <button
          onClick={() => dispatch(setSemester("Second"))}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
            semester === "Second"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Second
        </button>
      </div>
    </div>
  );
}

export default ChooseSemester;
