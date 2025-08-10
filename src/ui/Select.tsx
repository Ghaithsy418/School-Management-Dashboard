import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface OptionsTypes {
  title: string;
  value: string;
}

interface SelectTypes {
  options: OptionsTypes[];
  width?: string;
  placeholder?: string;
  onSelect: (value: string) => void;
  value: string | null;
  disabled?: boolean;
}

// 1. ADDED: Define animation variants for the dropdown
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

function Select({
  options,
  width = "w-45",
  placeholder = "Select an option",
  value,
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
        className="w-full cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-left hover:border-violet-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
      >
        {selectedOption ? selectedOption.title : placeholder}
        <span className="absolute top-1/2 right-2 -translate-y-1/2">
          <IoIosArrowDown
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>

      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="no-scrollbar ring-opacity-5 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/20"
          >
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleClick(option)}
                className="cursor-pointer px-3 py-1.5 text-gray-900 hover:bg-violet-100"
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

export default Select;
