import { getTeacherClasses } from "@/services/apiAttendance";
import { useQuery } from "@tanstack/react-query";

export const useGetTeacherClasses = function () {
  const { data, isLoading: isGettingClasses } = useQuery({
    queryKey: ["theTeacherClasses"],
    queryFn: getTeacherClasses,
  });

  return { classes: data?.data, isGettingClasses };
};
