import { ReactNode } from "react";

interface SubmitButtonTypes {
  children: ReactNode;
  marginTop?: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  colorHoverFrom?: string;
  colorHoverTo?: string;
  textColor?: string;
}

function SubmitButton({
  children,
  size = "w-96",
  marginTop = "",
  onClick = () => {},
  disabled = false,
  className,
  colorFrom,
  colorHoverFrom,
  colorHoverTo,
  colorTo,
  textColor,
}: SubmitButtonTypes) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`${marginTop} flex ${size} cursor-pointer items-center justify-center rounded-md bg-gradient-to-tr ${colorFrom ?? "from-indigo-500"} ${colorTo ?? "to-violet-600"} py-2 text-lg tracking-wide ${textColor ?? "text-gray-50"} shadow-sm shadow-gray-600/20 transition-all duration-300 ${colorHoverFrom ?? "hover:from-indigo-500/90"} ${colorHoverTo ?? "hover:to-violet-600/90"} hover:shadow-md active:shadow-xs disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
