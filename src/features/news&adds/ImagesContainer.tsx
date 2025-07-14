import PhotoModal from "./PhotoModal";
import PhotoModalComments from "./PhotoModalComments";
import { motion } from "framer-motion";

function ImagesContainer({ media }: { media: { id: number; url: string }[] }) {
  const images = media?.slice(0, 3);

  if (!media.length) return null;

  return (
    <PhotoModal photos={media}>
      <div
        className={`grid h-full w-full ${images.length === 1 ? "" : "grid-cols-2 grid-rows-[200px_200px]"} gap-0.5 overflow-hidden`}
      >
        {images.map((image, index) => (
          <PhotoModal.Open index={index} key={image?.url}>
            <motion.div
              className={`group relative cursor-pointer overflow-hidden ${index === 0 ? "row-start-1 row-end-3" : ""} ${index === 1 && media.length === 2 ? "row-start-1 row-end-3" : ""}`}
            >
              <img
                src={image?.url}
                alt={`photo-${image?.id}-${image?.url}`}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:grayscale-25"
              />
              {index === 2 && media.length > 3 && (
                <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-gray-700/60 text-3xl text-white transition-all duration-300 group-hover:scale-105 group-hover:grayscale-25">
                  +{media.length - 3}
                </div>
              )}
            </motion.div>
          </PhotoModal.Open>
        ))}
        <PhotoModal.Window>
          <PhotoModalComments />
        </PhotoModal.Window>
      </div>
    </PhotoModal>
  );
}

export default ImagesContainer;
