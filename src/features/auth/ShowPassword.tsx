import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import InputField from "../../ui/InputField";
import ResetPasswordButton from "./ResetPassword/ResetPasswordButton";
import { useTranslation } from "react-i18next";

interface ShowPasswordTypes {
  register: UseFormRegister<FieldValues>;
  error: string;
  label?: string;
  forgotPassword?: boolean;
  id?: string;
}

function ShowPassword({
  register,
  error,
  label,
  forgotPassword = true,
  id = "",
}: ShowPasswordTypes) {
  const { t } = useTranslation("auth");
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="relative w-full">
      <InputField
        name="password"
        type={isShown ? "text" : "password"}
        label={label || t("login.password")}
        autoComplete="off"
        register={register}
        error={error}
        id={id}
      />
      <span
        className="absolute top-4 cursor-pointer transition-all duration-300 hover:text-amber-600/80 ltr:right-3.5 rtl:left-3.5"
        onClick={() => setIsShown((s) => !s)}
      >
        {isShown ? (
          <IoEyeOutline className="h-5 w-5" />
        ) : (
          <IoEyeOffOutline className="h-5 w-5" />
        )}
      </span>
      {forgotPassword && <ResetPasswordButton />}
    </div>
  );
}

export default ShowPassword;
