import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaGraduationCap } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function ChooseGrade() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGrade = searchParams.get("grade");
  const [selectedGrade, setSelectedGrade] = useState<string | null>(
    initialGrade,
  );

  function handleChange(value: string) {
    const gradeNumber = String(Number(value) + 1);
    setSelectedGrade(gradeNumber);
    searchParams.set("grade", gradeNumber);
    setSearchParams(searchParams);
  }

  const selectValue = selectedGrade
    ? String(Number(selectedGrade) - 1)
    : undefined;

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white pt-3 shadow-md ring-1 ring-gray-900/5 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4 bg-gray-50 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <FaGraduationCap className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Choose Grade</h3>
          <p className="text-sm text-gray-500">Select to see subjects</p>
        </div>
      </div>

      <div className="p-5">
        <Select onValueChange={handleChange} value={selectValue}>
          <SelectTrigger className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">
            <SelectValue placeholder="Click to select a grade..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Academic Level</SelectLabel>
              {Array.from({ length: 12 }, (_, index) => (
                <SelectItem
                  key={index}
                  value={String(index)}
                  className="py-2 text-base"
                >
                  Grade {index + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ChooseGrade;
