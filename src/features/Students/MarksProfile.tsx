import { calculateAverage, getScoreColor } from "@/utils/marksCalculations";
import { Award, BookOpen } from "lucide-react";
import React, { Ref, useEffect, useState } from "react";

const mockMarksData = {
  first: {
    midterm: {
      subjects: [
        { name: "Mathematics", marks: 85, minMark: 0, maxMark: 100 },
        { name: "Physics", marks: 78, minMark: 0, maxMark: 100 },
        { name: "Chemistry", marks: 92, minMark: 0, maxMark: 100 },
        { name: "English", marks: 88, minMark: 0, maxMark: 100 },
        { name: "Computer Science", marks: 95, minMark: 0, maxMark: 100 },
      ],
    },
    final: {
      subjects: [
        { name: "Mathematics", marks: 89, minMark: 0, maxMark: 100 },
        { name: "Physics", marks: 82, minMark: 0, maxMark: 100 },
        { name: "Chemistry", marks: 94, minMark: 0, maxMark: 100 },
        { name: "English", marks: 91, minMark: 0, maxMark: 100 },
        { name: "Computer Science", marks: 97, minMark: 0, maxMark: 100 },
      ],
    },
  },
  second: {
    midterm: {
      subjects: [
        { name: "Advanced Mathematics", marks: 87, minMark: 0, maxMark: 100 },
        { name: "Data Structures", marks: 93, minMark: 0, maxMark: 100 },
        { name: "Database Systems", marks: 89, minMark: 0, maxMark: 100 },
        { name: "Software Engineering", marks: 91, minMark: 0, maxMark: 100 },
        { name: "Web Development", marks: 96, minMark: 0, maxMark: 100 },
      ],
    },
    final: {
      subjects: [
        { name: "Advanced Mathematics", marks: 90, minMark: 0, maxMark: 100 },
        { name: "Data Structures", marks: 95, minMark: 0, maxMark: 100 },
        { name: "Database Systems", marks: 92, minMark: 0, maxMark: 100 },
        { name: "Software Engineering", marks: 94, minMark: 0, maxMark: 100 },
        { name: "Web Development", marks: 98, minMark: 0, maxMark: 100 },
      ],
    },
  },
};

interface MarksProfile {
  marksRef: React.RefObject<HTMLDivElement | null>;
}

function MarksProfile({ marksRef }: MarksProfile) {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [marksData, setMarksData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("midterm");

  const fetchMarks = async (semester) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setMarksData(mockMarksData[semester]);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedSemester) {
      fetchMarks(selectedSemester);
    }
  }, [selectedSemester]);

  return (
    <div
      ref={marksRef}
      className="no-scrollbar w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
    >
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-10 py-6">
        <div className="flex items-center space-x-3">
          <Award className="h-10 w-10 text-white" />
          <h1 className="text-3xl font-semibold text-white">Student Marks</h1>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <div>
          <label className="mb-3 block text-xl font-medium">
            Select Semester
          </label>
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectedSemester("first")}
              className={`flex-1 rounded-lg px-4 py-3 font-medium transition-all ${
                selectedSemester === "first"
                  ? "bg-gradient-to-tr from-indigo-700 to-violet-700 text-white shadow-md hover:from-indigo-800 hover:to-violet-800"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              First Semester
            </button>
            <button
              onClick={() => setSelectedSemester("second")}
              className={`flex-1 rounded-lg px-4 py-3 font-medium transition-all ${
                selectedSemester === "second"
                  ? "bg-indigo-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Second Semester
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-indigo-500"></div>
            <span className="ml-3 text-gray-600">Loading marks...</span>
          </div>
        )}

        {marksData && !loading && (
          <div className="space-y-6">
            <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-indigo-800">
                  {activeTab === "midterm" ? "Mid-term" : "Final"} Average
                </span>
                <span className="text-2xl font-bold text-indigo-600">
                  {calculateAverage(marksData[activeTab].subjects)}%
                </span>
              </div>
            </div>

            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("midterm")}
                  className={`border-b-2 px-1 py-2 text-sm font-medium transition-colors ${
                    activeTab === "midterm"
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
              {marksData[activeTab].subjects.map((subject, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {subject.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Out of {subject.maxMark} marks
                      </p>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-xl font-bold ${getScoreColor(subject.marks, subject.maxMark)}`}
                      >
                        {subject.marks}
                      </div>
                      <div className="text-sm text-gray-500">
                        {((subject.marks / subject.maxMark) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-indigo-500 transition-all duration-300"
                        style={{
                          width: `${(subject.marks / subject.maxMark) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedSemester && !loading && (
          <div className="py-12 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-300" />
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              No Semester Selected
            </h3>
            <p className="text-gray-500">
              Choose a semester to view your academic performance
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarksProfile;
