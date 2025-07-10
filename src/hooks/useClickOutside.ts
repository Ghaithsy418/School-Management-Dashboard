import { useEffect, useRef } from "react";

export const useClickOutside = (close: () => void, listenCapturing = true) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        // This check is the key. If the event was prevented by a child component
        // (like our Select dropdown), the modal will not close.
        if (e.defaultPrevented) return;
        close();
      }
    }

    // We use pointerdown because it's a more reliable event for this purpose.
    document.addEventListener("pointerdown", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("pointerdown", handleClick, listenCapturing);
  }, [close, listenCapturing]);

  return ref;
};
