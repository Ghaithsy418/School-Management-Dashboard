import { getScoreColor } from "@/utils/marksCalculations";
import { ClassMarkTypes } from "@/utils/types";

function ClassMarkRow({ subject }: { subject: ClassMarkTypes }) {
  return (
    <div className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900 capitalize dark:text-gray-100">
            {subject.full_name}
          </h3>
        </div>

        <div className="text-right">
          <div
            className={`text-xl font-bold ${getScoreColor(subject.mark, subject.max_mark)}`}
          >
            {!subject.mark ? 0 : subject.mark}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-indigo-500 transition-all duration-300"
            style={{
              width: `${(subject.mark / subject.max_mark) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ClassMarkRow;
