import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: ({ email, password }: mutateFnTypes) =>
      login({ email, password }),
    onSuccess: () => {
      toast.success("You have loged in Successfully!");
    },
    onError: (err: Error) => {
      toast.error(err.message);
      console.error(err);
    },
  });

  return { loginMutation, isPending };
}

type mutateFnTypes = {
  email: string;
  password: string;
};
