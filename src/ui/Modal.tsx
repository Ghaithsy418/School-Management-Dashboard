import { motion } from "framer-motion";
import {
  cloneElement,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import { useClickOutside } from "../hooks/useClickOutside";

const modalContext = createContext<ModalTypes | null>(null);

function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  return (
    <modalContext.Provider value={{ isOpen, setIsOpen, close }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, name }: WindowOpenTypes) {
  const context = useContext(modalContext);
  if (!context) throw new Error("Modal.Open shouldn't be used here");
  const { setIsOpen } = context;
  return cloneElement(
    children as React.ReactElement<React.DOMAttributes<HTMLElement>>,
    {
      onClick: () => setIsOpen(name),
    },
  );
}

function Window({ children, name, icon }: WindowOpenTypes) {
  const context = useContext(modalContext);
  if (!context) throw new Error("Modal.Window shouldn't be used here");
  const { isOpen, close } = context;
  const ref = useClickOutside(close, true);

  if (isOpen !== name) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-0 left-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-gray-950/80 backdrop-blur-xs backdrop:blur-md"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        ref={ref}
        className="fixed mb-20 flex min-w-[36rem] flex-1 flex-col gap-5 rounded-md border-2 border-indigo-300/20 bg-indigo-50 px-7 py-5 shadow-lg shadow-indigo-100/10"
      >
        <div className="flex items-center justify-between">
          <span>{icon}</span>
          <button
            className="cursor-pointer place-self-end rounded-full p-2 text-[20px] transition-all duration-300 hover:bg-gray-400 hover:text-red-600 sm:text-[24px]"
            onClick={close}
          >
            <HiX />
          </button>
        </div>
        <div>
          {cloneElement(
            children as React.ReactElement<{ onCloseModal: () => void }>,
            {
              onCloseModal: close,
            },
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

interface ModalTypes {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
  close: () => void;
}

interface WindowOpenTypes {
  children: ReactNode;
  name: string;
  icon?: ReactNode;
}

const variants = {
  hidden: {
    opacity: 0,
    y: "-30%",
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default Modal;
