import {
  clearScheduleCompletely,
  setClass,
  useClassInfo,
} from "@/slices/weeklyScheduleSlice";
import Select from "@/ui/Select";
import UiCardSection from "@/ui/UiCardSection";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useGetClasses } from "../../classesManagement/useGetClasses";

function ScheduleSelectClass() {
  const { classes, isGettingClasses } = useGetClasses();
  const { grade, className } = useClassInfo();
  const dispatch = useDispatch();

  const filteredClasses = classes?.filter(
    (classData: { className: string }) =>
      classData.className.split("-")[0] === String(grade),
  );

  function handleSelect(value: string) {
    const choosenClass = filteredClasses?.find(
      (classData: { className: string; id: number }) =>
        classData.className === value,
    );

    if (choosenClass)
      dispatch(
        setClass({
          className: choosenClass.className,
          classId: choosenClass.id,
        }),
      );
    dispatch(clearScheduleCompletely());
  }

  return (
    <UiCardSection
      title="Choose Class"
      subTitle="Choose a class to start creating it's Schedule!"
      icon={<HiOutlineChevronUpDown className="h-6 w-6" />}
      iconBackgroundColor="bg-indigo-100"
      iconColor="text-indigo-700"
      shadow="shadow-xs hover:shadow-sm"
    >
      <Select
        options={filteredClasses?.map(
          (classData: { className: string; id: number }) => ({
            value: classData.className,
            title: `Class ${classData.className}`,
          }),
        )}
        onSelect={(value) => handleSelect(value)}
        placeholder={
          isGettingClasses
            ? "Loading Classes..."
            : !grade
              ? "<-- Select Grade First"
              : !filteredClasses?.length
                ? "There are no Classes"
                : "Select a class"
        }
        width="w-full"
        disabled={isGettingClasses || !grade || !filteredClasses?.length}
        value={className}
      />
    </UiCardSection>
  );
}

export default ScheduleSelectClass;
