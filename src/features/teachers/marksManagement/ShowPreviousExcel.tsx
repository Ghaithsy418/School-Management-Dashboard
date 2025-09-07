import { downloadFile } from "@/utils/donwloadFile";
import { format } from "date-fns";

interface PreviousExcelTypes {
  file: {
    file_name: string;
    url: string;
    uploaded_at: string;
  };
}

function ShowPreviousExcel({ file }: PreviousExcelTypes) {
  const { file_name, url, uploaded_at } = file;
  return (
    <div className="flex w-full items-center justify-between gap-10">
      <div className="flex items-end gap-2">
        <p className="font-semibold">{file_name}</p>
        <span className="text-xs font-light text-gray-800/80 dark:text-gray-300/80">
          {format(uploaded_at, "dd/MM/yyyy")}
        </span>
      </div>
      <button
        onClick={() => downloadFile(url)}
        className="cursor-pointer rounded-md bg-green-100 px-3 py-2 text-green-700 transition-colors duration-300 hover:bg-green-200"
      >
        Download
      </button>
    </div>
  );
}

export default ShowPreviousExcel;
