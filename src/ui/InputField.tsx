import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { HiExclamationCircle } from "react-icons/hi2";

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
  placeholder = " ",
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

  const errorRingColor = "focus:ring-red-500/40 focus:border-red-500";
  const defaultRingColor = "focus:ring-violet-500/40 focus:border-violet-500";

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <input
          id={id || name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          accept={accept}
          defaultValue={initialValue}
          {...register(id || name, getValidationMessage())}
          className={`peer w-full rounded-lg border bg-transparent px-4 py-3 text-slate-800 transition-colors ${error ? "border-red-400" : "border-slate-300"} focus:ring-2 focus:outline-none ${error ? errorRingColor : defaultRingColor} `}
        />
        <label
          htmlFor={name}
          className={`absolute top-3.5 left-4 cursor-text bg-white px-1 text-slate-500 transition-all peer-focus:-top-2.5 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-sm ${error ? "text-red-600 peer-focus:text-red-600" : "peer-focus:text-violet-600"} `}
        >
          {label}
        </label>
        {error && (
          <div className="absolute right-3 -bottom-6 flex items-center gap-1 text-xs text-red-600">
            <HiExclamationCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
