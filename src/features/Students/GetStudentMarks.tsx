import Empty from "@/ui/Empty";
import Spinner from "@/ui/Spinner";
import { calculateAverage } from "@/utils/marksCalculations";
import { Award, BookOpen } from "lucide-react";
import { useState } from "react";
import MarkRow from "./MarkRow";
import { useGetMarksProfile } from "./useGetMarksPofile";

interface StudentMarksTypes {
  selectedSemester: string;
}

function GetStudentMarks({ selectedSemester }: StudentMarksTypes) {
  const { marks, isGettingMarks } = useGetMarksProfile(1, selectedSemester);
  const [activeTab, setActiveTab] = useState("mid-term");

  if (isGettingMarks)
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-12">
        <Spinner />
        <span className="ml-3 text-gray-600">Loading marks...</span>
      </div>
    );

  if (!marks?.final && !marks?.["mid-term"]) return <Empty resource="marks" />;

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-indigo-800">
            {activeTab === "mid-term" ? "Mid-term" : "Final"} Average
          </span>
          <span className="text-2xl font-bold text-indigo-600">
            {calculateAverage(marks?.[activeTab as keyof typeof marks])}%
          </span>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("mid-term")}
            className={`border-b-2 px-1 py-2 text-sm font-medium transition-colors ${
              activeTab === "mid-term"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Mid-term Exams</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab("final")}
            className={`border-b-2 px-1 py-2 text-sm font-medium transition-colors ${
              activeTab === "final"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Final Exams</span>
            </div>
          </button>
        </nav>
      </div>

      <div className="space-y-3">
        {marks?.[activeTab as keyof typeof marks] ? (
          marks?.[activeTab as keyof typeof marks]?.map((subject, index) => (
            <MarkRow subject={subject} key={index} />
          ))
        ) : (
          <Empty resource="marks" />
        )}
      </div>
    </div>
  );
}

export default GetStudentMarks;
