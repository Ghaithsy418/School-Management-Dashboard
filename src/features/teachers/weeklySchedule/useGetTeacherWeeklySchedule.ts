import { getTeacherWeeklySchedule } from "@/services/apiTimeTables";
import { ScheduleTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface WeeklyScheduleTypes {
  schedule: ScheduleTypes[];
}

export const useGetTeacherWeeklySchedule = function () {
  const {
    data,
    isLoading: isGettingSchedule,
    isError,
  } = useQuery<WeeklyScheduleTypes>({
    queryKey: ["myWeeklySchedule"],
    queryFn: getTeacherWeeklySchedule,
  });

  return { weeklySchedule: data?.schedule, isGettingSchedule, isError };
};
