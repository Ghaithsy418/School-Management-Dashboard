import { motion } from "framer-motion";
import {
  cloneElement,
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PhotoType {
  imageUrl: string;
  timestamp?: string;
  caption?: string;
}

interface PhotoModalContextValue {
  open: (index: number) => void;
  close: () => void;
  next: () => void;
  previous: () => void;
  currentPhotoIndex: number | null;
  photoData: PhotoType | null;
}

interface PhotoModalProps {
  children: ReactNode;
  photos: PhotoType[];
}

interface OpenProps {
  children: ReactElement;
  index: number;
}

const PhotoModalContext = createContext<PhotoModalContextValue | null>(null);

function PhotoModal({ children, photos }: PhotoModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(
    null,
  );

  const open = (index: number) => setCurrentPhotoIndex(index);
  const close = () => setCurrentPhotoIndex(null);

  const next = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === null ? null : (prevIndex + 1) % photos.length,
    );
  };

  const previous = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === null
        ? null
        : (prevIndex - 1 + photos.length) % photos.length,
    );
  };

  const value = {
    open,
    close,
    next,
    previous,
    currentPhotoIndex,
    photoData:
      photos && currentPhotoIndex !== null ? photos[currentPhotoIndex] : null,
  };

  return (
    <PhotoModalContext.Provider value={value}>
      {children}
    </PhotoModalContext.Provider>
  );
}

function Open({ children, index }: OpenProps) {
  const context = useContext(PhotoModalContext);
  if (!context)
    throw new Error("PhotoModal.Open Provider mustn't be used here!");

  return cloneElement(children, {
    onClick: () => context.open(index),
  } as { onClick: () => void });
}

function Window({ children }: { children: ReactNode }) {
  const context = useContext(PhotoModalContext);
  if (!context)
    throw new Error("PhotoModal.Window Provider mustn't be used here!");

  const { close, next, previous, photoData } = context;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, next, previous]);

  if (!photoData) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={close}
    >
      <div className="flex h-full w-full">
        <motion.button
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          onClick={close}
          className="absolute top-4 right-4 z-20 text-white hover:opacity-70"
        >
          <HiX className="h-10 w-10" />
        </motion.button>
        <div className="relative flex h-full w-2/3 items-center justify-center p-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            className="absolute left-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/40 p-2 text-gray-400"
          >
            <MdKeyboardArrowLeft className="h-8 w-8" />
          </motion.button>
          <motion.img
            key={photoData.imageUrl}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={photoData.imageUrl}
            alt={photoData.caption}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/40 p-2 text-3xl text-gray-400"
          >
            <MdKeyboardArrowRight className="h-8 w-8" />
          </motion.button>
        </div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          className="flex h-full w-1/3 flex-col bg-[#242526] text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-4 flex items-center">
              <div>
                <p className="text-sm text-gray-400">22:40</p>
              </div>
            </div>
            <p className="mb-4">GGs</p>
            <div className="mt-4 space-y-4 pt-4">{children}</div>
          </div>
          <div className="border-t border-gray-700 p-4">
            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full rounded-full bg-gray-700 px-4 py-2 outline-none"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>,
    document.body,
  );
}

PhotoModal.Open = Open;
PhotoModal.Window = Window;

export default PhotoModal;
