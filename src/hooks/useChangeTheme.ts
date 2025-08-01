import { useEffect, useState } from "react";

export const useChangeTheme = function () {
  const [theme, setTheme] = useState(
    localStorage.theme
      ? localStorage.theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(
    function () {
      localStorage.setItem("theme", theme);
      if (theme === "light") addLight();
      if (theme === "dark") addDark();
      if (theme === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
          addDark();
        else addLight();
      }
    },
    [theme],
  );

  return { setTheme, theme };
};

function addLight() {
  document.documentElement.classList.add("light");
  document.documentElement.classList.remove("dark");
}
function addDark() {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
}
