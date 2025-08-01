import { motion, Variants } from "framer-motion";
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

// eslint-disable-next-line react-refresh/only-export-components
export const modalContext = createContext<ModalTypes | null>(null);

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

function Window({ children, name, icon, mode = "" }: WindowOpenTypes) {
  const context = useContext(modalContext);
  if (!context) throw new Error("Modal.Window shouldn't be used here");
  const { isOpen, close } = context;
  const ref = useClickOutside(close, false);

  if (isOpen !== name) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/90 to-purple-900/95 backdrop-blur-xl dark:from-slate-800/95 dark:via-indigo-800/90 dark:to-purple-900/95"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 dark:from-blue-300 dark:to-purple-300"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={mode === "sheet" ? sheetVariants : variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        ref={ref}
        className={`relative flex flex-col gap-6 shadow-2xl ${
          mode === "sheet"
            ? "no-scrollbar absolute top-0 right-0 h-full w-[42rem] overflow-y-auto rounded-l-3xl border-l-2 border-indigo-200/50 bg-gradient-to-br from-white via-slate-50 to-indigo-50 dark:border-indigo-700/50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900"
            : "w-full max-w-2xl rounded-3xl border border-white/20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:border-gray-600 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900"
        }`}
      >
        <div className="absolute inset-0 rounded-3xl bg-white/60 backdrop-blur-sm dark:bg-gray-900/5" />

        <div className="relative z-10 p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {icon && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 text-white shadow-lg"
                >
                  {icon}
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            </div>

            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.1,
                rotate: 90,
                backgroundColor: "#ef4444",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 shadow-lg transition-all duration-300 hover:border-red-400 hover:bg-red-500 hover:text-white hover:shadow-xl"
              onClick={close}
            >
              <HiX className="text-xl transition-transform duration-300 group-hover:rotate-90" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-sm dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900" />
            <div className="relative rounded-2xl border border-white/50 bg-white/80 p-6 shadow-inner backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
              {cloneElement(
                children as React.ReactElement<{ onCloseModal: () => void }>,
                {
                  onCloseModal: close,
                },
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-t-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
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
  mode?: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -50,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6,
    },
  },
};

const sheetVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      duration: 0.7,
    },
  },
};

export default Modal;
