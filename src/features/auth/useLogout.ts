import { logout as logoutApi } from "@/services/apiAuth";
import { logout } from "@/slices/userSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogout = function () {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutMutation, isPending: isLoggingOut } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      navigate("/login", { replace: true });
      setTimeout(function () {
        toast.success("You have loged out Successfully!");
        Cookies.remove("token");
        Cookies.remove("userData");
        dispatch(logout());
        queryClient.clear();
      }, 500);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { logoutMutation, isLoggingOut };
};
