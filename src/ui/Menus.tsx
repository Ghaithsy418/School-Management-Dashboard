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
    <div className="flex items-center justify-center rounded-md">
      {children}
    </div>
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
        y: rect.y + rect.height + 8,
      });
    }
  }
  return <div onClick={handleClick}>{children}</div>;
}

function List({ children, id }: toggleAndListTypes) {
  const context = useContext(menuContext);
  if (!context) throw new Error("Menus.List shouldn't be used out of Menus");
  const { isOpen, position, close } = context;
  const ref = useClickOutside(close, false);
  return createPortal(
    <AnimatePresence>
      {isOpen === id && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, transition: { duration: 0.6 }, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duartion: 0.6 }, y: -5 }}
          className={`absolute flex flex-col divide-y-1 divide-gray-300 rounded-md bg-indigo-100 shadow-md`}
          style={{ top: `${position.y}px`, right: `${position.x - 5}px` }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Button({ onClick, icon, children }: buttonTypes) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 cursor-pointer items-center justify-start gap-2 bg-inherit px-5 py-4 text-sm transition-all duration-300 first:rounded-t-md first:rounded-b-none last:rounded-b-md hover:bg-indigo-300/50"
    >
      {icon}
      <span>{children}</span>
    </button>
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
