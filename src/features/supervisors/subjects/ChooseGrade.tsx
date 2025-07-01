import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

function ChooseGrade() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handelChange(e: string) {
    searchParams.set("grade", String(Number(e) + 1));
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-start gap-5 p-12">
      <h3 className="text-2xl font-semibold">Grades:</h3>
      <Select onValueChange={(e) => handelChange(e)}>
        <SelectTrigger className="!h-10 w-[22rem] !border-gray-700/60 !text-gray-900">
          <SelectValue placeholder="Select a Grade" className="text-gray-900" />
        </SelectTrigger>
        <SelectContent className="!bg-indigo-50">
          <SelectGroup>
            <SelectLabel className="text-gray-900">Grades</SelectLabel>
            {Array.from({ length: 12 }, (_, index) => (
              <SelectItem className="hover:!bg-gray-50" value={String(index)}>
                {index + 1}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ChooseGrade;
