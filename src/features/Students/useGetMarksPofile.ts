import { getMarksProfile } from "@/services/apiMarks";
import { StudentMarksBranchesTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface GetMarkProfileTypes {
  message: StudentMarksBranchesTypes;
}

export const useGetMarksProfile = function (
  studentId: number,
  semester: string,
) {
  const { data, isLoading: isGettingMarks } = useQuery<GetMarkProfileTypes>({
    queryKey: ["marksProfile", studentId, semester],
    queryFn: () => getMarksProfile({ student_id: studentId, semester }),
  });

  return { marks: data?.message, isGettingMarks };
};
