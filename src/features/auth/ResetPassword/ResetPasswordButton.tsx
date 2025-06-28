import { changeUi } from "@/slices/loginUiSlice";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

function ResetPasswordButton() {
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(changeUi(2));
      }}
      className="absolute -bottom-6 cursor-pointer text-xs text-blue-700 underline transition-all duration-200 hover:text-blue-900 hover:no-underline ltr:left-3 rtl:right-3"
    >
      {t("login.forgetPassword")}
    </button>
  );
}

export default ResetPasswordButton;
