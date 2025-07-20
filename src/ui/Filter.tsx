import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface OptionsTypes {
  title: string;
  value: string;
}

interface FilterTypes {
  options: OptionsTypes[];
  width?: string;
}

function Filter({ options, width = "w-45" }: FilterTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterResult = searchParams.get("filter") || "";
  const currentFilter = options.find((option) => option.value === filterResult);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleClick(value: string) {
    setIsOpen(false);
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <div className={`relative ${width}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer rounded-md px-3 py-2 text-left outline-1 outline-gray-300 hover:outline-violet-400"
      >
        {currentFilter?.title}
        <span className="absolute top-1/2 right-2 -translate-y-1/2">
          <svg
            className={`h-4 w-4 transition-all duration-250 ${isOpen ? "rotate-180" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute z-10 mt-1 w-full rounded-md bg-white py-1 shadow-lg"
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleClick(option.value)}
                className="cursor-pointer px-3 py-1.5 hover:bg-violet-100"
              >
                {option.title}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transformOrigin: "top",
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transformOrigin: "top",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transformOrigin: "top",
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export default Filter;
