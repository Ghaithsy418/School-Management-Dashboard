import { useLoginUi } from "@/context/LoginUIs";
import { useSendResetPassword } from "./useSendResetPassword";
import { useTimer } from "@/hooks/useTimer";

function ButtonResendCode() {
  const { resetMutation, isPending: isResending } = useSendResetPassword();
  const { email } = useLoginUi();
  const { setStart, result } = useTimer(150);

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
      {isResending ? "Sending the Code..." : "Didn't receive the code?"}
    </button>
  );
}

export default ButtonResendCode;
