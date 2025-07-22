import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface OptionsTypes {
  title: string;
  value: string;
}

// 1. MODIFIED: The interface now accepts `value` instead of `defaultValue`.
interface SelectTypes {
  options: OptionsTypes[];
  width?: string;
  placeholder?: string;
  onSelect: (value: string) => void;
  value: string | null; // Use `value` for controlled behavior
  disabled?: boolean;
}

function Select({
  options,
  width = "w-45",
  placeholder = "Select an option",
  value, // Use `value` from props
  disabled = false,
  onSelect,
}: SelectTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) ?? null;

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

  function handleClick(option: OptionsTypes) {
    setIsOpen(false);
    onSelect(option.value);
  }

  return (
    <div className={`relative ${width}`} ref={dropdownRef}>
      <button
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer rounded-md px-3 py-2 text-left outline-1 outline-gray-300 hover:outline-violet-400 disabled:cursor-not-allowed"
      >
        {selectedOption ? selectedOption.title : placeholder}
        <span className="absolute top-1/2 right-2 -translate-y-1/2">
          <IoIosArrowDown
            className={`transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul className="no-scrollbar absolute z-10 mt-1 h-96 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleClick(option)}
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

// ... variants export ...

export default Select;
