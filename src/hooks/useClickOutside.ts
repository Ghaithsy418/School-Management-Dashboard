import { useEffect, useRef } from "react";

export const useClickOutside = (close: () => void, listenCapturing = true) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (e.defaultPrevented) return;
        close();
      }
    }
    document.addEventListener("pointerdown", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("pointerdown", handleClick, listenCapturing);
  }, [close, listenCapturing]);

  return ref;
};
