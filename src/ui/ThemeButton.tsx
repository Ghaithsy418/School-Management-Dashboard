import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

function ThemeButton() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <button
        className="flex cursor-pointer items-center justify-center rounded-md"
        onClick={() => setIsDark((d) => !d)}
      >
        {isDark ? (
          <HiMoon className="h-6 w-6 text-indigo-700 transition-all duration-300 hover:text-indigo-800/80" />
        ) : (
          <HiSun className="h-6 w-6 text-amber-600 transition-all duration-300 hover:text-amber-700/80" />
        )}
      </button>
    </div>
  );
}

export default ThemeButton;
