import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendResetPassword } from "../../../services/apiAuth";
import { useDispatch } from "react-redux";
import { changeUi } from "@/slices/loginUiSlice";

export function useSendResetPassword() {
  const dispatch = useDispatch();
  const { mutate: resetMutation, isPending: isResending } = useMutation({
    mutationFn: ({ email }: { email: string }) => sendResetPassword({ email }),
    onSuccess: () => {
      toast.success("Verification code is sent successfully");
      dispatch(changeUi(3));
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { resetMutation, isResending };
}
