import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

function ThemeButton() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gray-200/60 transition-all duration-300 hover:scale-110 hover:bg-gray-200 active:scale-95 dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={() => setIsDark((d) => !d)}
    >
      <HiSun
        className={`absolute h-5 w-5 text-amber-500 transition-all duration-500 ease-out ${
          isDark
            ? "scale-0 rotate-180 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <HiMoon
        className={`absolute h-5 w-5 text-indigo-600 transition-all duration-500 ease-out dark:text-indigo-400 ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-180 opacity-0"
        }`}
      />
    </button>
  );
}

export default ThemeButton;
