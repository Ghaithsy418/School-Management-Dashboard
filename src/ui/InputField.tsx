import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface inputTypes<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  error: string;
  register: UseFormRegister<T>;
  id?: Path<T>;
  inputValidation?: unknown;
  accept?: string;
  className?: string;
  initialValue?: string;
}

function InputField<T extends FieldValues>({
  name,
  type,
  label,
  id,
  placeholder = "",
  autoComplete = "on",
  error,
  register,
  accept = "",
  inputValidation = null,
  className = "",
  initialValue = "",
}: inputTypes<T>) {
  const { t } = useTranslation("auth");
  const validation =
    name === "email"
      ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      : /^(?=.*[A-Za-z])(?=.*\d)/;

  function getValidationMessage() {
    if (name === "email")
      return {
        required: t("login.emailError"),
        pattern: {
          value: validation,
          message: t("login.emailValidation"),
        },
      };

    if (name === "password")
      return {
        required: t("login.passwordError"),
        validate: {
          minLength: (value: string) =>
            value.length >= 8 || t("login.passwordAtLeast"),
          hasPattern: (value: string) =>
            validation.test(value) || t("login.passwordValidation"),
        },
      };

    return (
      inputValidation || { required: `${label} ${t("login.generalError")}` }
    );
  }

  return (
    <div className="relative">
      <input
        id={id || name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        accept={accept}
        defaultValue={initialValue}
        {...register(id || name, getValidationMessage())}
        className={`peer w-96 ${className} rounded-md px-4 py-2 text-lg outline-1 outline-offset-2 outline-gray-700/20 transition-all duration-100 focus:border-0 focus:outline-3 focus:outline-offset-2 focus:outline-violet-300/60`}
      />
      <label
        htmlFor={name}
        className="absolute top-2.5 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-950/80 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-950/80 ltr:left-3 rtl:right-3"
      >
        {label}
      </label>
      {error && (
        <p className="absolute bottom-[-25px] text-xs text-red-600 ltr:right-2 rtl:left-2">
          * {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
