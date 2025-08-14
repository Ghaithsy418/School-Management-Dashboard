import { getTeachersAndSessions } from "@/services/apiTimeTables";
import { ScheduleTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface TeachersSessionsTypes {
  schedules: [Record<string, ScheduleTypes[]>];
}

export const useGetTeachersAndSessions = function (className: string) {
  const { data, isLoading: isGettingSessions } =
    useQuery<TeachersSessionsTypes>({
      queryKey: ["teachersAndSessions", className],
      queryFn: () => getTeachersAndSessions({ className }),
    });

  return { teachersSessions: data?.schedules, isGettingSessions };
};
