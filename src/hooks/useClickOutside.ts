import { useEffect, useRef } from "react";

export const useClickOutside = (close: () => void, eventBehavior = true) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("click", handleClick, eventBehavior);

    return () => {
      document.removeEventListener("click", handleClick, eventBehavior);
    };
  }, [close, eventBehavior]);

  return ref;
};
