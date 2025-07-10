import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import ChooseSemester from "./ChooseSemester";
import ChooseTeacherClass from "./ChooseTeacherClass";
import ChooseType from "./ChooseType";
import GetEmptySheetButton from "./GetEmptySheetButton";

function GetEmptySheet() {
  return (
    <div className="flex flex-col items-start justify-center gap-8 rounded-xl border border-gray-200 bg-white px-6 py-10 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center justify-center rounded-xl bg-green-100 p-3 text-green-600">
          <PiMicrosoftExcelLogoLight className="h-9 w-9" />
        </span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h3 className="text-xl font-bold text-gray-900">
            Empty Excel Sheet Template
          </h3>
          <p className="text-sm text-gray-600">
            Choose Class, Semester and type to get the Template.
          </p>
        </div>
      </div>
      <ChooseTeacherClass />
      <ChooseSemester />
      <ChooseType />
      <GetEmptySheetButton />
    </div>
  );
}

export default GetEmptySheet;
