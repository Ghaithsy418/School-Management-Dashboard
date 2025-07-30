import UiCardSection from "@/ui/UiCardSection";
import { HiSelector } from "react-icons/hi";
import ChooseTeacherClass from "../marksManagement/ChooseTeacherClass";

function ChooseAttendanceClass() {
  return (
    <div className="col-start-2 col-end-3 row-start-1 row-end-2">
      <UiCardSection
        title="1. Choose Class"
        subTitle="Select a Class to see Students"
        icon={<HiSelector className="h-6 w-6" />}
        iconColor="text-rose-600"
        iconBackgroundColor="bg-rose-100"
      >
        <ChooseTeacherClass />
      </UiCardSection>
    </div>
  );
}

export default ChooseAttendanceClass;
