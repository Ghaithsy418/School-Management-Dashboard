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
import UiCardSection from "@/ui/UiCardSection";

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
    <UiCardSection
      title="Choose Grade"
      subTitle="Select to see subjects"
      icon={<FaGraduationCap className="h-6 w-6" />}
      iconColor="text-blue-600"
      iconBackgroundColor="bg-blue-100"
    >
      <div className="pb-2">
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
    </UiCardSection>
  );
}

export default ChooseGrade;
