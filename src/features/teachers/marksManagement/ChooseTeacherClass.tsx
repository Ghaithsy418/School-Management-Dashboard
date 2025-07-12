import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetTeacherClasses } from "../attendance/useGetTeacherClasses";
import { useDispatch } from "react-redux";
import { setClassId } from "@/slices/MarksManagementSlice";

function ChooseTeacherClass() {
  const { classes, isGettingClasses } = useGetTeacherClasses();
  const dispatch = useDispatch();

  return (
    <Select onValueChange={(e) => dispatch(setClassId(Number(e)))}>
      <SelectTrigger
        disabled={isGettingClasses}
        className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 disabled:cursor-not-allowed"
      >
        <SelectValue
          placeholder={
            isGettingClasses
              ? `Loading Classes...`
              : "Click to select a class..."
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
          {classes?.map((classData: { className: string; classId: number }) => (
            <SelectItem
              key={classData.className}
              value={String(classData.classId)}
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

export default ChooseTeacherClass;
