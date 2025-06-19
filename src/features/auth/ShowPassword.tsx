import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import InputField from "../../ui/InputField";
import ResetPasswordButton from "./ResetPassword/ResetPasswordButton";

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
  label = "Password",
  forgotPassword = true,
  id = "",
}: ShowPasswordTypes) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="relative">
      <InputField
        name="password"
        type={isShown ? "text" : "password"}
        label={label}
        autoComplete="off"
        register={register}
        error={error}
        id={id}
      />
      <span
        className="absolute top-3 right-3 cursor-pointer transition-all duration-300 hover:text-amber-600/80"
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
