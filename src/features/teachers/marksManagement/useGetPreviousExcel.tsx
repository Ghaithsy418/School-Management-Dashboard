import { getPreviousExcel } from "@/services/apiMarks";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ShowPreviousExcel from "./ShowPreviousExcel";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";

interface DataTypes {
  file_name: string;
  url: string;
  uploaded_at: string;
}

export const useGetPreviousExcel = function () {
  const { mutate: previousExcelMutation, isPending: isGettingPreviousExcel } =
    useMutation({
      mutationFn: (data: { classId: number }) => getPreviousExcel(data),
      onSuccess: (data: { message: DataTypes[] }) => {
        const actualData = data?.message;
        toast.success(
          () => (
            <div className="flex flex-col items-start justify-center gap-4">
              <h5 className="text-lg font-bold">
                {actualData?.length && actualData?.length !== 0
                  ? `${actualData.length} files found:`
                  : "Didn't find any file :("}
              </h5>
              {actualData?.map((file) => (
                <ShowPreviousExcel file={file} />
              ))}
            </div>
          ),
          {
            style: {
              alignItems: "flex-start",
              minWidth: "600px",
              paddingRight: 0,
            },
            icon: (
              <PiMicrosoftExcelLogoLight className="-mr-12 h-9 w-9 text-green-500" />
            ),
          },
        );
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { previousExcelMutation, isGettingPreviousExcel };
};
