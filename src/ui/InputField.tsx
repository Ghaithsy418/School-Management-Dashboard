import { FieldValues, Path, UseFormRegister } from "react-hook-form";

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
}: inputTypes<T>) {
  const validation =
    name === "email"
      ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      : /^(?=.*[A-Za-z])(?=.*\d)/;

  function getValidationMessage() {
    if (name === "email")
      return {
        required: "Email is Required",
        pattern: {
          value: validation,
          message: "Please enter a valid email address",
        },
      };

    if (name === "password")
      return {
        required: "Password is Required",
        validate: {
          minLength: (value: string) =>
            value.length >= 8 || "Password must be at least 8 characters",
          hasPattern: (value: string) =>
            validation.test(value) ||
            "Password must contain both letters and numbers",
        },
      };

    return inputValidation || { required: `${label} is Required` };
  }

  return (
    <div className="relative">
      <input
        id={id || name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        accept={accept}
        {...register(id || name, getValidationMessage())}
        className={`peer w-96 ${className} rounded-md px-4 py-2 text-lg outline-1 outline-offset-2 outline-gray-700/20 transition-all duration-100 focus:border-0 focus:outline-3 focus:outline-offset-2 focus:outline-violet-300/60`}
      />
      <label
        htmlFor={name}
        className="absolute top-2.5 left-3 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-950/80 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-950/80"
      >
        {label}
      </label>
      {error && (
        <p className="absolute right-2 bottom-[-25px] text-xs text-red-600">
          * {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
