import { useComments } from "@/slices/commentsSlice";
import PhotosSlider from "@/ui/PhotosSlider";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

interface PhotoType {
  url: string;
  id: number;
}

interface PhotoModalContextValue {
  open: (index: number) => void;
  close: () => void;
  next: () => void;
  previous: () => void;
  currentPhotoIndex: number | null;
  photoData: PhotoType | null;
  photosLength: number;
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
    photosLength: photos.length,
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

function Window({
  children,
  createdAt,
  addComment,
}: {
  children: ReactNode;
  createdAt: string;
  addComment: ReactNode;
}) {
  const { ui } = useComments();
  const context = useContext(PhotoModalContext);
  if (!context)
    throw new Error("PhotoModal.Window Provider mustn't be used here!");

  const { close, next, previous, photoData, photosLength } = context;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
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
          className="absolute top-4 right-4 z-20 text-gray-800 hover:opacity-70"
        >
          <HiX className="h-10 w-10" />
        </motion.button>
        <PhotosSlider
          photosLength={photosLength}
          next={next}
          previous={previous}
          photoData={photoData}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          className="flex h-full w-1/3 flex-col bg-[#242526] text-gray-950"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 overflow-y-auto bg-gray-300 p-6">
            <div className="mb-4 flex items-center">
              <div>
                <p className="text-sm text-gray-700">
                  {format(createdAt, "dd/MM/yyyy | hh:mm")}
                </p>
              </div>
            </div>
            {ui !== "report" && (
              <h3 className="mb-4 text-2xl font-bold">Comments:</h3>
            )}
            {children}
          </div>
          {addComment}
        </motion.div>
      </div>
    </motion.div>,
    document.body,
  );
}

PhotoModal.Open = Open;
PhotoModal.Window = Window;

export default PhotoModal;
