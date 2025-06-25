import { ClassTypes } from "@/utils/types";
import EditClass from "./EditClass";

function ClassesRow({ classData }: { classData: ClassTypes }) {
  return (
    <>
      <h4 className="font-semibold">{classData.className}</h4>
      <p>{classData.studentsNum}</p>
      <p>{classData.currentStudentNumber}</p>
      <EditClass classData={classData} />
    </>
  );
}

export default ClassesRow;
