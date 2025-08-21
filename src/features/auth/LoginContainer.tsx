import { AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";
import NewPasswordForm from "./ResetPassword/NewPasswordForm";
import OtpInput from "./ResetPassword/OtpInput";
import ResetPasswordForm from "./ResetPassword/ResetPasswordForm";
import { useLoginUi } from "@/slices/loginUiSlice";

function LoginContainer() {
  const { ui } = useLoginUi();
  const CurrentComponent = components[ui as keyof typeof components];

  return (
    <div className="flex h-full flex-2/5 items-center justify-center">
      <AnimatePresence mode="wait">
        {CurrentComponent && <CurrentComponent key={ui} />}
      </AnimatePresence>
    </div>
  );
}

const components = {
  1: LoginForm,
  2: ResetPasswordForm,
  3: OtpInput,
  4: NewPasswordForm,
};

export default LoginContainer;
