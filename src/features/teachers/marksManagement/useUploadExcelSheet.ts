import { uploadExcelSheet } from "@/services/apiMarks";
import { useUser } from "@/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUploadExcelSheet = function () {
  const { token } = useUser();
  const { mutate: uploadExcelMutation, isPending: isUploadingExcel } =
    useMutation({
      mutationFn: (data: { excel_file: File }) => uploadExcelSheet(data, token),
      onSuccess: () => toast.success("Excel has been uploaded Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { uploadExcelMutation, isUploadingExcel };
};
