import {
  setClassName,
  useSupervisorAttendance,
} from "@/slices/supervisorAttendanceSlice";
import Select from "@/ui/Select";
import { Users } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useGetClasses } from "../classesManagement/useGetClasses";
import { useDispatch } from "react-redux";

function AbsenceSelectClassName() {
  const { className } = useSupervisorAttendance();
  const dispatch = useDispatch();
  const { classes, isGettingClasses } = useGetClasses();
  const [searchParams] = useSearchParams();

  const grade = searchParams.get("grade") || "";
  const filteredClasses = classes?.filter(
    (classData: { className: string }) =>
      classData.className.split("-")[0] === grade,
  );

  return (
    <div className="space-y-3">
      <label className="flex items-center space-x-2 font-semibold text-slate-700">
        <Users className="h-4 w-4 text-indigo-600" />
        <span>Class</span>
      </label>
      <div className="relative">
        <Select
          options={filteredClasses?.map((classData: { className: string }) => ({
            value: classData.className,
            title: `Class ${classData.className}`,
          }))}
          onSelect={(value) => dispatch(setClassName(value))}
          placeholder={
            isGettingClasses
              ? "Loading Classes..."
              : !grade
                ? "<-- Select Grade First"
                : !filteredClasses?.length
                  ? "There are no Classes"
                  : "Select a class"
          }
          width="w-full"
          disabled={isGettingClasses || !grade || !filteredClasses?.length}
          value={className}
        />
      </div>
    </div>
  );
}

export default AbsenceSelectClassName;
