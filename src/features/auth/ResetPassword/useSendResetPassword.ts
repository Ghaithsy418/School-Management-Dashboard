import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendResetPassword } from "../../../services/apiAuth";
import { useLoginUi } from "../../../context/LoginUIs";

export function useSendResetPassword() {
  const { dispatch } = useLoginUi();
  const { mutate: resetMutation, isPending: isResending } = useMutation({
    mutationFn: ({ email }: { email: string }) => sendResetPassword({ email }),
    onSuccess: () => {
      toast.success("Verification code is sent successfully");
      dispatch({
        type: "changeUi",
        payload: 3,
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { resetMutation, isResending };
}
