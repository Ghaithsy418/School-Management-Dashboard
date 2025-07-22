import { setClassName } from "@/slices/supervisorAttendanceSlice";
import Select from "@/ui/Select";
import { GraduationCap } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

function AbsenceSelectGrade() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  function handleSelect(value: string) {
    dispatch(setClassName(""));
    searchParams.set("grade", value);
    setSearchParams(searchParams);
  }

  const grade = searchParams.get("grade");

  return (
    <div className="space-y-3">
      <label className="flex items-center space-x-2 font-semibold text-slate-700">
        <GraduationCap className="h-4 w-4 text-indigo-600" />
        <span>Grade</span>
      </label>
      <div className="relative">
        <Select
          options={Array.from({ length: 12 }, (_, i) => ({
            value: `${i + 1}`,
            title: `Grade ${i + 1}`,
          }))}
          onSelect={(value) => handleSelect(value)}
          placeholder="Select a grade"
          value={grade}
          width="w-full"
        />
      </div>
    </div>
  );
}

export default AbsenceSelectGrade;
