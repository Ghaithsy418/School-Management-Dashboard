import { AnimatePresence, motion } from "framer-motion";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const initialMenu = {
  isOpen: "",
  setIsOpen: () => {},
  close: () => {},
  position: { x: 0, y: 0 },
  setPosition: () => {},
};

const menuContext = createContext<menuTypes>(initialMenu);

function Menus({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <menuContext.Provider
      value={{ isOpen, setIsOpen, close, position, setPosition }}
    >
      {children}
    </menuContext.Provider>
  );
}

function Menu({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex items-center justify-center">{children}</div>
  );
}

function Toggle({ children, id }: toggleAndListTypes) {
  const context = useContext(menuContext);
  if (!context) throw new Error("Menus.Toggle shouldn't be used out of it");
  const { close, isOpen, setIsOpen, setPosition } = context;

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();

    const target = e.currentTarget;

    if (isOpen === "" || isOpen !== id) {
      setIsOpen(id);
    } else {
      close();
    }

    const rect = target.getBoundingClientRect();

    if (rect) {
      setPosition({
        x: window.innerWidth - rect.x - rect.width - 40,
        y: rect.y + rect.height + 12,
      });
    }
  }

  const isCurrentlyOpen = isOpen === id;

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer select-none"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      animate={{
        rotate: isCurrentlyOpen ? 180 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
}

function List({ children, id }: toggleAndListTypes) {
  const context = useContext(menuContext);
  if (!context) throw new Error("Menus.List shouldn't be used out of Menus");
  const { isOpen, position, close } = context;
  const ref = useClickOutside(close, false);

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen === id && (
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            scale: 0.95,
            y: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            y: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.15,
          }}
          className="fixed z-50 min-w-[200px] overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl"
          style={{
            top: `${position.y}px`,
            right: `${position.x - 5}px`,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/20" />

          <div className="relative flex flex-col divide-y divide-gray-200/50">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Button({ onClick, icon, children }: buttonTypes) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex h-12 w-full cursor-pointer items-center justify-start gap-3 bg-transparent px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl hover:text-gray-900"
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {/* Hover background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.2 }}
      />

      {/* Active indicator bar */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100"
        layoutId="activeIndicator"
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Icon container with animation */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      >
        {icon}
      </motion.div>

      {/* Text with slide animation */}
      <motion.span
        className="relative z-10"
        initial={false}
        whileHover={{ x: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {children}
      </motion.span>

      {/* Subtle shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        }}
      />
    </motion.button>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

interface menuTypes {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
  close: () => void;
  position: { x: number; y: number };
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}

interface toggleAndListTypes {
  children?: ReactNode;
  id: string;
}

interface buttonTypes {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
}

export default Menus;
