import { useUser } from "@/slices/userSlice";
import GetExamSchedule from "./GetExamSchedule";
import UploadExamSchedule from "./UploadExamSchedule";

function ExamSchedulesLayout() {
  const {
    user: { role },
  } = useUser();

  return (
    <div
      className={`grid w-full ${role === "supervisor" ? "grid-cols-[560px_560px]" : "grid-cols-[32rem]"} items-center justify-center gap-12 py-6`}
    >
      <GetExamSchedule />
      {role === "supervisor" && <UploadExamSchedule />}
    </div>
  );
}

export default ExamSchedulesLayout;
