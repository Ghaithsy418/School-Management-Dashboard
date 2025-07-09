import { useClientTransform } from "@/hooks/useClientTransform";
import { showClasses } from "@/services/apiClasses";
import { ClassTypes } from "@/utils/types";
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

  const finalClasses = useClientTransform(classes?.data, "className");

  return {
    classes: finalClasses as ClassTypes[],
    isGettingClasses,
    classesError,
  };
};
