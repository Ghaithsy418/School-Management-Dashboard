import { setUserData } from "@/slices/userSlice";
import { UserTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/apiAuth";

export function useLogin() {
  const dispatch = useDispatch();
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
      dispatch(setUserData({ user: data.user, token, detectTheme: false }));
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
