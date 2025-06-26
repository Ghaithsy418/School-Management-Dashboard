import { showClasses } from "@/services/apiClasses";
import { useQuery } from "@tanstack/react-query";

export const useGetClasses = function () {
  const {
    data: classes,
    isLoading: isGettingClasses,
    error: classesError,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: () => showClasses(),
  });

  return { classes: classes?.data, isGettingClasses, classesError };
};
