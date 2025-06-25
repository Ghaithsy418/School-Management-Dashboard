import { useUser } from "@/context/UserContext";
import { createClass } from "@/services/apiClasses";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateClass = function () {
  const { token } = useUser();
  const { mutate: createClassMutation, isPending: isCreatingClass } =
    useMutation({
      mutationFn: (data: { className: string; studentsNum: number }) =>
        createClass(data, token),
      onSuccess: () =>
        toast.success("The class has been created Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { createClassMutation, isCreatingClass };
};
