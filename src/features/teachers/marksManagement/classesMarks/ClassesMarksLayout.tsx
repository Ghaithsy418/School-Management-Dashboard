import Empty from "@/ui/Empty";
import Spinner from "@/ui/Spinner";
import { Award, BookOpen } from "lucide-react";
import { useState } from "react";
import { useGetClassMarks } from "./useGetClassMarks";
import ClassMarkRow from "./ClassMarkRow";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";

function ClassesMarksLayout({ semester }: { semester: string }) {
  const { marks, isGettingMarks } = useGetClassMarks(semester);
  const { currentUser } = useGetCurrentUser();
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
      <div className="flex w-full flex-col items-start justify-center gap-5">
        {((marks?.final && activeTab === "final") ||
          (marks?.["mid-term"] && activeTab === "mid-term")) && (
          <h3 className="ml-4 text-4xl font-bold capitalize">
            📚 {currentUser?.profile_data?.subject}
          </h3>
        )}
        <div className="w-full space-y-3">
          {marks?.[activeTab as keyof typeof marks] ? (
            marks?.[activeTab as keyof typeof marks]?.map((subject, index) => (
              <ClassMarkRow subject={subject} key={index} />
            ))
          ) : (
            <Empty resource="marks" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClassesMarksLayout;
