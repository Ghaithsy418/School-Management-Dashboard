import MarksProfile from "@/features/students/MarksProfile";
import SelectClassFirst from "@/features/teachers/attendance/SelectClassFirst";
import ChooseClassMarks from "@/features/teachers/marksManagement/ChooseClassMarks";
import ClassesMarksLayout from "@/features/teachers/marksManagement/classesMarks/ClassesMarksLayout";
import { useMarks } from "@/slices/MarksManagementSlice";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ClassesMarks() {
  const navigate = useNavigate();
  const { classId } = useMarks();
  const [selectedSemester, setSelectedSemester] = useState("");

  return (
    <div className="flex flex-col justify-center gap-5 px-10 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-5">
          <button onClick={() => navigate("/teacher/marks")}>
            <IoIosArrowRoundBack className="h-10 w-10 cursor-pointer transition-all duration-300 hover:text-indigo-600" />
          </button>
          <h2 className="text-4xl font-bold">Classes Marks</h2>
        </div>
        <div className="mt-2 w-72">
          <ChooseClassMarks />
        </div>
      </div>
      <div className="py-6">
        {classId ? (
          <MarksProfile
            needTitle={false}
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
          >
            <ClassesMarksLayout semester={selectedSemester} />
          </MarksProfile>
        ) : (
          <SelectClassFirst />
        )}
      </div>
    </div>
  );
}

export default ClassesMarks;
