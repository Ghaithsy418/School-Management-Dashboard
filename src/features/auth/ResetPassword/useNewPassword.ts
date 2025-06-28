import { newPassword } from "@/services/apiAuth";
import { changeUi } from "@/slices/loginUiSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface newPasswordTypes {
  email: string;
  password: string;
}

export const useNewPassword = function () {
  const dispatch = useDispatch();
  const { mutate: newPasswordMutation, isPending: isChangingPassword } =
    useMutation({
      mutationFn: (data: newPasswordTypes) => newPassword(data),
      onSuccess: () => {
        toast.success("Password changed successfully");
        dispatch(changeUi(1));
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { newPasswordMutation, isChangingPassword };
};
