import { useEffect, useRef } from "react";

export const useClickOutside = function (
  close: () => void,
  eventBehavior = true,
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      const handleClick = function (e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          close();
        }
      };

      document.addEventListener("click", handleClick, {
        capture: eventBehavior,
      });

      return () =>
        document.removeEventListener("click", handleClick, {
          capture: eventBehavior,
        });
    },
    [close, eventBehavior],
  );

  return ref;
};
