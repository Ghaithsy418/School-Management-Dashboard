import { useSendResetPassword } from "./useSendResetPassword";
import { useTimer } from "@/hooks/useTimer";
import { useLoginUi } from "@/slices/loginUiSlice";
import { useTranslation } from "react-i18next";

function ButtonResendCode() {
  const { resetMutation, isResending } = useSendResetPassword();
  const { email } = useLoginUi();
  const { setStart, result } = useTimer(150);
  const { t } = useTranslation("auth");

  if (result !== "")
    return (
      <p className="text-sm text-gray-500">
        you can receive the code after: {result}
      </p>
    );

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        resetMutation({ email });
        setStart(true);
      }}
      className="flex cursor-pointer items-center justify-center text-sm text-gray-700 underline transition-all duration-300 hover:text-gray-800 hover:no-underline"
    >
      {isResending
        ? t("confirmCode.resendCodeLoading")
        : t("confirmCode.resendCode")}
    </button>
  );
}

export default ButtonResendCode;
