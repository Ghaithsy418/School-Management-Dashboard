import { useLoginUi } from "@/context/LoginUIs";
import { newPassword } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface newPasswordTypes {
  email: string;
  password: string;
}

export const useNewPassword = function () {
  const { dispatch } = useLoginUi();
  const { mutate: newPasswordMutation, isPending: isChangingPassword } =
    useMutation({
      mutationFn: (data: newPasswordTypes) => newPassword(data),
      onSuccess: () => {
        toast.success("Password changed successfully");
        dispatch({ type: "changeUi", payload: 1 });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { newPasswordMutation, isChangingPassword };
};
