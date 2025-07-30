import { getClassMarks } from "@/services/apiMarks";
import { useMarks } from "@/slices/MarksManagementSlice";
import { ClassMarkTypes, StudentMarksBranchesTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface GetClassMarksTypes {
  message: StudentMarksBranchesTypes<ClassMarkTypes>;
}

export const useGetClassMarks = function (semester: string) {
  const { classId } = useMarks();
  const { data, isLoading: isGettingMarks } = useQuery<GetClassMarksTypes>({
    queryKey: ["classMarks", classId, semester],
    queryFn: () => getClassMarks({ class_id: classId, semester }),
  });

  return { marks: data?.message, isGettingMarks };
};
