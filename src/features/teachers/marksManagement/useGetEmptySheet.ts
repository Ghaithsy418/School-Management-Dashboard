import { getEmptySheet } from "@/services/apiMarks";
import { useMarks } from "@/slices/MarksManagementSlice";
import { downloadFile } from "@/utils/donwloadFile";
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
