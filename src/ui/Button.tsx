import { ReactNode } from "react";

function PrimaryButton({
  children,
  onClick,
  size = "medium",
  color,
  backgroundColor,
  backgroundHover,
  primary = true,
  type = "",
  setIsHover,
}: ButtonTypes) {
  if (primary)
    return (
      <button
        type={type === "S" ? "submit" : "button"}
        onClick={() => onClick?.()}
        onMouseEnter={() => setIsHover?.(true)}
        onMouseLeave={() => setIsHover?.(false)}
        className={`flex cursor-pointer items-center justify-center shadow-md shadow-gray-600/20 transition-all duration-300 hover:shadow-lg active:shadow-sm ${color ?? "text-indigo-50"} ${backgroundColor ?? "bg-indigo-600"} ${backgroundHover ?? "hover:bg-indigo-700/90"} rounded-md ${size === "big" ? "min-w-32 px-6 py-3" : size === "medium" ? "min-w-22 px-4 py-2" : "w-16 px-2 py-1"}`}
      >
        {children}
      </button>
    );
  else
    return (
      <button
        type={type === "S" ? "submit" : "button"}
        onClick={() => onClick?.()}
        onMouseEnter={() => setIsHover?.(true)}
        onMouseLeave={() => setIsHover?.(false)}
        className={`flex cursor-pointer items-center justify-center rounded-md bg-transparent shadow-md shadow-gray-600/20 hover:shadow-lg active:shadow-sm ${size === "big" ? "min-w-32 px-6 py-3" : size === "medium" ? "min-w-22 px-4 py-2" : "w-16 px-2 py-1"} outline-1 outline-gray-400 transition-all duration-300 hover:bg-indigo-100`}
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
  type?: string;
}

export default PrimaryButton;
