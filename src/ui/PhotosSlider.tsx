import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

interface PhotosSliderTypes {
  next: () => void;
  previous: () => void;
  photoData: { id: number; url: string };
  width?: string;
  padding?: string;
  buttonsSize?: string;
  photosLength: number;
}

function PhotosSlider({
  next,
  previous,
  photoData,
  photosLength,
  width = "w-2/3",
  padding = "p-4",
  buttonsSize = "h-12 w-12",
}: PhotosSliderTypes) {
  return (
    <div
      className={`relative flex h-full ${width} items-center justify-center ${padding}`}
    >
      {photosLength > 1 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            previous();
          }}
          className={`absolute left-5 z-10 flex ${buttonsSize} items-center justify-center rounded-full bg-gray-800/40 p-2 text-gray-200`}
        >
          <MdKeyboardArrowLeft className="h-8 w-8" />
        </motion.button>
      )}
      <motion.img
        loading="lazy"
        decoding="async"
        key={`photo-${photoData.id}-${photoData.url}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={photoData.url}
        alt={`photo-${photoData.id}-${photoData.url}`}
        className="max-h-[90vh] max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      {photosLength > 1 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            next();
          }}
          className={`absolute right-5 z-10 flex ${buttonsSize} items-center justify-center rounded-full bg-gray-800/40 p-2 text-3xl text-gray-200`}
        >
          <MdKeyboardArrowRight className="h-8 w-8" />
        </motion.button>
      )}
    </div>
  );
}

export default PhotosSlider;
