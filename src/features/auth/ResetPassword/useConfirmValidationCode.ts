import { useLoginUi } from "@/context/LoginUIs";
import { confirmVerificationCode } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

interface confirmTypes {
  email: string;
  verificationCode: number;
}

export const useConfirmValidationCode = function () {
  const { dispatch } = useLoginUi();
  const [tryCounts, setTryCounts] = useState(0);
  const { mutate: confirmMutation, isPending: isConfirming } = useMutation({
    mutationFn: ({ email, verificationCode }: confirmTypes) =>
      confirmVerificationCode({ email, verificationCode }),
    onSuccess: () => {
      toast.success("Verification Code is true");
      dispatch({ type: "changeUi", payload: 4 });
    },
    onError: () => {
      if (tryCounts === 5) {
        dispatch({ type: "changeUi", payload: 2 });
        setTryCounts(0);
        toast.error(
          "You must enter your Email again for receiving the code :(",
        );
      } else {
        setTryCounts((t) => t + 1);
        toast.error("Wrong Validation Code please try again!");
      }
    },
  });

  return { confirmMutation, isConfirming };
};
