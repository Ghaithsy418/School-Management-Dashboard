import { useLoginUi } from "../../context/LoginUIs";
import LoginForm from "./LoginForm";
import OtpInput from "./ResetPassword/OtpInput";
import ResetPasswordForm from "./ResetPassword/ResetPasswordForm";

function LoginContainer() {
  const { ui } = useLoginUi();
  return (
    <div className="flex h-full flex-2/5 items-center justify-center">
      {ui === 1 && <LoginForm />}
      {ui === 2 && <ResetPasswordForm />}
      {ui === 3 && <OtpInput />}
    </div>
  );
}

export default LoginContainer;
