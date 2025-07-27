import { useParams } from "react-router-dom";
import ProfileMap from "./ProfileMap";
import StudentProfile from "./StudentProfile";
import { useGetStudent } from "./useGetStudent";
import Empty from "@/ui/Empty";
import Spinner from "@/ui/Spinner";
import MarksProfile from "./MarksProfile";
import { useRef } from "react";

function StudentDetails() {
  const { id } = useParams();
  const { student, isGettingStudent, isError } = useGetStudent(Number(id));
  const informationsRef = useRef<HTMLDivElement | null>(null);
  const marksRef = useRef<HTMLDivElement | null>(null);

  if (isGettingStudent)
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    );
  if (isError || !student) return <Empty resource="student" />;

  return (
    <div className="grid grid-cols-[1fr_80px] grid-rows-[70vh_1fr_1fr] gap-x-5 gap-y-16 py-2">
      <StudentProfile informationsRef={informationsRef} student={student} />
      <MarksProfile marksRef={marksRef} />
      <ProfileMap informationsRef={informationsRef} marksRef={marksRef} />
    </div>
  );
}

export default StudentDetails;
