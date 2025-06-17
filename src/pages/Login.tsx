import { useEffect } from "react";
import LoginIcons from "../ui/LoginIcons";
import loginPhoto from "/images/login-photo.jpg";
import LoginContainer from "../features/auth/LoginContainer";
import LoginProvider from "../context/LoginUIs";

function Login() {
  useEffect(function () {
    document.title = "Login";
  }, []);

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <LoginProvider>
        <LoginContainer />
      </LoginProvider>
      <div className="relative z-20 flex h-full flex-3/5 items-center justify-center rounded-bl-[4rem] border-l-1 border-l-indigo-200/20 bg-indigo-100">
        <img
          src={loginPhoto}
          alt="school login-photo"
          className="mix-blend-multiply"
        />
        <LoginIcons />
      </div>
    </div>
  );
}

export default Login;
