import { getExamSchedule } from "@/services/apiTimeTables";
import { useGetExam } from "@/slices/examSlice";
import Button from "@/ui/Button";
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
      onSuccess: (data: { schedule: string }) => {
        if (data?.schedule)
          toast(() => (
            <div className="flex flex-col items-start justify-center gap-4">
              <h4 className="text-lg font-bold">
                Exam Schedule for Grade ({grade}) | Type ({type}) | Semester (
                {semester})
              </h4>
              <div className="flex items-center justify-center gap-4 place-self-end">
                <Button
                  color="text-rose-50"
                  backgroundColor="bg-rose-600"
                  backgroundHover="hover:bg-rose-700"
                  onClick={() => downloadFile(data.schedule)}
                >
                  Download
                </Button>
                {/* <a
                  href={`/pdfViewer/${data.schedule.replace("http://127.0.0.1:8000/storage/exam_schedule/", "")}`}
                  target="_blank"
                  className="flex min-w-22 cursor-pointer items-center justify-center rounded-md bg-transparent px-4 py-2 shadow-md shadow-gray-600/20 outline-1 outline-gray-400 transition-all duration-300 hover:shadow-lg active:shadow-sm disabled:cursor-not-allowed"
                >
                  Preview
                </a> */}
              </div>
            </div>
          ));
      },
      onError: (err) => toast.error(err.message),
    });

  return { getExamScheduleMutation, isGettingExamSchedule };
};
