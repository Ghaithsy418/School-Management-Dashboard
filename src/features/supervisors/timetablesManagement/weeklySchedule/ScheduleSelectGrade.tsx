import { setGrade, useClassInfo } from "@/slices/weeklyScheduleSlice";
import Select from "@/ui/Select";
import UiCardSection from "@/ui/UiCardSection";
import { HiOutlineNumberedList } from "react-icons/hi2";
import { useDispatch } from "react-redux";

function ScheduleSelectGrade() {
  const { grade } = useClassInfo();
  const dispatch = useDispatch();

  function handleSelect(value: string) {
    dispatch(setGrade(Number(value)));
  }

  return (
    <UiCardSection
      icon={<HiOutlineNumberedList className="h-6.5 w-6.5" />}
      iconBackgroundColor="bg-pink-100"
      iconColor="text-pink-700"
      title="Choose Grade"
      subTitle="Choose a grade so you can select a class"
      shadow="shadow-xs hover:shadow-sm"
    >
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
    </UiCardSection>
  );
}

export default ScheduleSelectGrade;
