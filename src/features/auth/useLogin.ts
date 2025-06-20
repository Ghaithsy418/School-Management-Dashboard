import { useUser } from "@/context/UserContext";
import { UserTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../../services/apiAuth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: mutateFnTypes) =>
      login({ email, password }),
    onSuccess: ({ token, data }: LoginResponse) => {
      Cookies.set("token", token, { secure: true, sameSite: "strict" });
      Cookies.set("userData", JSON.stringify(data.user), {
        secure: true,
        sameSite: "strict",
      });
      dispatch({
        type: "setUserData",
        payload: {
          user: data.user,
          token: token,
        },
      });
      toast.success("You have loged in Successfully!");
      navigate("/", { replace: true });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { loginMutation, isLoggingIn };
}

interface LoginResponse {
  token: string;
  data: UserObjectTypes;
}

interface UserObjectTypes {
  user: UserTypes;
}

type mutateFnTypes = {
  email: string;
  password: string;
};
