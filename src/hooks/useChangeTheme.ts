import { setDetectTheme } from "@/slices/userSlice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useChangeTheme = function () {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(
    localStorage.theme
      ? localStorage.theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(
    function () {
      localStorage.setItem("theme", theme);
      if (theme === "light") addLight(dispatch);
      if (theme === "dark") addDark(dispatch);
      if (theme === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
          addDark(dispatch);
        else addLight(dispatch);
      }
    },
    [theme, dispatch],
  );

  return { setTheme, theme };
};

function addLight(dispatch: Dispatch<UnknownAction>) {
  dispatch(setDetectTheme(false));
  document.documentElement.classList.remove("dark");
}
function addDark(dispatch: Dispatch<UnknownAction>) {
  dispatch(setDetectTheme(true));
  document.documentElement.classList.add("dark");
}
