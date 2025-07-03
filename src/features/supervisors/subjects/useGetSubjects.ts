import { showSubjects } from "@/services/apiSubjects";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetSubjects = function () {
  const [searchParams] = useSearchParams();
  const grade = Number(searchParams.get("grade") || 0);

  const { data, isLoading: isGettingSubjects } = useQuery({
    queryKey: ["subjects", grade],
    queryFn: showSubjects,
  });

  const subjects = data?.data?.filter(
    (subject: { grade: string }) => subject.grade === String(grade),
  );

  return { subjects, isGettingSubjects, grade };
};
