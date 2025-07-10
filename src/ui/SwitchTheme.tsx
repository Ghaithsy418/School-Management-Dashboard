import { useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function SwitchTheme() {
  const [selectedOption, setSelectedOption] = useState("system");

  const themes = [
    { title: "Light", value: "light", icon: Sun },
    { title: "Dark", value: "dark", icon: Moon },
    { title: "System", value: "system", icon: Monitor },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Theme
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Choose your preferred appearance
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center gap-6">
              <div className="flex gap-2">
                {themes.map((theme) => {
                  const IconComponent = theme.icon;
                  return (
                    <Tooltip>
                      <TooltipTrigger>
                        <button
                          key={theme.value}
                          onClick={() => setSelectedOption(theme.value)}
                          className={`group relative flex h-11 w-18 items-center justify-center rounded-lg transition-all duration-300 ${
                            selectedOption === theme.value
                              ? "scale-105 transform bg-white text-gray-900 shadow-lg ring-2 ring-gray-200 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
                              : "border border-gray-200 bg-gray-50 text-gray-600 hover:scale-105 hover:transform hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                          } `}
                          title={theme.title}
                        >
                          <IconComponent
                            size={16}
                            className={`transition-transform duration-300 ${
                              selectedOption === theme.value
                                ? "animate-pulse"
                                : "group-hover:scale-110"
                            }`}
                          />

                          {/* Active state subtle highlight */}
                          {selectedOption === theme.value && (
                            <div className="absolute inset-0 -z-10 rounded-lg bg-gray-100 opacity-50 blur-sm dark:bg-gray-600" />
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="pb-1">{theme.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwitchTheme;
