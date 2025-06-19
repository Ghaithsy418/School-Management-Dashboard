import { useLoginUi } from "../../../context/LoginUIs";

function ResetPasswordButton() {
  const { dispatch } = useLoginUi();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "changeUi",
          payload: 2,
        });
      }}
      className="absolute -bottom-6 left-3 cursor-pointer text-xs text-blue-700 underline transition-all duration-200 hover:text-blue-900 hover:no-underline"
    >
      Forgotton Password?
    </button>
  );
}

export default ResetPasswordButton;
