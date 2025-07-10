import { getEmptySheet } from "@/services/apiMarks";
import { useMarks } from "@/slices/MarksSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useGetEmptySheet = function () {
  const { classId, semester, type } = useMarks();
  const { mutate: getEmptySheetMutation, isPending: isGettingEmptySheet } =
    useMutation({
      mutationFn: () => getEmptySheet({ classId, semester, type }),
      onSuccess: (data: { file_url: string }) => {
        toast.success("Download will start soon!");
        downloadFile(data.file_url);
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { getEmptySheetMutation, isGettingEmptySheet };
};

const downloadFile = function (url: string) {
  const link = document.createElement("a");
  link.href = url;

  const urlParts = url.split("/");
  link.download = urlParts[urlParts.length - 1] || "ExcelSheetTemplate";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
