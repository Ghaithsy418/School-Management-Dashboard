export const calculateAverage = (subjects: { marks: number }[]) => {
  if (!subjects || subjects.length === 0) return 0;
  const total = subjects.reduce((sum, subject) => sum + subject.marks, 0);
  return (total / subjects.length).toFixed(1);
};

export const getScoreColor = (marks: number, maxMark: number) => {
  const percentage = (marks / maxMark) * 100;
  if (percentage >= 90) return "text-green-600";
  if (percentage >= 80) return "text-indigo-600";
  if (percentage >= 70) return "text-orange-600";
  return "text-red-600";
};

export const gpaLevel = (gpa: number) => {
  let gpaLevel = { message: "", className: "" };

  if (gpa >= 3.5) {
    gpaLevel = {
      message: "Excellent",
      className: "bg-green-100 text-green-700",
    };
  } else if (gpa >= 2.5) {
    gpaLevel = { message: "Good", className: "bg-blue-100 text-blue-700" };
  } else {
    gpaLevel = {
      message: "Needs Improvement",
      className: "bg-orange-100 text-orange-700",
    };
  }

  return gpaLevel;
};
