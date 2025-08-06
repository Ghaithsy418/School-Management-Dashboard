import { ReactNode } from "react";

function IconNumber({
  children,
  number,
  className,
  numberOffset,
}: {
  children: ReactNode;
  number?: number;
  className?: string;
  numberOffset: string;
}) {
  return (
    <div role="button" className={`relative flex ${className}`}>
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
