import { uploadExamFile } from "@/services/apiTimeTables";
import { useUser } from "@/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataTypes {
  schedule: File;
  semester: string;
  type: string;
  grade: number;
}

export const useUploadExamFile = function () {
  const { token } = useUser();
  const { mutate: uploadFileMutation, isPending: isUploadingFile } =
    useMutation({
      mutationFn: (data: DataTypes) => uploadExamFile(data, token),
      onSuccess: () => toast.success("File has been uploaded Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { uploadFileMutation, isUploadingFile };
};
