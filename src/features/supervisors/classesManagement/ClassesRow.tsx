import { useClassesUi } from "@/slices/classesUiSlice";
import { ClassTypes } from "@/utils/types";
import ChooseClass from "./ChooseClass";
import ClassesTableMenus from "./ClassesTableMenus";
import CurrentStudentNum from "./CurrentStudentNum";

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
      {ui === "chooseClass" ||
      ui === "chooseStudent" ||
      ui === "chooseTeacher" ||
      ui === "chooseClassForTeacher" ? (
        <ChooseClass className={classData.className} classId={classData.id} />
      ) : (
        <ClassesTableMenus classData={classData} />
      )}
    </>
  );
}

export default ClassesRow;
