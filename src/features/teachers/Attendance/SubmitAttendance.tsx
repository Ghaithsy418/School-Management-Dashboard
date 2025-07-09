import { useAttendance } from "@/slices/AttendanceSlice";
import Button from "@/ui/Button";
import UiCardSection from "@/ui/UiCardSection";
import { Send } from "lucide-react";

function SubmitAttendance() {
  const { className, session, students } = useAttendance();

  return (
    <UiCardSection
      title="3. Submit Attendance"
      subTitle="submit attendance after choosing students"
      icon={<Send className="h-6 w-6" />}
      iconColor="text-purple-600"
      iconBackgroundColor="bg-purple-100"
    >
      <div className="place-self-end px-3">
        <Button
          disabled={!className || !session || students.length === 0}
          color="text-purple-50"
          backgroundColor="bg-purple-600"
          backgroundHover="hover:bg-purple-700"
        >
          Submit
        </Button>
      </div>
    </UiCardSection>
  );
}

export default SubmitAttendance;
