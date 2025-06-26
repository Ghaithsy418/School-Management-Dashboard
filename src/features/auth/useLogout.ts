import { useUser } from "@/context/UserContext";
import { logout } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogout = function () {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const { mutate: logoutMutation, isPending: isLoggingOut } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      navigate("/login", { replace: true });
      setTimeout(function () {
        toast.success("You have loged out Successfully!");
        Cookies.remove("token");
        Cookies.remove("userData");
        dispatch({ type: "clearAll", payload: { token: "" } });
      }, 500);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { logoutMutation, isLoggingOut };
};
