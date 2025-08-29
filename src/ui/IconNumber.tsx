import { ReactNode } from "react";

interface IconNumberTypes {
  children: ReactNode;
  number?: number;
  className?: string;
  numberOffset: string;
  onClick?: () => void;
}

function IconNumber({
  children,
  number,
  className,
  numberOffset,
  onClick,
}: IconNumberTypes) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`relative flex ${className}`}
    >
      {children}
      {number !== 0 && (
        <span
          className={`absolute ${numberOffset} flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 p-1 text-center text-[8px] text-red-50 dark:bg-red-500`}
        >
          {number}
        </span>
      )}
    </div>
  );
}

export default IconNumber;
