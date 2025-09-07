import { Upload } from "lucide-react";
import ExportSheetButton from "./ExportSheetButton";

function ExportSheet() {
  return (
    <div className="flex flex-col items-start justify-center gap-8 rounded-xl border border-gray-200 bg-white px-6 pt-10 pb-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-500 dark:bg-gray-900">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center justify-center rounded-xl bg-rose-100 p-3 text-rose-600">
          <Upload className="h-7 w-7" />
        </span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
            Upload Excel Sheet
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload the sheet to store the students Marks.
          </p>
        </div>
      </div>
      <ExportSheetButton />
    </div>
  );
}

export default ExportSheet;
