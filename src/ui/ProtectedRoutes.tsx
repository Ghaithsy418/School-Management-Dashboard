import { useUser } from "@/slices/userSlice";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const {
    user: { role },
    token,
  } = useUser();
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
