import { getExamSchedule } from "@/services/apiTimeTables";
import { useGetExam } from "@/slices/examSlice";
import { downloadFile } from "@/utils/donwloadFile";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataTypes {
  grade: number;
  type: string;
  semester: string;
}

export const useGetExamSchedule = function () {
  const { grade, type, semester } = useGetExam();

  const { mutate: getExamScheduleMutation, isPending: isGettingExamSchedule } =
    useMutation({
      mutationFn: (data: DataTypes) => getExamSchedule(data),
      onSuccess: (pdfBlob: Blob) => {
        const pdfUrl = URL.createObjectURL(pdfBlob);
        toast(() => (
          <div className="flex flex-col items-start justify-center gap-4">
            <h4 className="text-lg font-bold">
              Schedule Ready for Grade ({grade})
            </h4>
            <p className="text-sm">
              Your exam schedule for {semester} ({type}) is ready to view.
            </p>
            <div className="flex items-center justify-center gap-4 place-self-end">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-md bg-purple-700 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-purple-800 hover:shadow-lg"
              >
                Preview
              </a>
              <button
                onClick={() => downloadFile(pdfUrl)}
                className="cursor-pointer rounded-md border border-gray-300 bg-transparent px-4 py-2 shadow-sm transition-all duration-300 hover:bg-gray-100 dark:border-gray-500 hover:dark:bg-gray-500"
              >
                Download
              </button>
            </div>
          </div>
        ));
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { getExamScheduleMutation, isGettingExamSchedule };
};
