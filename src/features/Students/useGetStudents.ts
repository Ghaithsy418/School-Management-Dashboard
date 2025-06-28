import { showStudents, showTeacherStudents } from "@/services/apiStudents";
import { useUser } from "@/slices/userSlice";
import { StudentTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetStudents = function () {
  const {
    user: { role },
  } = useUser();
  const [searchParams] = useSearchParams();
  const {
    data,
    isLoading: isGettingStudents,
    error: studentsError,
  } = useQuery({
    queryKey: ["students"],
    queryFn: () => {
      if (role !== "teacher") return showStudents();
      else return showTeacherStudents();
    },
  });

  if (role !== "teacher") {
    const searchQuery = searchParams.get("search") || "";
    const searchedStudents =
      searchQuery === ""
        ? data?.data
        : data?.data?.filter((student: { full_name: string }) =>
            student?.full_name.toLowerCase().includes(searchQuery),
          );

    return {
      students: searchedStudents,
      isGettingStudents,
      studentsError,
    };
  } else {
    const students =
      data?.data?.flatMap(
        (classItem: { students: StudentTypes }) => classItem.students,
      ) ?? [];

    const searchQuery = searchParams.get("search") || "";
    const searchedStudents =
      searchQuery === ""
        ? students
        : students?.filter((student: { full_name: string }) =>
            student?.full_name.toLowerCase().includes(searchQuery),
          );

    return {
      students: searchedStudents,
      isGettingStudents,
      studentsError,
    };
  }
};
