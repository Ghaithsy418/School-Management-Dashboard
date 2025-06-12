import { ReactNode } from "react";

function PrimaryButton({
  children,
  onClick,
  size = "medium",
  color,
  backgroundColor,
  backgroundHover,
  primary = true,
  setIsHover,
}: ButtonTypes) {
  if (primary)
    return (
      <button
        onClick={() => onClick?.()}
        onMouseEnter={() => setIsHover?.(true)}
        onMouseLeave={() => setIsHover?.(false)}
        className={`cursor-pointer transition-all duration-300 ${color ?? "text-indigo-50"} ${backgroundColor ?? "bg-indigo-600"} ${backgroundHover ?? "hover:bg-indigo-700/90"} rounded-md ${size === "big" ? "px-6 py-3" : size === "medium" ? "px-4 py-2" : "px-2 py-1"}`}
      >
        {children}
      </button>
    );
  else
    return (
      <button
        onClick={() => onClick?.()}
        onMouseEnter={() => setIsHover?.(true)}
        onMouseLeave={() => setIsHover?.(false)}
        className={`cursor-pointer rounded-md bg-transparent ${size === "big" ? "px-6 py-3" : size === "medium" ? "px-4 py-2" : "px-2 py-1"} outline-1 outline-gray-400 transition-all duration-300 hover:bg-indigo-100`}
      >
        {children}
      </button>
    );
}

interface ButtonTypes {
  children: ReactNode;
  onClick?: () => void;
  size?: string;
  color?: string;
  backgroundColor?: string;
  backgroundHover?: string;
  primary?: boolean;
  setIsHover?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default PrimaryButton;
