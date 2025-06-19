import { useUser } from "@/context/UserContext";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const {
    user: { role },
    token,
  } = useUser();

  if (!role || !token) return <Navigate replace to="/login" />;

  return <>{children}</>;
}

export default ProtectedRoutes;
