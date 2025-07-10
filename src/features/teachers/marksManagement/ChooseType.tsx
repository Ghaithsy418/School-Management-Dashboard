import { setType, useMarks } from "@/slices/MarksSlice";
import { useDispatch } from "react-redux";

function ChooseType() {
  const { type } = useMarks();
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-between gap-6">
      <h4 className="text-sm font-semibold text-gray-800">Type:</h4>
      <div className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => dispatch(setType("final"))}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
            type === "final"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Final
        </button>
        <button
          onClick={() => dispatch(setType("mid-term"))}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
            type === "mid-term"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Mid-term
        </button>
        <button
          onClick={() => dispatch(setType("quizz"))}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
            type === "quizz"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Quiz
        </button>
      </div>
    </div>
  );
}

export default ChooseType;
