import { getScoreColor } from "@/utils/marksCalculations";
import { StudentMarkTypes } from "@/utils/types";

function MarkRow({ subject }: { subject: StudentMarkTypes }) {
  return (
    <div className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-gray-900 capitalize">
            {subject.subject_name}
          </h3>
          <p className="text-sm text-gray-500">
            Out of {subject.max_mark} marks
          </p>
        </div>

        <div className="text-right">
          <div
            className={`text-xl font-bold ${getScoreColor(subject.mark, subject.max_mark)}`}
          >
            {subject.mark}
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

export default MarkRow;
