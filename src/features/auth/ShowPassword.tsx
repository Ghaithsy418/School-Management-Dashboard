import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import InputField from "../../ui/InputField";
import ResetPasswordButton from "./ResetPassword/ResetPasswordButton";

function ShowPassword({
  register,
  error,
}: {
  register: UseFormRegister<FieldValues>;
  error: string;
}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="relative">
      <InputField
        name="password"
        type={isShown ? "text" : "password"}
        label="Password"
        autoComplete="off"
        register={register}
        error={error}
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
      <ResetPasswordButton />
    </div>
  );
}

export default ShowPassword;
