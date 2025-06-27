import AvatarGenerator from "../../ui/AvatarGenerator";
import Contact from "../../ui/Contact";
import { StudentTypes } from "../../utils/types";
import StudentsTableMenus from "./StudentsTableMenus";

function StudentsRow({ student }: { student: StudentTypes }) {
  const { full_name, student_id, gpa, class_name, phone, email } = student;
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
      <p>{gpa ?? "-"}</p>
      <Contact phone={phone} email={email} />
      <StudentsTableMenus name={full_name} />
    </>
  );
}

export default StudentsRow;
