import { useUser } from "@/context/UserContext";
import { UserTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login } from "../../services/apiAuth";
import Cookies from "js-cookie";

export function useLogin() {
  const { dispatch } = useUser();
  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: mutateFnTypes) =>
      login({ email, password }),
    onSuccess: ({ token, data }: LoginResponse) => {
      Cookies.set("token", token, { ...cookieConfig, sameSite: "strict" });
      Cookies.set("userData", JSON.stringify(data.user), {
        ...cookieConfig,
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
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { loginMutation, isLoggingIn };
}

const cookieConfig = {
  secure: true,
  expires: 30,
};

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
