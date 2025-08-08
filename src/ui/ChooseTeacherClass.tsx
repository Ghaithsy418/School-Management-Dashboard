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

interface ChooseClassTypes {
  className: string;
  defineClass: (value: string) => void;
}

function ChooseTeacherClass({ className, defineClass }: ChooseClassTypes) {
  const { classes, isGettingClasses } = useGetTeacherClasses();

  return (
    <Select onValueChange={(e) => defineClass(e)}>
      <SelectTrigger
        disabled={isGettingClasses}
        className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 disabled:cursor-not-allowed"
      >
        <SelectValue
          placeholder={
            isGettingClasses
              ? `Loading Classes...`
              : className !== ""
                ? className
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
          {classes?.map(
            (classData: { className: string; class_id: number }) => (
              <SelectItem
                key={classData.className}
                value={String(classData.class_id) + "_" + classData.className}
                className="py-2 text-base"
              >
                {classData.className}
              </SelectItem>
            ),
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ChooseTeacherClass;
