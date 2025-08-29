import { teacherStatistics } from "@/services/apiGeneral";
import { useQuery } from "@tanstack/react-query";

interface InfosTypes {
  sessionCount: string;
  teacherClassesCount: string;
  teacherStudentCount: string;
  userCreatedAT: string;
}

export const useGetTeacherStatistics = function () {
  const { data: infos, isLoading: isGettingInfos } = useQuery<InfosTypes>({
    queryKey: ["teacherInfos"],
    queryFn: teacherStatistics,
  });

  return { infos, isGettingInfos };
};
