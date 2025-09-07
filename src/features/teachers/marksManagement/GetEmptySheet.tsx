import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import ChooseClassEmptyExcel from "./ChooseClassMarks";
import ChooseSemester from "./ChooseSemester";
import ChooseType from "../../../ui/ChooseExamType";
import GetEmptySheetButton from "./GetEmptySheetButton";
import GetPreviousExcelFiles from "./GetPreviousExcelFiles";
import { setSemester, setType, useMarks } from "@/slices/MarksManagementSlice";
import { useDispatch } from "react-redux";

function GetEmptySheet() {
  const { type, semester } = useMarks();
  const dispatch = useDispatch();

  function onClick(examType: string) {
    dispatch(setType(examType));
  }

  return (
    <div className="row-start-1 row-end-3 flex h-full w-[34rem] flex-col items-start justify-center gap-8 rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-500 dark:bg-gray-900">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center justify-center rounded-xl bg-green-100 p-3 text-green-600">
          <PiMicrosoftExcelLogoLight className="h-9 w-9" />
        </span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
            Empty Excel Sheet Template
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Choose Class, Semester and type to get the Template.
          </p>
        </div>
      </div>
      <ChooseClassEmptyExcel />
      <ChooseSemester
        semester={semester}
        onSelect={(sem: string) => dispatch(setSemester(sem))}
      />
      <ChooseType onClick={onClick} type={type} />
      <div className="flex w-full flex-col gap-4">
        <GetEmptySheetButton />
        <GetPreviousExcelFiles />
      </div>
    </div>
  );
}

export default GetEmptySheet;
