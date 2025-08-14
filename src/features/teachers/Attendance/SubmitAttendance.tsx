import { useAttendance } from "@/slices/AttendanceSlice";
import Button from "@/ui/Button";
import UiCardSection from "@/ui/UiCardSection";
import { Send } from "lucide-react";
import { useSubmitStudentsAttendance } from "./useSubmitStudentsAttendance";

function SubmitAttendance() {
  const { className, session, students } = useAttendance();
  const { submitAttendanceMutation, isSubmittingAttendance } =
    useSubmitStudentsAttendance();

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
          onClick={() =>
            submitAttendanceMutation({ session, students, className })
          }
          disabled={!className || !session}
          color="text-purple-50"
          backgroundColor="bg-purple-600"
          backgroundHover="hover:bg-purple-700"
        >
          {isSubmittingAttendance ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </UiCardSection>
  );
}

export default SubmitAttendance;
