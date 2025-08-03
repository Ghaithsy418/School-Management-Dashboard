import { useUser } from "@/slices/userSlice";
import AvatarGenerator from "../../ui/AvatarGenerator";
import Contact from "../../ui/Contact";
import { StudentTypes } from "../../utils/types";
import StudentsTableMenus from "./StudentsTableMenus";

function StudentsRow({ student }: { student: StudentTypes }) {
  const {
    user: { role },
  } = useUser();
  const {
    full_name,
    student_id,
    gpa,
    class_name,
    phone,
    email,
    user_id,
    absences_number,
  } = student;

  return (
    <>
      <h3 className="flex items-center gap-3">
        <span>
          <AvatarGenerator name={full_name} />
        </span>
        {full_name}
      </h3>
      <p>{student_id}</p>
      <p>{class_name === "" ? "-" : class_name}</p>
      {role !== "supervisor" && <p>{gpa ?? "-"}</p>}
      {role === "supervisor" && (
        <p>{absences_number ? 5 - absences_number : "-"}</p>
      )}
      <Contact phone={phone} email={email} />
      <StudentsTableMenus
        name={full_name}
        user_id={user_id}
        student_id={student_id}
      />
    </>
  );
}

export default StudentsRow;
