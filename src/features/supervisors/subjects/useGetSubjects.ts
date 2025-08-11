import { showSubjects } from "@/services/apiSubjects";
import { SubjectTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetSubjects = function (withoutQuery?: boolean) {
  const [searchParams] = useSearchParams();
  const grade = Number(searchParams.get("grade") || 0);

  interface SubjectsTypes {
    data: SubjectTypes[];
  }

  const { data, isLoading: isGettingSubjects } = useQuery<SubjectsTypes>({
    queryKey: ["subjects"],
    queryFn: showSubjects,
  });

  const subjects = data?.data?.filter(
    (subject) => subject.grade === String(grade),
  );

  return { subjects: withoutQuery ? data?.data : subjects, isGettingSubjects };
};
