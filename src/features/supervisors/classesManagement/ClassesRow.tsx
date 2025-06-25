import { ClassTypes } from "@/utils/types";
import ClassesTableMenus from "./ClassesTableMenus";

function ClassesRow({ classData }: { classData: ClassTypes }) {
  return (
    <>
      <h4 className="font-semibold">{classData.className}</h4>
      <p>{classData.studentsNum}</p>
      <p>{classData.currentStudentNumber ?? "-"}</p>
      <ClassesTableMenus classData={classData} />
    </>
  );
}

export default ClassesRow;
