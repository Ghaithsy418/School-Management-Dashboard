import { checkJustifications } from "@/services/apiAttendance";
import { useQuery } from "@tanstack/react-query";

export const useCheckJustifications = function () {
  const { data, isLoading: isCheckingJustifications } = useQuery({
    queryKey: ["justifications"],
    queryFn: checkJustifications,
  });

  return { justifications: data?.data, isCheckingJustifications };
};
