import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetTeacherClasses } from "@/features/teachers/attendance/useGetTeacherClasses";
import { setClassName } from "@/slices/AttendanceSlice";
import { useMarks } from "@/slices/MarksManagementSlice";
import { useDispatch } from "react-redux";

function ChooseTeacherClasses() {
  const dispatch = useDispatch();
  const { className } = useMarks();
  const { classes, isGettingClasses } = useGetTeacherClasses();

  return (
    <Select onValueChange={(e) => dispatch(setClassName(e))}>
      <SelectTrigger
        disabled={isGettingClasses}
        className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 disabled:cursor-not-allowed"
      >
        <SelectValue
          placeholder={
            isGettingClasses
              ? `Loading Classes...`
              : (className ?? "Click to select a class...")
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            {!classes?.length
              ? "You are not teaching any class right now"
              : "Classes"}
          </SelectLabel>
          {classes?.map((classData: { className: string }) => (
            <SelectItem
              key={classData.className}
              value={classData.className}
              className="py-2 text-base"
            >
              {classData.className}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ChooseTeacherClasses;
