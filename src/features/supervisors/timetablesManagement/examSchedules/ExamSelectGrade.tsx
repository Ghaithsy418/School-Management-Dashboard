import Select from "@/ui/Select";

interface ExamGradeTypes {
  handleSelect: (value: string) => void;
  grade: number;
}

function ExamSelectGrade({ handleSelect, grade }: ExamGradeTypes) {
  return (
    <Select
      options={Array.from({ length: 12 }, (_, i) => ({
        value: `${i + 1}`,
        title: `Grade ${i + 1}`,
      }))}
      onSelect={(value) => handleSelect(value)}
      placeholder="Select a grade"
      value={String(grade)}
      width="w-full"
    />
  );
}

export default ExamSelectGrade;
