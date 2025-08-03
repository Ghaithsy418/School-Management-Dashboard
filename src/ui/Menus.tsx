/* eslint-disable @typescript-eslint/no-unused-expressions */
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

interface MenuTypes {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
  close: () => void;
  position: { x: number; y: number };
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}

interface ToggleAndListTypes {
  children?: ReactNode;
  id: string;
}

interface ButtonTypes {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
}

const initialMenu: MenuTypes = {
  isOpen: "",
  setIsOpen: () => {},
  close: () => {},
  position: { x: 0, y: 0 },
  setPosition: () => {},
};

const MenuContext = createContext<MenuTypes>(initialMenu);

function Menus({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const close = () => setIsOpen("");

  return (
    <MenuContext.Provider
      value={{ isOpen, setIsOpen, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Menu({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex items-center justify-center">{children}</div>
  );
}

function Toggle({ children, id }: ToggleAndListTypes) {
  const { close, isOpen, setIsOpen, setPosition } = useContext(MenuContext);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    isOpen === "" || isOpen !== id ? setIsOpen(id) : close();

    if (rect) {
      setPosition({
        x: window.innerWidth - rect.x - rect.width,
        y: rect.y + rect.height + 8,
      });
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer select-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isOpen === id ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}

function List({ children, id }: ToggleAndListTypes) {
  const { isOpen, position, close } = useContext(MenuContext);
  const ref = useClickOutside(close, false);

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen === id && (
        <motion.div
          onPointerDown={(e) => e.preventDefault()}
          onClick={(e) => e.stopPropagation()}
          ref={ref}
          initial={{ opacity: 0, scale: 0.95, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -4 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.15,
          }}
          className="fixed z-50 min-w-[220px] overflow-hidden rounded-xl border border-slate-200/70 bg-white/80 shadow-2xl shadow-black/10 backdrop-blur-xl rtl:translate-x-42 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-black/20"
          style={{
            top: `${position.y}px`,
            right: `${position.x}px`,
          }}
        >
          <div className="relative flex flex-col divide-y divide-slate-200/70 dark:divide-slate-700">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Button({ onClick, icon, children }: ButtonTypes) {
  const { close } = useContext(MenuContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group relative flex h-11 w-full cursor-pointer items-center justify-start gap-3 bg-transparent px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 dark:from-indigo-950/50 dark:to-purple-950/50"
        initial={false}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100"
        layoutId="activeIndicator"
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      <div className="relative z-10 flex items-center">{icon}</div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
