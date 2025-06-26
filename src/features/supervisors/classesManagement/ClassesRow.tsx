import { ClassTypes } from "@/utils/types";
import ClassesTableMenus from "./ClassesTableMenus";
import CurrentStudentNum from "./CurrentStudentNum";
import { useClassesUi } from "@/context/ClassesUi";
import ChooseClass from "./AssignStudentAndTeacher/ChooseClass";

function ClassesRow({ classData }: { classData: ClassTypes }) {
  const { className, studentsNum, currentStudentNumber } = classData;
  const { ui } = useClassesUi();
  return (
    <>
      <h4 className="font-semibold">{className}</h4>
      <p>{studentsNum}</p>
      <CurrentStudentNum
        currentStudentNumber={currentStudentNumber}
        size={studentsNum}
      />
      {ui === "chooseClass" || ui === "chooseStudent" ? (
        <ChooseClass className={classData.className} />
      ) : (
        <ClassesTableMenus classData={classData} />
      )}
    </>
  );
}

export default ClassesRow;
