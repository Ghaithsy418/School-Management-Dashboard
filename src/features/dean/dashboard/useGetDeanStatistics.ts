import { deanStatistics } from "@/services/apiGeneral";
import { useQuery } from "@tanstack/react-query";

interface InfosTypes {
  students: string;
  teachers: string;
  others: string;
  supervisors: string;
}

export const useGetDeanStatistics = function () {
  const { data: infos, isLoading: isGettingInfos } = useQuery<InfosTypes>({
    queryKey: ["deanStats"],
    queryFn: deanStatistics,
  });

  return { infos, isGettingInfos };
};
