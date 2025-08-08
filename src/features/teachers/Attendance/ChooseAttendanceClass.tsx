import UiCardSection from "@/ui/UiCardSection";
import { HiSelector } from "react-icons/hi";
import ChooseTeacherClass from "../../../ui/ChooseTeacherClass";
import { setClassName, useAttendance } from "@/slices/AttendanceSlice";
import { useDispatch } from "react-redux";

function ChooseAttendanceClass() {
  const { className } = useAttendance();
  const dispatch = useDispatch();

  function defineClassName(value: string) {
    const splitedValue = value.split("_");
    dispatch(setClassName(splitedValue?.[1]));
  }

  return (
    <UiCardSection
      title="1. Choose Class"
      subTitle="Select a Class to see Students"
      icon={<HiSelector className="h-6 w-6" />}
      iconColor="text-rose-600"
      iconBackgroundColor="bg-rose-100"
    >
      <ChooseTeacherClass className={className} defineClass={defineClassName} />
    </UiCardSection>
  );
}

export default ChooseAttendanceClass;
