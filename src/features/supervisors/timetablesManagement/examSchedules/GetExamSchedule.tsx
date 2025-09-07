import ChooseSemester from "@/features/teachers/marksManagement/ChooseSemester";
import {
  setGradeGetExam,
  setSemesterGetExam,
  setTypeGetExam,
  useGetExam,
} from "@/slices/examSlice";
import ChooseExamType from "@/ui/ChooseExamType";
import { useDispatch } from "react-redux";
import ExamSelectGrade from "./ExamSelectGrade";
import { GrSchedule } from "react-icons/gr";
import GetExamFileButton from "./GetExamFileButton";

function GetExamSchedule() {
  const { semester, type, grade } = useGetExam();
  const dispatch = useDispatch();

  return (
    <div className="row-start-1 row-end-3 flex h-full flex-col items-start justify-center gap-8 rounded-xl border border-gray-200 bg-white px-6 py-10 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-500 dark:bg-gray-900">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center justify-center rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-600 dark:text-purple-100">
          <GrSchedule className="h-7 w-7" />
        </span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
            Get Exam Schedule File
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Choose Class, Semester and type to get the Exam Schedule.
          </p>
        </div>
      </div>
      <ExamSelectGrade
        grade={grade}
        handleSelect={(value) => dispatch(setGradeGetExam(Number(value)))}
      />
      <ChooseSemester
        semester={semester}
        onSelect={(sem: string) => dispatch(setSemesterGetExam(sem))}
      />
      <ChooseExamType
        type={type}
        onClick={(theType: string) => dispatch(setTypeGetExam(theType))}
      />
      <GetExamFileButton />
    </div>
  );
}

export default GetExamSchedule;
