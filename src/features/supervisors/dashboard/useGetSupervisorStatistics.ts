import { supervisorStatistics } from "@/services/apiGeneral";
import { useQuery } from "@tanstack/react-query";

interface InfosTypes {
  studentsNumber: string;
  teachersNumber: string;
  classesNumber: string;
  userCreatedAT: string;
}

export const useGetSupervisorStatistics = function () {
  const { data: infos, isLoading: isGettingInfos } = useQuery<InfosTypes>({
    queryKey: ["supervisorStats"],
    queryFn: supervisorStatistics,
  });

  return { infos, isGettingInfos };
};
