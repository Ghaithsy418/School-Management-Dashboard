import AvatarGenerator from "../../ui/AvatarGenerator";
import Contact from "../../ui/Contact";
import { StudentTypes } from "../../utils/types";
import TableMenus from "./TableMenus";

function StudentsRow({ student }: { student: StudentTypes }) {
  const { name, id, address, GPA, grade } = student;
  return (
    <>
      <h3 className="flex items-center gap-3">
        <span>
          <AvatarGenerator name={name} />
        </span>
        {name}
      </h3>
      <p>{id}</p>
      <p>{address}</p>
      <p>{grade}</p>
      <p>{GPA}</p>
      <Contact />
      <TableMenus />
    </>
  );
}

export default StudentsRow;
