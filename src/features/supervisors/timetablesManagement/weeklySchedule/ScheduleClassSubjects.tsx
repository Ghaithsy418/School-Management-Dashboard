import { useClassInfo, useCurrentCell } from "@/slices/weeklyScheduleSlice";
import { useGetSubjects } from "../../subjects/useGetSubjects";
import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ClassSubjectsTypes {
  setSubject: Dispatch<SetStateAction<string>>;
}

function ScheduleClassSubjects({ setSubject }: ClassSubjectsTypes) {
  const { subjects, isGettingSubjects } = useGetSubjects(true);
  const currentCell = useCurrentCell();
  const { grade, className } = useClassInfo();

  const filteredSubjects = subjects?.filter(
    (subject) => subject.grade === String(grade),
  );

  function selectPlaceholder() {
    if (isGettingSubjects) return "Loading Subjects...";
    if (filteredSubjects?.length === 0) return "No Subjects could be found";
    else return currentCell?.subject || "Select a Subject!";
  }

  return (
    <div>
      <label className="mb-3 ml-2 block text-sm font-bold text-gray-700">
        Subject
      </label>
      <Select onValueChange={setSubject} value={currentCell?.subject}>
        <SelectTrigger className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">
          <SelectValue placeholder={selectPlaceholder()} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{className} Subjects</SelectLabel>
            {grade !== 0 && (
              <SelectItem value="removeSubject" className="py-2 text-base">
                Remove Subject
              </SelectItem>
            )}
            {filteredSubjects?.map((subject) => (
              <SelectItem
                key={subject.id}
                value={subject.subjectName}
                className="py-2 text-base"
              >
                {subject.subjectName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ScheduleClassSubjects;
