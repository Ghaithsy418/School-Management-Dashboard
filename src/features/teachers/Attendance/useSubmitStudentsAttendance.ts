import { submitStudentsAttendance } from "@/services/apiAttendance";
import { clearAll } from "@/slices/AttendanceSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface DataTypes {
  session: number;
  students: { studentId: number }[];
}

export const useSubmitStudentsAttendance = function () {
  const dispatch = useDispatch();
  const {
    mutate: submitAttendanceMutation,
    isPending: isSubmittingAttendance,
  } = useMutation({
    mutationFn: (data: DataTypes) => submitStudentsAttendance(data),
    onSuccess: () => {
      toast.success("Attendance has been submitted Successfully!");
      dispatch(clearAll());
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { submitAttendanceMutation, isSubmittingAttendance };
};
