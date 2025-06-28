import { RootState } from "@/store";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const {
    user: { role },
    token,
  } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!role || !token) navigate("/login");
    },
    [role, token, navigate],
  );

  return <>{children}</>;
}

export default ProtectedRoutes;
