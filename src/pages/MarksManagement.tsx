import MarksLayout from "@/features/teachers/marksManagement/MarksLayout";
import { ArrowDown } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function MarksManagement() {
  useEffect(function () {
    document.title = "Marks";
  }, []);

  return (
    <div className="flex flex-col justify-center gap-5 px-9.5 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold">Marks Management</h2>
        <Link
          to="/teacher/marks/classesMarks"
          className="transiton-all flex items-center justify-center gap-1 rounded-lg bg-violet-50 px-7 py-2.5 text-violet-800 shadow-sm shadow-violet-950/20 duration-300 hover:text-violet-900 hover:shadow-md active:shadow-xs"
        >
          Show Classes Marks <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
      <MarksLayout />
    </div>
  );
}

export default MarksManagement;
