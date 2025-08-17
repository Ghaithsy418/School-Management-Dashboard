import ChooseSemester from "@/features/teachers/marksManagement/ChooseSemester";
import {
  setGradeUploadExam,
  setSemesterUploadExam,
  setTypeUploadExam,
  useUploadExam,
} from "@/slices/examSlice";
import ChooseExamType from "@/ui/ChooseExamType";
import { useDispatch } from "react-redux";
import ExamSelectGrade from "./ExamSelectGrade";
import { Upload } from "lucide-react";
import UploadExamFileButton from "./UploadExamFileButton";

function UploadExamSchedule() {
  const { semester, type, grade } = useUploadExam();
  const dispatch = useDispatch();

  return (
    <div className="row-start-1 row-end-3 flex h-full flex-col items-start justify-center gap-8 rounded-xl border border-gray-200 bg-white px-6 py-10 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center justify-center rounded-xl bg-red-100 p-3 text-red-600">
          <Upload className="h-7 w-7" />
        </span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h3 className="text-xl font-bold text-gray-900">
            Upload Exam Schedule
          </h3>
          <p className="text-sm text-gray-600">
            Choose Class, Semester and type then Upload you file.
          </p>
        </div>
      </div>
      <ExamSelectGrade
        grade={grade}
        handleSelect={(value) => dispatch(setGradeUploadExam(Number(value)))}
      />
      <ChooseSemester
        semester={semester}
        onSelect={(sem: string) => dispatch(setSemesterUploadExam(sem))}
      />
      <ChooseExamType
        type={type}
        onClick={(theType: string) => dispatch(setTypeUploadExam(theType))}
      />
      <UploadExamFileButton />
    </div>
  );
}

export default UploadExamSchedule;
