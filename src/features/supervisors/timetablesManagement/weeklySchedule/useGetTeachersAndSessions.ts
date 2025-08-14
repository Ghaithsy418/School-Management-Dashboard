import { getTeachersAndSessions } from "@/services/apiTimeTables";
import { useQuery } from "@tanstack/react-query";

export const useGetTeachersAndSessions = function (className: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["teachersAndSessions", className],
    queryFn: () => getTeachersAndSessions({ className }),
  });

  return { teachersSessions: data?.schedules, isLoading };
};
