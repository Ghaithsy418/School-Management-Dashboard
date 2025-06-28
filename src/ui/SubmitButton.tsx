import { ReactNode } from "react";

interface SubmitButtonTypes {
  children: ReactNode;
  marginTop?: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function SubmitButton({
  children,
  size = "w-96",
  marginTop = "",
  onClick = () => {},
  disabled = false,
}: SubmitButtonTypes) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`${marginTop} flex ${size} cursor-pointer items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-violet-600 py-2 text-lg tracking-wide text-gray-50 shadow-md shadow-gray-600/20 transition-all duration-300 hover:from-indigo-500/90 hover:to-violet-600/90 hover:shadow-lg active:shadow-xs disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
