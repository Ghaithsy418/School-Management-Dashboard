import { useUser } from "@/context/UserContext";
import { showClasses } from "@/services/apiClasses";
import { useQuery } from "@tanstack/react-query";

export const useGetClasses = function () {
  const { token } = useUser();
  const {
    data: classes,
    isLoading: isGettingClasses,
    error: classesError,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: () => showClasses(token),
  });

  return { classes: classes?.data, isGettingClasses, classesError };
};
